const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const [name, vp, touch] of [['desk', { width: 1100, height: 620 }, false], ['land', { width: 844, height: 390 }, true], ['port', { width: 390, height: 780 }, true]]) {
    const ctx = await b.newContext({ viewport: vp, hasTouch: touch, isMobile: touch }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto((process.env.BASE || 'http://localhost:8766') + '/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.evaluate(() => document.querySelector('#ldGo').click()); await p.waitForTimeout(1800);
    await p.screenshot({ path: `/tmp/sc-${name}-home.png` });
    await p.evaluate(() => FNAZ2.startNight(2, { seed: 4 })); await p.waitForTimeout(800); await p.evaluate(() => FNAZ2.pause(true)); await p.waitForTimeout(400); await p.screenshot({ path: `/tmp/sc-${name}-pause.png` });
    console.log(name, errs.join('|') || 'no errors'); await ctx.close();
  }
  await b.close();
})();
