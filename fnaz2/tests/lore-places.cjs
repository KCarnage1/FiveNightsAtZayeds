const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 560 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.route('**/rest/v1/rpc/*', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: 'null' })); await p.route('**/functions/v1/**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"faces":{}}' }));
  await p.goto('http://localhost:8766/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(800);
  await p.evaluate(() => { FNAZ2.stats.lore = {}; FNAZ2.startNight(6, { seed: 4 }); FNAZ2.G.S.cheat = { freeze: true }; }); await p.waitForTimeout(500);
  const docs = await p.evaluate(() => FNAZ2.Lore.DOCS.filter((d) => d.kind === 'paper').map((d) => ({ id: d.id, cam: d.cam })));
  let bad = 0; const SAFE = { x0: 40, x1: 780, y0: 110, y1: 440 };
  for (const d of docs) {
    if (d.cam) { await p.keyboard.press('c'); await p.waitForTimeout(150); await p.evaluate((c) => document.querySelector(`#camList button[data-id=${c}]`).dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })), d.cam); await p.waitForTimeout(250); }
    else { await p.evaluate((id) => { const a = FNAZ2.Lore.byId(id).at, x = a.x; FNAZ2.G.yawT = a.z < -2 ? 0 : x < -1 ? -1.3 : x > 1 ? 1.3 : 0; FNAZ2.G.yaw = FNAZ2.G.yawT; }, d.id); await p.waitForTimeout(250); }
    const r = await p.evaluate((id) => { const cam = FNAZ2.G.cam ? FNAZ2.camV : FNAZ2.player; return FNAZ2.loreScreen(id, cam); }, d.id);
    const ok = r && r.visible && r.inView && r.x > SAFE.x0 && r.x < SAFE.x1 && r.y > SAFE.y0 && r.y < SAFE.y1; if (!ok) bad++;
    console.log((ok ? 'ok  ' : 'BAD ') + d.id.padEnd(15) + (d.cam || 'office').padEnd(8) + (r ? Math.round(r.x) + ',' + Math.round(r.y) + (r.inView ? '' : ' off-screen') : 'missing'));
    if (d.cam) { await p.keyboard.press('c'); await p.waitForTimeout(150); }
  }
  console.log(bad ? bad + ' papers are not reachable' : 'all papers reachable'); console.log(errs.join('|') || 'no page errors'); await b.close(); process.exit(bad || errs.length ? 1 : 0);
})();
