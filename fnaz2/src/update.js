/* Updates from inside the game. The published folder contains version.json (written by the build). The game compares its own build
 * id with it on start, every ten minutes and when you press "Check for updates". If there is a newer one, it offers "Update now",
 * which clears the offline cache and reloads into the new version, then shows what changed. */
import { VERSION } from './online.js';

const BUILD = '__BUILD__'; // replaced when the web build is made; stays as-is in development
export const dev = BUILD.startsWith('__'); // a real build id never starts with two underscores
export const status = { available: null, checking: false, lastChecked: 0, error: '' };
const KEY = 'fnaz2_last_build', listeners = new Set();
export const onUpdate = (f) => { listeners.add(f); return () => listeners.delete(f); };
const emit = () => listeners.forEach((f) => f(status));

export async function check() {
  if (dev) { status.error = 'This is a development copy.'; emit(); return null; }
  status.checking = true; status.error = ''; emit();
  try {
    const res = await fetch('version.json?t=' + Date.now(), { cache: 'no-store' }); if (!res.ok) throw new Error('HTTP ' + res.status);
    const d = await res.json(); status.lastChecked = Date.now();
    status.available = d && d.build && d.build !== BUILD ? d : null;
  } catch (e) { status.error = 'Could not reach the update server.'; }
  status.checking = false; emit(); return status.available;
}
/* Clears every cached copy, then loads the new version. */
export async function applyUpdate() {
  try { if (navigator.serviceWorker) for (const r of await navigator.serviceWorker.getRegistrations()) await r.unregister(); if (window.caches) for (const k of await caches.keys()) await caches.delete(k); } catch (e) { /* reload anyway */ }
  location.reload();
}
/* After an update, what changed (notes come from the build's version.json). Returns the notes once per new build, or null. */
export async function whatsNew() {
  if (dev) return null; let last; try { last = localStorage.getItem(KEY); localStorage.setItem(KEY, BUILD); } catch (e) { return null; }
  if (!last || last === BUILD) return null;
  try { const d = await (await fetch('version.json?t=' + Date.now(), { cache: 'no-store' })).json(); if (d.build === BUILD) return { version: d.version || VERSION, notes: d.notes || [] }; } catch (e) { /* no notes */ }
  return { version: VERSION, notes: [] };
}
export function startUpdateChecks() { if (dev) return; setTimeout(check, 4000); setInterval(check, 10 * 60 * 1000); }
