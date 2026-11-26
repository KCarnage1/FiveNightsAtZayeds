/* Offline support. Everything the game needs is cached the first time it loads, so it opens with no connection (online features
 * simply stay quiet). The game files are fetched fresh when there is a network, and the cached copy is the fallback. */
const VERSION = '__VERSION__', CACHE = 'fnaz2-' + VERSION;
self.addEventListener('install', (e) => {
  e.waitUntil((async () => { const c = await caches.open(CACHE); let list = ['./']; try { list = await (await fetch('precache.json', { cache: 'no-store' })).json(); } catch (err) { /* cache on demand */ } await Promise.all(list.map((u) => c.add(u).catch(() => null))); self.skipWaiting(); })());
});
self.addEventListener('activate', (e) => { e.waitUntil((async () => { for (const k of await caches.keys()) if (k.startsWith('fnaz2-') && k !== CACHE) await caches.delete(k); await self.clients.claim(); })()); });
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return; const u = new URL(r.url); if (u.origin !== location.origin) return; // never touch the game server or the matchmaking server
  e.respondWith((async () => { const c = await caches.open(CACHE); try { const res = await fetch(r); if (res.ok && !u.pathname.endsWith('sw.js')) c.put(r, res.clone()); return res; } catch (err) { return (await c.match(r, { ignoreSearch: true })) || (r.mode === 'navigate' ? await c.match('./') : Response.error()); } })());
});
