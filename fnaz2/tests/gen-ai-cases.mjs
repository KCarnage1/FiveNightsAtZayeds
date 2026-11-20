// Writes recorded cases for the Rust port: real nights played by the JS brain, one (night, dt, input) per step.
import { newNight, step, WHO } from '../src/ai.js';
import fs from 'node:fs';
const out = []; const clone = (x) => JSON.parse(JSON.stringify(x));
const push = (S, dt, input) => out.push(JSON.stringify({ fn: 'stepJson', args: [clone(S), dt, input] }));
const policies = {
  idle: () => ({}),
  careful: (S, i) => { const inO = WHO.some((w) => S.pos[w] === 'office'), run = S.pos.wSherbet === 'hall'; const cam = !inO && !run && S.box < 60 ? 'prize' : null; return { mask: inO, flash: run, aim: run ? 'hall' : null, cam, wind: cam === 'prize' }; },
  twitchy: (S, i) => ({ mask: i % 97 < 9, flash: i % 40 < 15, aim: ['hall', 'ventL', 'ventR', null, ''][i % 5], cam: i % 200 < 70 ? ['prize', 'hall', 'stage'][(i / 70 | 0) % 3] : null, wind: i % 50 < 25 }),
  coop: (S, i) => ({ mask: i % 60 < 30, flash: i % 30 < 20, aim: ['hall', 'ventL', 'ventR'][i % 3], cam: i % 100 < 50 ? 'prize' : null, wind: true, coop: true }),
  lights: (S, i) => ({ flash: true, aim: ['ventL', 'hall', 'ventR'][(i / 25 | 0) % 3], freezeLight: i % 300 > 250 }),
};
let id = 0;
for (const night of [1, 2, 3, 4, 5, 6, 7]) for (const pname of Object.keys(policies)) for (let seed = 1; seed <= 3; seed++) {
  const variants = [{}, { mods: { revive: 2, drain: 0.7, charge: 1.8, box: 0.6, maskSpeed: 10.5 } }, { inv: true }, { levels: Object.fromEntries(WHO.map((w, k) => [w, (k * 3 + seed * 5) % 21])) }];
  for (const v of variants) {
    id++; const S = newNight(night, seed * 100 + id, v); const dt = [0.016, 0.05, 0.1][id % 3]; const pol = policies[pname];
    if (id % 7 === 0) S.cheat = { freeze: false, battery: true, box: true }; if (id % 11 === 0) S.cheat = { freeze: true, battery: false, box: false }; if (id % 13 === 0) S.cheated = true;
    for (let i = 0; i < 4000 && !S.dead && !S.won; i++) {
      const input = pol(S, i);
      if (i % 240 === 7) push(S, dt, input); // sample the night as it plays
      step(S, dt, input);
    }
  }
}
// the very end of a night, and a finished one
for (let seed = 1; seed <= 6; seed++) { const S = newNight(3, seed); S.t = 479.9; push(S, 0.05, {}); S.t = 480; S.hour = 6; S.won = true; push(S, 0.05, {}); const D = newNight(2, seed); D.dead = 'toyZayed'; push(D, 0.05, {}); }
fs.writeFileSync(process.argv[2] || 'cases.jsonl', out.join('\n') + '\n'); console.log('cases', out.length);
