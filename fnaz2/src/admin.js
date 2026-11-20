/* Admin: the secret word is only stored as hashes. Typing it opens a login; the password is checked by the server (admin_check),
 * so nothing here can be used without it. This file holds the word check; the menu itself is in main.js. */
const H32 = (t) => { let h = 0x811c9dc5; t = 'fnaz|' + t; for (let r = 0; r < 3; r++) for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const CODE_H = [3313290362, 719455989, 3870594709, 2614364126, 371924548, 393033805, 2869192982, 2811781118];
export const adminWordOk = (w) => { w = String(w || '').trim().toLowerCase(); return w.length === CODE_H.length && H32(w) === CODE_H[CODE_H.length - 1]; };
/* Feed key presses; returns true when the full word has just been typed. */
export function wordTyper() {
  let typed = '';
  return (k) => { k = String(k).toLowerCase(); if (k.length !== 1) return false; const next = typed + k; typed = next.length <= CODE_H.length && H32(next) === CODE_H[next.length - 1] ? next : H32(k) === CODE_H[0] ? k : ''; if (typed.length === CODE_H.length) { typed = ''; return true; } return false; };
}
