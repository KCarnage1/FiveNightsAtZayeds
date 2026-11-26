const { chromium } = require('playwright');
const assert = require('assert');
const WORD = process.env.FNAZ_ADMIN_WORD, PW = 'test-password-123';
if (!WORD) { console.error('set FNAZ_ADMIN_WORD'); process.exit(2); }
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 600 } }); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  let published = null;
  await p.route('**/rest/v1/rpc/*', (r) => { const name = r.request().url().split('/').pop(); const a = JSON.parse(r.request().postData() || '{}'); const J = (v) => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(v) });
    if (name === 'admin_check') return J(a.p_secret === PW); if (name === 'admin_publish') { if (a.p_secret !== PW) return J(null); published = a.p_data; return J(1); }
    if (name === 'admin_online') return J(a.p_secret === PW ? { total: 2, today: 5, players: [{ id: 'abc', platform: 'web', ver: 'fnaz2-0.4', screen: 'title', night: 0, mins: 1, mode: 'single' }] } : null);
    if (name === 'get_announcement') return J({ v: 1, data: { id: 'x1', title: 'Hello', message: 'Server says hi' } }); return J(null); });
  await p.goto('http://localhost:8766/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.click('#ldGo'); await p.waitForTimeout(1500);
  const coins0 = await p.evaluate(() => FNAZ2.stats.coins); console.log('coins after daily reward:', coins0); assert.ok(coins0 >= 75);
  assert.ok((await p.textContent('.news')).includes('Server says hi'), 'news shows');
  await p.evaluate(() => { FNAZ2.stats.coins += 600; });
  const coinsBase = await p.evaluate(() => FNAZ2.stats.coins);
  // shop
  await p.click('#mShop'); await p.waitForSelector('.item'); await p.screenshot({ path: '/tmp/shop.png' });
  await p.click('[data-up=battery]'); await p.waitForTimeout(200); assert.ok(await p.evaluate(() => FNAZ2.stats.items.battery === 1), 'bought battery');
  const after = await p.evaluate(() => FNAZ2.stats.coins); assert.strictEqual(after, coinsBase - 150); console.log('bought battery tier 1, coins', after);
  await p.click('[data-tab=Cosmetics]'); await p.click('[data-co="mask:cat"]'); await p.waitForTimeout(150); // too poor? 120 coins vs rest
  console.log('cosmetic result: coins', await p.evaluate(() => FNAZ2.stats.coins), 'toast:', await p.evaluate(() => document.querySelector('#toast').textContent));
  await p.click('#mClose'); await p.waitForTimeout(200);
  // upgrades reach the night
  await p.click('#mNew'); await p.click('#ss'); await p.waitForTimeout(500); const drain = await p.evaluate(() => FNAZ2.G.S.mods.drain); console.log('drain multiplier in night:', drain); assert.strictEqual(drain, 0.85);
  // admin: typing the word opens the login; wrong password refused; right one works
  await p.keyboard.press('Escape'); await p.waitForTimeout(100);
  await p.evaluate(() => FNAZ2.pause(false)); for (const ch of WORD) await p.keyboard.press(ch); await p.waitForSelector('#apw', { timeout: 3000 });
  await p.fill('#apw', 'wrong'); await p.click('#ago'); await p.waitForFunction(() => /not accepted/.test(document.querySelector('.adm p').textContent)); console.log('wrong password refused');
  await p.fill('#apw', PW); await p.click('#ago'); await p.waitForSelector('[data-flag=god]'); await p.screenshot({ path: '/tmp/admin.png' });
  await p.check('[data-flag=god]'); await p.check('[data-flag=freeze]'); await p.selectOption('#a_speed', '4'); await p.click('[data-tab=Cast]'); await p.waitForSelector('#m_go'); await p.selectOption('#m_who', 'toyBubbles'); await p.selectOption('#m_to', 'office'); await p.click('#m_go');
  await p.click('[data-tab=Economy]'); await p.click('[data-coin="1000"]'); await p.click('[data-tab=Online]'); await p.waitForFunction(() => /online now/.test(document.querySelector('#olist').textContent)); console.log('online list:', (await p.textContent('#olist')).slice(0, 60));
  await p.click('[data-tab=Broadcast]'); await p.fill('#b_title', 'Test'); await p.fill('#b_msg', 'Hi all'); await p.click('#b_pub'); await p.waitForFunction(() => /Published/.test(document.querySelector('#b_res').textContent)); assert.ok(published && published.title === 'Test'); console.log('announcement published:', JSON.stringify(published));
  await p.click('#mClose'); const st = await p.evaluate(() => ({ inv: FNAZ2.G.S.inv, speed: FNAZ2.G.speed, cheated: FNAZ2.G.S.cheated })); console.log('cheat state', JSON.stringify(st)); assert.ok(st.inv && st.speed === 4 && st.cheated);
  // a cheated win gives no coins/progress
  const c1 = await p.evaluate(() => FNAZ2.stats.coins); await p.evaluate(() => { FNAZ2.G.S.t = 479.9; }); await p.waitForTimeout(1500);
  const r = await p.evaluate(() => ({ coins: FNAZ2.stats.coins, wins: FNAZ2.stats.wins, txt: document.querySelector('#screen').innerText })); console.log('after cheated win: coins', c1, '→', r.coins, '| wins', r.wins, '|', /Admin powers/.test(r.txt) ? 'notice shown' : 'no notice'); assert.strictEqual(r.coins, c1); assert.strictEqual(r.wins, 0);
  console.log(errs.length ? 'ERRORS ' + errs.join('|') : 'no page errors'); await b.close(); process.exit(errs.length ? 1 : 0);
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
