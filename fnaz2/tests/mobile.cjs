const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const [name, vp] of [['land', { width: 844, height: 390 }], ['port', { width: 390, height: 780 }]]) {
    const ctx = await b.newContext({ viewport: vp, hasTouch: true, isMobile: true, deviceScaleFactor: 1 }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('http://localhost:8766/index.html'); await p.waitForSelector('#ldGo:not([hidden])', { timeout: 60000 }); await p.tap('#ldGo'); await p.waitForTimeout(1200);
    const over = await p.evaluate(() => { const t = document.querySelector('.title'); const r = t ? t.getBoundingClientRect() : null; const sc = document.querySelector('#screen'); return { scrollH: sc.scrollHeight, clientH: sc.clientHeight, docW: document.documentElement.scrollWidth, vw: innerWidth, small: [...document.querySelectorAll('button')].filter((x) => x.offsetParent && (x.getBoundingClientRect().height < 40)).map((x) => x.id || x.textContent.trim().slice(0, 12)) }; });
    console.log(name, JSON.stringify(over)); await p.screenshot({ path: `/tmp/mob-${name}-home.png` });
    await p.evaluate(() => FNAZ2.startNight(1, { seed: 2 })); await p.waitForTimeout(1500); await p.screenshot({ path: `/tmp/mob-${name}-game.png` });
    console.log(name, 'errors:', errs.join('|') || 'none'); await ctx.close();
  }
  await b.close();
})();
