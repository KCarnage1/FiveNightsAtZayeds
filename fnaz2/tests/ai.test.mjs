import { newNight, step, WHO, HOUR_SEC } from '../src/ai.js';
import assert from 'node:assert';
// 1. a full night with the player doing nothing: something must eventually kill.
let dead = 0;
for (let seed = 1; seed <= 20; seed++) { const S = newNight(5, seed); for (let i = 0; i < 40000 && !S.dead && !S.won; i++) step(S, 0.05, {}); if (S.dead) dead++; }
assert(dead >= 18, 'idle night 5 should nearly always kill (' + dead + '/20)');
// 2. a competent player (mask when something is in the office, wind the box, flashlight on hall) survives night 1-2
let won = 0;
for (let seed = 1; seed <= 20; seed++) {
  const S = newNight(2, seed);
  for (let i = 0; i < 40000 && !S.dead && !S.won; i++) {
    const inOffice = WHO.some((w) => S.pos[w] === 'office'), runner = S.pos.wSherbet === 'hall';
    const cam = !inOffice && !runner && S.box < 60 ? 'prize' : null;
    step(S, 0.05, { mask: inOffice, flash: runner, aim: runner ? 'hall' : null, cam, wind: cam === 'prize' });
  }
  if (S.won) won++;
}
assert(won >= 17, 'competent night 2 should be survivable (' + won + '/20)');
// 3. determinism
const a = newNight(3, 7), b = newNight(3, 7); const la = [], lb = [];
for (let i = 0; i < 4000; i++) { la.push(JSON.stringify(step(a, .05, {}))); lb.push(JSON.stringify(step(b, .05, {}))); }
assert.deepStrictEqual(la, lb);
console.log('ai ok: idle kills', dead + '/20, competent wins', won + '/20');
