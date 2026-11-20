const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1100, height: 620 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto('http://localhost:8766/index.html'); await p.waitForTimeout(2500);
  await p.screenshot({ path: process.argv[2] + '-title.png' });
  await p.evaluate(() => FNAZ2.startNight(2, { seed: 5 })); await p.waitForTimeout(1500);
  await p.screenshot({ path: process.argv[2] + '-office.png' });
  // put things in view for screenshots
  await p.evaluate(() => { const S = FNAZ2.G.S; S.pos.toyZayed = 'hall'; S.pos.toyBubbles = 'office'; FNAZ2.G.from.toyBubbles = 'ventL'; S.battery = 100; FNAZ2.G.light = true; FNAZ2.G.yawT = 0; });
  await p.waitForTimeout(1200); await p.screenshot({ path: process.argv[2] + '-hall.png' });
  await p.evaluate(() => { FNAZ2.G.light = false; FNAZ2.G.yawT = -1.4; FNAZ2.G.yaw = -1.4; }); await p.waitForTimeout(900);
  await p.screenshot({ path: process.argv[2] + '-vent.png' });
  await p.keyboard.press('c'); await p.waitForTimeout(900); await p.screenshot({ path: process.argv[2] + '-cam.png' });
  await p.evaluate(() => { const S = FNAZ2.G.S; S.pos.toyTaffy = 'stage'; }); await p.keyboard.press('2'); await p.waitForTimeout(700); await p.screenshot({ path: process.argv[2] + '-cam2.png' });
  await p.keyboard.press('c'); await p.keyboard.down('m'); await p.waitForTimeout(900); await p.screenshot({ path: process.argv[2] + '-mask.png' });
  console.log(errs.length ? 'ERRORS ' + errs.slice(0, 5).join(' | ') : 'no errors'); await b.close();
})();
