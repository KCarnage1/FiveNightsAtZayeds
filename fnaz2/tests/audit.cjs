const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const WORD = process.env.FNAZ_ADMIN_WORD;
  const ctx = await b.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.route('**/rest/v1/rpc/*', (r) => { const n = r.request().url().split('/').pop(); const J = (v) => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(v) }); if (n === 'admin_check') return J(true); if (n === 'admin_online') return J({ total: 1, today: 2, players: [] }); return J(null); });
  await p.goto((process.env.BASE || 'http://localhost:8766') + '/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.tap('#ldGo'); await p.waitForTimeout(1200);
  const audit = async (tag) => { const r = await p.evaluate(() => { const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== 'hidden'; }; const sm = [...document.querySelectorAll('button,select,input:not([type=range]):not(.tog),a')].filter(vis).filter((e) => { const r = e.getBoundingClientRect(); return r.height < 40 || r.width < 40; }).map((e) => (e.id || e.dataset.k || e.textContent.trim().slice(0, 14)) + ':' + Math.round(e.getBoundingClientRect().width) + 'x' + Math.round(e.getBoundingClientRect().height)); const panel = document.querySelector('.panel'); const off = panel ? panel.getBoundingClientRect().bottom > innerHeight + 1 : false; return { small: sm, panelTall: panel ? Math.round(panel.scrollHeight) : 0, vh: innerHeight, scrollsInside: !!panel && panel.scrollHeight > panel.clientHeight }; }); console.log(tag, JSON.stringify(r)); await p.screenshot({ path: `/tmp/au-${tag}.png` }); };
  await p.tap('#mShop'); await p.waitForTimeout(400); await audit('shop'); await p.tap('#mClose'); await p.tap('#mSet'); await p.waitForTimeout(300); await audit('settings'); await p.tap('#mClose');
  await p.evaluate(() => FNAZ2.startNight(1, { seed: 2 })); await p.waitForTimeout(4200); await audit('hud');
  await p.tap('#bCam'); await p.waitForTimeout(600); await audit('cam'); await p.tap('#bCam'); await p.waitForTimeout(300);
  await p.evaluate(() => FNAZ2.pause(true)); await p.waitForTimeout(300); await audit('pause'); await p.evaluate(() => FNAZ2.pause(false));
  if (WORD) { await p.evaluate(() => document.body.focus()); for (const ch of WORD) await p.keyboard.press(ch); await p.waitForSelector('#apw', { timeout: 3000 }); await p.fill('#apw', 'x'); await p.click('#ago'); await p.waitForSelector('[data-flag=god]'); await audit('admin'); }
  console.log(errs.join('|') || 'no errors'); await b.close();
})();
