import * as THREE from 'three';
import { canvasTex, matte, mesh, group, faceCanvas, onFaceChange } from './models/kit.js';

/* The look of the pizzeria: bright party rooms with striped, confetti-covered walls and checkerboard floors, bunting and balloons,
 * posters, the kids' crayon drawings in the office. Cameras are shown in grey by the page (CSS), as on the old security monitors. */
const rnd = (s => () => (s = (s * 48271) % 2147483647) / 2147483647)(11);
const pick = (a) => a[Math.floor(rnd() * a.length)];
const PARTY = ['#ff5a8a', '#ffd24a', '#4ad0ff', '#7ae35a', '#b58cff', '#ff8a3a'];

export const KIND = { office: 'office', hall: 'hall', main: 'party', partyL: 'party', partyR: 'party', prize: 'prize', game: 'arcade', parts: 'grime', kids: 'party', ventL: 'metal', ventR: 'metal' };

export function floorTexture(kind, w, d) {
  const c = { party: ['#14121c', '#efe6d2'], prize: ['#5a3a86', '#cdb8ee'], arcade: ['#0b3038', '#2a8aa0'], hall: ['#12101a', '#c9c2b0'], office: ['#26232c', '#3b3744'], grime: ['#1d1a1c', '#2d2a2a'], metal: ['#1c1c20', '#2a2c32'] }[kind] || ['#222', '#444'];
  const t = canvasTex(128, 128, (g, W, H) => { g.fillStyle = c[0]; g.fillRect(0, 0, W, H); g.fillStyle = c[1]; for (let y = 0; y < 2; y++) for (let x = 0; x < 2; x++) if ((x + y) % 2) g.fillRect(x * 64, y * 64, 64, 64); if (kind === 'grime') { for (let i = 0; i < 80; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * .25})`; g.fillRect(rnd() * W, rnd() * H, 8 + rnd() * 20, 6 + rnd() * 14); } } }, { repeat: true });
  t.repeat.set(w / 1.6, d / 1.6); return t;
}

export function wallMaterial(kind, base) {
  const col = '#' + new THREE.Color(base).getHexString();
  const t = canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = col; g.fillRect(0, 0, W, H);
    if (kind === 'party' || kind === 'prize') {
      g.fillStyle = 'rgba(255,255,255,.16)'; for (let x = 0; x < W; x += 64) g.fillRect(x, 0, 32, H); // vertical stripes
      g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(0, H - 70, W, 70); g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(0, H - 72, W, 4); // wainscot
      for (let i = 0; i < 34; i++) { g.fillStyle = pick(PARTY); const x = rnd() * W, y = rnd() * (H - 90); if (i % 3 === 0) { g.save(); g.translate(x, y); g.rotate(rnd() * 6); g.fillRect(-5, -2, 10, 4); g.restore(); } else if (i % 3 === 1) { g.beginPath(); g.arc(x, y, 3 + rnd() * 3, 0, 7); g.fill(); } else { star(g, x, y, 8); } }
    } else if (kind === 'arcade') {
      g.fillStyle = 'rgba(80,200,255,.18)'; for (let i = 0; i < 18; i++) star(g, rnd() * W, rnd() * H, 6 + rnd() * 8); g.fillStyle = 'rgba(255,60,160,.35)'; g.fillRect(0, H - 40, W, 8); g.fillStyle = 'rgba(60,220,255,.4)'; g.fillRect(0, H - 28, W, 4);
    } else if (kind === 'office') {
      g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(0, H - 90, W, 90); g.fillStyle = 'rgba(255,255,255,.14)'; g.fillRect(0, H - 94, W, 4); for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * .12})`; g.fillRect(rnd() * W, rnd() * H, 20 + rnd() * 40, 2); }
    } else if (kind === 'grime') {
      for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * .3})`; g.fillRect(rnd() * W, rnd() * H, 10 + rnd() * 50, 4 + rnd() * 30); }
    } else if (kind === 'hall') {
      g.fillStyle = 'rgba(255,255,255,.1)'; for (let y = 0; y < H; y += 64) g.fillRect(0, y, W, 4); g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(0, H - 60, W, 60);
    }
  }, { repeat: true });
  return new THREE.MeshStandardMaterial({ map: t, roughness: .85 });
}
function star(g, x, y, r) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); }
/* Make a wall box's texture repeat with its size instead of stretching. */
export function tileUV(geo, w, h) { const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / 2.4, uv.getY(i) * h / 2.4); uv.needsUpdate = true; return geo; }

/* ---- things hung up and set out ---- */
function bunting(scene, x0, z0, x1, z1, y, sag = .25, n = 14) {
  const pos = [], col = [];
  for (let i = 0; i < n; i++) {
    const a = i / n, b = (i + 1) / n, mx = (a + b) / 2; const f = (u) => [x0 + (x1 - x0) * u, y - Math.sin(u * Math.PI) * sag, z0 + (z1 - z0) * u];
    const A = f(a), B = f(b), M = f(mx); M[1] -= .3; const c = new THREE.Color(pick(PARTY));
    pos.push(...A, ...B, ...M); for (let k = 0; k < 3; k++) col.push(c.r, c.g, c.b);
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })); scene.add(m);
}
const balloonList = [], stringPts = [];
function balloons(scene, x, z, n = 6, h = 2.4) { // collected here, built as one instanced mesh by flushBalloons()
  for (let i = 0; i < n; i++) { const ox = (rnd() - .5) * .7, oz = (rnd() - .5) * .7, y = h + rnd() * .7; balloonList.push({ x: x + ox, y, z: z + oz, c: pick(PARTY) }); stringPts.push(x + ox / 2, 0.1, z + oz / 2, x + ox, y - .2, z + oz); }
  mesh(new THREE.CylinderGeometry(.09, .11, .16, 10), matte(0x6a5a3a, .8), group(scene, [x, 0, z]), [0, .08, 0]);
}
function flushBalloons(scene) {
  const m = new THREE.InstancedMesh(new THREE.SphereGeometry(.22, 14, 10), new THREE.MeshPhysicalMaterial({ roughness: .2, clearcoat: 1, clearcoatRoughness: .1 }), balloonList.length), d = new THREE.Object3D();
  balloonList.forEach((b, i) => { d.position.set(b.x, b.y, b.z); d.scale.set(1, 1.18, 1); d.updateMatrix(); m.setMatrixAt(i, d.matrix); m.setColorAt(i, new THREE.Color(b.c)); });
  m.instanceMatrix.needsUpdate = true; m.frustumCulled = false; scene.add(m);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(stringPts, 3)); scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xdddddd })));
  balloonList.length = 0; stringPts.length = 0;
}
function poster(scene, w, h, pos, rotY, draw) {
  const t = canvasTex(512, Math.round(512 * h / w), draw);
  const m = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: .7 }), scene, pos, [0, rotY, 0]); m.castShadow = false; return t;
}
const paintFaces = (g, W, y, size) => { ['zayed', 'bubbles', 'taffy', 'sherbet'].forEach((n, i) => { const cx = W / 8 + i * W / 4; g.save(); g.beginPath(); g.arc(cx, y, size, 0, 7); g.clip(); g.fillStyle = '#f4e2c8'; g.fillRect(cx - size, y - size, size * 2, size * 2); const c = faceCanvas(n), h = size * 2.3, w = h * c.width / c.height; g.drawImage(c, cx - w / 2, y - h / 2, w, h); g.restore(); g.lineWidth = 5; g.strokeStyle = '#fff'; g.beginPath(); g.arc(cx, y, size, 0, 7); g.stroke(); }); };
function celebrate(scene, pos, rotY) {
  let tex; tex = poster(scene, 1.5, 1.0, pos, rotY, (g, W, H) => {
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#ffe27a'); gr.addColorStop(1, '#ff7aa8'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    g.fillStyle = '#fff'; g.font = '900 78px system-ui,sans-serif'; g.textAlign = 'center'; g.strokeStyle = '#6a2a8a'; g.lineWidth = 10; g.strokeText('CELEBRATE!', W / 2, 100); g.fillText('CELEBRATE!', W / 2, 100);
    g.fillStyle = '#6a2a8a'; g.font = '700 26px system-ui'; g.fillText('The Zayeds · one soul, four bodies', W / 2, 150); g.__redraw = () => paintFaces(g, W, 270, 58); g.__redraw();
    g.fillStyle = '#3a1a5a'; g.font = '700 22px system-ui'; ['Camel', 'Cat', 'Goat', 'Falcon'].forEach((n, i) => g.fillText(n, W / 8 + i * W / 4, 370));
    for (let i = 0; i < 40; i++) { g.fillStyle = pick(PARTY); g.fillRect(rnd() * W, rnd() * H, 8, 4); }
    g.strokeStyle = '#fff'; g.lineWidth = 12; g.strokeRect(6, 6, W - 12, H - 12);
  });
  const g = tex.image.getContext('2d'); onFaceChange(() => { if (g.__redraw) { g.__redraw(); tex.needsUpdate = true; } });
  return tex;
}
function drawing(scene, pos, rotY, who) { // a child's crayon drawing of one of the Zayeds
  poster(scene, .5, .65, pos, rotY, (g, W, H) => {
    g.fillStyle = '#f4eedd'; g.fillRect(0, 0, W, H); g.lineWidth = 7; g.lineCap = 'round';
    const c = { camel: '#c98a3a', cat: '#e8508a', goat: '#7a7a7a', falcon: '#a05a2a' }[who]; g.strokeStyle = c; g.fillStyle = c + '55';
    g.beginPath(); g.ellipse(W / 2, H * .62, 120, 150, 0, 0, 7); g.fill(); g.stroke(); // body
    g.beginPath(); g.arc(W / 2, H * .3, 80, 0, 7); g.fill(); g.stroke(); // head
    g.fillStyle = '#222'; g.beginPath(); g.arc(W / 2 - 28, H * .28, 9, 0, 7); g.arc(W / 2 + 28, H * .28, 9, 0, 7); g.fill();
    g.strokeStyle = '#d33'; g.beginPath(); g.arc(W / 2, H * .34, 30, .2, Math.PI - .2); g.stroke(); // smile
    g.strokeStyle = c; if (who === 'camel') { g.beginPath(); g.arc(W / 2, H * .55, 60, Math.PI, 0); g.stroke(); } if (who === 'cat') { g.beginPath(); g.moveTo(W / 2 - 60, H * .16); g.lineTo(W / 2 - 40, H * .05); g.lineTo(W / 2 - 15, H * .13); g.moveTo(W / 2 + 60, H * .16); g.lineTo(W / 2 + 40, H * .05); g.lineTo(W / 2 + 15, H * .13); g.stroke(); }
    if (who === 'goat') { g.beginPath(); g.arc(W / 2 - 50, H * .13, 25, 3.4, 5.6); g.arc(W / 2 + 50, H * .13, 25, 3.8, 6); g.stroke(); } if (who === 'falcon') { g.fillStyle = '#e8a82a'; g.beginPath(); g.moveTo(W / 2, H * .31); g.lineTo(W / 2 + 22, H * .36); g.lineTo(W / 2, H * .4); g.fill(); }
    g.fillStyle = '#333'; g.font = '700 34px "Comic Sans MS",cursive'; g.textAlign = 'center'; g.fillText({ camel: 'ZAYED', cat: 'BUBBLES', goat: 'TAFFY', falcon: 'SHERBET' }[who] + ' <3', W / 2, H - 22);
  });
}
export const signMats = []; // emissive sign materials; main.js flickers them
function starSign(scene, text, pos, w = 2.6) {
  const t = canvasTex(512, 128, (g, W, H) => { g.fillStyle = '#1a0a2a'; g.fillRect(0, 0, W, H); g.strokeStyle = '#ffd24a'; g.lineWidth = 8; g.strokeRect(8, 8, W - 16, H - 16); g.fillStyle = '#ffd24a'; g.font = '900 64px system-ui'; g.textAlign = 'center'; g.fillText(text, W / 2, 86); });
  const mat = new THREE.MeshStandardMaterial({ map: t, emissive: 0xffd24a, emissiveMap: t, emissiveIntensity: .7 }); signMats.push(mat);
  mesh(new THREE.PlaneGeometry(w, w / 4), mat, scene, pos).castShadow = false;
}

export function decorate(scene) {
  // main hall: bunting across, balloons at the corners, a star curtain backdrop on the stage
  bunting(scene, -9, -13, 9, -13, 3.9, .5, 22); bunting(scene, -9, -17, 9, -17, 3.9, .5, 22); bunting(scene, -9, -21.5, 9, -21.5, 3.9, .5, 22);
  for (const [x, z] of [[-8, -13], [8, -13], [-8, -21], [8, -21], [-5.5, -12.8], [5.5, -12.8]]) balloons(scene, x, z, 7, 2.6);
  starSign(scene, 'SHOW TIME', [0, 3.2, -21.82], 3.4);
  const cur = canvasTex(256, 256, (g, W, H) => { g.fillStyle = '#8a1a2e'; g.fillRect(0, 0, W, H); g.fillStyle = 'rgba(0,0,0,.25)'; for (let x = 0; x < W; x += 32) g.fillRect(x, 0, 16, H); g.fillStyle = '#ffd24a'; for (let i = 0; i < 22; i++) star(g, rnd() * W, rnd() * H, 8 + rnd() * 6); }, { repeat: true });
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(1.8, 4, .22), new THREE.MeshStandardMaterial({ map: cur, roughness: .8 }), scene, [sx * 4.2, 2, -21.7]);
  // party rooms, prize corner, game area
  for (const [x0, z0, x1, z1] of [[-15, -14, -9, 0], [9, -14, 15, 0], [-15, -22, -9, -14.2]]) { bunting(scene, x0 + .1, (z0 + z1) / 2, x1 - .1, (z0 + z1) / 2, 3.1, .35, 10); }
  for (const [x, z] of [[-14.3, -1], [-14.3, -9], [14.3, -1], [14.3, -9], [-14.3, -21], [-10, -21]]) balloons(scene, x, z, 5, 2.2);
  poster(scene, 1.6, 1.0, [-14.88, 1.9, -6], Math.PI / 2, (g, W, H) => { g.fillStyle = '#ff8ac0'; g.fillRect(0, 0, W, H); g.fillStyle = '#fff'; g.font = '900 70px system-ui'; g.textAlign = 'center'; g.fillText('HAPPY', W / 2, 130); g.fillText('BIRTHDAY!', W / 2, 220); g.fillStyle = '#ffd24a'; for (let i = 0; i < 8; i++) star(g, 40 + i * 62, 300, 20); g.fillStyle = '#6a2a8a'; g.font = '700 30px system-ui'; g.fillText('at Zayed\'s', W / 2, 400); });
  poster(scene, 1.6, 1.0, [14.88, 1.9, -6], -Math.PI / 2, (g, W, H) => { g.fillStyle = '#6ad0ff'; g.fillRect(0, 0, W, H); g.fillStyle = '#fff'; g.font = '900 72px system-ui'; g.textAlign = 'center'; g.fillText("LET'S", W / 2, 130); g.fillText('PARTY!', W / 2, 220); g.fillStyle = '#ffd24a'; for (let i = 0; i < 8; i++) star(g, 40 + i * 62, 300, 20); g.fillStyle = '#1a4a7a'; g.font = '700 30px system-ui'; g.fillText('Salem\'s Candy · Abdulla\'s Cafeteria', W / 2, 400); });
  starSign(scene, 'PRIZES', [-12, 2.8, -21.8], 2.2); starSign(scene, 'GAME AREA', [12, 2.8, -21.8], 2.6); starSign(scene, 'PARTS & SERVICE', [0, 2.7, -29.88], 3);
  // the office: the Celebrate poster and the kids' drawings
  celebrate(scene, [-2.88, 1.95, -1.6], Math.PI / 2); celebrate(scene, [2.88, 1.95, 1.2], -Math.PI / 2);
  drawing(scene, [-2.88, 1.75, 0.9], Math.PI / 2, 'cat'); drawing(scene, [-2.88, 1.35, 1.75], Math.PI / 2, 'goat'); drawing(scene, [2.88, 1.75, -1.0], -Math.PI / 2, 'camel'); drawing(scene, [2.88, 1.3, -1.7], -Math.PI / 2, 'falcon');
  celebrate(scene, [0, 2.0, 2.38], Math.PI);
  // kids' cove
  starSign(scene, "KID'S COVE", [-7.5, 2.8, -28.88], 2.4);
  flushBalloons(scene);
}
