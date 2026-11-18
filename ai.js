/* The animatronics' brain: movement rolls, door and camera rules, power, and the clock.
 *
 * Pure game logic with no sound, no drawing and no DOM. It changes the state object it is given and returns a list of
 * effects for the game to play (sounds, voice lines, the jumpscare...). Randomness comes from a seeded generator stored
 * in the state (state.rng), so the same seed and the same inputs always give the same night. The Rust version
 * (rust/fnaz-ai) is a line-by-line port of this file and must give identical results; see rust/README.md.
 *
 * state fields used: night time hour power pre blackout bT pvid dead won who calmT zPrev heatL heatR coolL coolR
 *   doorL doorR lightL lightR monitor monA cam wbubbles wtaffy clatterT halluc goldenArmed goldenIn goldenT goldenOdds
 *   poster shake usedCams rng ai{zayed,bubbles,taffy,sherbet}
 * env: { online, guest, reduced, invuln, freeze, infinite, noheat }  (online: in a multiplayer room; reduced: reduced-motion;
 *   the last four are the mod menu and shop powers: cannot die, animatronics frozen, unlimited power, doors never overheat)
 */
'use strict';
(function (root) {
  const SECS_PER_HOUR = 88, NIGHT_LEN = SECS_PER_HOUR * 6, GRACE = 0.35, DRAIN = 0.11;
  const EAST = ['stage', 'dining', 'restroom', 'kitchen', 'eastHall', 'eastCor'];
  const CAMS = ['stage', 'dining', 'cove', 'westHall', 'westCor', 'supply', 'eastHall', 'eastCor', 'backstage', 'kitchen', 'restroom'];
  const GRAPH = {
    bubbles: { stage: ['dining'], dining: ['backstage', 'westHall'], backstage: ['dining', 'westHall'], westHall: ['supply', 'westCor', 'dining'], supply: ['westHall', 'westCor'], westCor: [] },
    taffy: { stage: ['dining'], dining: ['restroom', 'kitchen', 'eastHall'], restroom: ['dining', 'kitchen'], kitchen: ['dining', 'eastHall'], eastHall: ['eastCor', 'kitchen', 'dining'], eastCor: [] }
  };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // mulberry32, stored in state.rng. Rust uses the same integer operations (wrapping) so both give the same numbers.
  function rnd(s) {
    s.rng = (s.rng + 0x6D2B79F5) >>> 0;
    let t = s.rng;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  const roll = (s, level) => Math.floor(rnd(s) * 20) + 1 <= level;      // a 1-20 roll succeeds when <= the AI level
  const between = (s, a, b) => a + rnd(s) * (b - a);
  const pick = (s, list) => list[Math.floor(rnd(s) * list.length)];

  function Brain(s, env) {
    const ev = [];
    const fx = (...a) => ev.push(a);
    const ai = s.ai;
    const maxHeat = () => (s.night >= 8 ? 6 : 8);

    // an attacker is sent away instead of killing the guard (mask or admin powers)
    function eject(who) {
      if (who === 'sherbet') { const f = ai.sherbet; f.running = false; f.stage = 0; f.t = 0; f.cd = 3; }
      else if (who === 'golden') { s.goldenIn = false; s.goldenArmed = false; s.poster = false; }
      else { const a = ai[who]; a.office = false; a.officeT = 0; a.armed = false; a.t = 0; a.dw = 0; a.room = 'dining'; if (s.blackout && who === 'zayed') s.bT = 0; }
      fx('eject', who);
    }

    // the jumpscare. When the night is nearly over the guard wins instead.
    function kill(who) {
      if (!env.guest && (who === 'zayed' || who === 'bubbles' || who === 'taffy') && !s.blackout && !ai[who].office) return;
      if (s.dead || s.won) return;
      if (s.time >= NIGHT_LEN - GRACE) { s.time = NIGHT_LEN; fx('nightEnd'); return; }
      if (env.invuln) { eject(who); return; }
      s.dead = true; s.who = who;
      s.pvid = false; s.monitor = false; s.monA = 0;      // the tablet drops and the power video stops, as part of dying
      fx('kill', who);
    }

    function threat(except) {
      let n = 0;
      for (const k of ['bubbles', 'taffy', 'zayed']) {
        if (k !== except && (ai[k].office || ai[k].room === (k === 'bubbles' ? 'westCor' : 'eastCor'))) n++;
      }
      if (except !== 'sherbet' && ai.sherbet.running) n++;
      return n;
    }
    const blocked = (who) => !ai[who].human && (threat(who) >= (s.night >= 8 ? 2 : 1) || s.calmT > 0);

    function calm(dt) {
      const c = threat('');
      if (c < s.zPrev) s.calmT = s.night >= 8 ? 1.5 : 4;
      s.zPrev = c;
      s.calmT = Math.max(0, s.calmT - dt);
    }

    function doors(dt) {
      if (env.online || env.noheat || s.night >= 8) { s.heatL = s.heatR = s.coolL = s.coolR = 0; return; }
      for (const side of ['L', 'R']) {
        const d = 'door' + side, h = 'heat' + side, c = 'cool' + side;
        if (s[d]) {
          s[h] += dt;
          if (s[h] >= maxHeat()) { s[d] = false; s[h] = 0; s[c] = s.night >= 8 ? 6 : 5; fx('doorSlam'); }
        } else {
          s[h] = Math.max(0, s[h] - dt * 1.5);
          s[c] = Math.max(0, s[c] - dt);
        }
      }
    }

    function watch(dt) {
      const on = s.monitor && s.monA >= 1;
      for (const k of ['bubbles', 'taffy']) {
        const a = ai[k], room = k === 'bubbles' ? 'westCor' : 'eastCor', w = 'w' + k;
        if (on && s.cam === room && a.room === room && !a.office && !a.human) {
          s[w] = (s[w] || 0) + dt;
          if (s[w] >= 2) { s[w] = 0; a.room = k === 'bubbles' ? 'dining' : 'eastHall'; a.dw = 0; fx('steps', k === 'bubbles' ? -0.7 : 0.7, 3, 0.1); }
        } else s[w] = 0;
      }
    }

    // ---- Zayed the Camel
    function camelAdvance() {
      const a = ai.zayed;
      if (a.room === 'eastCor') {
        if (s.cam === 'eastCor') return;
        if (!s.doorR) { a.office = true; a.officeT = 0; a.armed = false; fx('laugh', 0.14, 0.6); fx('say', 'camel', 1, true); return; }
        if (s.cam === 'eastHall') return;
        a.room = 'eastHall'; a.armed = false; fx('steps', 0.6, 2, 0.12); fx('say', 'camel');
        return;
      }
      if (s.monitor) return;
      if (EAST[EAST.indexOf(a.room) + 1] === 'eastCor' && (ai.taffy.room === 'eastCor' || blocked('zayed'))) return;
      a.room = EAST[EAST.indexOf(a.room) + 1]; a.armed = false;
      fx('steps', 0.5, 3, 0.12); fx('laugh', 0.07, 0.5); fx('say', 'camel');
    }
    function camel(dt) {
      const a = ai.zayed;
      if (a.office) {
        if (!s.monitor) { a.officeT += dt; if (a.officeT >= 1) { a.officeT -= 1; if (rnd(s) < 0.25) kill('zayed'); } }
        return;
      }
      if (a.armed) {
        if (s.monitor && s.cam === a.room) { a.pending = a.pendMax; return; }
        if (a.pending > 0) { a.pending -= dt; if (a.pending > 0) return; }
        camelAdvance();
        return;
      }
      if (a.human) return;
      a.t += dt;
      if (a.t < 3.02) return;
      a.t = 0;
      if (s.monitor || !roll(s, a.ai)) return;
      a.armed = true;
      a.pendMax = a.pending = Math.max(0.05, (1000 - 100 * a.ai) / 60);
    }
    // the camel may not wait at the east corridor door for ever
    function camelDwell(dt) {
      const a = ai.zayed;
      if (a.office || a.human || a.room !== 'eastCor') { a.dw = 0; return; }
      a.dw = (a.dw || 0) + dt;
      if (a.dw < (s.night >= 8 ? 7 : 10)) return;
      a.dw = 0;
      if (s.cam === 'eastCor' || (s.doorR && s.cam === 'eastHall')) { a.room = 'eastHall'; a.armed = false; fx('steps', 0.6, 2, 0.12); return; }
      a.armed = true; a.pending = 0;
      camelAdvance();
    }

    // ---- the Cat (bubbles, west) and the Goat (taffy, east)
    function sideMove(name, to) {
      const t = ai[name], west = name === 'bubbles', pan = west ? -0.7 : 0.7, corridor = west ? 'westCor' : 'eastCor', who = west ? 'cat' : 'goat';
      if (t.room === corridor) {
        if (west ? s.doorL : s.doorR) { t.room = west ? 'dining' : 'eastHall'; fx('steps', pan, 3, 0.14); fx('say', who); }
        else { t.office = true; t.officeT = 0; fx('breathing'); fx('say', who, 1, true); }
        return;
      }
      const d = to || pick(s, GRAPH[name][t.room]);
      if (d === corridor && (name === 'taffy' && ai.zayed.room === 'eastCor' || blocked(name))) return;
      t.room = d;
      if (t.room === corridor) fx('knock', pan); else fx('steps', pan, 3, 0.13);
      fx('say', who, t.room === corridor ? 0 : undefined);
    }
    function side(name, dt) {
      const t = ai[name], west = name === 'bubbles';
      if (t.office) {
        if (s.monitor) { t.officeT += dt; if (t.officeT > 12) monitorDown(); }
        return;
      }
      if (!t.human && t.room === (west ? 'westCor' : 'eastCor')) {
        t.dw = (t.dw || 0) + dt;
        if (t.dw > ((west ? s.doorL : s.doorR) ? 6 : 10)) { t.dw = 0; t.t = 0; sideMove(name); return; }
      } else t.dw = 0;
      if (t.human) return;
      t.t += dt;
      if (t.t < t.iv) return;
      t.t = 0;
      if (!roll(s, t.ai)) return;
      sideMove(name);
    }

    // ---- Zayed the Falcon
    function falconRun() {
      const f = ai.sherbet;
      if (blocked('sherbet')) return;
      f.running = true; f.runT = 0; fx('run'); fx('say', 'falcon', 0, true);
    }
    function falconArrive() {
      const f = ai.sherbet;
      f.running = false;
      if (!s.doorL) { kill('sherbet'); return; }
      fx('bang'); fx('achieve', 'foxy');
      s.power = Math.max(0, s.power - (1 + 5 * f.hits));
      f.hits++;
      f.stage = rnd(s) < 0.5 ? 1 : 2;
      f.cd = between(s, 0.83, 6);
      s.shake = 0.35;
    }
    function falcon(dt) {
      const f = ai.sherbet;
      if (f.running) { f.runT += dt; if (f.runT >= 1.6) falconArrive(); return; }
      if (f.stage >= 4) {
        if (s.monitor && s.cam === 'westHall' && s.monA >= 1) { falconRun(); return; }
        f.wait -= dt;
        if (f.wait <= 0) falconRun();
        return;
      }
      if (f.cd > 0) { f.cd -= dt; return; }
      if (f.human) return;
      f.t += dt;
      if (f.t < 4.2) return;
      f.t = 0;
      if (s.monitor || !roll(s, f.ai)) return;
      f.stage++;
      fx('say', 'falcon');
      if (f.stage === 4) { f.wait = 12; fx('steps', -0.8, 2, 0.1); }
    }

    // ---- the golden camel behind the poster
    function golden(dt) {
      if (!s.goldenIn) return;
      if (s.monitor) { s.goldenIn = false; fx('achieve', 'golden'); return; }
      s.goldenT -= dt;
      if (s.goldenT <= 0) { s.goldenIn = false; kill('golden'); }
    }

    // putting the tablet down: whoever is in the office gets you, the Falcon starts over, the poster camel comes in
    function monitorDown() {
      s.monitor = false; fx('camDown');
      const inOffice = ['bubbles', 'taffy'].find((k) => ai[k].office);
      if (inOffice) { kill(inOffice); return; }
      const f = ai.sherbet;
      if (!f.running && f.stage < 4) { f.cd = between(s, 0.83, 6); f.t = 0; }
      if (s.goldenArmed) { s.goldenArmed = false; s.poster = false; s.goldenIn = true; s.goldenT = 2.5; fx('whisper'); }
    }
    // looking at a camera: the poster camel can only appear on the west corridor camera
    function cameraChanged() {
      if (s.cam !== 'westCor') { s.poster = false; return; }
      if (!s.goldenArmed && !s.goldenIn && rnd(s) * s.goldenOdds < 1) { s.poster = true; s.goldenArmed = true; }
    }

    function powerOut() {
      s.blackout = true; s.bT = 0;
      s.doorL = s.doorR = s.lightL = s.lightR = false;
      if (s.monitor) { s.monitor = false; fx('camDown'); }
      s.goldenIn = false;
      fx('blackout');
    }
    function blackoutStep(dt) {
      if (s.pvid) return;
      s.bT += dt;
      const on = s.bT > 5 && s.bT < 17;
      fx('musicBox', on);
      s.zFlash = on && Math.sin(s.bT * 9) > 0.2;
      if (s.bT > 20) kill('zayed');
    }
    function usage() { return clamp(1 + s.doorL + s.doorR + s.lightL + s.lightR + s.monitor, 1, 5); }

    // one tick of the night
    function step(dt) {
      if (!s.pre) s.time += dt;
      const hour = Math.floor(s.time / SECS_PER_HOUR);
      if (hour !== s.hour) {
        s.hour = hour; fx('tick');
        if (hour >= 6) { fx('nightEnd'); return; }
        if (s.night <= 5) {
          if (hour === 2) ai.bubbles.ai++;
          if (hour === 3 || hour === 4) { ai.bubbles.ai++; ai.taffy.ai++; ai.sherbet.ai++; }
        }
      }
      if (!s.pre) doors(dt);
      if (s.blackout) { blackoutStep(dt); return; }
      if (s.pre) return;
      s.power -= DRAIN * usage() * dt * (s.night >= 8 ? 1.3 : 1);
      if (env.infinite) s.power = 100;
      if (s.power <= 0) { s.power = 0; powerOut(); return; }
      if (env.freeze) return;
      camelDwell(dt); watch(dt); calm(dt); camel(dt);
      side('bubbles', dt); side('taffy', dt);
      falcon(dt); golden(dt);
      if (['zayed', 'taffy'].some((k) => ai[k].room === 'kitchen')) {
        s.clatterT -= dt;
        if (s.clatterT <= 0) { s.clatterT = between(s, 3, 7); fx('clatter', s.monitor && s.cam === 'kitchen' ? 0.25 : 0.06); }
      }
      if (s.halluc > 0) s.halluc -= dt;
      else if (!env.reduced && !s.monitor && rnd(s) < dt / 900) { s.halluc = 0.2; fx('whisper'); }
    }

    return { ev, step, monitorDown, cameraChanged, kill, eject, usage };
  }

  const API = {
    NIGHT_LEN, CAMS,
    step(state, dt, env) { const b = Brain(state, env || {}); b.step(dt); return b.ev; },
    monitorDown(state, env) { const b = Brain(state, env || {}); b.monitorDown(); return b.ev; },
    cameraChanged(state, env) { const b = Brain(state, env || {}); b.cameraChanged(); return b.ev; },
    kill(state, who, env) { const b = Brain(state, env || {}); b.kill(who); return b.ev; },
    eject(state, who, env) { const b = Brain(state, env || {}); b.eject(who); return b.ev; },
    usage(state) { return clamp(1 + state.doorL + state.doorR + state.lightL + state.lightR + state.monitor, 1, 5); },
    rnd
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  root.FNAZAI = API;
})(typeof window !== 'undefined' ? window : globalThis);
