import { newNight, step, WHO, HOUR_SEC } from '../src/ai.js';
import assert from 'node:assert';
import { survival, measure } from './balance.mjs';
// 1. a full night with the player doing nothing: something must eventually kill.
let dead = 0;
for (let seed = 1; seed <= 20; seed++) { const S = newNight(5, seed); for (let i = 0; i < 40000 && !S.dead && !S.won; i++) step(S, 0.05, {}); if (S.dead) dead++; }
assert(dead >= 18, 'idle night 5 should nearly always kill (' + dead + '/20)');
// 2. a competent player (mask when something is in the office, wind the box, flashlight on hall) survives night 1-2
let won = 0;
for (let seed = 1; seed <= 20; seed++) {
  const S = newNight(2, seed);
  for (let i = 0; i < 40000 && !S.dead && !S.won; i++) {
    const inOffice = WHO.some((w) => S.pos[w] === 'office') || S.gold.state === 'here', runner = S.pos.wSherbet === 'hall';
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
// 4. Nights 1 and 2: survival targets (seeded, so the numbers are stable). Players are defined in balance.mjs.
const N = 150, pct = (n, k, d, f) => Math.round(survival(n, k, d, f, N) * 100);
const r = { n1avg: pct(1, 'careful', 0.8, 0.1), n1lazy: pct(1, 'lazy', 1.2, 0.2), n2avg: pct(2, 'careful', 0.8, 0.1), n2lazy: pct(2, 'lazy', 1.2, 0.2), n2fast: pct(2, 'careful', 0, 0), n1idle: pct(1, 'idle', 0, 0) };
assert(r.n1avg >= 98, 'night 1 is a tutorial: the average player survives >= 98% (' + r.n1avg + ')');
assert(r.n1lazy >= 90, 'night 1: even the lazy player mostly survives (' + r.n1lazy + ')');
assert(r.n2avg >= 84 && r.n2avg <= 96, 'night 2: the average player survives about 90% (' + r.n2avg + ')');
assert(r.n2lazy >= 45 && r.n2lazy <= 70, 'night 2: the lazy player survives about 60% (' + r.n2lazy + ')');
assert(r.n2fast >= 98, 'night 2: an instant player always has counterplay (' + r.n2fast + ')');
assert(r.n1idle === 0, 'night 1: doing nothing still loses (' + r.n1idle + ')');
// 5. Nights 1 and 2: roster, pacing, ramp, fairness
for (const w of ['wSherbet', 'toyTaffy', 'gelly', 'wZayed', 'wBubbles', 'wTaffy', 'toySherbet']) assert.strictEqual(newNight(1, 1).lv[w], 0, w + ' is not in night 1');
assert(newNight(2, 1).lv.wSherbet > 0 && newNight(2, 1).lv.toyTaffy > 0 && newNight(2, 1).lv.toyBubbles > 0, 'night 2 brings the Falcon and both vents');
assert.strictEqual(newNight(3, 1).lv.gelly, 0, 'gelly waits for night 4'); assert.strictEqual(newNight(2, 1).lv.gelly, 0);
const m1 = measure(1, 40), m2 = measure(2, 40);
for (const [n, m] of [[1, m1], [2, m2]]) {
  assert(m.slow60 === 0, 'night ' + n + ': no dead stretch over 60 s (' + m.longest.toFixed(0) + ' s)');
  const med = m.all.slice().sort((a, b) => a - b)[Math.floor(m.all.length / 2)]; assert(med <= 30, 'night ' + n + ': something to react to every <= 30 s, median ' + med.toFixed(1));
  assert(m.hours[4] + m.hours[5] > 1.5 * 2 * m.hours[0], 'night ' + n + ': hours 5-6 are busier than hour 1');
  assert(m.overlap === 0, 'night ' + n + ': two real threats are never active together');
}
assert(m1.scares / 40 >= 2 && m1.scares / 40 <= 7, 'night 1 has a few clear scares (' + (m1.scares / 40).toFixed(1) + ')');
// no two kill clocks run together on nights 1-2, even for a player who never reacts
for (const night of [1, 2]) for (let seed = 1; seed <= 30; seed++) { const S = newNight(night, seed, { inv: true }); for (let i = 0; i < 9600; i++) { step(S, 0.05, {}); const real = WHO.filter((w) => S.pos[w] === 'office' && w !== 'bidoof').length + (S.pos.wSherbet === 'hall' ? 1 : 0); assert(real <= 1, 'night ' + night + ' seed ' + seed + ' t=' + S.t.toFixed(1) + ': ' + real + ' kill clocks'); } }
console.log('night 1/2 survival', JSON.stringify(r));
console.log('ai ok: idle kills', dead + '/20, competent wins', won + '/20');

// 5. a sealed vent keeps a vent walker out; an unsealed one lets it in
{
  const run = (seal) => { let entered = 0; for (let seed = 1; seed <= 20; seed++) { const S = newNight(4, seed); for (let i = 0; i < 4000 && !S.dead && !S.won; i++) { const fx = step(S, 0.05, { seal: seal && (i % 120 === 0) ? (i % 240 ? 'ventR' : 'ventL') : undefined }); if (seal) { S.seal.ventL = 99; S.seal.ventR = 99; } entered += fx.filter((f) => f.type === 'enter' && String(f.from).startsWith('vent')).length; if (S.pos.wSherbet === 'office') break; } } return entered; };
  const open = run(false), sealed = run(true);
  assert(open > 0 && sealed === 0, 'sealed vents must block vent entries (open ' + open + ', sealed ' + sealed + ')');
  const S = newNight(1, 1); step(S, 0.05, { seal: 'ventL' }); assert(S.seal.ventL > 4, 'pressing seal closes the vent');
  for (let i = 0; i < 160; i++) step(S, 0.05, {}); assert(S.seal.ventL === 0 && S.sealCd.ventL > 0, 'the seal runs out, then recharges');
  console.log('ai ok: vent seal blocks entries (open ' + open + ', sealed ' + sealed + ')');
}

// 6. Golden Abdulla: ignoring him ends the night; the mask makes him vanish; a flashlight that was on and is turned off does too
{
  const mk = (seed) => { const S = newNight(5, seed); S.hour = 2; S.t = 170; S.gold.wait = 0; return S; };
  let S = mk(3), shown = false, killed = false; for (let i = 0; i < 400 && !S.dead; i++) { const fx = step(S, 0.05, {}); shown ||= fx.some((f) => f.type === 'golden'); killed ||= fx.some((f) => f.type === 'kill' && f.who === 'golden'); if (killed) break; }
  assert(shown, 'Golden Abdulla shows up when due'); assert(killed || S.dead, 'ignored, Golden Abdulla ends the night');
  S = mk(3); let gone = false; for (let i = 0; i < 400 && !S.dead; i++) { const here = S.gold.state === 'here'; const fx = step(S, 0.05, { mask: here }); gone ||= fx.some((f) => f.type === 'goldengone'); if (gone) break; } assert(gone && S.dead !== 'golden', 'the mask makes Golden Abdulla vanish');
  console.log('ai ok: Golden Abdulla appears, kills when ignored, vanishes for the mask');
}
