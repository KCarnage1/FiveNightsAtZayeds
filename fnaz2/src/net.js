/* Peer-to-peer co-op over WebRTC (PeerJS). The host runs the night; the guest is the Operator (cameras and music box) and the host is
 * the Guard (flashlight and mask). Only a tiny signalling broker is used to introduce the two players; the game itself goes
 * straight between them. A different broker can be set with ?peer=host:port (used by the tests) or in Settings. */
import Peer from 'peerjs';
import { cfg } from './settings.js';

export const PROTO = 2;
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => Array.from({ length: 5 }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');
export const cleanCode = (c) => String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/[01OI]/g, '').slice(0, 5);

export function peerOptions() {
  const q = new URLSearchParams(location.search).get('peer') || cfg.broker || '';
  const o = { debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478' }] } };
  if (q) { const m = /^(?:(https?):\/\/)?([^:/]+)(?::(\d+))?(\/.*)?$/.exec(q.trim()); if (m) { o.host = m[2]; o.port = m[3] ? +m[3] : m[1] === 'https' ? 443 : 9000; o.secure = m[1] === 'https'; o.path = m[4] || '/'; } }
  return o;
}

export function createNet() {
  const N = { role: null, code: '', state: 'idle', error: '', ping: 0, peer: null, conn: null, handlers: {}, stateFns: new Set(), lastRx: 0, timers: [], bytes: 0 };
  const setState = (s, err = '') => { if (N.state === s && N.error === err) return; N.state = s; N.error = err; N.stateFns.forEach((f) => f(s, err)); };
  N.onState = (f) => { N.stateFns.add(f); return () => N.stateFns.delete(f); };
  N.on = (type, f) => { N.handlers[type] = f; };
  N.send = (type, data) => { if (N.conn && N.conn.open) { try { N.conn.send({ t: type, d: data }); return true; } catch (e) { return false; } } return false; };
  const clearTimers = () => { N.timers.forEach(clearInterval); N.timers = []; };
  function wire(conn) {
    N.conn = conn; N.lastRx = Date.now();
    conn.on('data', (m) => {
      N.lastRx = Date.now(); if (!m || typeof m.t !== 'string') return;
      if (m.t === 'ping') { N.send('pong', m.d); return; }
      if (m.t === 'pong') { N.ping = Math.max(1, Date.now() - (+m.d || Date.now())); return; }
      const h = N.handlers[m.t]; if (h) { try { h(m.d); } catch (e) { console.error('net handler', m.t, e); } }
    });
    conn.on('close', () => { if (N.state === 'connected') setState('lost', 'Your partner disconnected.'); });
    conn.on('error', (e) => { if (N.state === 'connected') setState('lost', 'Connection error.'); else setState('error', String(e && e.message || e)); });
    const go = () => { setState('connected'); N.send('hello', { v: PROTO, name: cfg.name || '' }); N.timers.push(setInterval(() => { N.send('ping', Date.now()); if (Date.now() - N.lastRx > 9000 && N.state === 'connected') setState('lost', 'Lost contact with your partner.'); }, 2000)); };
    if (conn.open) go(); else conn.on('open', go);
  }
  N.host = (tries = 0) => new Promise((resolve, reject) => {
    N.close(); N.role = 'host'; N.code = newCode(); setState('hosting');
    const p = N.peer = new Peer('fnaz2-' + N.code, peerOptions());
    p.on('open', () => resolve(N.code));
    p.on('connection', (c) => { if (N.conn && N.conn.open) { c.on('open', () => { c.send({ t: 'full', d: 1 }); setTimeout(() => c.close(), 200); }); return; } wire(c); });
    p.on('error', (e) => { if (e.type === 'unavailable-id' && tries < 4) { p.destroy(); N.host(tries + 1).then(resolve, reject); return; } setState('error', friendly(e)); reject(e); });
    p.on('disconnected', () => { try { if (!p.destroyed) p.reconnect(); } catch (err) { /* ignore */ } });
  });
  N.join = (code) => new Promise((resolve, reject) => {
    N.close(); code = cleanCode(code); if (code.length !== 5) { setState('error', 'Room codes have 5 letters or numbers.'); reject(new Error('code')); return; }
    N.role = 'guest'; N.code = code; setState('joining');
    const p = N.peer = new Peer(peerOptions());
    let done = false; const fail = (m) => { if (done) return; done = true; setState('error', m); reject(new Error(m)); };
    const to = setTimeout(() => fail('Could not reach that room. Check the code and that your partner is waiting.'), 15000);
    p.on('open', () => {
      const c = p.connect('fnaz2-' + code, { reliable: true, serialization: 'json' });
      c.on('data', (m) => { if (!m) return; if (m.t === 'full') { fail('That room is already full.'); c.close(); } else if (m.t === 'hello' && !done) { done = true; clearTimeout(to); resolve(code); } });
      wire(c);
    });
    p.on('error', (e) => { clearTimeout(to); fail(e.type === 'peer-unavailable' ? 'No room with that code. Check it and try again.' : friendly(e)); });
  });
  N.reopen = () => { clearTimers(); try { if (N.conn) N.conn.close(); } catch (e) { /* ignore */ } N.conn = null; N.ping = 0; setState('hosting'); };
  N.close = () => { clearTimers(); try { if (N.conn) N.conn.close(); } catch (e) { /* ignore */ } try { if (N.peer) N.peer.destroy(); } catch (e) { /* ignore */ } N.conn = N.peer = null; N.role = null; N.code = ''; N.ping = 0; if (N.state !== 'idle') setState('idle'); };
  return N;
}
function friendly(e) {
  const t = e && e.type;
  if (t === 'network' || t === 'server-error' || t === 'socket-error' || t === 'socket-closed') return 'Could not reach the matchmaking server. Check your internet connection.';
  if (t === 'browser-incompatible') return 'This browser does not support peer-to-peer connections.';
  if (t === 'webrtc') return 'The direct connection failed (a strict network or firewall may be blocking it).';
  return String((e && e.message) || e || 'Connection problem.');
}
