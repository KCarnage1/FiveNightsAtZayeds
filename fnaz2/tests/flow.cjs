const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const p = await b.newPage({ viewport: { width: 1100, height: 620 } });
  const errs = []; p.on('pageerror', (e) => errs.push('PAGE ' + e.message)); p.on('console', (m) => m.type() === 'error' && !/Failed to load resource|ERR_/.test(m.text()) && errs.push('CON ' + m.text()));
  const out = process.argv[2];
  await p.goto('http://localhost:8766/index.html'); await p.waitForTimeout(600); await p.screenshot({ path: out + '-0load.png' });
  await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.screenshot({ path: out + '-1ready.png' });
  await p.click('#ldGo'); await p.waitForTimeout(2500); await p.screenshot({ path: out + '-2home.png' });
  await p.click('#mSet'); await p.waitForTimeout(400); await p.screenshot({ path: out + '-3settings.png' });
  await p.click('[data-tab=Gameplay]'); await p.click('#mClose'); await p.waitForTimeout(200);
  await p.click('#mNew'); await p.waitForSelector('#sn'); await p.screenshot({ path: out + '-story.png' }); await p.click('#ss'); await p.waitForTimeout(3600); await p.screenshot({ path: out + '-4night.png' });
  await p.waitForTimeout(5000); await p.screenshot({ path: out + '-5call.png' });
  await p.keyboard.press('Escape'); await p.waitForTimeout(300); await p.screenshot({ path: out + '-6pause.png' });
  const t0 = await p.evaluate(() => FNAZ2.G.S.t); await p.waitForTimeout(800); const t1 = await p.evaluate(() => FNAZ2.G.S.t);
  await p.click('#pr'); await p.waitForTimeout(500);
  // win by jumping the clock
  await p.evaluate(() => { FNAZ2.G.S.t = 479.9; }); await p.waitForTimeout(800); await p.screenshot({ path: out + '-7win.png' });
  const st = JSON.stringify(await p.evaluate(() => ({ beaten: FNAZ2.stats.beaten, wins: FNAZ2.stats.wins })));
  console.log('paused clock frozen:', t0 === t1, st);
  await p.click('#tt'); await p.waitForTimeout(400); await p.click('#mCustom'); await p.waitForTimeout(300); console.log('custom night is gated:', /coming soon/.test(await p.textContent('#toast')));
  await p.click('#mNights'); await p.waitForTimeout(300); console.log('nights 3 to 6 locked:', await p.evaluate(() => [...document.querySelectorAll('.nights button')].map((b) => b.disabled).join()));
  await p.click('#bk'); await p.waitForTimeout(200); await p.click('#mExtras'); await p.click('#xg'); await p.waitForTimeout(700); await p.screenshot({ path: out + '-9gallery.png' });
  console.log(errs.length ? 'ERRORS ' + errs.slice(0, 6).join(' | ') : 'no errors'); await b.close();
})();
