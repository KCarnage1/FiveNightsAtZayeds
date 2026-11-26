import * as THREE from 'three';
import { canvasTex } from './models/kit.js';
import { DOCS, byId, has } from './lore.js';

/* The papers in the world. They are drawn on small planes, appear from the night they belong to, and disappear once picked up. */
const items = [];
function art(kind, d) {
  const W = 256, H = Math.round(256 * d.at.h / d.at.w);
  return canvasTex(W, H, (g) => {
    const line = (t, x, y, sz = 16, col = '#2a2418', wt = 600) => { g.fillStyle = col; g.font = `${wt} ${sz}px "Courier New",monospace`; g.fillText(t, x, y); };
    if (kind === 'menu') { g.fillStyle = '#1d3a2a'; g.fillRect(0, 0, W, H); g.strokeStyle = '#e8d8a0'; g.lineWidth = 6; g.strokeRect(6, 6, W - 12, H - 12); line("ABDULLA'S", 56, 40, 24, '#ffd24a', 800); line('CAFETERIA', 62, 66, 22, '#ffd24a', 800); for (let i = 0; i < 6; i++) line('~~~~~~~~~~~~~~~~', 28, 100 + i * 22, 14, '#e8d8a0'); }
    else if (kind === 'slip') { g.fillStyle = '#f2ead2'; g.fillRect(0, 0, W, H); g.fillStyle = '#d33'; g.fillRect(0, 0, W, 26); line('ORDER', 8, 18, 14, '#fff', 800); line(d.digit ? 'No. ' + d.digit : 'TAG', 90, H * .55, d.digit ? 54 : 30, '#2a2418', 800); for (let i = 0; i < 4; i++) g.fillRect(14, H * .7 + i * 12, W - 28, 2); }
    else if (kind === 'board') { g.fillStyle = '#e8ecee'; g.fillRect(0, 0, W, H); g.strokeStyle = '#7a8088'; g.lineWidth = 8; g.strokeRect(4, 4, W - 8, H - 8); for (let i = 0; i < 6; i++) { line('Camel -> took  ' + '✓'.repeat(i % 2), 14, 40 + i * 28, 14, i % 2 ? '#1a4a9a' : '#9a1a1a'); } }
    else if (kind === 'plan') { g.fillStyle = '#1f4a8a'; g.fillRect(0, 0, W, H); g.strokeStyle = '#cfe4ff'; g.lineWidth = 2; for (let i = 0; i < 6; i++) { g.strokeRect(20 + i * 6, 30 + i * 14, W - 60, 16); } g.beginPath(); g.moveTo(30, 30); g.lineTo(30, H - 20); g.lineTo(W - 30, H - 20); g.stroke(); line('ORDER CHUTE', 60, 22, 14, '#cfe4ff', 800); }
    else if (kind === 'cupcake') { g.fillStyle = '#f2ead2'; g.fillRect(0, 0, W, H); g.fillStyle = '#e84a8a'; g.beginPath(); g.arc(W / 2, H * .45, 70, 0, 7); g.fill(); g.fillStyle = '#8a5a3a'; g.fillRect(W / 2 - 70, H * .55, 140, 60); g.fillStyle = '#ffd24a'; for (let i = 0; i < 4; i++) g.fillRect(W / 2 - 50 + i * 32, H * .15, 8, 34); }
    else if (kind === 'invite') { g.fillStyle = '#ffd9ec'; g.fillRect(0, 0, W, H); g.strokeStyle = '#e84a8a'; g.lineWidth = 8; g.strokeRect(8, 8, W - 16, H - 16); line("YOU'RE", 60, 60, 28, '#e84a8a', 800); line('INVITED!', 44, 94, 30, '#e84a8a', 800); g.fillStyle = '#ffd24a'; for (let i = 0; i < 5; i++) { g.beginPath(); g.arc(30 + i * 48, 140, 11, 0, 7); g.fill(); } for (let i = 0; i < 6; i++) line('~~~~~~~~~', 40, 180 + i * 20, 14, '#6a2a8a'); }
    else if (kind === 'photo') { g.fillStyle = '#d8c8a0'; g.fillRect(0, 0, W, H); g.fillStyle = '#c9a050'; g.beginPath(); g.ellipse(W / 2, H * .6, 70, 100, 0, 0, 7); g.fill(); g.beginPath(); g.arc(W / 2, H * .3, 52, 0, 7); g.fill(); g.fillStyle = '#2a2418'; g.fillRect(W / 2 - 22, H * .27, 8, 8); g.fillRect(W / 2 + 14, H * .27, 8, 8); g.strokeStyle = '#2a2418'; g.lineWidth = 8; g.strokeRect(10, 10, W - 20, H - 20); }
    else { g.fillStyle = '#e6dcc0'; g.fillRect(0, 0, W, H); for (let i = 0; i < 12; i++) line('x'.repeat(6 + (i * 5) % 14), 18, 34 + i * 18, 14, '#3a3020'); g.fillStyle = 'rgba(120,90,40,.25)'; g.fillRect(0, H - 40, W, 40); }
    g.fillStyle = 'rgba(0,0,0,.08)'; for (let i = 0; i < 40; i++) g.fillRect(Math.random() * W, Math.random() * H, 3, 2);
  });
}
export function buildLoreItems(scene) {
  for (const d of DOCS) {
    if (d.kind !== 'paper') continue;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(d.at.w, d.at.h), new THREE.MeshStandardMaterial({ map: art(d.art, d), roughness: .8, side: THREE.DoubleSide, emissive: 0x332a10, emissiveMap: null, emissiveIntensity: .35 }));
    m.position.set(d.at.x, d.at.y, d.at.z); m.rotation.set(d.at.rx || 0, d.at.ry || 0, 0, 'YXZ'); m.userData.doc = d.id; m.visible = false; m.castShadow = false; scene.add(m); items.push(m);
  }
}
/* Show the papers that belong to this night and have not been picked up. */
export function showLoreItems(night) { for (const m of items) { const d = byId(m.userData.doc); m.visible = !has(d.id) && night >= d.night && night <= 6; } }
/* Where a paper is on screen (for tests and hints). */
export function loreScreen(id, camera) { const m = items.find((x) => x.userData.doc === id); if (!m) return null; const p = m.position.clone().project(camera); return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight, visible: m.visible, inView: p.z < 1 && Math.abs(p.x) < 1 && Math.abs(p.y) < 1 }; }
export function hideLoreItems() { for (const m of items) m.visible = false; }
const ray = new THREE.Raycaster(), v = new THREE.Vector2();
/* The paper under the pointer, if any (within reach of the camera). */
export function pickLoreItem(clientX, clientY, camera) {
  v.set((clientX / innerWidth) * 2 - 1, -(clientY / innerHeight) * 2 + 1); ray.setFromCamera(v, camera); ray.far = 40;
  const hit = ray.intersectObjects(items.filter((m) => m.visible), false)[0]; return hit ? hit.object.userData.doc : null;
}
