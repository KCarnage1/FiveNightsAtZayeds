// Admin spectate + tabs (FNAZ 1). Two browsers: a player in a night, and the admin watching them. Needs :8770 static server and FNAZ_ADMIN_WORD.
const { chromium } = require('playwright'); const assert = require('assert');
const WORD = process.env.FNAZ_ADMIN_WORD, PW = 'test-password-123'; if (!WORD) { console.error('set FNAZ_ADMIN_WORD'); process.exit(2); }
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const players = {}; const errs = [];
  const mock = async (ctx) => { await ctx.route('**/rest/v1/rpc/*', (r) => { const name = new URL(r.request().url()).pathname.split('/').pop(), a = JSON.parse(r.request().postData() || '{}'); const J = (v) => r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify(v) });
    if (name === 'heartbeat') { players[a.p_id] = Object.assign(players[a.p_id] || { first: Date.now() }, { id: a.p_id.slice(0, 6), pid: a.p_id, ver: a.p_ver, platform: a.p_platform, screen: a.p_screen, night: a.p_night, mode: a.p_mode, mins: 0 }); return J(null); }
    if (name === 'report_state') { if (players[a.p_id]) players[a.p_id].state = a.p_state; return J(null); }
    if (name === 'admin_check') return J(a.p_secret === PW);
    if (name === 'admin_online') return J(a.p_secret === PW ? { total: Object.keys(players).length, today: 3, players: Object.values(players) } : null);
    if (name === 'get_commands') return J({ last: 0, cmds: [] }); if (name === 'get_announcement') return J(null); return J(null); }); await ctx.route(/githubusercontent|api\.github|jsdelivr/, (r) => r.abort()); };
  const pc = await b.newContext({ viewport: { width: 1100, height: 650 } }), player = await pc.newPage(); player.on('pageerror', (e) => errs.push('player ' + e.message)); await mock(pc);
  await player.goto('http://localhost:8770/index.html'); await player.waitForTimeout(3500); await player.click('[data-act=newgame]'); await player.click('text=Start shift'); await player.waitForFunction(() => FNAZNET.h.y.running, null, { timeout: 30000 }); await player.waitForTimeout(5000);
  const ac = await b.newContext({ viewport: { width: 1280, height: 800 } }), admin = await ac.newPage(); admin.on('pageerror', (e) => errs.push('admin ' + e.message)); await mock(ac);
  await admin.goto('http://localhost:8770/index.html'); await admin.waitForTimeout(3500); await admin.keyboard.type(WORD, { delay: 30 }); await admin.waitForSelector('#alPw'); await admin.fill('#alPw', PW); await admin.click('#alGo'); await admin.waitForSelector('#modMenu:not([hidden])');
  const tabs = await admin.$$eval('.mm-tabs button', (e) => e.map((x) => x.textContent)); console.log('tabs:', tabs.join(' | ')); assert.deepStrictEqual(tabs, ['Players', 'Powers', 'Night', 'Coins', 'Announce']);
  assert.ok(await admin.$eval('.mm-sec.live', (e) => !e.hidden), 'players tab shows first'); assert.ok(await admin.$eval('.mm-sec[data-tab=powers]', (e) => e.hidden), 'other tabs are hidden');
  await admin.waitForSelector('.lv-list .lv-watch', { timeout: 10000 }); await admin.click('.lv-list div:not(.lv-all) .lv-watch'); await admin.waitForFunction(() => /Night 1/.test(document.querySelector('#lvInfo').textContent), null, { timeout: 8000 });
  console.log('watching:', await admin.textContent('#lvSpecWho')); console.log('live info:', await admin.textContent('#lvInfo')); assert.ok(/power \d+%/.test(await admin.textContent('#lvInfo')));
  const painted = await admin.$eval('#lvMap', (c) => { const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; }); console.log('map pixels drawn:', painted > 5000);
  await admin.fill('#lvFind', 'zzz'); await admin.waitForTimeout(200); assert.ok(/No player matches/.test(await admin.textContent('#lvList'))); await admin.fill('#lvFind', '');
  await admin.screenshot({ path: '/tmp/admin-spectate.png' });
  await admin.click('[data-tab=powers]'); assert.ok(await admin.$eval('.mm-sec.live', (e) => e.hidden)); assert.ok(await admin.$eval('.mm-sec[data-tab=powers]', (e) => !e.hidden)); console.log('tab switch: ok');
  await admin.click('#lvStop').catch(() => {}); console.log(errs.join('|') || 'no page errors'); await b.close(); process.exit(errs.length ? 1 : 0);
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
