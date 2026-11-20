/* FNAZ 2 brain: pure, seeded, no DOM. step(S, dt, input) advances the night and returns a list of effects.
 * Lore: one soul, four bodies; the Toy bodies are the new ones, the Withered bodies are the old ones from the first game. */

export const NODES = ['stage', 'main', 'game', 'prize', 'partyL', 'partyR', 'parts', 'kids', 'ceiling', 'hall', 'ventL', 'ventR', 'office'];
export const GRAPH = {
  stage: ['main'], main: ['hall', 'partyL', 'partyR', 'game', 'prize', 'stage'],
  game: ['main', 'partyR'], prize: ['main', 'partyL'],
  partyL: ['main', 'ventL', 'prize'], partyR: ['main', 'ventR', 'game'],
  parts: ['main'], kids: ['main'], ceiling: ['ventL', 'ventR', 'main'],
  hall: ['main'], ventL: ['partyL'], ventR: ['partyR']
};
/* who: {home, entry, speed: seconds between decisions (smaller = faster), kind} */
export const CAST = {
  toyZayed:   { home: 'stage', entry: ['hall'],  every: 5.0, kind: 'walker', body: 'zayed', toy: true },
  toyBubbles: { home: 'stage', entry: ['ventL'], every: 4.6, kind: 'walker', body: 'bubbles', toy: true },
  toyTaffy:   { home: 'stage', entry: ['ventR'], every: 4.8, kind: 'walker', body: 'taffy', toy: true },
  toySherbet: { home: 'stage', entry: ['hall'],  every: 6.0, kind: 'walker', body: 'sherbet', toy: true },
  wZayed:     { home: 'parts', entry: ['hall'],  every: 6.5, kind: 'walker', body: 'zayed', toy: false },
  wBubbles:   { home: 'parts', entry: ['ventL'], every: 6.2, kind: 'walker', body: 'bubbles', toy: false },
  wTaffy:     { home: 'parts', entry: ['ventR'], every: 6.4, kind: 'walker', body: 'taffy', toy: false },
  wSherbet:   { home: 'parts', entry: ['hall'],  every: 5.5, kind: 'runner', body: 'sherbet', toy: false },
  gelly:      { home: 'kids',  entry: ['ventL', 'ventR'], every: 4.9, kind: 'crawler' },
  bidoof:     { home: 'game',  entry: ['hall', 'ventR'], every: 5.4, kind: 'nuisance' },
  ibrahim:    { home: 'prize', entry: [], every: 1, kind: 'puppet' }
};
export const WHO = Object.keys(CAST);
/* AI level (0-20) per night, 1..6, 7 = custom. */
export const LEVELS = {
  toyZayed:   [0, 2, 4, 5, 7, 9],
  toyBubbles: [2, 3, 5, 6, 8, 10],
  toyTaffy:   [0, 0, 3, 5, 7, 9],
  toySherbet: [0, 0, 0, 4, 6, 8],
  wZayed:     [0, 0, 2, 4, 6, 8],
  wBubbles:   [0, 0, 0, 3, 5, 7],
  wTaffy:     [0, 0, 0, 2, 5, 7],
  wSherbet:   [0, 1, 2, 3, 5, 7],
  gelly:      [0, 0, 0, 3, 6, 9],
  bidoof:     [0, 2, 3, 4, 5, 6],
  ibrahim:    [1, 2, 4, 6, 8, 10]
};
export const HOUR_SEC = 80;

export function rngFrom(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

export function newNight(night, seed = 1, opts = {}) {
  const lv = {}; WHO.forEach((w) => { lv[w] = opts.levels ? opts.levels[w] || 0 : LEVELS[w][Math.min(night, 6) - 1]; });
  const S = { night, rng: rngFrom(seed), t: 0, hour: 0, lv, pos: {}, acc: {}, since: {}, hold: {}, box: 100, boxOut: 0, battery: 100, flashDead: 0, flashOn: false, aimedAt: null, aimT: 0,
    mask: 0, dead: null, won: false, runT: {}, offT: {}, inv: !!opts.inv, wind: false };
  WHO.forEach((w) => { S.pos[w] = CAST[w].home; S.acc[w] = S.rng() * CAST[w].every; S.since[w] = 0; });
  return S;
}

const nexts = (w, at) => {
  let ns = GRAPH[at] ? GRAPH[at].slice() : [];
  if (w === 'gelly') { if (at === 'kids') ns = ['main']; if (at === 'main') ns = ['ceiling', 'kids']; if (at === 'ceiling') ns = ['ventL', 'ventR', 'ceiling']; }
  else { ns = ns.filter((n) => n !== 'ceiling' && n !== 'kids'); }
  return ns;
};
const dist = (w, from, to) => { // BFS distance within the cast's own graph
  if (from === to) return 0; const seen = { [from]: 0 }, q = [from];
  while (q.length) { const c = q.shift(); for (const n of nexts(w, c)) if (!(n in seen)) { seen[n] = seen[c] + 1; if (n === to) return seen[n]; q.push(n); } }
  return 99;
};
export function toward(w, at, S) {
  const ent = CAST[w].entry; if (!ent.length) return null;
  const ns = nexts(w, at); if (!ns.length) return null;
  let target = ent[0]; if (ent.length > 1) target = ent[(w.length + Math.floor(S.t / 30)) % ent.length];
  const best = Math.min(...ns.map((n) => dist(w, n, target)));
  const good = ns.filter((n) => dist(w, n, target) === best);
  return S.rng() < 0.62 ? good[Math.floor(S.rng() * good.length)] : ns[Math.floor(S.rng() * ns.length)];
}

/* input: {mask:boolean, flash:boolean, aim:'hall'|'ventL'|'ventR'|null, cam:node|null, wind:boolean} */
export function step(S, dt, input) {
  const fx = []; if (S.dead || S.won) return fx;
  S.t += dt; S.hour = Math.floor(S.t / HOUR_SEC);
  if (S.hour >= 6) { S.won = true; fx.push({ type: 'win' }); return fx; }
  const hb = S.hour >= 4 ? 2 : S.hour >= 2 ? 1 : 0; // later hours are harder
  // mask: eases up and down, can't be worn with the cameras up
  S.mask += ((input.mask && !input.cam ? 1 : 0) - S.mask) * Math.min(1, dt * 7);
  const masked = S.mask > 0.75;
  // flashlight and battery
  if (S.flashDead > 0) S.flashDead -= dt;
  S.flashOn = !!input.flash && S.battery > 0 && S.flashDead <= 0 && !masked;
  if (S.flashOn) S.battery = Math.max(0, S.battery - dt * (100 / 55)); else S.battery = Math.min(100, S.battery + dt * 7);
  S.aimedAt = S.flashOn ? input.aim || null : null;
  S.wind = !!input.wind && input.cam === 'prize';
  for (const w of WHO) {
    const def = CAST[w], lvl = Math.min(20, S.lv[w] + (S.lv[w] > 0 ? hb : 0)); if (lvl <= 0 && w !== 'ibrahim') continue;
    const at = S.pos[w];
    if (def.kind === 'puppet') { puppet(S, dt, lvl, fx); continue; }
    if (def.kind === 'runner') { runner(S, w, dt, lvl, input, fx); continue; }
    if (at === 'office') { // inside the office: they strike unless you are masked
      S.offT[w] = (S.offT[w] || 0) + dt;
      if (def.kind === 'nuisance') { S.flashDead = Math.max(S.flashDead, 1.5); if (masked && S.offT[w] > 1.2) leave(S, w, fx, 'main'); else if (S.offT[w] > 14) leave(S, w, fx, 'hall'); continue; }
      if (masked) { if (S.offT[w] > 1.0 + S.rng() * 1.2) leave(S, w, fx, def.kind === 'crawler' ? 'ceiling' : 'main'); }
      else if (S.offT[w] > 3.4 - Math.min(1.2, lvl * 0.06)) { if (!S.inv) { S.dead = w; fx.push({ type: 'kill', who: w }); return fx; } }
      continue;
    }
    S.acc[w] += dt;
    if (S.acc[w] < def.every) continue;
    S.acc[w] = 0;
    if (S.rng() * 20 >= lvl) continue;
    if (def.entry.includes(at)) { // at the door of the office: try to come in
      if (S.aimedAt === at && S.rng() < 0.7) { leave(S, w, fx, nexts(w, at)[0], true); continue; } // the light pushes them back
      S.pos[w] = 'office'; S.offT[w] = 0; fx.push({ type: 'enter', who: w, from: at }); continue;
    }
    const n = toward(w, at, S); if (n) { S.pos[w] = n; fx.push({ type: 'move', who: w, from: at, to: n }); }
  }
  return fx;
}

function leave(S, w, fx, to, pushed) { const from = S.pos[w]; S.pos[w] = to; S.offT[w] = 0; S.acc[w] = -3; fx.push({ type: pushed ? 'pushed' : 'leave', who: w, from, to }); }

function runner(S, w, dt, lvl, input, fx) { // wSherbet: runs the hallway; the flashlight is the answer, the mask is not
  const at = S.pos[w];
  if (at === 'hall') {
    S.runT[w] = (S.runT[w] || 0) + dt;
    if (S.aimedAt === 'hall') S.hold[w] = (S.hold[w] || 0) + dt; else S.hold[w] = Math.max(0, (S.hold[w] || 0) - dt * 0.5);
    if (S.hold[w] > 1.1) { S.pos[w] = 'parts'; S.runT[w] = 0; S.hold[w] = 0; S.acc[w] = -6; fx.push({ type: 'pushed', who: w, from: 'hall', to: 'parts' }); return; }
    if (S.runT[w] > 4.2) { if (!S.inv) { S.dead = w; fx.push({ type: 'kill', who: w }); } else { S.pos[w] = 'parts'; S.runT[w] = 0; } }
    return;
  }
  S.acc[w] += dt; if (S.acc[w] < CAST[w].every) return; S.acc[w] = 0;
  if (S.rng() * 20 < lvl) { S.pos[w] = 'hall'; S.runT[w] = 0; fx.push({ type: 'run', who: w }); }
}

function puppet(S, dt, lvl, fx) { // Ibrahim: the music box has to be wound, or he comes
  if (S.boxOut > 0) { // he is out of the box
    S.boxOut += dt; S.pos.ibrahim = S.boxOut > 6 ? 'hall' : 'prize';
    if (S.box > 25 && S.boxOut < 7) { S.boxOut = 0; S.pos.ibrahim = 'prize'; fx.push({ type: 'boxsafe' }); return; }
    if (S.boxOut > 11) { if (!S.inv) { S.dead = 'ibrahim'; fx.push({ type: 'kill', who: 'ibrahim' }); } else S.boxOut = 0; }
    return;
  }
  if (S.wind) S.box = Math.min(100, S.box + dt * 26);
  else S.box = Math.max(0, S.box - dt * (0.55 + lvl * 0.05));
  if (S.box <= 0) { S.boxOut = 0.001; fx.push({ type: 'boxout' }); }
}
