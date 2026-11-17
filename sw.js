/* Offline support for the web version (not used by the desktop app).
 *
 *  - The game itself (about 5 MB) is cached when the page is first opened, so it then works with no connection.
 *    Each new release gets a new cache name, so old files are replaced automatically (__VERSION__ is filled in when the site is built).
 *  - The three big videos (about 42 MB) are NOT cached automatically. Settings > "Offline videos" downloads them into their
 *    own cache, which survives updates. This worker serves them with HTTP range support, which phone browsers require for video. */
'use strict';
const VERSION = '__VERSION__';
const CORE = 'fnaz-core-' + VERSION;
const VIDEOS = 'fnaz-videos';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const list = await (await fetch('precache.json', { cache: 'no-store' })).json();
    const cache = await caches.open(CORE);
    await cache.addAll(list.map((u) => new Request(u, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('fnaz-core-') && k !== CORE) await caches.delete(k);
    await self.clients.claim();
  })());
});

function slice(buf, range) {
  const m = /bytes=(\d*)-(\d*)/.exec(range || '');
  if (!m) return new Response(buf, { status: 200, headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(buf.byteLength), 'Accept-Ranges': 'bytes' } });
  let start = m[1] === '' ? Math.max(0, buf.byteLength - Number(m[2])) : Number(m[1]);
  let end = m[1] === '' || m[2] === '' ? buf.byteLength - 1 : Math.min(Number(m[2]), buf.byteLength - 1);
  if (start > end || start >= buf.byteLength) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + buf.byteLength } });
  const part = buf.slice(start, end + 1);
  return new Response(part, { status: 206, headers: { 'Content-Type': 'video/mp4', 'Content-Range': `bytes ${start}-${end}/${buf.byteLength}`, 'Content-Length': String(part.byteLength), 'Accept-Ranges': 'bytes' } });
}

async function video(request) {
  const cached = await (await caches.open(VIDEOS)).match(request.url);
  if (cached) return slice(await cached.arrayBuffer(), request.headers.get('range'));
  return fetch(request); // not downloaded for offline: stream it normally
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('.mp4')) return event.respondWith(video(req));
  event.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true, cacheName: CORE });
    if (hit) return hit;
    try { return await fetch(req); } catch (e) {
      if (req.mode === 'navigate') { const home = await caches.match('./', { cacheName: CORE }) || await caches.match('index.html', { cacheName: CORE }); if (home) return home; }
      throw e;
    }
  })());
});
