/* Player settings and progress, saved in this browser. Every read and write is wrapped, since storage can be blocked. */
const KEY = 'fnaz2_settings_v1', STATS = 'fnaz2_stats_v1';
const touch = typeof matchMedia === 'function' && matchMedia('(pointer:coarse)').matches;
export const DEFAULTS = { liveFaces: true, brightness: 100, uiScale: 100, toggleMask: false, toggleLight: false, haptics: true, name: '', broker: '', master: 80, sfx: 100, music: 70, sens: 100, invert: false, fov: 68, quality: touch ? 'low' : 'medium', shake: true, flashing: true, hints: true, calls: true, voice: true, subtitles: true, fps: false, share: true, autopause: true, textSize: 100, contrast: false, cues: false, captions: false, assist: false, tutorial: true };
const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v && typeof v === 'object' && !Array.isArray(v) ? v : d; } catch (e) { return d; } };
/* Saved data can be hand-edited or half-written: keep only values of the right type (objects stay plain objects), numbers finite. */
const kindOf = (v) => (Array.isArray(v) ? 'array' : v === null ? 'null' : typeof v);
export const sanitize = (saved, defaults) => { const o = {}; for (const k of Object.keys(defaults)) { const d = defaults[k], v = saved ? saved[k] : undefined; o[k] = kindOf(v) === kindOf(d) && (typeof v !== 'number' || isFinite(v)) ? v : (typeof d === 'object' ? JSON.parse(JSON.stringify(d)) : d); } return o; };
const RANGE = { master: [0, 100], sfx: [0, 100], music: [0, 100], sens: [40, 200], fov: [55, 95], brightness: [60, 150], uiScale: [80, 130], textSize: [100, 160] };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };
export const cfg = sanitize(read(KEY, {}), DEFAULTS);
for (const k in RANGE) cfg[k] = Math.min(RANGE[k][1], Math.max(RANGE[k][0], cfg[k]));
if (!['low', 'medium', 'high'].includes(cfg.quality)) cfg.quality = DEFAULTS.quality;
cfg.broker = cfg.broker.slice(0, 80); cfg.name = cfg.name.slice(0, 40);
const subs = new Set();
export const onChange = (f) => { subs.add(f); return () => subs.delete(f); };
export function set(k, v) { cfg[k] = v; write(KEY, cfg); subs.forEach((f) => f(k, v)); }
export function resetSettings() { Object.assign(cfg, DEFAULTS); write(KEY, cfg); subs.forEach((f) => f('*')); }

const SD = { deaths: 0, wins: 0, beaten: 0, plays: 0, seconds: 0, killers: {}, best: {}, daily: {}, custom: 0, nightmare: 0, coins: 0, earned: 0, intro: false, lore: {}, items: {}, equip: {}, claim: '', streak: 0, tutorial: false, tutSteps: {} };
export const stats = sanitize(read(STATS, {}), SD);
for (const k of ['deaths', 'wins', 'beaten', 'plays', 'seconds', 'custom', 'nightmare', 'coins', 'earned', 'streak']) stats[k] = Math.max(0, stats[k]);
stats.beaten = Math.min(6, Math.floor(stats.beaten));
export const saveStats = () => write(STATS, stats);
/* Nights 3 to 6 are built but not released yet: only the first OPEN_NIGHTS can be played. */
export const OPEN_NIGHTS = 2;
export const unlocked = () => Math.min(OPEN_NIGHTS, Math.max(1, stats.beaten + 1));
export function resetProgress() { Object.assign(stats, JSON.parse(JSON.stringify(SD))); saveStats(); }
