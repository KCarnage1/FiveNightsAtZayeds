const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const ctx = await b.newContext({ viewport: { width: 900, height: 520 } }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  const url = process.argv[2] || 'http://127.0.0.1:8767/';
  await p.goto(url); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 });
  await p.evaluate(async () => { const r = await navigator.serviceWorker.ready; return r.active && r.active.state; }); await p.waitForTimeout(2500);
  const cached = await p.evaluate(async () => { const k = await caches.keys(); const c = await caches.open(k[0]); return (await c.keys()).length; }); console.log('files cached:', cached);
  await ctx.setOffline(true); await p.reload(); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(1500);
  console.log('offline: home screen shows:', await p.evaluate(() => !!document.querySelector('.title') && document.querySelector('#mNew').textContent.trim()));
  await p.evaluate(() => FNAZ2.startNight(1, { seed: 1 })); await p.waitForTimeout(1500); console.log('offline: night runs:', await p.evaluate(() => FNAZ2.G.mode));
  console.log(errs.join('|') || 'no page errors'); await b.close();
})();
