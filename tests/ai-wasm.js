/* Proves the Rust build (fnaz-ai.wasm) plays exactly like ai.js.
 * Many random scripted nights run through both from the same seed, with the same player actions, and the whole game
 * state and every effect are compared after every tick. Usage: node tests/ai-wasm.js [nights]
 * (Build the module first: scripts/build-wasm.sh) */
'use strict';
const fs = require('fs'), path = require('path');
const AI = require('../ai.js');
const NIGHTS = +process.argv[2] || 300;
const enc = new TextEncoder(), dec = new TextDecoder();
const b64 = /"([A-Za-z0-9+/=]+)"/.exec(fs.readFileSync(path.join(__dirname, '../fnaz-ai.wasm.js'), 'utf8'))[1]; // exactly the module the game ships
const mod = new WebAssembly.Module(Buffer.from(b64, 'base64'));
const wasm = new WebAssembly.Instance(mod, {}).exports;
function call(req) {
  const b = enc.encode(JSON.stringify(req));
  const p = wasm.fnaz_alloc(b.length);
  new Uint8Array(wasm.memory.buffer, p, b.length).set(b);
  const n = wasm.fnaz_call(p, b.length);
  wasm.fnaz_free(p, b.length);
  const out = JSON.parse(dec.decode(new Uint8Array(wasm.memory.buffer, wasm.fnaz_result(), n)));
  if (out.error) throw new Error(out.error);
  return out;
}
const KEYS = ['night', 'time', 'hour', 'power', 'pre', 'blackout', 'bT', 'pvid', 'dead', 'won', 'who', 'calmT', 'zPrev', 'heatL', 'heatR', 'coolL', 'coolR', 'wbubbles', 'wtaffy', 'doorL', 'doorR', 'lightL', 'lightR', 'monitor', 'monA', 'cam', 'goldenArmed', 'goldenIn', 'goldenT', 'goldenOdds', 'poster', 'shake', 'halluc', 'clatterT', 'zFlash', 'rng'];
function viaRust(op, y, extra, env) {
  const state = { ai: y.ai }; for (const k of KEYS) if (y[k] !== undefined) state[k] = y[k];
  const out = call(Object.assign({ op, state, env }, extra));
  for (const k of KEYS) y[k] = out.state[k];
  for (const b of ['zayed', 'bubbles', 'taffy', 'sherbet']) Object.assign(y.ai[b], out.state.ai[b]);
  return out.events;
}
function makeState(night, levels, seed, odds) {
  const bot = (lv) => ({ ai: lv, t: 0, office: false, officeT: 0, room: 'stage', human: false, dw: 0, iv: 0, pending: 0, pendMax: 0, armed: false });
  return {
    night, time: 0, hour: 0, power: 100, pre: false, blackout: false, bT: 0, pvid: false, dead: false, won: false, who: null, scare: null,
    calmT: 0, zPrev: 0, heatL: 0, heatR: 0, coolL: 0, coolR: 0, wbubbles: 0, wtaffy: 0, doorL: false, doorR: false, lightL: false, lightR: false,
    monitor: false, monA: 0, cam: 'stage', goldenArmed: false, goldenIn: false, goldenT: 0, goldenOdds: odds, poster: false, shake: 0, halluc: 0, clatterT: 0, zFlash: false, rng: seed,
    ai: { zayed: bot(levels[0]), bubbles: Object.assign(bot(levels[1]), { iv: 4.97 }), taffy: Object.assign(bot(levels[2]), { iv: 4.98 }),
      sherbet: { stage: 0, ai: levels[3], t: 0, cd: 0, wait: 0, running: false, runT: 0, hits: 0, human: false } }
  };
}
const dump = (y) => JSON.stringify(y);
function fail(n, i, what, a, b) { console.log('MISMATCH night#' + n, 'step', i, what, '\n js  :', String(a).slice(0, 900), '\n rust:', String(b).slice(0, 900)); process.exit(1); }

function run(n) {
  let s = (n * 2246822519 + 777) >>> 0;
  const r = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const night = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12][Math.floor(r() * 10)], hi = r() < 0.5;
  const levels = [0, 1, 2, 3].map(() => (hi ? 10 + Math.floor(r() * 11) : Math.floor(r() * 21)));
  const seed = Math.floor(r() * 4294967296) >>> 0, odds = [3, 30, 1013][Math.floor(r() * 3)];
  const online = r() < 0.15, reduced = r() < 0.2, humanBots = r() < 0.2;
  const a = makeState(night, levels, seed, odds), b = makeState(night, levels, seed, odds);
  if (humanBots) for (const y of [a, b]) { y.ai.zayed.human = true; y.ai.taffy.human = r() < 2; } // exercise the human-controlled paths
  const mods = r() < 0.4, env = { online, guest: false, reduced, invuln: mods && r() < 0.5, freeze: mods && r() < 0.3, infinite: mods && r() < 0.5, noheat: mods && r() < 0.5 };
  const steps = 6000 + Math.floor(r() * 9000);
  let events = 0, deaths = 0;
  for (let i = 0; i < steps; i++) {
    if (r() < 0.012) {
      const act = Math.floor(r() * 6), light = r() < 0.5 ? 'lightL' : 'lightR', camId = ['stage', 'dining', 'westHall', 'westCor', 'eastHall', 'eastCor', 'kitchen', 'cove'][Math.floor(r() * 8)];
      for (const [y, rust] of [[a, false], [b, true]]) {
        if (y.blackout || y.dead || y.won) continue;
        if (act < 2) { const L = act === 0, d = L ? 'doorL' : 'doorR', c = L ? 'coolL' : 'coolR', occ = L ? y.ai.bubbles.office : y.ai.taffy.office; if (!occ && !(!y[d] && y[c] > 0)) y[d] = !y[d]; }
        else if (act === 2) { if (!y.monitor) y[light] = !y[light]; }
        else if (act === 3 && !y.monitor) { y.monitor = true; y.lightL = y.lightR = false; (rust ? viaRust('cameraChanged', y, {}, env) : AI.cameraChanged(y, env)); }
        else if (act === 4 && y.monitor) { const ea = rust ? viaRust('monitorDown', y, {}, env) : AI.monitorDown(y, env); y.__ev = ea; }
        else if (act === 5) { y.cam = camId; (rust ? viaRust('cameraChanged', y, {}, env) : AI.cameraChanged(y, env)); }
      }
      if (a.__ev || b.__ev) { if (JSON.stringify(a.__ev) !== JSON.stringify(b.__ev)) fail(n, i, 'monitorDown events', JSON.stringify(a.__ev), JSON.stringify(b.__ev)); delete a.__ev; delete b.__ev; }
      if (dump(a) !== dump(b)) fail(n, i, 'state after action', dump(a), dump(b));
    }
    const dt = [1 / 60, 1 / 30, 0.05, 0.1][Math.floor(r() * 4)];
    if (a.scare || a.dead || a.won) break;
    a.monA = Math.max(0, Math.min(1, a.monA + (a.monitor ? 4.5 : -4.5) * dt)); b.monA = a.monA;
    const ea = AI.step(a, dt, env), eb = viaRust('step', b, { dt }, env);
    if (JSON.stringify(ea) !== JSON.stringify(eb)) fail(n, i, 'events', JSON.stringify(ea), JSON.stringify(eb));
    if (dump(a) !== dump(b)) fail(n, i, 'state', dump(a), dump(b));
    events += ea.length;
    if (a.dead) { deaths++; a.scare = b.scare = true; }
    if (ea.some((e) => e[0] === 'nightEnd')) break;
    if (ea.some((e) => e[0] === 'blackout')) { a.pvid = b.pvid = true; }
  }
  return { events, deaths, night };
}
let ev = 0, dead = 0; const by = {};
for (let n = 0; n < NIGHTS; n++) { const r = run(n); ev += r.events; dead += r.deaths; by[r.night] = (by[r.night] || 0) + 1; }
console.log(`${NIGHTS}/${NIGHTS} scripted nights identical between ai.js and the Rust module (state, effects and random stream every tick). ${ev} effects compared, ${dead} deaths. Nights: ${JSON.stringify(by)}`);
