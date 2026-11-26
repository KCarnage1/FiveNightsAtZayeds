/* Regression tests: death counted once on the game-over screen; corrupted saved data does not break the game. */
const { chromium } = require('playwright'); const assert = require('assert');
const BASE = process.env.BASE || 'http://localhost:8766';
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const p = await b.newPage({ viewport: { width: 800, height: 500 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.addInitScript(() => { if (!sessionStorage.seeded) { sessionStorage.seeded = 1; localStorage.setItem('fnaz2_stats_v1', JSON.stringify({ items: null, lore: 5, killers: 'x', coins: 'many', beaten: -3, deaths: [] })); localStorage.setItem('fnaz2_settings_v1', JSON.stringify({ fov: 'wide', quality: 'ultra', master: 9999, name: 7 })); localStorage.setItem('fnaz2_custom', '"junk"'); } });
  await p.goto(BASE + '/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 90000 }); await p.click('#ldGo'); await p.waitForTimeout(1500);
  const c = await p.evaluate(() => ({ fov: FNAZ2.cfg.fov, q: FNAZ2.cfg.quality, m: FNAZ2.cfg.master, items: typeof FNAZ2.stats.items, coins: FNAZ2.stats.coins, beaten: FNAZ2.stats.beaten }));
  assert.ok(c.fov === 68 && c.m === 100 && c.items === 'object' && typeof c.coins === 'number' && c.beaten === 0 && ['low', 'medium'].includes(c.q), JSON.stringify(c));
  await p.evaluate(() => { FNAZ2.stats.intro = true; FNAZ2.startNight(1); }); await p.waitForTimeout(500);
  await p.evaluate(() => { FNAZ2.G.S.dead = 'toyZayed'; FNAZ2.G.scareWho = 'toyZayed'; FNAZ2.G.scareT = 0; });
  await p.waitForFunction(() => FNAZ2.G.mode === 'dead', null, { timeout: 90000 }); await p.waitForTimeout(5000);
  const d = await p.evaluate(() => FNAZ2.stats.deaths); assert.strictEqual(d, 1, 'deaths counted ' + d);
  assert.deepStrictEqual(errs, []); console.log('adversarial ok'); await b.close();
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
