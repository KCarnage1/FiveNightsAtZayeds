import { adminWordOk } from './admin.js';
import { ic } from './icons.js';
import { WHO, NODES, HOUR_SEC } from './ai.js';
import * as Online from './online.js';
import { stats, saveStats } from './settings.js';
import { UPGRADES, COSMETICS, buy, earn } from './shop.js';

/* The admin menu. Opened by typing the secret word; every power needs the server to confirm the password first. */
export function initAdmin(ctx) {
  const { G, $, esc, toast, openModal, closeModal } = ctx;
  G.adm = { on: false, god: false, freeze: false, battery: false, box: false, radar: false, free: false, speed: 1, used: false };
  let pw = '';
  const badge = document.createElement('div'); badge.className = 'adminbadge'; badge.hidden = true; badge.textContent = 'ADMIN'; document.body.appendChild(badge);
  const radar = document.createElement('div'); radar.id = 'radar'; radar.hidden = true; document.body.appendChild(radar);
  const used = () => { G.adm.used = true; if (G.S) G.S.cheated = true; };

  function login(msg = '') {
    openModal(`<h2>Admin</h2><div class="adm"><p>${esc(msg) || 'Enter the admin password. The server checks it; nothing unlocks without it.'}</p><input type="password" id="apw" placeholder="Password" autocomplete="off"><div class="btnrow"><button class="pri" id="ago">Log in</button><button id="aclose">Cancel</button></div></div>`);
    const go = async () => {
      const v = $('#apw').value; if (!v) return; $('#ago').disabled = true;
      try { const ok = await Online.rpc('admin_check', { p_secret: v }, 8000); if (ok === true) { pw = v; G.adm.on = true; badge.hidden = false; menu(); } else login('That password was not accepted.'); }
      catch (e) { login('Could not reach the server to check the password. Admin needs an internet connection.'); }
    };
    $('#ago').onclick = go; $('#apw').onkeydown = (e) => { e.stopPropagation(); if (e.key === 'Enter') go(); }; $('#aclose').onclick = closeModal; $('#apw').focus();
  }
  const tog = (k, label, p) => `<div class="row"><label for="a_${k}">${label}</label><input id="a_${k}" class="tog" data-flag="${k}" type="checkbox" ${G.adm[k] ? 'checked' : ''}>${p ? `<p>${p}</p>` : ''}</div>`;
  function menu(tab = 'Cheats') {
    const tabs = ['Cheats', 'Cast', 'Economy', 'Online', 'Broadcast'];
    let body = '';
    if (tab === 'Cheats') body = `<div class="adm">${tog('god', 'God mode', 'Nothing can kill you.')}${tog('freeze', 'Freeze the animatronics')}${tog('battery', 'Infinite flashlight')}${tog('box', 'Music box never runs down')}${tog('radar', 'Radar: show where everyone is')}${tog('free', 'Free shop')}
      <div class="row"><label for="a_speed">Game speed</label><select id="a_speed">${[0.5, 1, 2, 4, 8].map((x) => `<option value="${x}" ${G.adm.speed === x ? 'selected' : ''}>${x}×</option>`).join('')}</select></div>
      <div class="grid2"><button class="sm" id="a_hour">Skip an hour</button><button class="sm" id="a_win">Win the night</button><button class="sm" id="a_bat">Refill battery</button><button class="sm" id="a_box">Wind the box</button></div>
      <p class="hint">Runs that use admin powers do not earn coins or unlock nights.</p></div>`;
    if (tab === 'Cast') body = G.S ? `<div class="adm"><h3>Levels (this night)</h3>${WHO.map((w) => `<div class="row"><label for="l_${w}">${ctx.NAMES[w]}</label><span><input id="l_${w}" data-lv="${w}" type="range" min="0" max="20" value="${G.S.lv[w]}"> <output>${G.S.lv[w]}</output></span></div>`).join('')}
      <h3>Move one</h3><div class="grid2"><select id="m_who">${WHO.map((w) => `<option value="${w}">${ctx.NAMES[w]}</option>`).join('')}</select><select id="m_to">${NODES.map((n) => `<option value="${n}">${n}</option>`).join('')}</select></div>
      <div class="grid2"><button class="sm" id="m_go">Send</button><button class="sm" id="m_clear">Clear the office</button><button class="sm" id="m_hall">Everyone to the hall</button><button class="sm" id="m_home">Everyone home</button></div></div>` : '<p>Start a night to use these.</p>';
    if (tab === 'Economy') body = `<div class="adm"><div class="coinbar"><span>Coins</span><b>${ic('coin')}${stats.coins}</b></div><div class="grid2"><button class="sm" data-coin="100">+100</button><button class="sm" data-coin="1000">+1000</button><button class="sm" data-coin="10000">+10000</button><button class="sm" data-coin="0">Set to 0</button></div>
      <div class="grid2"><button class="sm" id="e_all">Unlock every night</button><button class="sm" id="e_items">Own every item</button><button class="sm" id="e_claim">Reset daily reward</button><button class="sm" id="e_stats">Clear stats</button></div></div>`;
    if (tab === 'Online') body = `<div class="adm"><p id="olist">Loading…</p><div class="btnrow"><button class="sm" id="o_refresh">Refresh</button></div>
      <h3>Co-op</h3><p>${G.net ? `state: ${G.net.state} · room: ${G.net.code || '-'} · ping: ${G.net.ping} ms` : 'not started'}</p></div>`;
    if (tab === 'Broadcast') body = `<div class="adm"><p>Shows a message on every player's home screen (FNAZ 1 and 2).</p><input type="text" id="b_title" maxlength="60" placeholder="Title"><textarea id="b_msg" rows="3" maxlength="300" placeholder="Message"></textarea><div class="grid2"><button class="sm pri" id="b_pub">Publish</button><button class="sm danger" id="b_down">Take it down</button></div><p id="b_res" class="hint"></p></div>`;
    openModal(`<h2>Admin <span class="tag">LIVE</span></h2><div class="tabs">${tabs.map((t) => `<button class="${t === tab ? 'on' : ''}" data-tab="${t}">${t}</button>`).join('')}</div>${body}<div class="btnrow"><button id="a_out">Log out</button><button class="pri" id="mClose">Done</button></div>`);
    const m = $('#modal'); m.querySelectorAll('[data-tab]').forEach((b) => { b.onclick = () => menu(b.dataset.tab); });
    m.querySelectorAll('[data-flag]').forEach((el) => { el.onchange = () => { G.adm[el.dataset.flag] = el.checked; if (el.checked && el.dataset.flag !== 'free' && el.dataset.flag !== 'radar') used(); apply(); }; });
    const sp = $('#a_speed'); if (sp) sp.onchange = () => { G.adm.speed = +sp.value; if (G.adm.speed !== 1) used(); apply(); };
    const S = G.S, on = (id, f) => { const e = $('#' + id); if (e) e.onclick = f; };
    on('a_hour', () => { if (S) { used(); S.t = (S.hour + 1) * HOUR_SEC + 0.01; toast('Skipped an hour'); } }); on('a_win', () => { if (S) { used(); S.t = 6 * HOUR_SEC - 0.1; } });
    on('a_bat', () => { if (S) S.battery = 100; }); on('a_box', () => { if (S) S.box = 100; });
    m.querySelectorAll('[data-lv]').forEach((el) => { el.oninput = () => { used(); S.lv[el.dataset.lv] = +el.value; el.nextElementSibling.textContent = el.value; }; });
    on('m_go', () => { used(); const w = $('#m_who').value, n = $('#m_to').value; S.pos[w] = n; S.offT[w] = 0; S.acc[w] = 0; if (n === 'office') G.from[w] = 'hall'; toast(ctx.NAMES[w] + ' → ' + n); });
    on('m_clear', () => { used(); for (const w of WHO) if (S.pos[w] === 'office') { S.pos[w] = 'main'; S.offT[w] = 0; } }); on('m_hall', () => { used(); for (const w of WHO) if (w !== 'ibrahim') S.pos[w] = 'hall'; }); on('m_home', () => { used(); for (const w of WHO) S.pos[w] = ({ gelly: 'kids', bidoof: 'game', ibrahim: 'prize' }[w]) || 'stage'; });
    m.querySelectorAll('[data-coin]').forEach((b) => { b.onclick = () => { const n = +b.dataset.coin; if (n === 0) { stats.coins = 0; saveStats(); } else earn(n); menu('Economy'); ctx.refreshHome(); }; });
    on('e_all', () => { stats.beaten = 6; saveStats(); toast('All nights unlocked'); ctx.refreshHome(); }); on('e_items', () => { for (const u of UPGRADES) while ((stats.items[u.id] | 0) < u.tiers.length) buy(u, true); for (const c of COSMETICS) buy(c, true); toast('Owned everything'); ctx.applyCosmetics(); });
    on('e_claim', () => { stats.claim = ''; stats.streak = 0; saveStats(); toast('Daily reward reset'); }); on('e_stats', () => { stats.deaths = stats.wins = 0; stats.killers = {}; stats.seconds = 0; saveStats(); toast('Stats cleared'); });
    if (tab === 'Online') { const load = async () => { try { const d = await Online.rpc('admin_online', { p_secret: pw }, 7000); $('#olist') && ($('#olist').innerHTML = d ? `<b>${d.total}</b> online now (${d.today} today)<br>` + d.players.slice(0, 20).map((p) => `${esc(p.id)} · ${esc(p.platform || '?')} · v${esc(p.ver || '?')} · ${esc(p.screen || '')}${p.night ? ' n' + p.night : ''}`).join('<br>') : 'The server did not accept the password. Log out and log in again.'); } catch (e) { $('#olist') && ($('#olist').textContent = 'Could not reach the server. Check your connection, then press Refresh.'); } }; load(); on('o_refresh', load); }
    if (tab === 'Broadcast') {
      const pub = async (obj) => { try { const r = await Online.rpc('admin_publish', { p_secret: pw, p_data: obj }, 8000); $('#b_res').textContent = r ? 'Published.' : 'The server refused (password?).'; } catch (e) { $('#b_res').textContent = 'Could not reach the server.'; } };
      on('b_pub', () => { const t = $('#b_title').value.trim(), msg = $('#b_msg').value.trim(); if (!t && !msg) { $('#b_res').textContent = 'Write something first.'; return; } pub({ id: 'f2-' + Date.now().toString(36), title: t || 'Message', message: msg }); });
      on('b_down', () => pub({}));
    }
    on('a_out', () => { pw = ''; G.adm.on = false; for (const k of ['god', 'freeze', 'battery', 'box', 'radar', 'free']) G.adm[k] = false; G.adm.speed = 1; badge.hidden = true; apply(); closeModal(); });
    for (const el of m.querySelectorAll('input,textarea,select')) el.addEventListener('keydown', (e) => e.stopPropagation());
    $('#mClose').onclick = closeModal;
  }
  function apply() { const S = G.S; if (S) { S.inv = !!G.adm.god; S.cheat = { freeze: G.adm.freeze, battery: G.adm.battery, box: G.adm.box }; } G.speed = (G.opts && G.opts.speed || 1) * G.adm.speed; radar.hidden = !G.adm.radar; }
  function frame() { if (!G.S || G.mode !== 'play') { radar.hidden = true; return; } if (G.adm.on) { apply(); } if (G.adm.radar && G.adm.on) { radar.hidden = false; radar.innerHTML = WHO.map((w) => `${ctx.NAMES[w]}: <b>${G.S.pos[w]}</b>`).join('<br>'); } }
  return { open: () => (G.adm.on ? menu() : login()), frame, isOn: () => G.adm.on, wordOk: adminWordOk };
}
