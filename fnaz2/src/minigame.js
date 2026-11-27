/* The cartridge: a small 8-bit game that sometimes turns up after a loss. It does not touch your score, coins or progress.
 * "Take Cake to the Children": carry cupcakes from the kitchen to the four children before the shadow reaches you. */
const W = 192, H = 120;
export function playCartridge(onClose) {
  const root = document.createElement('div'); root.id = 'cart';
  root.innerHTML = '<div class="cartbox"><canvas width="' + W + '" height="' + H + '" aria-label="Take Cake to the Children, an 8-bit minigame"></canvas><p class="cartmsg"></p><div class="cartbtns"><button class="sm" id="cartRetry">Play</button><button class="sm" id="cartClose">Close</button></div></div>';
  document.body.appendChild(root);
  const cv = root.querySelector('canvas'), g = cv.getContext('2d'), msg = root.querySelector('.cartmsg'); g.imageSmoothingEnabled = false;
  const keys = {}; let st, raf = 0, last = 0, stopped = false;
  const fresh = () => ({ x: 30, y: 60, cake: false, fed: [0, 0, 0, 0], sx: 170, sy: 8, t: 0, over: null, tx: null, ty: null });
  const kids = [[160, 14], [160, 40], [160, 66], [160, 92]];
  const near = (ax, ay, bx, by, r) => Math.abs(ax - bx) < r && Math.abs(ay - by) < r;
  const start = () => { st = fresh(); msg.textContent = 'Arrows or WASD to move. Tap to walk. Pick up a cake at the kitchen, give it to a child.'; };
  function tick(now) {
    if (stopped) return; raf = requestAnimationFrame(tick); const dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
    if (!st.over) {
      st.t += dt; let dx = (keys.arrowright || keys.d ? 1 : 0) - (keys.arrowleft || keys.a ? 1 : 0), dy = (keys.arrowdown || keys.s ? 1 : 0) - (keys.arrowup || keys.w ? 1 : 0);
      if (!dx && !dy && st.tx != null) { const ex = st.tx - st.x, ey = st.ty - st.y; if (Math.hypot(ex, ey) > 2) { dx = ex; dy = ey; } else st.tx = null; }
      const m = Math.hypot(dx, dy) || 1; st.x = Math.max(6, Math.min(W - 6, st.x + dx / m * 55 * dt)); st.y = Math.max(8, Math.min(H - 8, st.y + dy / m * 55 * dt));
      if (st.x < 26 && !st.cake) st.cake = true;
      kids.forEach(([kx, ky], i) => { if (st.cake && !st.fed[i] && near(st.x, st.y, kx - 10, ky, 9)) { st.fed[i] = 1; st.cake = false; } });
      if (st.t > 5) { const sp = 24 + st.fed.reduce((a, b) => a + b, 0) * 4, ex = st.x - st.sx, ey = st.y - st.sy, d = Math.hypot(ex, ey) || 1; st.sx += ex / d * sp * dt; st.sy += ey / d * sp * dt; if (near(st.x, st.y, st.sx, st.sy, 6)) st.over = 'lost'; }
      if (st.fed.every(Boolean)) st.over = 'won';
      if (st.over === 'won') msg.textContent = 'Four candles on each. Thank you for coming.'; else if (st.over === 'lost') msg.textContent = 'Not yet. Not yet. Not yet.';
    }
    g.fillStyle = '#0b0614'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#2a1a40'; g.fillRect(0, 0, 26, H); g.fillStyle = '#e8b4d0'; for (let y = 10; y < H; y += 14) g.fillRect(8, y, 10, 6); // the kitchen counter with cupcakes
    g.fillStyle = '#1a0f2a'; for (let x = 30; x < 150; x += 20) g.fillRect(x, 0, 1, H);
    kids.forEach(([kx, ky], i) => { g.fillStyle = '#5a3a2a'; g.fillRect(kx - 4, ky - 6, 16, 12); g.fillStyle = st.fed[i] ? '#6fe08a' : '#e8453c'; g.fillRect(kx, ky - 4, 8, 8); g.fillStyle = '#000'; g.fillRect(kx + 1, ky - 2, 2, 2); g.fillRect(kx + 5, ky - 2, 2, 2); });
    g.fillStyle = '#ffd24a'; g.fillRect(Math.round(st.x) - 4, Math.round(st.y) - 4, 8, 8); g.fillStyle = '#000'; g.fillRect(Math.round(st.x) - 2, Math.round(st.y) - 2, 1, 1); g.fillRect(Math.round(st.x) + 1, Math.round(st.y) - 2, 1, 1);
    if (st.cake) { g.fillStyle = '#ff7ab8'; g.fillRect(Math.round(st.x) - 2, Math.round(st.y) - 10, 5, 4); g.fillStyle = '#fff'; g.fillRect(Math.round(st.x), Math.round(st.y) - 12, 1, 2); }
    if (st.t > 5 || st.over) { g.fillStyle = '#000'; g.fillRect(Math.round(st.sx) - 5, Math.round(st.sy) - 7, 10, 14); g.fillStyle = '#c00'; g.fillRect(Math.round(st.sx) - 3, Math.round(st.sy) - 4, 2, 2); g.fillRect(Math.round(st.sx) + 1, Math.round(st.sy) - 4, 2, 2); }
    g.fillStyle = '#ffffff22'; for (let y = 0; y < H; y += 3) g.fillRect(0, y, W, 1); // scanlines
  }
  const down = (e) => { const k = e.key.toLowerCase(); if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'w', 'a', 's', 'd', ' ', 'escape', 'enter', 'r'].includes(k)) { e.stopImmediatePropagation(); e.preventDefault(); } keys[k] = true; if (k === 'escape') close(); if ((k === ' ' || k === 'enter') && st.over) start(); };
  const up = (e) => { keys[e.key.toLowerCase()] = false; };
  const tap = (e) => { const r = cv.getBoundingClientRect(); st.tx = (e.clientX - r.left) / r.width * W; st.ty = (e.clientY - r.top) / r.height * H; };
  function close() { stopped = true; cancelAnimationFrame(raf); removeEventListener('keydown', down, true); removeEventListener('keyup', up, true); root.remove(); if (onClose) onClose(); }
  addEventListener('keydown', down, true); addEventListener('keyup', up, true); cv.addEventListener('pointerdown', tap); cv.addEventListener('pointermove', (e) => { if (e.buttons) tap(e); });
  root.querySelector('#cartClose').onclick = close; root.querySelector('#cartRetry').onclick = start;
  start(); raf = requestAnimationFrame(tick);
}
