const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 560 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto((process.env.BASE || 'http://localhost:8766') + '/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(800);
  await p.click('#mNew'); for (let i = 0; i < 6; i++) { await p.waitForTimeout(1500); console.log(i, await p.evaluate(() => JSON.stringify({ hidden: document.querySelector('#call').hidden, txt: document.querySelector('#call .txt').textContent.slice(0, 40), mode: FNAZ2.G.mode, paused: FNAZ2.G.paused }))); }
  await p.screenshot({ path: process.argv[2] }); console.log(errs.join('|') || 'no errors'); await b.close();
})();
