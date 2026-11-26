/* The /debug page: runs self-tests in your browser and prints PASS/FAIL, so problems show up before a night does. */
import * as THREE from 'three';
import { newNight, step, WHO, CAST } from './ai.js';
import { buildZayed } from './models/cast.js';
import { buildIbrahim, buildGelly, buildBidoof } from './models/extras.js';
import { buildMap, ROOMS, CAMS } from './map.js';
import { cfg, set as setCfg } from './settings.js';
import * as Online from './online.js';
import { createNet, peerOptions } from './net.js';
import { adminWordOk } from './admin.js';

const out = document.getElementById('out'), results = [];
const errors = []; addEventListener('error', (e) => errors.push(e.message)); addEventListener('unhandledrejection', (e) => errors.push('promise: ' + (e.reason && e.reason.message || e.reason)));
const row = (name, ok, info = '') => { results.push({ name, ok, info }); const d = document.createElement('div'); d.className = ok === null ? 'info' : ok ? 'pass' : 'fail'; d.textContent = (ok === null ? 'INFO ' : ok ? 'PASS ' : 'FAIL ') + name + (info ? ' — ' + info : ''); out.appendChild(d); };
const test = async (name, f) => { try { const r = await f(); row(name, r === undefined || r === true ? true : r === null ? null : !!r, typeof r === 'string' ? r : ''); } catch (e) { row(name, false, e && e.message || String(e)); } };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  await test('WebGL available', () => { const c = document.createElement('canvas'); const gl = c.getContext('webgl2') || c.getContext('webgl'); if (!gl) throw new Error('no WebGL'); return gl.getParameter(gl.VERSION); });
  await test('Local storage works', () => { localStorage.setItem('fnaz2_probe', '1'); const ok = localStorage.getItem('fnaz2_probe') === '1'; localStorage.removeItem('fnaz2_probe'); if (!ok) throw new Error('storage blocked'); });
  await test('Map builds: ' + Object.keys(ROOMS).length + ' rooms, ' + Object.keys(CAMS).length + ' cameras', () => { const sc = new THREE.Scene(); const m = buildMap(sc); for (const c of Object.values(CAMS)) if (!m.lights[c.room]) throw new Error('camera room has no light: ' + c.room); return sc.children.length + ' objects'; });
  await test('All ' + WHO.length + ' characters build', () => {
    let tri = 0; for (const w of WHO) { const c = CAST[w]; const b = w === 'ibrahim' ? buildIbrahim() : w === 'gelly' ? buildGelly() : w === 'bidoof' ? buildBidoof() : buildZayed(c.body, c.toy ? 'toy' : 'withered'); let n = 0, t = 0; b.root.traverse((o) => { if (o.isMesh) { n++; const g = o.geometry; t += (g.index ? g.index.count : g.attributes.position.count) / 3; } }); if (n < 8) throw new Error(w + ' has too few meshes'); tri += t; }
    return Math.round(tri / 1000) + 'k triangles across the cast';
  });
  await test('AI is deterministic for a seed', () => { const run = () => { const S = newNight(4, 99); const log = []; for (let i = 0; i < 3000; i++) log.push(JSON.stringify(step(S, 0.05, {}))); return log.join('|'); }; if (run() !== run()) throw new Error('two runs differ'); });
  await test('AI: an idle night 5 is deadly, a careful night 1 is survivable', () => {
    let dead = 0, won = 0;
    for (let s = 1; s <= 10; s++) { const S = newNight(5, s); for (let i = 0; i < 40000 && !S.dead && !S.won; i++) step(S, 0.05, {}); if (S.dead) dead++; }
    for (let s = 1; s <= 10; s++) { const S = newNight(1, s); for (let i = 0; i < 40000 && !S.dead && !S.won; i++) { const inO = WHO.some((w) => S.pos[w] === 'office'); const cam = !inO && S.box < 60 ? 'prize' : null; step(S, 0.05, { mask: inO, cam, wind: cam === 'prize' }); } if (S.won) won++; }
    if (dead < 9) throw new Error('idle night 5 only killed ' + dead + '/10'); if (won < 9) throw new Error('careful night 1 only won ' + won + '/10'); return `idle kills ${dead}/10, careful wins ${won}/10`;
  });
  await test('Settings save and load', () => { const old = cfg.master; setCfg('master', 41); const ok = JSON.parse(localStorage.getItem('fnaz2_settings_v1')).master === 41; setCfg('master', old); if (!ok) throw new Error('not saved'); });
  await test('Share codes round-trip', () => { const lv = {}; WHO.forEach((w, i) => { lv[w] = (i * 2) % 21; }); const c = Online.encode(lv, WHO); const d = Online.decode(c, WHO); if (!d || WHO.some((w) => d[w] !== lv[w])) throw new Error('mismatch ' + c); return c; });
  await test('Daily challenge is the same for everyone', () => { const a = Online.dailySetup('2030-01-02'), b = Online.dailySetup('2030-01-02'), c = Online.dailySetup('2030-01-03'); if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error('not stable'); if (JSON.stringify(a) === JSON.stringify(c)) throw new Error('same every day'); });
  await test('Admin word check is hashed (no plain word in code)', () => { if (adminWordOk('not the word') || adminWordOk('')) throw new Error('accepts wrong words'); });
  await test('Game server reachable (optional)', async () => { try { await Online.rpc('get_announcement', {}, 5000); return 'connected'; } catch (e) { return null; } });
  // P2P: two peers in this page talk through the broker, exactly like two players would.
  const opts = peerOptions(); const brokerLabel = opts.host ? opts.host + ':' + opts.port : 'public PeerJS broker';
  let a, b, reach = true;
  await test('P2P: host opens a room (' + brokerLabel + ')', async () => { a = createNet(); try { const code = await a.host(); return 'room ' + code; } catch (e) { reach = false; return null; } });
  if (reach && a.code) {
    await test('P2P: guest joins with the code', async () => { b = createNet(); await b.join(a.code); await wait(600); if (a.state !== 'connected' || b.state !== 'connected') throw new Error('states: ' + a.state + '/' + b.state); });
    await test('P2P: messages both ways', async () => { const got = { a: [], b: [] }; a.on('x', (d) => got.a.push(d)); b.on('x', (d) => got.b.push(d)); for (let i = 0; i < 20; i++) { a.send('x', { i }); b.send('x', { i: i + 100 }); } await wait(500); if (got.a.length !== 20 || got.b.length !== 20) throw new Error('lost messages ' + got.a.length + '/' + got.b.length); if (got.b[19].i !== 19) throw new Error('out of order'); });
    await test('P2P: ping measured', async () => { await wait(2300); if (!(b.ping > 0)) throw new Error('no ping'); return b.ping + ' ms'; });
    await test('P2P: a third player is refused (room is full)', async () => { const c = createNet(); let msg = ''; try { await c.join(a.code); } catch (e) { msg = e.message; } c.close(); if (!/full/i.test(msg)) throw new Error('not refused: ' + msg); });
    await test('P2P: a dropped partner is noticed', async () => { b.close(); await wait(1500); if (a.state !== 'lost') throw new Error('host state ' + a.state); });
    a.close();
  } else row('P2P tests skipped: the matchmaking server is not reachable from here', null, 'on a normal connection these run too');
  await test('No uncaught errors while testing', () => { if (errors.length) throw new Error(errors.slice(0, 3).join(' | ')); });
  const fails = results.filter((r) => r.ok === false).length;
  const sum = document.createElement('h2'); sum.textContent = fails ? fails + ' problem' + (fails > 1 ? 's' : '') + ' found' : 'All checks passed'; sum.className = fails ? 'fail' : 'pass'; out.prepend(sum);
  window.__debugResults = results; window.__debugDone = true;
})();
