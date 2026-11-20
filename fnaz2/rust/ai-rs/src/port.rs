//! The Rust port of `src/ai.js`: the Zayeds' brain.
//!
//! `step_json` takes a whole night as plain JSON, advances it by `dt` seconds with the player's `input`, and returns
//! `{S: <the next night>, fx: [<effects>]}`. It follows the JavaScript line by line, including the order in which the
//! random numbers are drawn (the generator is mulberry32 and its state is the number `S.rs`), so a night plays out the
//! same way in both. Fields the brain does not know about (the game adds a few) pass through untouched.

#![forbid(unsafe_code)]

use serde_json::{Map, Value, json};
use std::collections::HashMap;

const WHO: [&str; 11] = [
    "toyZayed",
    "toyBubbles",
    "toyTaffy",
    "toySherbet",
    "wZayed",
    "wBubbles",
    "wTaffy",
    "wSherbet",
    "gelly",
    "bidoof",
    "ibrahim",
];
const HOUR_SEC: f64 = 80.0;

#[derive(Clone, Copy, PartialEq)]
enum Kind {
    Walker,
    Runner,
    Crawler,
    Nuisance,
    Puppet,
}

struct Def {
    entry: &'static [&'static str],
    every: f64,
    kind: Kind,
}

fn def(w: &str) -> Def {
    use Kind::*;
    match w {
        "toyZayed" => Def {
            entry: &["hall"],
            every: 5.0,
            kind: Walker,
        },
        "toyBubbles" => Def {
            entry: &["ventL"],
            every: 4.6,
            kind: Walker,
        },
        "toyTaffy" => Def {
            entry: &["ventR"],
            every: 4.8,
            kind: Walker,
        },
        "toySherbet" => Def {
            entry: &["hall"],
            every: 6.0,
            kind: Walker,
        },
        "wZayed" => Def {
            entry: &["hall"],
            every: 6.5,
            kind: Walker,
        },
        "wBubbles" => Def {
            entry: &["ventL"],
            every: 6.2,
            kind: Walker,
        },
        "wTaffy" => Def {
            entry: &["ventR"],
            every: 6.4,
            kind: Walker,
        },
        "wSherbet" => Def {
            entry: &["hall"],
            every: 5.5,
            kind: Runner,
        },
        "gelly" => Def {
            entry: &["ventL", "ventR"],
            every: 4.9,
            kind: Crawler,
        },
        "bidoof" => Def {
            entry: &["hall", "ventR"],
            every: 5.4,
            kind: Nuisance,
        },
        _ => Def {
            entry: &[],
            every: 1.0,
            kind: Puppet,
        },
    }
}

fn graph(at: &str) -> Vec<&'static str> {
    match at {
        "stage" => vec!["main"],
        "main" => vec!["hall", "partyL", "partyR", "game", "prize", "stage"],
        "game" => vec!["main", "partyR"],
        "prize" => vec!["main", "partyL"],
        "partyL" => vec!["main", "ventL", "prize"],
        "partyR" => vec!["main", "ventR", "game"],
        "parts" => vec!["main"],
        "kids" => vec!["main"],
        "ceiling" => vec!["ventL", "ventR", "main"],
        "hall" => vec!["main"],
        "ventL" => vec!["partyL"],
        "ventR" => vec!["partyR"],
        _ => vec![],
    }
}

fn nexts(w: &str, at: &str) -> Vec<&'static str> {
    let mut ns = graph(at);
    if w == "gelly" {
        if at == "kids" {
            ns = vec!["main"];
        }
        if at == "main" {
            ns = vec!["ceiling", "kids"];
        }
        if at == "ceiling" {
            ns = vec!["ventL", "ventR", "ceiling"];
        }
    } else {
        ns.retain(|n| *n != "ceiling" && *n != "kids");
    }
    ns
}

/// Breadth-first distance inside the cast member's own graph; 99 if unreachable.
fn dist(w: &str, from: &str, to: &str) -> i64 {
    if from == to {
        return 0;
    }
    let mut seen: HashMap<&str, i64> = HashMap::new();
    seen.insert(from, 0);
    let mut q: std::collections::VecDeque<&str> = std::collections::VecDeque::new();
    q.push_back(from);
    while let Some(c) = q.pop_front() {
        for n in nexts(w, c) {
            if !seen.contains_key(n) {
                let d = seen[c] + 1;
                seen.insert(n, d);
                if n == to {
                    return d;
                }
                q.push_back(n);
            }
        }
    }
    99
}

fn num(v: Option<&Value>) -> f64 {
    v.and_then(Value::as_f64).unwrap_or(0.0)
}
fn truthy(v: Option<&Value>) -> bool {
    match v {
        None | Some(Value::Null) => false,
        Some(Value::Bool(b)) => *b,
        Some(Value::Number(n)) => n.as_f64().map(|x| x != 0.0 && !x.is_nan()).unwrap_or(true),
        Some(Value::String(s)) => !s.is_empty(),
        Some(_) => true,
    }
}
fn text(v: Option<&Value>) -> Option<&str> {
    v.and_then(Value::as_str)
}
fn f(x: f64) -> Value {
    json!(x)
}

struct Night<'a> {
    s: &'a mut Map<String, Value>,
    fx: Vec<Value>,
}

impl Night<'_> {
    fn n(&self, k: &str) -> f64 {
        num(self.s.get(k))
    }
    fn set(&mut self, k: &str, x: f64) {
        self.s.insert(k.to_string(), f(x));
    }
    fn sub(&self, group: &str, w: &str) -> Option<f64> {
        self.s
            .get(group)
            .and_then(|g| g.get(w))
            .and_then(Value::as_f64)
    }
    fn set_sub(&mut self, group: &str, w: &str, x: f64) {
        let g = self.s.entry(group.to_string()).or_insert_with(|| json!({}));
        if let Some(m) = g.as_object_mut() {
            m.insert(w.to_string(), f(x));
        }
    }
    fn mod_n(&self, k: &str) -> f64 {
        num(self.s.get("mods").and_then(|m| m.get(k)))
    }
    fn pos(&self, w: &str) -> String {
        text(self.s.get("pos").and_then(|p| p.get(w)))
            .unwrap_or("")
            .to_string()
    }
    fn set_pos(&mut self, w: &str, to: &str) {
        let g = self.s.entry("pos".to_string()).or_insert_with(|| json!({}));
        if let Some(m) = g.as_object_mut() {
            m.insert(w.to_string(), json!(to));
        }
    }
    fn cheat(&self, k: &str) -> bool {
        truthy(self.s.get("cheat").and_then(|c| c.get(k)))
    }
    fn aimed(&self) -> Option<String> {
        text(self.s.get("aimedAt")).map(str::to_string)
    }
    /// mulberry32, with its state in `S.rs`.
    fn rand(&mut self) -> f64 {
        let rs = (self.n("rs") as u64 as u32).wrapping_add(0x6D2B_79F5);
        self.set("rs", rs as f64);
        let mut t = rs;
        t = (t ^ (t >> 15)).wrapping_mul(t | 1);
        t ^= t.wrapping_add((t ^ (t >> 7)).wrapping_mul(t | 61));
        ((t ^ (t >> 14)) as f64) / 4_294_967_296.0
    }
    fn fx(&mut self, v: Value) {
        self.fx.push(v);
    }

    fn toward(&mut self, w: &str, at: &str) -> Option<&'static str> {
        let ent = def(w).entry;
        if ent.is_empty() {
            return None;
        }
        let ns = nexts(w, at);
        if ns.is_empty() {
            return None;
        }
        let mut target = ent[0];
        if ent.len() > 1 {
            let k = (w.chars().count() as i64 + (self.n("t") / 30.0).floor() as i64) as usize
                % ent.len();
            target = ent[k];
        }
        let best = ns.iter().map(|n| dist(w, n, target)).min().unwrap_or(99);
        let good: Vec<&'static str> = ns
            .iter()
            .copied()
            .filter(|n| dist(w, n, target) == best)
            .collect();
        let c = self.rand();
        let r = self.rand();
        if c < 0.62 {
            good.get((r * good.len() as f64).floor() as usize).copied()
        } else {
            ns.get((r * ns.len() as f64).floor() as usize).copied()
        }
    }

    fn revive(&mut self, w: &str) -> bool {
        let left = self.mod_n("revive");
        if left > 0.0 {
            if let Some(m) = self.s.get_mut("mods").and_then(Value::as_object_mut) {
                m.insert("revive".to_string(), f(left - 1.0));
            }
            if self.pos(w) == "office" {
                self.set_pos(w, "main");
                self.set_sub("offT", w, 0.0);
                self.set_sub("acc", w, -6.0);
            }
            self.fx(json!({"type": "revived", "who": w}));
            return true;
        }
        false
    }

    fn leave(&mut self, w: &str, to: &str, pushed: bool) {
        let from = self.pos(w);
        self.set_pos(w, to);
        self.set_sub("offT", w, 0.0);
        self.set_sub("acc", w, -3.0);
        self.fx(
            json!({"type": if pushed {"pushed"} else {"leave"}, "who": w, "from": from, "to": to}),
        );
    }

    fn kill(&mut self, w: &str) {
        self.s.insert("dead".to_string(), json!(w));
        self.fx(json!({"type": "kill", "who": w}));
    }

    fn runner(&mut self, w: &str, dt: f64, lvl: f64) {
        let at = self.pos(w);
        if at == "hall" {
            let run = self.sub("runT", w).unwrap_or(0.0) + dt;
            self.set_sub("runT", w, run);
            let hold = self.sub("hold", w).unwrap_or(0.0);
            let hold = if self.aimed().as_deref() == Some("hall") {
                hold + dt
            } else {
                (hold - dt * 0.5).max(0.0)
            };
            self.set_sub("hold", w, hold);
            if hold > 1.1 {
                self.set_pos(w, "parts");
                self.set_sub("runT", w, 0.0);
                self.set_sub("hold", w, 0.0);
                self.set_sub("acc", w, -6.0);
                self.fx(json!({"type": "pushed", "who": w, "from": "hall", "to": "parts"}));
                return;
            }
            if run > 4.2 {
                if !truthy(self.s.get("inv")) && !self.revive(w) {
                    self.kill(w);
                } else {
                    self.set_pos(w, "parts");
                    self.set_sub("runT", w, 0.0);
                }
            }
            return;
        }
        let acc = self.sub("acc", w).unwrap_or(f64::NAN) + dt;
        self.set_sub("acc", w, acc);
        if acc < def(w).every {
            return;
        }
        self.set_sub("acc", w, 0.0);
        if self.rand() * 20.0 < lvl {
            self.set_pos(w, "hall");
            self.set_sub("runT", w, 0.0);
            self.fx(json!({"type": "run", "who": w}));
        }
    }

    fn puppet(&mut self, dt: f64, lvl: f64) {
        let out = self.n("boxOut");
        if out > 0.0 {
            let out = out + dt;
            self.set("boxOut", out);
            self.set_pos("ibrahim", if out > 6.0 { "hall" } else { "prize" });
            if self.n("box") > 25.0 && out < 7.0 {
                self.set("boxOut", 0.0);
                self.set_pos("ibrahim", "prize");
                self.fx(json!({"type": "boxsafe"}));
                return;
            }
            if out > 11.0 {
                if !truthy(self.s.get("inv")) && !self.revive("ibrahim") {
                    self.kill("ibrahim");
                } else {
                    self.set("boxOut", 0.0);
                    self.set("box", 60.0);
                }
            }
            return;
        }
        let b = self.n("box");
        let b = if truthy(self.s.get("wind")) {
            (b + dt * 26.0).min(100.0)
        } else {
            (b - dt * (0.55 + lvl * 0.05) * self.mod_n("box")).max(0.0)
        };
        self.set("box", b);
        if self.cheat("box") {
            self.set("box", 100.0);
        }
        if self.n("box") <= 0.0 {
            self.set("boxOut", 0.001);
            self.fx(json!({"type": "boxout"}));
        }
    }
}

/// Port of `stepJson` (`src/ai.js`).
pub fn step_json(s: Value, dt: Value, input: Value) -> Result<Value, String> {
    let mut s = match s {
        Value::Object(m) => m,
        _ => return Err("TypeError: the night must be an object".to_string()),
    };
    let dt = num(Some(&dt));
    let mut n = Night {
        s: &mut s,
        fx: Vec::new(),
    };
    run(&mut n, dt, &input)?;
    let fx = std::mem::take(&mut n.fx);
    Ok(json!({"S": Value::Object(s), "fx": fx}))
}

fn run(n: &mut Night, dt: f64, input: &Value) -> Result<(), String> {
    let inp = |k: &str| input.get(k);
    if truthy(n.s.get("dead")) || truthy(n.s.get("won")) {
        return Ok(());
    }
    let t = n.n("t") + dt;
    n.set("t", t);
    let hour = (t / HOUR_SEC).floor();
    n.set("hour", hour);
    if hour >= 6.0 {
        n.s.insert("won".to_string(), json!(true));
        n.fx(json!({"type": "win"}));
        return Ok(());
    }
    let hb = if hour >= 4.0 {
        2.0
    } else if hour >= 2.0 {
        1.0
    } else {
        0.0
    };
    if !n.s.get("mods").map(Value::is_object).unwrap_or(false) {
        return Err(
            "TypeError: Cannot read properties of undefined (reading 'maskSpeed')".to_string(),
        );
    }
    // the mask eases up and down; it can't be worn with the cameras up (unless co-op)
    let want = if truthy(inp("mask")) && (!truthy(inp("cam")) || truthy(inp("coop"))) {
        1.0
    } else {
        0.0
    };
    let mask = n.n("mask");
    n.set(
        "mask",
        mask + (want - mask) * (dt * n.mod_n("maskSpeed")).min(1.0),
    );
    let masked = n.n("mask") > 0.75;
    // flashlight and battery
    if n.n("flashDead") > 0.0 {
        let v = n.n("flashDead") - dt;
        n.set("flashDead", v);
    }
    let flash_on = truthy(inp("flash"))
        && n.n("battery") > 0.0
        && n.n("flashDead") <= 0.0
        && !masked
        && !truthy(inp("freezeLight"));
    n.s.insert("flashOn".to_string(), json!(flash_on));
    if n.cheat("battery") {
        n.set("battery", 100.0);
    }
    let bat = n.n("battery");
    let bat = if flash_on {
        (bat - dt * (100.0 / 55.0) * n.mod_n("drain")).max(0.0)
    } else {
        (bat + dt * 7.0 * n.mod_n("charge")).min(100.0)
    };
    n.set("battery", bat);
    let aim = if flash_on {
        text(inp("aim"))
            .filter(|a| !a.is_empty())
            .map(|a| json!(a))
            .unwrap_or(Value::Null)
    } else {
        Value::Null
    };
    n.s.insert("aimedAt".to_string(), aim);
    n.s.insert(
        "wind".to_string(),
        json!(truthy(inp("wind")) && text(inp("cam")) == Some("prize")),
    );
    if n.cheat("freeze") {
        return Ok(());
    }
    for w in WHO {
        let d = def(w);
        let lv = n.sub("lv", w).unwrap_or(0.0);
        let lvl = (lv + if lv > 0.0 { hb } else { 0.0 }).min(20.0);
        if lvl <= 0.0 && w != "ibrahim" {
            continue;
        }
        let at = n.pos(w);
        if d.kind == Kind::Puppet {
            n.puppet(dt, lvl);
            continue;
        }
        if d.kind == Kind::Runner {
            n.runner(w, dt, lvl);
            continue;
        }
        if at == "office" {
            let off = n.sub("offT", w).unwrap_or(0.0) + dt;
            n.set_sub("offT", w, off);
            if d.kind == Kind::Nuisance {
                let fd = n.n("flashDead").max(1.5);
                n.set("flashDead", fd);
                if masked && off > 1.2 {
                    n.leave(w, "main", false);
                } else if off > 14.0 {
                    n.leave(w, "hall", false);
                }
                continue;
            }
            if masked {
                let r = n.rand();
                if off > 1.0 + r * 1.2 {
                    n.leave(
                        w,
                        if d.kind == Kind::Crawler {
                            "ceiling"
                        } else {
                            "main"
                        },
                        false,
                    );
                }
            } else if off > 3.4 - (lvl * 0.06).min(1.2) && !truthy(n.s.get("inv")) {
                if n.revive(w) {
                    continue;
                }
                n.kill(w);
                return Ok(());
            }
            continue;
        }
        let acc = n.sub("acc", w).unwrap_or(f64::NAN) + dt;
        n.set_sub("acc", w, acc);
        if acc < d.every {
            continue;
        }
        n.set_sub("acc", w, 0.0);
        if n.rand() * 20.0 >= lvl {
            continue;
        }
        if d.entry.contains(&at.as_str()) {
            if n.aimed().as_deref() == Some(at.as_str()) && n.rand() < 0.7 {
                let to = nexts(w, &at).first().copied().unwrap_or("");
                n.leave(w, to, true);
                continue;
            }
            n.set_pos(w, "office");
            n.set_sub("offT", w, 0.0);
            n.fx(json!({"type": "enter", "who": w, "from": at}));
            continue;
        }
        if let Some(to) = n.toward(w, &at) {
            n.set_pos(w, to);
            n.fx(json!({"type": "move", "who": w, "from": at, "to": to}));
        }
    }
    Ok(())
}
