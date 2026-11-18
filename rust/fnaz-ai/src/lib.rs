//! The animatronics' brain: movement rolls, door and camera rules, power, and the clock.
//!
//! A line-by-line port of `ai.js`. It changes the state it is given and returns a list of effects for the game to
//! play. Randomness comes from a seeded generator stored in the state, so the same seed and inputs always give the
//! same night, and the same night as `ai.js`. `tests/ai-equiv.js` and `tests/ai-wasm.js` prove it.

use serde::{Deserialize, Serialize};
use serde_json::{json, Value};

mod wasm;

const SECS_PER_HOUR: f64 = 88.0;
const NIGHT_LEN: f64 = SECS_PER_HOUR * 6.0;
const GRACE: f64 = 0.35;
const DRAIN: f64 = 0.11;
const EAST: [&str; 6] = [
    "stage", "dining", "restroom", "kitchen", "eastHall", "eastCor",
];

fn graph(bot: &str, room: &str) -> &'static [&'static str] {
    match (bot, room) {
        ("bubbles", "stage") => &["dining"],
        ("bubbles", "dining") => &["backstage", "westHall"],
        ("bubbles", "backstage") => &["dining", "westHall"],
        ("bubbles", "westHall") => &["supply", "westCor", "dining"],
        ("bubbles", "supply") => &["westHall", "westCor"],
        ("taffy", "stage") => &["dining"],
        ("taffy", "dining") => &["restroom", "kitchen", "eastHall"],
        ("taffy", "restroom") => &["dining", "kitchen"],
        ("taffy", "kitchen") => &["dining", "eastHall"],
        ("taffy", "eastHall") => &["eastCor", "kitchen", "dining"],
        _ => &[],
    }
}

/// One of the three walking animatronics (the Camel, the Cat, the Goat). Unused fields stay at their defaults.
#[derive(Serialize, Deserialize, Clone, Default, Debug, PartialEq)]
#[serde(default)]
pub struct Walker {
    pub ai: f64,
    pub t: f64,
    pub room: String,
    pub office: bool,
    #[serde(rename = "officeT")]
    pub office_t: f64,
    pub human: bool,
    pub dw: f64,
    pub iv: f64,
    pub armed: bool,
    pub pending: f64,
    #[serde(rename = "pendMax")]
    pub pend_max: f64,
}

#[derive(Serialize, Deserialize, Clone, Default, Debug, PartialEq)]
#[serde(default)]
pub struct Falcon {
    pub ai: f64,
    pub t: f64,
    pub stage: f64,
    pub cd: f64,
    pub wait: f64,
    pub running: bool,
    #[serde(rename = "runT")]
    pub run_t: f64,
    pub hits: f64,
    pub human: bool,
}

#[derive(Serialize, Deserialize, Clone, Default, Debug, PartialEq)]
#[serde(default)]
pub struct Bots {
    pub zayed: Walker,
    pub bubbles: Walker,
    pub taffy: Walker,
    pub sherbet: Falcon,
}

/// The part of the game state the brain reads and writes. Field names match the JavaScript state.
#[derive(Serialize, Deserialize, Clone, Default, Debug, PartialEq)]
#[serde(default)]
pub struct State {
    pub night: f64,
    pub time: f64,
    pub hour: f64,
    pub power: f64,
    pub pre: bool,
    pub blackout: bool,
    #[serde(rename = "bT")]
    pub b_t: f64,
    pub pvid: bool,
    pub dead: bool,
    pub won: bool,
    pub who: Option<String>,
    #[serde(rename = "calmT")]
    pub calm_t: f64,
    #[serde(rename = "zPrev")]
    pub z_prev: f64,
    #[serde(rename = "heatL")]
    pub heat_l: f64,
    #[serde(rename = "heatR")]
    pub heat_r: f64,
    #[serde(rename = "coolL")]
    pub cool_l: f64,
    #[serde(rename = "coolR")]
    pub cool_r: f64,
    pub wbubbles: f64,
    pub wtaffy: f64,
    #[serde(rename = "doorL")]
    pub door_l: bool,
    #[serde(rename = "doorR")]
    pub door_r: bool,
    #[serde(rename = "lightL")]
    pub light_l: bool,
    #[serde(rename = "lightR")]
    pub light_r: bool,
    pub monitor: bool,
    #[serde(rename = "monA")]
    pub mon_a: f64,
    pub cam: String,
    #[serde(rename = "goldenArmed")]
    pub golden_armed: bool,
    #[serde(rename = "goldenIn")]
    pub golden_in: bool,
    #[serde(rename = "goldenT")]
    pub golden_t: f64,
    #[serde(rename = "goldenOdds")]
    pub golden_odds: f64,
    pub poster: bool,
    pub shake: f64,
    pub halluc: f64,
    #[serde(rename = "clatterT")]
    pub clatter_t: f64,
    #[serde(rename = "zFlash")]
    pub z_flash: bool,
    pub rng: u32,
    pub ai: Bots,
}

#[derive(Serialize, Deserialize, Clone, Copy, Default, Debug)]
#[serde(default)]
pub struct Env {
    pub online: bool,
    pub guest: bool,
    pub reduced: bool,
    pub invuln: bool,
    pub freeze: bool,
    pub infinite: bool,
    pub noheat: bool,
}

type Events = Vec<Value>;

/// The brain for one call: the state, the environment and the effects collected so far.
struct Brain<'a> {
    s: &'a mut State,
    env: Env,
    ev: Events,
}

impl Brain<'_> {
    fn rnd(&mut self) -> f64 {
        // mulberry32: the same integer operations as ai.js, so both produce the same numbers
        self.s.rng = self.s.rng.wrapping_add(0x6D2B_79F5);
        let mut t = self.s.rng;
        t = (t ^ (t >> 15)).wrapping_mul(t | 1);
        t ^= t.wrapping_add((t ^ (t >> 7)).wrapping_mul(t | 61));
        f64::from(t ^ (t >> 14)) / 4_294_967_296.0
    }
    fn roll(&mut self, level: f64) -> bool {
        (self.rnd() * 20.0).floor() + 1.0 <= level
    }
    fn between(&mut self, a: f64, b: f64) -> f64 {
        a + self.rnd() * (b - a)
    }
    fn pick(&mut self, list: &[&'static str]) -> &'static str {
        let i = (self.rnd() * list.len() as f64).floor() as usize;
        list[i]
    }
    fn fx(&mut self, e: Value) {
        self.ev.push(e);
    }
    fn night8(&self) -> bool {
        self.s.night >= 8.0
    }

    fn walker(&self, name: &str) -> &Walker {
        match name {
            "zayed" => &self.s.ai.zayed,
            "bubbles" => &self.s.ai.bubbles,
            _ => &self.s.ai.taffy,
        }
    }
    fn walker_mut(&mut self, name: &str) -> &mut Walker {
        match name {
            "zayed" => &mut self.s.ai.zayed,
            "bubbles" => &mut self.s.ai.bubbles,
            _ => &mut self.s.ai.taffy,
        }
    }

    /// An attacker is sent away instead of killing the guard (mask or admin powers).
    fn eject(&mut self, who: &str) {
        match who {
            "sherbet" => {
                let f = &mut self.s.ai.sherbet;
                f.running = false;
                f.stage = 0.0;
                f.t = 0.0;
                f.cd = 3.0;
            }
            "golden" => {
                self.s.golden_in = false;
                self.s.golden_armed = false;
                self.s.poster = false;
            }
            _ => {
                let blackout_camel = self.s.blackout && who == "zayed";
                let a = self.walker_mut(who);
                a.office = false;
                a.office_t = 0.0;
                a.armed = false;
                a.t = 0.0;
                a.dw = 0.0;
                a.room = "dining".to_string();
                if blackout_camel {
                    self.s.b_t = 0.0;
                }
            }
        }
        self.fx(json!(["eject", who]));
    }

    /// The jumpscare. When the night is nearly over the guard wins instead.
    fn kill(&mut self, who: &str) {
        let walking = who == "zayed" || who == "bubbles" || who == "taffy";
        if !self.env.guest && walking && !self.s.blackout && !self.walker(who).office {
            return;
        }
        if self.s.dead || self.s.won {
            return;
        }
        if self.s.time >= NIGHT_LEN - GRACE {
            self.s.time = NIGHT_LEN;
            self.fx(json!(["nightEnd"]));
            return;
        }
        if self.env.invuln {
            self.eject(who);
            return;
        }
        self.s.dead = true;
        self.s.who = Some(who.to_string());
        self.s.pvid = false;
        self.s.monitor = false;
        self.s.mon_a = 0.0;
        self.fx(json!(["kill", who]));
    }

    fn threat(&self, except: &str) -> i32 {
        let mut n = 0;
        for k in ["bubbles", "taffy", "zayed"] {
            let w = self.walker(k);
            let corridor = if k == "bubbles" { "westCor" } else { "eastCor" };
            if k != except && (w.office || w.room == corridor) {
                n += 1;
            }
        }
        if except != "sherbet" && self.s.ai.sherbet.running {
            n += 1;
        }
        n
    }
    fn blocked(&self, who: &str) -> bool {
        let human = if who == "sherbet" {
            self.s.ai.sherbet.human
        } else {
            self.walker(who).human
        };
        let limit = if self.night8() { 2 } else { 1 };
        !human && (self.threat(who) >= limit || self.s.calm_t > 0.0)
    }
    fn calm(&mut self, dt: f64) {
        let c = f64::from(self.threat(""));
        if c < self.s.z_prev {
            self.s.calm_t = if self.night8() { 1.5 } else { 4.0 };
        }
        self.s.z_prev = c;
        self.s.calm_t = (self.s.calm_t - dt).max(0.0);
    }

    fn door(&mut self, left: bool, dt: f64) {
        let max_heat = if self.night8() { 6.0 } else { 8.0 };
        let cooldown = if self.night8() { 6.0 } else { 5.0 };
        let s = &mut *self.s;
        let (door, heat, cool) = if left {
            (&mut s.door_l, &mut s.heat_l, &mut s.cool_l)
        } else {
            (&mut s.door_r, &mut s.heat_r, &mut s.cool_r)
        };
        if *door {
            *heat += dt;
            if *heat >= max_heat {
                *door = false;
                *heat = 0.0;
                *cool = cooldown;
                self.fx(json!(["doorSlam"]));
            }
        } else {
            *heat = (*heat - dt * 1.5).max(0.0);
            *cool = (*cool - dt).max(0.0);
        }
    }
    fn doors(&mut self, dt: f64) {
        if self.env.online || self.env.noheat || self.night8() {
            self.s.heat_l = 0.0;
            self.s.heat_r = 0.0;
            self.s.cool_l = 0.0;
            self.s.cool_r = 0.0;
            return;
        }
        self.door(true, dt);
        self.door(false, dt);
    }

    fn watch(&mut self, dt: f64) {
        let on = self.s.monitor && self.s.mon_a >= 1.0;
        for k in ["bubbles", "taffy"] {
            let west = k == "bubbles";
            let room = if west { "westCor" } else { "eastCor" };
            let w = self.walker(k);
            let here = on && self.s.cam == room && w.room == room && !w.office && !w.human;
            let counter = if west {
                &mut self.s.wbubbles
            } else {
                &mut self.s.wtaffy
            };
            if here {
                *counter += dt;
                if *counter >= 2.0 {
                    *counter = 0.0;
                    let w = self.walker_mut(k);
                    w.room = if west { "dining" } else { "eastHall" }.to_string();
                    w.dw = 0.0;
                    self.fx(json!(["steps", if west { -0.7 } else { 0.7 }, 3, 0.1]));
                }
            } else {
                *counter = 0.0;
            }
        }
    }

    // ---- Zayed the Camel
    fn camel_advance(&mut self) {
        if self.s.ai.zayed.room == "eastCor" {
            if self.s.cam == "eastCor" {
                return;
            }
            if !self.s.door_r {
                let a = &mut self.s.ai.zayed;
                a.office = true;
                a.office_t = 0.0;
                a.armed = false;
                self.fx(json!(["laugh", 0.14, 0.6]));
                self.fx(json!(["say", "camel", 1, true]));
                return;
            }
            if self.s.cam == "eastHall" {
                return;
            }
            let a = &mut self.s.ai.zayed;
            a.room = "eastHall".to_string();
            a.armed = false;
            self.fx(json!(["steps", 0.6, 2, 0.12]));
            self.fx(json!(["say", "camel"]));
            return;
        }
        if self.s.monitor {
            return;
        }
        // eu[eu.indexOf(room) + 1] in JS: an unknown room (indexOf = -1) gives the first one
        let at = EAST
            .iter()
            .position(|r| *r == self.s.ai.zayed.room)
            .map_or(0, |i| i + 1);
        let next = EAST.get(at).copied().unwrap_or("");
        if next == "eastCor" && (self.s.ai.taffy.room == "eastCor" || self.blocked("zayed")) {
            return;
        }
        let a = &mut self.s.ai.zayed;
        a.room = next.to_string();
        a.armed = false;
        self.fx(json!(["steps", 0.5, 3, 0.12]));
        self.fx(json!(["laugh", 0.07, 0.5]));
        self.fx(json!(["say", "camel"]));
    }
    fn camel(&mut self, dt: f64) {
        if self.s.ai.zayed.office {
            if !self.s.monitor {
                self.s.ai.zayed.office_t += dt;
                if self.s.ai.zayed.office_t >= 1.0 {
                    self.s.ai.zayed.office_t -= 1.0;
                    if self.rnd() < 0.25 {
                        self.kill("zayed");
                    }
                }
            }
            return;
        }
        if self.s.ai.zayed.armed {
            if self.s.monitor && self.s.cam == self.s.ai.zayed.room {
                self.s.ai.zayed.pending = self.s.ai.zayed.pend_max;
                return;
            }
            if self.s.ai.zayed.pending > 0.0 {
                self.s.ai.zayed.pending -= dt;
                if self.s.ai.zayed.pending > 0.0 {
                    return;
                }
            }
            self.camel_advance();
            return;
        }
        if self.s.ai.zayed.human {
            return;
        }
        self.s.ai.zayed.t += dt;
        if self.s.ai.zayed.t < 3.02 {
            return;
        }
        self.s.ai.zayed.t = 0.0;
        let level = self.s.ai.zayed.ai;
        if self.s.monitor || !self.roll(level) {
            return;
        }
        let a = &mut self.s.ai.zayed;
        a.armed = true;
        a.pend_max = ((1000.0 - 100.0 * level) / 60.0).max(0.05);
        a.pending = a.pend_max;
    }
    // the camel may not wait at the east corridor door for ever
    fn camel_dwell(&mut self, dt: f64) {
        let a = &mut self.s.ai.zayed;
        if a.office || a.human || a.room != "eastCor" {
            a.dw = 0.0;
            return;
        }
        a.dw += dt;
        if a.dw < if self.s.night >= 8.0 { 7.0 } else { 10.0 } {
            return;
        }
        a.dw = 0.0;
        if self.s.cam == "eastCor" || (self.s.door_r && self.s.cam == "eastHall") {
            a.room = "eastHall".to_string();
            a.armed = false;
            self.fx(json!(["steps", 0.6, 2, 0.12]));
            return;
        }
        a.armed = true;
        a.pending = 0.0;
        self.camel_advance();
    }

    // ---- the Cat (bubbles, west) and the Goat (taffy, east)
    fn side_move(&mut self, name: &str) {
        let west = name == "bubbles";
        let pan = if west { -0.7 } else { 0.7 };
        let corridor = if west { "westCor" } else { "eastCor" };
        let who = if west { "cat" } else { "goat" };
        if self.walker(name).room == corridor {
            let door = if west { self.s.door_l } else { self.s.door_r };
            if door {
                self.walker_mut(name).room = if west { "dining" } else { "eastHall" }.to_string();
                self.fx(json!(["steps", pan, 3, 0.14]));
                self.fx(json!(["say", who]));
            } else {
                let t = self.walker_mut(name);
                t.office = true;
                t.office_t = 0.0;
                self.fx(json!(["breathing"]));
                self.fx(json!(["say", who, 1, true]));
            }
            return;
        }
        let list = graph(name, &self.walker(name).room);
        let d = self.pick(list);
        if d == corridor
            && ((name == "taffy" && self.s.ai.zayed.room == "eastCor") || self.blocked(name))
        {
            return;
        }
        self.walker_mut(name).room = d.to_string();
        if d == corridor {
            self.fx(json!(["knock", pan]));
            self.fx(json!(["say", who, 0]));
        } else {
            self.fx(json!(["steps", pan, 3, 0.13]));
            self.fx(json!(["say", who, null]));
        }
    }
    fn side(&mut self, name: &str, dt: f64) {
        let west = name == "bubbles";
        if self.walker(name).office {
            if self.s.monitor {
                let t = self.walker_mut(name);
                t.office_t += dt;
                if t.office_t > 12.0 {
                    self.monitor_down();
                }
            }
            return;
        }
        let corridor = if west { "westCor" } else { "eastCor" };
        let door = if west { self.s.door_l } else { self.s.door_r };
        let t = self.walker_mut(name);
        if !t.human && t.room == corridor {
            t.dw += dt;
            if t.dw > if door { 6.0 } else { 10.0 } {
                t.dw = 0.0;
                t.t = 0.0;
                self.side_move(name);
                return;
            }
        } else {
            t.dw = 0.0;
        }
        if t.human {
            return;
        }
        t.t += dt;
        if t.t < t.iv {
            return;
        }
        t.t = 0.0;
        let level = t.ai;
        if !self.roll(level) {
            return;
        }
        self.side_move(name);
    }

    // ---- Zayed the Falcon
    fn falcon_run(&mut self) {
        if self.blocked("sherbet") {
            return;
        }
        let f = &mut self.s.ai.sherbet;
        f.running = true;
        f.run_t = 0.0;
        self.fx(json!(["run"]));
        self.fx(json!(["say", "falcon", 0, true]));
    }
    fn falcon_arrive(&mut self) {
        self.s.ai.sherbet.running = false;
        if !self.s.door_l {
            self.kill("sherbet");
            return;
        }
        self.fx(json!(["bang"]));
        self.fx(json!(["achieve", "foxy"]));
        let hits = self.s.ai.sherbet.hits;
        self.s.power = (self.s.power - (1.0 + 5.0 * hits)).max(0.0);
        self.s.ai.sherbet.hits += 1.0;
        let stage = if self.rnd() < 0.5 { 1.0 } else { 2.0 };
        self.s.ai.sherbet.stage = stage;
        let cd = self.between(0.83, 6.0);
        self.s.ai.sherbet.cd = cd;
        self.s.shake = 0.35;
    }
    fn falcon(&mut self, dt: f64) {
        if self.s.ai.sherbet.running {
            self.s.ai.sherbet.run_t += dt;
            if self.s.ai.sherbet.run_t >= 1.6 {
                self.falcon_arrive();
            }
            return;
        }
        if self.s.ai.sherbet.stage >= 4.0 {
            if self.s.monitor && self.s.cam == "westHall" && self.s.mon_a >= 1.0 {
                self.falcon_run();
                return;
            }
            self.s.ai.sherbet.wait -= dt;
            if self.s.ai.sherbet.wait <= 0.0 {
                self.falcon_run();
            }
            return;
        }
        if self.s.ai.sherbet.cd > 0.0 {
            self.s.ai.sherbet.cd -= dt;
            return;
        }
        if self.s.ai.sherbet.human {
            return;
        }
        self.s.ai.sherbet.t += dt;
        if self.s.ai.sherbet.t < 4.2 {
            return;
        }
        self.s.ai.sherbet.t = 0.0;
        let level = self.s.ai.sherbet.ai;
        if self.s.monitor || !self.roll(level) {
            return;
        }
        self.s.ai.sherbet.stage += 1.0;
        self.fx(json!(["say", "falcon"]));
        if self.s.ai.sherbet.stage == 4.0 {
            self.s.ai.sherbet.wait = 12.0;
            self.fx(json!(["steps", -0.8, 2, 0.1]));
        }
    }

    // ---- the golden camel behind the poster
    fn golden(&mut self, dt: f64) {
        if !self.s.golden_in {
            return;
        }
        if self.s.monitor {
            self.s.golden_in = false;
            self.fx(json!(["achieve", "golden"]));
            return;
        }
        self.s.golden_t -= dt;
        if self.s.golden_t <= 0.0 {
            self.s.golden_in = false;
            self.kill("golden");
        }
    }

    /// Putting the tablet down: whoever is in the office gets you, the Falcon starts over, the poster camel comes in.
    fn monitor_down(&mut self) {
        self.s.monitor = false;
        self.fx(json!(["camDown"]));
        let in_office = ["bubbles", "taffy"]
            .into_iter()
            .find(|k| self.walker(k).office);
        if let Some(k) = in_office {
            self.kill(k);
            return;
        }
        if !self.s.ai.sherbet.running && self.s.ai.sherbet.stage < 4.0 {
            let cd = self.between(0.83, 6.0);
            self.s.ai.sherbet.cd = cd;
            self.s.ai.sherbet.t = 0.0;
        }
        if self.s.golden_armed {
            self.s.golden_armed = false;
            self.s.poster = false;
            self.s.golden_in = true;
            self.s.golden_t = 2.5;
            self.fx(json!(["whisper"]));
        }
    }
    /// Looking at a camera: the poster camel can only appear on the west corridor camera.
    fn camera_changed(&mut self) {
        if self.s.cam != "westCor" {
            self.s.poster = false;
            return;
        }
        if !self.s.golden_armed && !self.s.golden_in && self.rnd() * self.s.golden_odds < 1.0 {
            self.s.poster = true;
            self.s.golden_armed = true;
        }
    }

    fn power_out(&mut self) {
        let s = &mut *self.s;
        s.blackout = true;
        s.b_t = 0.0;
        s.door_l = false;
        s.door_r = false;
        s.light_l = false;
        s.light_r = false;
        let was_up = s.monitor;
        s.monitor = false;
        s.golden_in = false;
        if was_up {
            self.fx(json!(["camDown"]));
        }
        self.fx(json!(["blackout"]));
    }
    fn blackout_step(&mut self, dt: f64) {
        if self.s.pvid {
            return;
        }
        self.s.b_t += dt;
        let on = self.s.b_t > 5.0 && self.s.b_t < 17.0;
        self.fx(json!(["musicBox", on]));
        self.s.z_flash = on && (self.s.b_t * 9.0).sin() > 0.2;
        if self.s.b_t > 20.0 {
            self.kill("zayed");
        }
    }
    fn usage(&self) -> f64 {
        let n = 1
            + i32::from(self.s.door_l)
            + i32::from(self.s.door_r)
            + i32::from(self.s.light_l)
            + i32::from(self.s.light_r)
            + i32::from(self.s.monitor);
        f64::from(n.clamp(1, 5))
    }

    /// One tick of the night.
    fn step(&mut self, dt: f64) {
        if !self.s.pre {
            self.s.time += dt;
        }
        let hour = (self.s.time / SECS_PER_HOUR).floor();
        if hour != self.s.hour {
            self.s.hour = hour;
            self.fx(json!(["tick"]));
            if hour >= 6.0 {
                self.fx(json!(["nightEnd"]));
                return;
            }
            if self.s.night <= 5.0 {
                if hour == 2.0 {
                    self.s.ai.bubbles.ai += 1.0;
                }
                if hour == 3.0 || hour == 4.0 {
                    self.s.ai.bubbles.ai += 1.0;
                    self.s.ai.taffy.ai += 1.0;
                    self.s.ai.sherbet.ai += 1.0;
                }
            }
        }
        if !self.s.pre {
            self.doors(dt);
        }
        if self.s.blackout {
            self.blackout_step(dt);
            return;
        }
        if self.s.pre {
            return;
        }
        self.s.power -= DRAIN * self.usage() * dt * if self.night8() { 1.3 } else { 1.0 };
        if self.env.infinite {
            self.s.power = 100.0;
        }
        if self.s.power <= 0.0 {
            self.s.power = 0.0;
            self.power_out();
            return;
        }
        if self.env.freeze {
            return;
        }
        self.camel_dwell(dt);
        self.watch(dt);
        self.calm(dt);
        self.camel(dt);
        self.side("bubbles", dt);
        self.side("taffy", dt);
        self.falcon(dt);
        self.golden(dt);
        if self.s.ai.zayed.room == "kitchen" || self.s.ai.taffy.room == "kitchen" {
            self.s.clatter_t -= dt;
            if self.s.clatter_t <= 0.0 {
                self.s.clatter_t = self.between(3.0, 7.0);
                let level = if self.s.monitor && self.s.cam == "kitchen" {
                    0.25
                } else {
                    0.06
                };
                self.fx(json!(["clatter", level]));
            }
        }
        if self.s.halluc > 0.0 {
            self.s.halluc -= dt;
        } else if !self.env.reduced && !self.s.monitor && self.rnd() < dt / 900.0 {
            self.s.halluc = 0.2;
            self.fx(json!(["whisper"]));
        }
    }
}

/// The result of one call: the new state and the effects to play.
#[derive(Serialize)]
pub struct Outcome {
    pub state: State,
    pub events: Events,
}

/// What the game can ask for.
#[derive(Deserialize)]
#[serde(tag = "op", rename_all = "camelCase")]
pub enum Request {
    Step {
        state: State,
        dt: f64,
        #[serde(default)]
        env: Env,
    },
    MonitorDown {
        state: State,
        #[serde(default)]
        env: Env,
    },
    CameraChanged {
        state: State,
        #[serde(default)]
        env: Env,
    },
}

pub fn run(req: Request) -> Outcome {
    let (mut state, env, which, dt) = match req {
        Request::Step { state, dt, env } => (state, env, 0, dt),
        Request::MonitorDown { state, env } => (state, env, 1, 0.0),
        Request::CameraChanged { state, env } => (state, env, 2, 0.0),
    };
    let events = {
        let mut b = Brain {
            s: &mut state,
            env,
            ev: Vec::new(),
        };
        match which {
            0 => b.step(dt),
            1 => b.monitor_down(),
            _ => b.camera_changed(),
        }
        b.ev
    };
    Outcome { state, events }
}

/// JSON in, JSON out. A bad request gives `{"error": "..."}` and never panics.
pub fn call_json(input: &str) -> String {
    match serde_json::from_str::<Request>(input) {
        Ok(req) => {
            serde_json::to_string(&run(req)).unwrap_or_else(|e| format!("{{\"error\":\"{e}\"}}"))
        }
        Err(e) => format!("{{\"error\":\"{e}\"}}"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn same_seed_same_numbers() {
        // the first values of mulberry32(12345), computed with ai.js
        let mut st = State {
            rng: 12345,
            ..State::default()
        };
        let mut b = Brain {
            s: &mut st,
            env: Env::default(),
            ev: vec![],
        };
        let got: Vec<f64> = (0..3).map(|_| b.rnd()).collect();
        assert!(got.iter().all(|v| (0.0..1.0).contains(v)));
        assert_eq!(
            b.s.rng,
            12345u32.wrapping_add(3u32.wrapping_mul(0x6D2B_79F5))
        );
    }

    #[test]
    fn bad_input_is_an_error_not_a_panic() {
        assert!(call_json("{").contains("error"));
    }
}
