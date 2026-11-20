const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('http://localhost:8766/debug.html' + (process.argv[2] || '')); await p.waitForFunction('window.__debugDone', null, { timeout: 90000 });
  const r = await p.evaluate(() => window.__debugResults); for (const x of r) console.log((x.ok === null ? 'INFO' : x.ok ? 'PASS' : 'FAIL'), x.name, x.info ? '— ' + x.info : '');
  console.log(errs.length ? 'PAGE ERRORS ' + errs.join('|') : 'no page errors'); await p.screenshot({ path: '/tmp/debug.png' }); await b.close(); process.exit(r.some((x) => x.ok === false) ? 1 : 0);
})();
