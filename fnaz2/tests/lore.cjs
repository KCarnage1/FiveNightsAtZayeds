const { chromium } = require('playwright'); const assert = require('assert');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 560 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.route('**/rest/v1/rpc/*', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: 'null' })); await p.route('**/functions/v1/**', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"faces":{}}' }));
  await p.goto((process.env.BASE || 'http://localhost:8766') + '/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(800);
  await p.evaluate(() => { localStorage.removeItem('fnaz2_stats_v1'); FNAZ2.stats.lore = {}; });
  await p.evaluate(() => FNAZ2.startNight(3, { seed: 4 })); await p.waitForTimeout(600); await p.evaluate(() => { FNAZ2.G.S.cheat = { freeze: true }; });
  // night 3: the night-1..3 papers show, night-4+ papers do not
  const vis = await p.evaluate(() => ['menu', 'slip_goat', 'slip_falcon', 'cupcake'].map((id) => [id, FNAZ2.loreScreen(id, FNAZ2.camV).visible])); console.log('visible on night 3:', JSON.stringify(vis));
  assert.deepStrictEqual(vis.map((v) => v[1]), [true, true, false, false]);
  // open the prize camera and click the order slip that sits there
  await p.keyboard.press('c'); await p.waitForTimeout(300); await p.evaluate(() => document.querySelector('#camList button[data-id=prize]').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))); await p.waitForTimeout(700);
  const pt = await p.evaluate(() => FNAZ2.loreScreen('slip_goat', FNAZ2.camV)); console.log('slip on screen:', JSON.stringify(pt)); assert.ok(pt.inView, 'the slip is visible from the prize camera');
  await p.mouse.click(pt.x, pt.y); await p.waitForTimeout(400); assert.ok(await p.evaluate(() => FNAZ2.Lore.has('slip_goat')), 'picked up'); console.log('toast:', await p.textContent('#toast'));
  // read it in the case file
  await p.evaluate(() => { FNAZ2.stats.beaten = 1; FNAZ2.home(); }); await p.waitForTimeout(300); await p.click('#mExtras'); await p.click('#xf'); await p.waitForSelector('.doc.got'); await p.click('.doc.got'); const txt = await p.textContent('.docbody'); console.log('reads:', txt.slice(0, 60)); assert.ok(/MEMORY/.test(txt));
  // wrong code, then right code once the four slips are in hand
  await p.fill('#dial', '1234'); await p.click('#dialgo'); assert.ok(/busy/.test(await p.textContent('#cfmsg'))); 
  await p.evaluate(() => ['slip_camel', 'slip_cat', 'slip_falcon'].forEach((i) => FNAZ2.Lore.collect(i))); await p.evaluate(() => FNAZ2.Lore.has('x')); await p.click('#bk'); await p.click('#xf'); await p.fill('#dial', '4712'); await p.click('#dialgo'); await p.waitForTimeout(200);
  const final = await p.textContent('.cfview'); console.log('final page unlocked:', /ORDER #0/.test(final)); assert.ok(/ORDER #0/.test(final) && /Rashid/.test(final));
  await p.screenshot({ path: '/tmp/casefile.png' }); console.log(errs.join('|') || 'no page errors'); await b.close(); process.exit(errs.length ? 1 : 0);
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
