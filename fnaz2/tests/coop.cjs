const { chromium } = require('playwright');
const assert = require('assert');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const mk = async (name) => { const ctx = await b.newContext({ viewport: { width: 900, height: 520 } }); const p = await ctx.newPage(); p.errs = []; p.on('pageerror', (e) => p.errs.push(name + ' ' + e.message)); await p.goto('http://localhost:8766/index.html?peer=localhost:9000'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(700); return p; };
  const host = await mk('host'), guest = await mk('guest');
  await host.click('#mCoop'); await host.click('#chost'); await host.waitForSelector('.code', { timeout: 20000 });
  const code = (await host.textContent('.code')).trim(); console.log('room', code);
  await guest.click('#mCoop'); await guest.click('#cjoin'); await guest.fill('#cc', code); await guest.click('#cj');
  await host.waitForFunction(() => document.querySelector('#cstat') && /Partner connected/.test(document.querySelector('#cstat').textContent), null, { timeout: 20000 });
  console.log('host sees:', await host.textContent('#cstat'));
  await host.screenshot({ path: '/tmp/co-lobby.png' });
  await host.click('#cgo'); await host.waitForTimeout(2500);
  const mode = async (p) => p.evaluate(() => ({ mode: FNAZ2.G.mode, guest: !!FNAZ2.G.guest, coop: !!FNAZ2.G.coop, t: FNAZ2.G.S && FNAZ2.G.S.t }));
  console.log('host', JSON.stringify(await mode(host)), 'guest', JSON.stringify(await mode(guest)));
  // guest drives the cameras + music box; host's sim should see it
  await guest.keyboard.press('3'); await guest.waitForTimeout(300); await guest.evaluate(() => { const b = document.querySelector('#camList button[data-id=prize]'); b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); });
  await guest.keyboard.down('w'); await guest.waitForTimeout(1200);
  const hr = await host.evaluate(() => ({ cam: FNAZ2.G.coop.remote.cam, wind: FNAZ2.G.coop.remote.wind, box: FNAZ2.G.S.box }));
  console.log('host sees operator input', JSON.stringify(hr)); assert.strictEqual(hr.cam, 'prize'); assert.strictEqual(hr.wind, true);
  await guest.keyboard.up('w');
  // sim state arrives at the guest
  await host.evaluate(() => { FNAZ2.G.S.pos.toyZayed = 'hall'; FNAZ2.G.S.battery = 42; }); await guest.waitForTimeout(500);
  const gs = await guest.evaluate(() => ({ pos: FNAZ2.G.S.pos.toyZayed, bat: Math.round(FNAZ2.G.S.battery), t: FNAZ2.G.S.t }));
  console.log('guest mirror', JSON.stringify(gs)); assert.strictEqual(gs.pos, 'hall'); assert.ok(Math.abs(gs.bat - 42) < 8);
  await guest.screenshot({ path: '/tmp/co-guest.png' }); await host.screenshot({ path: '/tmp/co-host.png' });
  // host mask / light work, ping reaches the other side
  await host.keyboard.down('m'); await host.waitForTimeout(500); assert.ok(await host.evaluate(() => FNAZ2.G.S.mask > 0.5)); await host.keyboard.up('m');
  await guest.evaluate(() => document.querySelector('#pings button[data-k=hall]').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))); await host.waitForTimeout(600);
  const hint = await host.textContent('#hint'); console.log('host hint:', hint); assert.ok(/Operator/.test(hint));
  // win together
  await host.evaluate(() => { FNAZ2.G.S.t = 479.9; }); await host.waitForTimeout(1500);
  console.log('after win host', JSON.stringify(await mode(host)), 'guest', JSON.stringify(await mode(guest)));
  assert.strictEqual((await mode(guest)).mode, 'won'); assert.strictEqual((await mode(host)).mode, 'won');
  await host.click('#rt'); await host.waitForTimeout(2000); console.log('again → guest', JSON.stringify(await mode(guest))); assert.strictEqual((await mode(guest)).mode, 'play');
  // host leaves: guest is told
  await host.close(); await guest.waitForTimeout(10500); console.log('guest after host left:', await guest.evaluate(() => FNAZ2.G.mode + ' | ' + document.querySelector('#screen').innerText.slice(0, 60).replace(/\n/g, ' ')));
  const errs = [...host.errs, ...guest.errs]; console.log(errs.length ? 'ERRORS ' + errs.join('|') : 'no page errors'); await b.close(); process.exit(errs.length ? 1 : 0);
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
