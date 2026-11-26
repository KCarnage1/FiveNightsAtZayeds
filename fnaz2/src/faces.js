/* Live faces: each character can be linked (by the admin) to a Discord account. The server looks the account's current profile
 * picture up (the bot token never leaves the server) and this file asks for the result every few minutes, loads the picture from
 * Discord's CDN and swaps it onto the character. Nothing is shown from a link the game cannot load: the bundled photo stays. */
import { cfg, onChange } from './settings.js';
import { setLiveFace, faceIsLive } from './models/kit.js';

const FUNC = 'https://vycivbylkaztscqfqlzj.supabase.co/functions/v1/discord-faces', KEY = 'sb_publishable_FuU_RDncjVu_suWe1P1EkA_HOvhiOgc';
const CACHE = 'fnaz2_faces_v1', EVERY = 5 * 60 * 1000;
export const status = { configured: null, last: 0, slots: {}, error: '' };
let timer = 0, current = {};
const slotOk = (s) => ['zayed', 'bubbles', 'taffy', 'sherbet', 'ibrahim', 'gelly', 'bidoof'].includes(s);
const urlOk = (u) => typeof u === 'string' && /^https:\/\/cdn\.discordapp\.com\/(avatars|embed\/avatars)\//.test(u); // only Discord's picture host

function loadImage(url) { return new Promise((res, rej) => { const i = new Image(); i.crossOrigin = 'anonymous'; i.onload = () => res(i); i.onerror = () => rej(new Error('image')); i.src = url; }); }
async function apply(faces) {
  for (const [slot, f] of Object.entries(faces || {})) {
    if (!slotOk(slot) || !f || !urlOk(f.url)) continue;
    const key = f.url + '|' + f.v; if (current[slot] === key && faceIsLive(slot)) continue;
    try { const img = await loadImage(f.url); if (setLiveFace(slot, img)) { current[slot] = key; status.slots[slot] = f.url; } } catch (e) { status.slots[slot] = ''; }
  }
}
export async function refreshFaces() {
  if (!cfg.liveFaces) return false;
  try {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 8000);
    const res = await fetch(FUNC, { headers: { apikey: KEY }, signal: ctl.signal, cache: 'no-store' }); clearTimeout(t);
    if (!res.ok) throw new Error('HTTP ' + res.status); const d = await res.json();
    status.configured = !!d.configured; status.last = Date.now(); status.error = '';
    try { localStorage.setItem(CACHE, JSON.stringify(d.faces || {})); } catch (e) { /* private mode */ }
    await apply(d.faces); return true;
  } catch (e) { status.error = String(e && e.message || e); return false; }
}
export function startLiveFaces() {
  if (timer) return;
  try { const c = JSON.parse(localStorage.getItem(CACHE) || 'null'); if (c && cfg.liveFaces) apply(c); } catch (e) { /* none yet */ } // last known pictures, straight away
  refreshFaces(); timer = setInterval(refreshFaces, EVERY);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && Date.now() - status.last > 60000) refreshFaces(); });
  onChange((k) => { if (k === 'liveFaces' && cfg.liveFaces) { current = {}; refreshFaces(); } });
}
