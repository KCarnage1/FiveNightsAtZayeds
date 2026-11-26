// Balance check: plays every night many times with scripted players and reports how often each one survives.
import { newNight, step, WHO } from '../src/ai.js';
const DT = 0.05, SEEDS = 60;
const inOffice = (S) => WHO.filter((w) => S.pos[w] === 'office');
// a player model: reacts to what it can see, after a delay (humans are not instant)
function player(kind, delay) {
  const q = []; let mask = false, light = false, cam = null, aim = null, wind = false;
  return (S, t) => {
    const seen = { office: inOffice(S).length > 0, runner: S.pos.wSherbet === 'hall', box: S.box, bidoof: S.pos.bidoof === 'office' };
    q.push([t, seen]); while (q.length > 1 && q[1][0] <= t - delay) q.shift(); const v = q[0][1];
    if (kind === 'idle') return {};
    if (kind === 'maskonly') return { mask: true }; // never looks at anything: hold the mask, never wind
    if (kind === 'camper') return { cam: 'prize', wind: true }; // sits on the music box camera
    if (kind === 'lazy') { return { mask: v.office && (t % 4 < 3), flash: v.runner, aim: v.runner ? 'hall' : null, cam: v.box < 35 && !v.office ? 'prize' : null, wind: true }; }
    // careful: mask when something is in the office, light on the runner, wind the box when it drops
    const wantCam = !v.office && !v.runner && v.box < 55; return { mask: v.office, flash: v.runner, aim: v.runner ? 'hall' : null, cam: wantCam ? 'prize' : null, wind: wantCam };
  };
}
function play(night, seed, kind, delay) { const S = newNight(night, seed * 7 + night); const p = player(kind, delay); let t = 0, steps = 0; while (!S.dead && !S.won && steps < 20000) { step(S, DT, p(S, t)); t += DT; steps++; } return { won: S.won, t: S.t, by: S.dead }; }
const rows = [];
for (const [kind, delay] of [['idle', 0], ['maskonly', 0], ['camper', 0], ['lazy', 1.2], ['careful', 0.8], ['careful', 0]]) {
  const label = kind + (kind === 'careful' ? (delay ? ' (0.8s delay)' : ' (instant)') : kind === 'lazy' ? ' (1.2s delay)' : '');
  const per = []; for (let n = 1; n <= 6; n++) { let w = 0, tt = 0; const killers = {}; for (let s = 1; s <= SEEDS; s++) { const r = play(n, s, kind, delay); if (r.won) w++; tt += r.t; if (r.by) killers[r.by] = (killers[r.by] || 0) + 1; } per.push({ n, win: Math.round(w / SEEDS * 100), avg: Math.round(tt / SEEDS), top: Object.entries(killers).sort((a, b) => b[1] - a[1])[0] }); }
  rows.push({ label, per });
}
console.log('survival % per night (60 seeded runs each)\n' + 'player'.padEnd(26) + [1, 2, 3, 4, 5, 6].map((n) => ('N' + n).padStart(6)).join(''));
for (const r of rows) console.log(r.label.padEnd(26) + r.per.map((p) => String(p.win).padStart(6)).join(''));
console.log('\nmost common killer, human-like careful player (0.8s delay):'); const h = rows.find((r) => r.label.includes('0.8s')); for (const p of h.per) console.log(' night', p.n, p.top ? p.top[0] + ' (' + p.top[1] + ')' : 'none (almost always survives)', '| average time survived', p.avg + 's of 480');
