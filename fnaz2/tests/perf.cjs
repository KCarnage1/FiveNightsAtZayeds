const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 960, height: 540 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('http://localhost:8766/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(1500);
  const info = () => p.evaluate(() => { const i = FNAZ2.renderer.info; return { calls: i.render.calls, tris: i.render.triangles, geos: i.memory.geometries, tex: i.memory.textures }; });
  const rows = [['title screen', await info()]];
  await p.evaluate(() => FNAZ2.startNight(3, { seed: 3 })); await p.waitForTimeout(800); await p.evaluate(() => { FNAZ2.G.S.cheat = { freeze: true }; }); await p.waitForTimeout(500); rows.push(['office', await info()]);
  const cams = await p.evaluate(() => [...document.querySelectorAll('#camList button')].map((b) => b.dataset.id)); await p.keyboard.press('c');
  for (const c of cams) { await p.evaluate((id) => document.querySelector(`#camList button[data-id=${id}]`).dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })), c); await p.waitForTimeout(350); rows.push(['cam ' + c, await info()]); }
  console.log('view'.padEnd(16) + 'draw calls'.padStart(11) + 'triangles'.padStart(11) + 'geometries'.padStart(12) + 'textures'.padStart(10)); for (const [n, r] of rows) console.log(n.padEnd(16) + String(r.calls).padStart(11) + String(r.tris).padStart(11) + String(r.geos).padStart(12) + String(r.tex).padStart(10));
  // frame time over 3 seconds in the office (software rendering: only useful to compare changes, not as a device figure)
  await p.keyboard.press('c'); await p.waitForTimeout(300);
  const ft = await p.evaluate(() => new Promise((res) => { const t = []; let last = performance.now(); const f = (n) => { t.push(n - last); last = n; if (t.length < 90) requestAnimationFrame(f); else { t.sort((a, b) => a - b); res({ median: t[45].toFixed(1), p95: t[85].toFixed(1) }); } }; requestAnimationFrame(f); }));
  console.log('frame time in the office, software renderer (ms): median', ft.median, 'p95', ft.p95); console.log(errs.join('|') || 'no errors'); await b.close();
})();
