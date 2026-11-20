/* The shop: coins are earned by surviving. Upgrades are permanent and change how a night plays; cosmetics change how it looks. */
import { stats, saveStats } from './settings.js';

export const UPGRADES = [
  { id: 'battery', name: 'Long-life battery', tiers: [{ p: 150, d: 'Flashlight drains 15% slower' }, { p: 300, d: 'Flashlight drains 30% slower' }, { p: 550, d: 'Flashlight drains 45% slower' }], apply: (m, t) => { m.drain *= [1, 0.85, 0.7, 0.55][t]; } },
  { id: 'charger', name: 'Quick charger', tiers: [{ p: 200, d: 'Flashlight recharges 40% faster' }, { p: 400, d: 'Flashlight recharges 80% faster' }], apply: (m, t) => { m.charge *= [1, 1.4, 1.8][t]; } },
  { id: 'spring', name: 'Stronger spring', tiers: [{ p: 250, d: 'Music box runs down 20% slower' }, { p: 450, d: 'Music box runs down 40% slower' }], apply: (m, t) => { m.box *= [1, 0.8, 0.6][t]; } },
  { id: 'quick', name: 'Quick mask', tiers: [{ p: 200, d: 'Mask goes on 50% faster' }], apply: (m, t) => { m.maskSpeed *= [1, 1.5][t]; } },
  { id: 'charm', name: 'Lucky charm', tiers: [{ p: 700, d: 'Survive one would-be kill per night' }], apply: (m, t) => { m.revive += t; } }
];
export const COSMETICS = [
  { id: 'mask:camel', slot: 'mask', name: 'Camel mask', p: 0, color: '#c99556' }, { id: 'mask:cat', slot: 'mask', name: 'Cat mask', p: 120, color: '#ff8cc0' }, { id: 'mask:goat', slot: 'mask', name: 'Goat mask', p: 120, color: '#f0e6d0' },
  { id: 'mask:falcon', slot: 'mask', name: 'Falcon mask', p: 160, color: '#e8872b' }, { id: 'mask:gold', slot: 'mask', name: 'Golden mask', p: 400, color: '#ffd24a' },
  { id: 'light:warm', slot: 'light', name: 'Warm light', p: 0, color: '#fff2cf' }, { id: 'light:cool', slot: 'light', name: 'Cool light', p: 90, color: '#cfe6ff' }, { id: 'light:green', slot: 'light', name: 'Night-vision light', p: 140, color: '#b6ffb0' }, { id: 'light:red', slot: 'light', name: 'Red light', p: 140, color: '#ff8a7a' }
];
export const owns = (id) => !!stats.items[id] || (COSMETICS.find((c) => c.id === id) || {}).p === 0;
export const tier = (id) => stats.items[id] | 0;
export const equipped = (slot) => stats.equip[slot] || (slot === 'mask' ? 'mask:camel' : 'light:warm');
export const colorOf = (slot) => (COSMETICS.find((c) => c.id === equipped(slot)) || {}).color || '#fff';
/* Everything the upgrades add up to, for the AI. */
export function mods() { const m = { drain: 1, charge: 1, box: 1, revive: 0, maskSpeed: 7 }; for (const u of UPGRADES) { const t = tier(u.id); if (t) u.apply(m, t); } return m; }

export function buy(item, free = false) {
  if (item.tiers) { const t = tier(item.id); if (t >= item.tiers.length) return 'Maxed out'; const p = item.tiers[t].p; if (!free && stats.coins < p) return 'Not enough coins'; if (!free) stats.coins -= p; stats.items[item.id] = t + 1; saveStats(); return ''; }
  if (owns(item.id)) return 'Already yours'; if (!free && stats.coins < item.p) return 'Not enough coins'; if (!free) stats.coins -= item.p; stats.items[item.id] = 1; stats.equip[item.slot] = item.id; saveStats(); return '';
}
export function equip(item) { if (!owns(item.id)) return; stats.equip[item.slot] = item.id; saveStats(); }
export const earn = (n) => { n = Math.max(0, Math.floor(n)); stats.coins += n; stats.earned += n; saveStats(); return n; };
/* Coins for a finished night. */
export function reward(win, night, hour, custom, levels) {
  const parts = [];
  if (win) { const base = custom ? Math.round(Object.values(levels || {}).reduce((a, b) => a + b, 0) * 1.5) : 40 + night * 25; parts.push(['Survived', base]); } 
  if (hour > 0) parts.push(['Hours survived', hour * 8]);
  const total = parts.reduce((a, b) => a + b[1], 0); return { parts, total };
}
/* Daily login reward: once per UTC day, bigger with a streak. */
export function claimDaily(day, yesterday) {
  if (stats.claim === day) return 0; stats.streak = stats.claim === yesterday ? Math.min(7, stats.streak + 1) : 1; stats.claim = day; const amount = 60 + stats.streak * 15; earn(amount); return amount;
}
