/* Proves ai.js plays the same game as the original code in game.bundle.js.
 * It runs many random scripted nights through both (the original functions, copied verbatim in old-ai.src.js, and ai.js)
 * from the same random seed and compares the whole game state and every effect after every tick.
 * Usage: node tests/ai-equiv.js [nights] */
'use strict';
const fs = require('fs'), path = require('path');
const AI = require('../ai.js');
const SRC = fs.readFileSync(path.join(__dirname, 'old-ai.src.js'), 'utf8');
const NIGHTS = +process.argv[2] || 300;

const IGNORE = new Set(['dAnimL', 'dAnimR', 'fade', 'statBurst', 'cupT', 'capT']); // visual timers, not game logic
const deepProxy = () => new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => 0 : deepProxy()), apply: () => deepProxy(), set: () => true });

function makeState(night, levels, seed, odds) {
  const ai = (lv) => ({ ai: lv, t: 0, office: false, officeT: 0, room: 'stage' });
  return {
    night, running: true, time: 0, hour: 0, power: 100, pre: false, blackout: false, bT: 0, pvid: false, dead: false, won: false, who: null, scare: null,
    calmT: 0, zPrev: 0, heatL: 0, heatR: 0, coolL: 0, coolR: 0, wbubbles: 0, wtaffy: 0,
    doorL: false, doorR: false, lightL: false, lightR: false, monitor: false, monA: 0, cam: 'stage',
    goldenArmed: false, goldenIn: false, goldenT: 0, goldenOdds: odds, poster: false, shake: 0, usedCams: false, halluc: 0, clatterT: 0,
    statBurst: 0, cupT: 0, capT: 0, fade: 0, dAnimL: 0, dAnimR: 0, zFlash: false, rng: seed,
    ai: {
      zayed: Object.assign(ai(levels[0]), { pending: 0, pendMax: 0, armed: false }),
      bubbles: Object.assign(ai(levels[1]), { iv: 4.97 }),
      taffy: Object.assign(ai(levels[2]), { iv: 4.98 }),
      sherbet: { stage: 0, ai: levels[3], t: 0, cd: 0, wait: 0, running: false, runT: 0, hits: 0 }
    }
  };
}

// ---- the original, as a runnable object
function makeOld(y, rngBox, online) {
  const ev = [];
  const Sound = new Proxy({}, { get: (t, k) => (...a) => {
    if (k === 'stopAll' || k === 'ambient' || k === 'powerOut') return;
    if (k === 'jumpscare') { ev.push(['kill', y.who]); return; }
    ev.push([k, ...a]);
  } });
  const FNAZNET = { role: online ? 'host' : null, hostStep() {}, guestStep() {}, ev() {}, i: () => false };
  const g = {
    y, Sound, FNAZNET, oi: (...a) => ev.push(['say', ...a]), fc: () => ev.push(['nightEnd']), jg() {},
    FNAZ_ACH: { event: (n) => ev.push(['achieve', n]) }, window: { FNAZ_ACH: true }, X: deepProxy(), We: deepProxy(), Voice: deepProxy(),
    li() {}, l_: () => ev.push(['kill', 'golden']), Su() {}, dc: () => ({ catch() {} }), setTimeout() {},
    Rn: (i, e, t) => Math.max(e, Math.min(t, i)), ac: 88, Qh: 88 * 6, Ng: 0.35, Fg: 0.11, Sa: false, FNAZ5: {},
    zg: { bubbles: { stage: ['dining'], dining: ['backstage', 'westHall'], backstage: ['dining', 'westHall'], westHall: ['supply', 'westCor', 'dining'], supply: ['westHall', 'westCor'], westCor: [] },
      taffy: { stage: ['dining'], dining: ['restroom', 'kitchen', 'eastHall'], restroom: ['dining', 'kitchen'], kitchen: ['dining', 'eastHall'], eastHall: ['eastCor', 'kitchen', 'dining'], eastCor: [] } },
    eu: ['stage', 'dining', 'restroom', 'kitchen', 'eastHall', 'eastCor']
  };
  const keys = Object.keys(g);
  const f = new Function(...keys, 'rng', `const Math=Object.assign(Object.create(globalThis.Math),{random:rng});const uc=i=>Math.floor(rng()*20)+1<=i,sr=(i,e)=>i+rng()*(e-i),rc=i=>i[rng()*i.length|0];${SRC};return{mu,a_,yu,nr};`);
  const fns = f(...keys.map((k) => g[k]), () => AI.rnd(rngBox));
  return { ev, ...fns };
}

const clean = (e) => e.map((x) => JSON.stringify(x));
function snap(y) { const o = {}; for (const k of Object.keys(y)) if (!IGNORE.has(k) && k !== 'rng') o[k] = y[k]; return JSON.stringify(o); }

function run(nightIdx) {
  let s = (nightIdx * 2654435761 + 12345) >>> 0;
  const r = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const night = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12][Math.floor(r() * 10)];
  const hi = r() < 0.5;
  const levels = [0, 1, 2, 3].map(() => hi ? 10 + Math.floor(r() * 11) : Math.floor(r() * 21));
  const seed = Math.floor(r() * 4294967296) >>> 0, odds = [3, 30, 1013][Math.floor(r() * 3)], online = r() < 0.15;
  const yo = makeState(night, levels, seed, odds), yn = makeState(night, levels, seed, odds); cur = yn;
  const rngBox = { rng: seed };               // the original draws from this stream, ai.js from yn.rng: same generator, same seed
  const old = makeOld(yo, rngBox, online);
  const env = { online, guest: false, reduced: false };
  const steps = 7000 + Math.floor(r() * 9000);
  let nEv = 0, kills = 0, outs = 0;
  for (let i = 0; i < steps; i++) {
    // the player does something now and then (both versions get exactly the same action)
    if (r() < 0.012) {
      const a = Math.floor(r() * 6), light = r() < 0.5 ? 'lightL' : 'lightR', camId = ['stage', 'dining', 'westHall', 'westCor', 'eastHall', 'eastCor', 'kitchen', 'cove'][Math.floor(r() * 8)];
      for (const [y, side] of [[yo, 'o'], [yn, 'n']]) {
        if (y.blackout || y.dead || y.won) continue;
        if (a === 0 || a === 1) { const L = a === 0, d = L ? 'doorL' : 'doorR', c = L ? 'coolL' : 'coolR', occ = L ? y.ai.bubbles.office : y.ai.taffy.office; if (!occ && !(!y[d] && y[c] > 0)) y[d] = !y[d]; }
        else if (a === 2) { if (!y.monitor) y[light] = !y[light]; }
        else if (a === 3 && !y.monitor) { y.monitor = true; y.usedCams = true; y.lightL = y.lightR = false; if (side === 'o') old.yu(); else yn_ev(AI.cameraChanged(yn, env)); }
        else if (a === 4 && y.monitor) { if (side === 'o') { y.monitor = false; old.ev.push(['camDown']); old.a_(); } else yn_ev(AI.monitorDown(yn, env)); }
        else if (a === 5) { y.cam = camId; if (side === 'o') old.yu(); else yn_ev(AI.cameraChanged(yn, env)); }
      }
    }
    const dt = [1 / 60, 1 / 30, 0.05, 0.1][Math.floor(r() * 4)];
    // the original frame (visual timers first or last do not touch game logic)
    old.ev.length = 0; const evNewStore = yn_events; yn_events.length = 0;
    old.mu(dt);
    if (!(yn.scare || yn.dead || yn.won)) { pre(yn, dt); yn_ev(AI.step(yn, dt, env)); } else if (yn.scare) yn.scare.t += dt;
    const a = clean(normOld(old.ev)), b = clean(normNew(yn_events));
    if (JSON.stringify(a) !== JSON.stringify(b)) return fail(nightIdx, i, 'events', a, b, yo, yn);
    if (snap(yo) !== snap(yn)) return fail(nightIdx, i, 'state', snap(yo), snap(yn), yo, yn);
    if (rngBox.rng !== yn.rng) return fail(nightIdx, i, 'rng', rngBox.rng, yn.rng, yo, yn);
    nEv += a.length;
    if (yn.dead) kills++;
    if (yn.blackout) outs++;
    if (yn.dead || yn.won) break;
    if (a.some((x) => x.includes('nightEnd'))) { yn.won = yo.won = true; break; }
  }
  return { ok: true, nEv, kills, outs, night, steps };
}
// the part of the original's mu that runs before the logic (kept identical for both by this wrapper)
function pre(y, dt) { y.monA = Math.max(0, Math.min(1, y.monA + (y.monitor ? 4.5 : -4.5) * dt)); }
const yn_events = [];
function yn_ev(e) {
  yn_events.push(...e);
  for (const x of e) if (x[0] === 'blackout') cur.pvid = true; // the power-out video starts (zBlackoutFx)
  for (const x of e) if (x[0] === 'kill') { // what the game does when it plays a death (zKillFx in game.bundle.js)
    if (x[1] !== 'golden') cur.scare = { who: x[1], t: 0 };
  }
}
let cur = null;
function normOld(ev) { return ev; }
function normNew(ev) { return ev.map((e) => (e[0] === 'blackout' ? ['doorSlam'] : e)); }
function fail(i, step, what, a, b, yo, yn) {
  console.log('MISMATCH night#' + i, 'step', step, what);
  console.log(' old:', typeof a === 'string' ? a.slice(0, 1500) : JSON.stringify(a).slice(0, 800));
  console.log(' new:', typeof b === 'string' ? b.slice(0, 1500) : JSON.stringify(b).slice(0, 800));
  return { ok: false };
}

let good = 0, events = 0, kills = 0, outs = 0; const byNight = {};
for (let n = 0; n < NIGHTS; n++) {
  const r = run(n);
  if (!r.ok) process.exit(1);
  good++; events += r.nEv; kills += r.kills; outs += r.outs; byNight[r.night] = (byNight[r.night] || 0) + 1;
}
console.log(`${good}/${NIGHTS} scripted nights identical (state, effects and random stream every tick). ${events} effects compared, ${kills} deaths, ${outs} blackouts. Nights covered: ${JSON.stringify(byNight)}`);
