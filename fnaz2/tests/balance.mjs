// Balance check: plays every night many times with scripted players and reports how often each one survives.
// Usage: node tests/balance.mjs            survival table
//        node tests/balance.mjs gaps [n]   threat counts per hour, gaps between effects and kill chains for night n (default 1 and 2)
import { newNight, step, WHO } from '../src/ai.js';
import { fileURLToPath } from 'node:url';
export const DT = 0.05;
const inOffice = (S) => WHO.filter((w) => S.pos[w] === 'office');
// a player model: reacts to what it can see, after a delay (humans are not instant).
// forget: chance that a brand-new threat is noticed 0.5 to 2.5 s late (the "sometimes forgetful" average player).
export function player(kind, delay, forget = 0, seed = 1) {
  const q = []; let fr = (seed * 2654435761) >>> 0; const rnd = () => { fr = (Math.imul(fr, 1664525) + 1013904223) >>> 0; return fr / 4294967296; };
  let wasThreat = false, extraUntil = -1, extra = 0, winding = false;
  return (S, t) => {
    const threat = inOffice(S).length > 0 || S.pos.wSherbet === 'hall';
    if (threat && !wasThreat && rnd() < forget) { extra = 0.5 + 2 * rnd(); extraUntil = t + 5; } wasThreat = threat; // a lapse: the new threat is noticed 0.5 to 2.5 s late
    const d = delay + (t < extraUntil ? extra : 0);
    const seen = { office: inOffice(S).length > 0, runner: S.pos.wSherbet === 'hall', box: S.box, bidoof: S.pos.bidoof === 'office' };
    q.push([t, seen]); while (q.length > 1 && q[1][0] <= t - d) q.shift(); const v = q[0][1];
    const sealP = (t % 16 < DT * 1.2) ? 'ventL' : (t % 16 >= 8 && t % 16 < 8 + DT * 1.2) ? 'ventR' : undefined; // a player who closes the vents now and then (Q and E)
    if (kind === 'idle') return {};
    if (kind === 'maskonly') return { mask: true }; // never looks at anything: hold the mask, never wind
    if (kind === 'camper') return { cam: 'prize', wind: true }; // sits on the music box camera
    if (kind === 'lazy') { return { seal: sealP, mask: v.office && (t % 4 < 3), flash: v.runner, aim: v.runner ? 'hall' : null, cam: v.box < 35 && !v.office ? 'prize' : null, wind: true }; }
    // careful: mask when something is in the office, light on the runner, wind the box when it drops
    if (v.box < 55) winding = true; else if (v.box > 95) winding = false; // a human winds the box until it is nearly full
    const wantCam = !v.office && !v.runner && winding; return { seal: sealP, mask: v.office, flash: v.runner, aim: v.runner ? 'hall' : null, cam: wantCam ? 'prize' : null, wind: wantCam };
  };
}
export const PLAYERS = [['idle', 0, 0], ['maskonly', 0, 0], ['camper', 0, 0], ['lazy', 1.2, 0.2], ['average', 0.8, 0.1], ['careful', 0.8, 0], ['careful', 0, 0]];
export function play(night, seed, kind, delay, forget = 0, log) {
  const S = newNight(night, seed * 7 + night); const p = player(kind === 'average' ? 'careful' : kind, delay, forget, seed); let t = 0, steps = 0;
  while (!S.dead && !S.won && steps < 20000) { const fx = step(S, DT, p(S, t)); if (log) log(S, fx, t); t += DT; steps++; }
  return { won: S.won, t: S.t, by: S.dead };
}
export const labelOf = (kind, delay, forget) => kind === 'average' ? 'average (0.8s, forgets 10%)' : kind + (kind === 'careful' ? (delay ? ' (0.8s delay)' : ' (instant)') : kind === 'lazy' ? ' (1.2s, forgets 20%)' : '');
export function survival(night, kind, delay, forget, seeds) { let w = 0; for (let s = 1; s <= seeds; s++) if (play(night, s, kind, delay, forget).won) w++; return w / seeds; }

export function measure(night, seeds) {
  // reactable effects: something enters, the Falcon runs, the box goes out.
  const hours = [0, 0, 0, 0, 0, 0], all = []; let chain = 0, overlap = 0, scares = 0, slow60 = 0, runs = 0, boxouts = 0, enters = 0, moves = 0, longest = 0;
  for (let s = 1; s <= seeds; s++) {
    let last = 0, lowBox = false, runMax = 0; const evs = [];
    play(night, s, 'careful', 0.8, 0.1, (S, fx) => {
      // a cue is anything the player can react to: an approach to a door, an entry, a run, the box running low or out
      const cues = [];
      for (const e of fx) {
        if (e.type === 'move' && (e.to === 'ventL' || e.to === 'ventR' || e.to === 'hall')) { moves++; cues.push('move'); }
        if (e.type === 'enter') { enters++; if (e.who !== 'bidoof') scares++; cues.push('enter'); evs.push(S.t); } if (e.type === 'run') { runs++; cues.push('run'); evs.push(S.t); } if (e.type === 'boxout') { boxouts++; cues.push('boxout'); evs.push(S.t); }
      }
      if (S.box < 55 && !lowBox) { lowBox = true; cues.push('box'); } if (S.box > 80) lowBox = false;
      if (cues.length) { hours[Math.min(5, Math.floor(S.t / 80))]++; all.push(S.t - last); longest = Math.max(longest, S.t - last); runMax = Math.max(runMax, S.t - last); last = S.t; }
      if (inOffice(S).filter((w) => w !== 'bidoof').length + (S.pos.wSherbet === 'hall' ? 1 : 0) > 1) overlap += DT;
    });
    if (runMax > 60) slow60++;
    for (let i = 1; i < evs.length; i++) if (evs[i] - evs[i - 1] < 3) chain++;
  }
  return { hours, all, chain, overlap, scares, slow60, runs, boxouts, enters, moves, longest, seeds };
}
function gaps(night, seeds) {
  const { hours, all, chain, overlap, scares, slow60, runs, boxouts, enters, moves, longest } = measure(night, seeds);
  all.sort((a, b) => a - b); const pct = (q) => all.length ? all[Math.min(all.length - 1, Math.floor(all.length * q))].toFixed(1) : '-';
  const per = (n) => (n / seeds).toFixed(1);
  console.log('night ' + night + ': cues per run by hour', hours.map((h) => per(h)).join(' / '), '| enters', per(enters), '(non-bidoof scares ' + per(scares) + ')', 'runs', per(runs), 'boxouts', per(boxouts), 'vent/hall approaches', per(moves));
  console.log('  gap seconds: median', pct(0.5), 'p90', pct(0.9), 'longest', longest.toFixed(0), '| runs with a gap over 60s', Math.round(slow60 / seeds * 100) + '%', '| effect pairs <3s apart per run', per(chain), '| seconds with 2+ threats at once per run', per(overlap));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv[2] === 'gaps') { const n = +process.argv[3]; for (const k of n ? [n] : [1, 2]) gaps(k, 40); }
  else {
    const SEEDS = 60, rows = [];
    for (const [kind, delay, forget] of PLAYERS) {
      const per = []; for (let n = 1; n <= 6; n++) { let w = 0, tt = 0; const killers = {}; for (let s = 1; s <= SEEDS; s++) { const r = play(n, s, kind, delay, forget); if (r.won) w++; tt += r.t; if (r.by) killers[r.by] = (killers[r.by] || 0) + 1; } per.push({ n, win: Math.round(w / SEEDS * 100), avg: Math.round(tt / SEEDS), top: Object.entries(killers).sort((a, b) => b[1] - a[1])[0] }); }
      rows.push({ label: labelOf(kind, delay, forget), per });
    }
    console.log('survival % per night (60 seeded runs each)\n' + 'player'.padEnd(28) + [1, 2, 3, 4, 5, 6].map((n) => ('N' + n).padStart(6)).join(''));
    for (const r of rows) console.log(r.label.padEnd(28) + r.per.map((p) => String(p.win).padStart(6)).join(''));
    console.log('\nmost common killer, average player:'); const h = rows.find((r) => r.label.startsWith('average')); for (const p of h.per) console.log(' night', p.n, p.top ? p.top[0] + ' (' + p.top[1] + ')' : 'none', '| average time survived', p.avg + 's of 480');
  }
}
