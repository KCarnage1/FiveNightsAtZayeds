const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 560 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('http://localhost:8766/index.html'); await p.waitForTimeout(1500);
  await p.evaluate(() => { FNAZ2.startNight(3, { seed: 2 }); const S = FNAZ2.G.S; S.pos.toyBubbles = 'office'; FNAZ2.G.from.toyBubbles = 'ventL'; });
  await p.keyboard.down('m'); await p.waitForTimeout(2600);
  const st = await p.evaluate(() => ({ pos: FNAZ2.G.S.pos.toyBubbles, dead: FNAZ2.G.S.dead, mask: FNAZ2.G.S.mask }));
  await p.screenshot({ path: process.argv[2] }); console.log(JSON.stringify(st), errs.join('|') || 'no errors'); await b.close();
})();
