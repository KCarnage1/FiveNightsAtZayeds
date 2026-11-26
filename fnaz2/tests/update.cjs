const { chromium } = require('playwright'); const assert = require('assert');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const ctx = await b.newContext({ viewport: { width: 1000, height: 560 } }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  const url = process.argv[2] || 'http://127.0.0.1:8768/'; let served = { version: '0.6.0', build: 'buildA', notes: ['one'] }; let reloads = 0;
  await ctx.route('**/version.json*', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(served) }));
  await p.route('**/rest/v1/rpc/*', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: 'null' })); await p.route('**/functions/v1/**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"faces":{}}' }));
  await p.goto(url); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(500);
  // same build: manual check says latest, no banner
  await p.click('#mSet'); await p.click('[data-tab=Data]'); await p.click('#updBtn'); await p.waitForFunction(() => /latest/.test(document.querySelector('#updMsg').textContent)); console.log('same build:', await p.textContent('#updMsg')); assert.ok(await p.$eval('#updbar', (e) => e.hidden));
  // a newer build is published: the check finds it and offers it
  served = { version: '0.7.0', build: 'buildB', notes: ['Shiny new thing'] }; await p.click('#updBtn'); await p.waitForSelector('#updNow'); console.log('newer build:', await p.textContent('#updMsg')); await p.screenshot({ path: '/tmp/update.png' });
  await p.click('#mClose'); await p.waitForFunction(() => !document.querySelector('#updbar').hidden); console.log('banner:', await p.textContent('#updbar span'));
  // update now: caches cleared, page reloads
  const cachesBefore = await p.evaluate(async () => (await caches.keys()).length); const nav = p.waitForNavigation({ timeout: 15000 }); await p.click('#updbarGo'); await nav; await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 });
  const regs = await p.evaluate(async () => (await navigator.serviceWorker.getRegistrations()).length); console.log('cache entries before:', cachesBefore, '| service workers after reload (re-registered):', regs);
  // after an update the new build id differs from what was last stored: simulate "last build" and see the notes
  await p.evaluate(() => localStorage.setItem('fnaz2_last_build', 'older')); served = { version: '0.6.0', build: 'buildA', notes: ['The thing you wanted'] }; await p.reload(); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForSelector('.notes', { timeout: 8000 }); console.log("what's new:", await p.textContent('.notes'));
  console.log(errs.join('|') || 'no page errors'); await b.close(); process.exit(errs.length ? 1 : 0);
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
