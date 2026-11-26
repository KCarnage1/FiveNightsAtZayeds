/* Player settings and progress, saved in this browser. Every read and write is wrapped, since storage can be blocked. */
const KEY = 'fnaz2_settings_v1', STATS = 'fnaz2_stats_v1';
const touch = typeof matchMedia === 'function' && matchMedia('(pointer:coarse)').matches;
export const DEFAULTS = { liveFaces: true, brightness: 100, uiScale: 100, toggleMask: false, toggleLight: false, haptics: true, name: '', broker: '', master: 80, sfx: 100, music: 70, sens: 100, invert: false, fov: 68, quality: touch ? 'low' : 'medium', shake: true, flashing: true, hints: true, calls: true, voice: true, subtitles: true, fps: false, share: true, autopause: true };
const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v && typeof v === 'object' ? v : d; } catch (e) { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };
export const cfg = Object.assign({}, DEFAULTS, read(KEY, {}));
const subs = new Set();
export const onChange = (f) => { subs.add(f); return () => subs.delete(f); };
export function set(k, v) { cfg[k] = v; write(KEY, cfg); subs.forEach((f) => f(k, v)); }
export function resetSettings() { Object.assign(cfg, DEFAULTS); write(KEY, cfg); subs.forEach((f) => f('*')); }

const SD = { deaths: 0, wins: 0, beaten: 0, plays: 0, seconds: 0, killers: {}, best: {}, daily: {}, custom: 0, nightmare: 0, coins: 0, earned: 0, intro: false, lore: {}, items: {}, equip: {}, claim: '', streak: 0 };
export const stats = Object.assign({}, SD, read(STATS, {}));
export const saveStats = () => write(STATS, stats);
export const unlocked = () => Math.max(1, stats.beaten + 1 > 6 ? 6 : stats.beaten + 1);
export function resetProgress() { Object.assign(stats, JSON.parse(JSON.stringify(SD))); saveStats(); }
