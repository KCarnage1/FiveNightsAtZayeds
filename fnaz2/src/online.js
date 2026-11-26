/* Online features. The server is the same small Supabase project the first game uses; players may only say "I am here" and read the
 * announcement. Everything else (like the daily challenge and share codes) works with no server at all. */
import { cfg } from './settings.js';
const BASE = 'https://vycivbylkaztscqfqlzj.supabase.co/rest/v1/rpc/', KEY = 'sb_publishable_FuU_RDncjVu_suWe1P1EkA_HOvhiOgc';
export const VERSION = '0.6.0';
export const status = { online: null, lastNews: null, lastBeat: 0 };
let pid = ''; try { pid = localStorage.getItem('fnaz_pid') || ''; if (!/^[A-Za-z0-9-]{8,40}$/.test(pid)) { pid = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now().toString(36)).replace(/[^A-Za-z0-9-]/g, '').slice(0, 36); localStorage.setItem('fnaz_pid', pid); } } catch (e) { pid = 'anon' + Math.random().toString(36).slice(2, 10); }

export async function rpc(name, args, ms = 6000) {
  const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), ms);
  try {
    const res = await fetch(BASE + name, { method: 'POST', headers: { apikey: KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(args || {}), signal: ctl.signal, cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text(); status.online = true; return text ? JSON.parse(text) : null;
  } catch (e) { status.online = false; throw e; } finally { clearTimeout(t); }
}
const platform = () => (window.fnaz ? 'desktop' : matchMedia('(pointer:coarse)').matches ? 'phone' : 'web');
export async function beat(screen, night) {
  if (!cfg.share || document.hidden) return;
  try { await rpc('heartbeat', { p_id: pid, p_ver: 'fnaz2-' + VERSION, p_platform: platform(), p_screen: String(screen || ''), p_night: night | 0, p_mode: 'single' }); status.lastBeat = Date.now(); } catch (e) { /* offline */ }
}
export async function news() {
  try { const r = await rpc('get_announcement', {}); const a = r && r.data ? r.data : r; if (a && (a.title || a.message) && a.id && !(a.until && /^\d{4}-\d{2}-\d{2}$/.test(a.until) && new Date(a.until + 'T23:59:59').getTime() < Date.now())) { status.lastNews = a; return a; } } catch (e) { /* offline */ }
  return null;
}
/* Daily challenge: the same setup for every player on a given date. */
export function dayKey(d = new Date()) { return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0'); }
export function dailySetup(key = dayKey()) {
  let h = 2166136261; for (const c of key) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
  const r = () => { h = (Math.imul(h ^ (h >>> 15), 2246822507) + 0x9e3779b9) >>> 0; return (h >>> 8) / 16777216; };
  const who = ['toyZayed', 'toyBubbles', 'toyTaffy', 'toySherbet', 'wZayed', 'wBubbles', 'wTaffy', 'wSherbet', 'gelly', 'bidoof', 'ibrahim'];
  const levels = {}; who.forEach((w) => { levels[w] = r() < 0.2 ? 0 : 3 + Math.floor(r() * 14); }); levels.ibrahim = Math.max(2, levels.ibrahim); return { seed: Math.floor(r() * 1e6) + 1, levels };
}
/* Share codes: "F2-" + one base-21 digit per character (0-20), so setups can be pasted anywhere. */
export const encode = (levels, order) => 'F2-' + order.map((w) => Math.min(20, Math.max(0, levels[w] | 0)).toString(21)).join('');
export function decode(code, order) {
  const m = /^F2-([0-9a-k]{11})$/i.exec(String(code).trim()); if (!m) return null; const o = {}; order.forEach((w, i) => { o[w] = parseInt(m[1][i], 21); }); return o;
}
