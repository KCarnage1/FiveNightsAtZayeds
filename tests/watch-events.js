// Live watch + events (FNAZ 1): a night reports its state, the developer's events arrive and run, and the opt-out stops both.
// Needs a static server on :8770 serving this folder:  python3 -m http.server 8770   then  node tests/watch-events.js
const { chromium } = require('playwright'); const assert = require('assert');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const run = async (optOut) => {
    const ctx = await b.newContext({ viewport: { width: 1100, height: 650 } }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    const calls = []; let queue = [], last = 5;
    await ctx.route('**/rest/v1/rpc/*', (r) => { const name = new URL(r.request().url()).pathname.split('/').pop(), a = JSON.parse(r.request().postData() || '{}'); calls.push({ name, a }); const J = (v) => r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify(v) });
      if (name === 'get_commands') { const out = a.p_since === null ? { last, cmds: [] } : { last, cmds: queue }; if (a.p_since !== null) queue = []; return J(out); } return J(null); });
    await ctx.route(/githubusercontent|api\.github|jsdelivr/, (r) => r.abort());
    if (optOut) await p.addInitScript(() => localStorage.setItem('fnaz_share_online', '0'));
    await p.goto('http://localhost:8770/index.html'); await p.waitForTimeout(3500);
    await p.click('[data-act=newgame]'); await p.click('text=Start shift'); await p.waitForFunction(() => window.FNAZNET && FNAZNET.h && FNAZNET.h.y && FNAZNET.h.y.running, null, { timeout: 30000 }); await p.waitForTimeout(4500);
    if (optOut) { const n = calls.filter((c) => c.name === 'report_state' || c.name === 'get_commands').length; console.log('opted out: calls to watch/events =', n); assert.strictEqual(n, 0); await ctx.close(); return; }
    const st = calls.find((c) => c.name === 'report_state'); console.log('state reported:', JSON.stringify(st && st.a.p_state)); assert.ok(st && st.a.p_state.n >= 1 && Array.isArray(st.a.p_state.p) && st.a.p_state.p.length === 4 && /^[A-Za-z0-9-]{8,40}$/.test(st.a.p_id));
    const first = calls.find((c) => c.name === 'get_commands'); assert.strictEqual(first.a.p_since, null, 'the first ask replays nothing');
    // the developer sends four events
    last = 9; queue = [{ id: 6, kind: 'summon', args: { who: 'zayed' } }, { id: 7, kind: 'msg', args: { text: 'hello from the dev' } }, { id: 8, kind: 'give', args: { coins: 50 } }, { id: 9, kind: 'speed', args: { mult: 2, sec: 2 } }, { id: 10, kind: 'hack', args: { x: 1 } }];
    const coins0 = await p.evaluate(() => FNAZMOD.save().coins); await p.waitForTimeout(4200);
    const r = await p.evaluate(() => ({ room: FNAZNET.h.y.ai.zayed.room, armed: FNAZNET.h.y.ai.zayed.armed, coins: FNAZMOD.save().coins, speed: FNAZMOD.mod.speed, toast: [...document.querySelectorAll('[class*=toast],#modToast,.mm-toast')].map((e) => e.textContent).join('|') }));
    console.log('after events:', JSON.stringify(r)); assert.strictEqual(r.room, 'eastCor'); assert.strictEqual(r.coins, coins0 + 50); assert.strictEqual(r.speed, 2);
    await p.waitForTimeout(2600); assert.strictEqual(await p.evaluate(() => FNAZMOD.mod.speed), 1, 'speed goes back'); console.log('speed restored: ok; unknown event "hack" ignored: ok');
    console.log(errs.join('|') || 'no page errors'); await ctx.close(); if (errs.length) process.exit(1);
  };
  await run(false); await run(true); await b.close(); console.log('watch + events: all good');
})().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
