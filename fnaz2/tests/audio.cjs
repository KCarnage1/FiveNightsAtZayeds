// Builds the audio graph in headless Chromium and checks for exceptions, voice cleanup and scare peak.
// Usage: BASE=http://localhost:8783 NODE_PATH=$(npm root -g) node tests/audio.cjs
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8766';
(async () => {
  const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] }); const p = await b.newPage(); const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(BASE + '/index.html'); await p.waitForTimeout(500);
  const r = await p.evaluate(async () => {
    const m = await import('./src/audio.js'); m.start(); const S = m.S, out = [];
    const t = (n, f) => { try { f(); out.push(n + ': ok'); } catch (e) { out.push(n + ': FAIL ' + e.message); } };
    t('step', () => S.step(-1)); t('move hall', () => S.move('hall', 0.3)); t('move stage', () => S.move('stage', 0)); t('move vent', () => S.move('ventL', -1));
    t('vent', () => S.vent(1)); t('clang', () => S.clang(0)); t('click', () => S.click()); t('mask', () => S.mask(true)); t('breath', () => { S.breath(); S.breath(); });
    t('laugh', () => S.laugh()); t('chime', () => S.chime()); t('ring', () => S.ring()); t('scare', () => S.scare());
    t('box', () => { for (let i = 0; i < 40; i++) S.box(i % 3 ? 10 : 90, 0.5); });
    t('frame', () => { for (let i = 0; i < 600; i++) S.frame(0.016, i % 200 < 100, i % 300 < 150 ? 10 : 80, i % 2 === 0, i > 300 ? { a: 'office' } : { a: 'hall' }); });
    t('flood', () => { for (let i = 0; i < 200; i++) S.step(0); });
    return out;
  });
  console.log(r.join('\n')); if (errs.length) console.log('page errors:', errs);
  await b.close(); process.exit(r.some((x) => x.includes('FAIL')) || errs.length ? 1 : 0);
})();
