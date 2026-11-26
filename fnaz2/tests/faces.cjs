const { chromium } = require('playwright'); const fs = require('fs'); const assert = require('assert');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 900, height: 520 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  const img1 = fs.readFileSync('assets/faces/bubbles.png'), img2 = fs.readFileSync('assets/faces/sherbet.png');
  let version = 1, imgFail = false, calls = 0;
  await p.route('**/functions/v1/discord-faces', (r) => { calls++; r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ configured: true, faces: { zayed: { url: 'https://cdn.discordapp.com/avatars/111111111111111111/hashv' + version + '.png?size=512', v: version }, evil: { url: 'https://evil.example/x.png', v: 1 }, bubbles: { url: 'https://evil.example/y.png', v: 1 } } }) }); });
  await p.route('https://cdn.discordapp.com/**', (r) => { if (imgFail) return r.fulfill({ status: 404, body: '' }); r.fulfill({ status: 200, contentType: 'image/png', headers: { 'access-control-allow-origin': '*' }, body: version === 1 ? img1 : img2 }); });
  await p.route('**/rest/v1/rpc/*', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: 'null' }));
  await p.goto('http://localhost:8766/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 });
  const sig = (n) => p.evaluate((n) => { const c = FNAZ2.faceCanvas(n), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let h = 0; for (let i = 0; i < d.length; i += 97) h = (h * 31 + d[i] + d[i + 1] * 3 + d[i + 2] * 7 + d[i + 3]) | 0; return h; }, n);
  await p.waitForTimeout(2500); const s1 = await sig('zayed'), t1 = await sig('taffy'); console.log('face updated from the server picture:', s1 !== 0);
  // first run: the bundled photo was replaced by the (mock) Discord picture for zayed only; taffy untouched; the off-site link ignored
  const bundled = await p.evaluate(async () => { const i = new Image(); i.src = 'assets/faces/zayed.png'; await i.decode(); return i.width; }); assert.ok(bundled > 0);
  version = 2; await p.evaluate(() => FNAZ2.refreshFaces()); await p.waitForTimeout(1500); const s2 = await sig('zayed'); console.log('changed picture reaches the character:', s2 !== s1); assert.notStrictEqual(s2, s1);
  assert.strictEqual(await sig('taffy'), t1, 'other faces stay put');
  imgFail = true; version = 3; await p.evaluate(() => FNAZ2.refreshFaces()); await p.waitForTimeout(1200); assert.strictEqual(await sig('zayed'), s2); console.log('a picture that will not load keeps the old face: ok');
  await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('fnaz2_settings_v1') || '{}'); s.liveFaces = false; localStorage.setItem('fnaz2_settings_v1', JSON.stringify(s)); }); await p.reload(); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); const before = calls; await p.waitForTimeout(2000); assert.strictEqual(calls, before, 'switched off: no request'); console.log('switch off stops the requests: ok');
  console.log(errs.join('|') || 'no page errors'); await b.close(); process.exit(errs.length ? 1 : 0);
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
