const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 560 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && !/ERR_|Failed to load/.test(m.text()) && errs.push(m.text()));
  await p.goto((process.env.BASE || 'http://localhost:8766') + '/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(800);
  console.log('props swapped in:', await p.evaluate(() => FNAZ2.propsReady));
  await p.evaluate(() => FNAZ2.startNight(1, { seed: 3, speed: 1 })); await p.waitForTimeout(500); await p.evaluate(() => { FNAZ2.G.S.cheat = { freeze: true }; });
  for (const cam of ['prize', 'game', 'partyL']) { await p.keyboard.press('c'); await p.waitForTimeout(200); await p.evaluate((c) => { document.querySelector(`#camList button[data-id=${c}]`).dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); }, cam); await p.waitForTimeout(700); await p.screenshot({ path: process.argv[2] + '-' + cam + '.png' }); await p.keyboard.press('c'); await p.waitForTimeout(200); }
  console.log(errs.join('|') || 'no errors'); await b.close();
})();
