import { UPGRADES, COSMETICS, tier, owns, equipped, buy, equip, claimDaily } from './shop.js';
import { stats } from './settings.js';
import { dayKey } from './online.js';

import { ic } from './icons.js';
export function openShop(ctx, tab = 'Upgrades') {
  const { $, openModal, closeModal, toast, Snd, G } = ctx; const free = !!(G.adm && G.adm.free);
  const rows = tab === 'Upgrades'
    ? UPGRADES.map((u) => { const t = tier(u.id), max = t >= u.tiers.length, nx = u.tiers[t]; return `<div class="item"><i>${ic(u.id)}</i><div><b>${u.name} ${'●'.repeat(t)}${'○'.repeat(u.tiers.length - t)}</b><span>${max ? u.tiers[t - 1].d : nx.d}</span></div><button class="sm ${max ? 'own' : ''}" data-up="${u.id}" ${max ? 'disabled' : ''}>${max ? 'Maxed' : free ? 'Free' : ic('coin') + nx.p}</button></div>`; }).join('')
    : COSMETICS.map((c) => { const has = owns(c.id), on = equipped(c.slot) === c.id; return `<div class="item"><i style="background:${c.color}33;color:${c.color}">${ic(c.slot)}</i><div><b>${c.name}</b><span>${c.slot === 'mask' ? 'Mask colour' : 'Flashlight colour'}</span></div><button class="sm ${on ? 'eq' : has ? 'own' : ''}" data-co="${c.id}">${on ? 'Equipped' : has ? 'Equip' : free ? 'Free' : ic('coin') + c.p}</button></div>`; }).join('');
  openModal(`<h2>Shop</h2><div class="coinbar"><span>Your coins</span><b>${ic('coin')}${stats.coins}</b></div><div class="tabs">${['Upgrades', 'Cosmetics'].map((t) => `<button class="${t === tab ? 'on' : ''}" data-tab="${t}">${t}</button>`).join('')}</div><div class="shopgrid">${rows}</div><div class="btnrow"><button id="dly">Daily reward</button><button class="pri" id="mClose">Done</button></div><p class="hint">Earn coins by surviving nights and hours, and with the daily reward. Upgrades apply to every night except the Daily challenge.</p>`);
  const m = $('#modal'); m.querySelectorAll('[data-tab]').forEach((b) => { b.onclick = () => openShop(ctx, b.dataset.tab); });
  m.querySelectorAll('[data-up]').forEach((b) => { b.onclick = () => { const r = buy(UPGRADES.find((u) => u.id === b.dataset.up), free); if (r) toast(r); else Snd.chime(); openShop(ctx, tab); ctx.refreshHome(); }; });
  m.querySelectorAll('[data-co]').forEach((b) => { b.onclick = () => { const c = COSMETICS.find((x) => x.id === b.dataset.co); if (owns(c.id)) equip(c); else { const r = buy(c, free); if (r) { toast(r); return; } Snd.chime(); } openShop(ctx, tab); ctx.applyCosmetics(); }; });
  $('#dly').onclick = () => { const a = dailyReward(ctx); if (!a) toast('You already took today\'s reward. Come back tomorrow.'); openShop(ctx, tab); };
  $('#mClose').onclick = () => { closeModal(); };
}
export function dailyReward(ctx) {
  const d = new Date(), today = dayKey(d), y = new Date(d.getTime() - 86400000), a = claimDaily(today, dayKey(y));
  if (a) { ctx.toast(`Daily reward: ${a} coins (day ${stats.streak} streak)`); ctx.Snd.chime(); ctx.refreshHome(); } return a;
}
