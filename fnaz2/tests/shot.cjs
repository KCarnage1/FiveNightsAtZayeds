const { chromium } = require('playwright');
(async () => {
  const [,, view = 'all', out = 'shot.png', w = 1400, h = 700] = process.argv;
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  p.on('pageerror', (e) => console.log('ERR', e.message)); p.on('console', (m) => m.type() === 'error' && console.log('CON', m.text()));
  await p.goto((process.env.BASE || 'http://localhost:8766') + '/preview.html?view=' + view);
  await p.waitForFunction('window.__ready', null, { timeout: 60000 });
  await p.screenshot({ path: out }); await b.close();
})();
