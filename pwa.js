/* Web version only: registers the offline worker, offers "Install", and downloads the big videos for offline play.
   Does nothing in the desktop app (window.fnaz) or when opened from a file. */
(() => {
  'use strict';
  if (window.fnaz || !/^https?:$/.test(location.protocol)) return;
  const $ = (s) => document.querySelector(s);
  const VIDEOS = ['assets/FNAZ_.mp4', 'assets/verity-song-dub.mp4', 'assets/dr-stone-op.mp4'];
  const standalone = matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches || navigator.standalone;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const mb = (n) => (n / 1048576).toFixed(0) + ' MB';

  /* ----- new version banner ----- */
  const banner = document.createElement('div');
  banner.id = 'webBanner';
  banner.hidden = true;
  banner.innerHTML = '<span>A new version is ready.</span> <button type="button" id="webReload" class="primary">Reload</button>';
  $('#title').appendChild(banner);
  $('#webReload').addEventListener('click', () => location.reload());

  /* An installed web app stays alive in the background, and browsers only look for a new version after a page load (and
     at most about once a day), so we ask ourselves: when the app starts, when you come back to it, when the connection
     returns, and every 15 minutes. */
  const checkNow = async () => {
    try { const r = await navigator.serviceWorker.getRegistration(); if (r) await r.update(); } catch (e) { /* offline */ }
  };
  const buildId = async () => {
    if (!window.caches) return '';
    const k = (await caches.keys()).find((x) => x.startsWith('fnaz-core-'));
    return k ? k.slice('fnaz-core-'.length) : '';
  };
  const showBuild = async () => {
    const id = await buildId(), v = $('#title .ver');
    if (id && v) v.textContent = 'Web version ' + id + '. Produced by Qerh Cooperations.';
  };
  if ('serviceWorker' in navigator) {
    let hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadController) banner.hidden = false; hadController = true; showBuild(); });
    navigator.serviceWorker.register('sw.js').then(() => { checkNow(); showBuild(); }).catch(() => { /* offline support is optional */ });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checkNow(); });
    window.addEventListener('online', checkNow);
    window.addEventListener('pageshow', checkNow);
    setInterval(checkNow, 15 * 60 * 1000);
  }

  /* ----- install ----- */
  let deferred = null;
  const install = document.createElement('button');
  install.type = 'button';
  install.id = 'btnInstall';
  install.textContent = 'Install app';
  install.hidden = true;
  const menu = $('#title .menu');
  if (menu) menu.insertBefore(install, menu.querySelector('[data-act=settings]'));
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferred = e; install.hidden = standalone; });
  if (ios && !standalone) install.hidden = false;
  window.addEventListener('appinstalled', () => { install.hidden = true; });
  install.addEventListener('click', async () => {
    if (deferred) { deferred.prompt(); await deferred.userChoice.catch(() => {}); deferred = null; install.hidden = true; }
    else alert('To install: tap the Share button, then "Add to Home Screen".');
  });

  /* ----- offline videos (Settings) ----- */
  const row = document.createElement('div');
  row.className = 'set-row';
  row.innerHTML = '<span>Offline play</span><div class="up-row"><button type="button" id="offVideos">Download videos</button> <span id="offMsg" aria-live="polite"></span></div>';
  const settings = $('#settings .settings');
  if (settings) settings.insertBefore(row, settings.firstChild);
  const btn = $('#offVideos'), msg = $('#offMsg');

  /* ----- update controls (Settings) ----- */
  const vrow = document.createElement('div');
  vrow.className = 'set-row';
  vrow.innerHTML = '<span>Web version <span id="webVer"></span></span><div class="up-row"><button type="button" id="webCheck">Check for updates</button> <button type="button" id="webReset">Reset app files</button> <span id="webMsg" aria-live="polite"></span></div>';
  if (settings) settings.insertBefore(vrow, settings.firstChild);
  const wmsg = $('#webMsg'), wcheck = $('#webCheck');
  const refreshVer = async () => { $('#webVer').textContent = (await buildId()) || ''; };
  refreshVer();
  wcheck.addEventListener('click', async () => {
    wcheck.disabled = true; wmsg.textContent = 'Checking…';
    await checkNow();
    for (let i = 0; i < 12 && banner.hidden; i++) await new Promise((r) => setTimeout(r, 500));
    if (!banner.hidden) { wmsg.textContent = 'Update found. Restarting…'; setTimeout(() => location.reload(), 600); return; }
    await refreshVer();
    wmsg.textContent = navigator.onLine ? 'You have the latest version.' : 'You are offline, so this could not be checked.';
    wcheck.disabled = false;
  });
  $('#webReset').addEventListener('click', async () => {
    if (!confirm('Re-download the game files? Your progress and saved videos are kept.')) return;
    wmsg.textContent = 'Resetting…';
    try {
      for (const r of await navigator.serviceWorker.getRegistrations()) await r.unregister();
      for (const k of await caches.keys()) if (k.startsWith('fnaz-core-')) await caches.delete(k);
    } catch (e) { /* reload anyway */ }
    location.reload();
  });

  async function have() {
    if (!window.caches) return 0;
    const c = await caches.open('fnaz-videos');
    let n = 0;
    for (const v of VIDEOS) if (await c.match(new URL(v, location.href).href)) n++;
    return n;
  }
  async function refresh() {
    if (!window.caches) { btn.hidden = true; msg.textContent = 'Offline play is not supported in this browser.'; return; }
    const n = await have();
    const core = (await caches.keys()).some((k) => k.startsWith('fnaz-core-'));
    if (n === VIDEOS.length) { btn.textContent = 'Remove videos'; msg.textContent = 'The game and all videos work offline.'; btn.dataset.mode = 'remove'; }
    else { btn.textContent = 'Download videos (42 MB)'; msg.textContent = core ? 'The game itself already works offline. Videos are optional.' : 'Open the game once online to enable offline play.'; btn.dataset.mode = 'get'; }
    btn.disabled = false;
  }
  async function download() {
    const cache = await caches.open('fnaz-videos');
    btn.disabled = true;
    for (let i = 0; i < VIDEOS.length; i++) {
      const url = new URL(VIDEOS[i], location.href).href;
      if (await cache.match(url)) continue;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Could not download ' + VIDEOS[i]);
      const total = Number(res.headers.get('content-length')) || 0;
      const reader = res.body.getReader();
      const parts = [];
      let got = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        parts.push(value);
        got += value.length;
        msg.textContent = 'Downloading video ' + (i + 1) + ' of ' + VIDEOS.length + (total ? ': ' + Math.floor((got / total) * 100) + '%' : '…');
      }
      await cache.put(url, new Response(new Blob(parts, { type: 'video/mp4' }), { headers: { 'Content-Type': 'video/mp4' } }));
    }
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  }
  btn.addEventListener('click', async () => {
    try {
      if (btn.dataset.mode === 'remove') await caches.delete('fnaz-videos');
      else await download();
    } catch (e) { msg.textContent = e.message + ' Check your connection and try again.'; btn.disabled = false; return; }
    refresh();
  });
  refresh();
  if (navigator.serviceWorker) navigator.serviceWorker.ready.then(refresh);
})();
