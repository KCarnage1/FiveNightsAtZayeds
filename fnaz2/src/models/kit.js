import * as THREE from 'three';

/* Shared helpers for building animatronics: textures, materials, limbs, joints. */
const cache = new Map();

export function canvasTex(w, h, draw, { srgb = true, repeat = false } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

const rnd = (s => () => (s = (s * 16807) % 2147483647) / 2147483647)(7);

/* Fur / plush colour texture with strokes, plus a matching bump + roughness pair. */
export function furMaps(base, { grime = 0.15, spots, stripes } = {}) {
  const key = 'fur' + base + grime + (spots || '') + (stripes || '');
  if (cache.has(key)) return cache.get(key);
  const col = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.strokeStyle = `rgba(${rnd() > .5 ? '255,255,255' : '0,0,0'},${0.03 + rnd() * 0.05})`; const x = rnd() * w, y = rnd() * h; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - .5) * 6, y + 3 + rnd() * 7); g.stroke(); }
    if (stripes) { g.fillStyle = stripes; for (let y = 0; y < h; y += 64) g.fillRect(0, y, w, 22); }
    if (spots) { g.fillStyle = spots; for (let i = 0; i < 40; i++) { g.beginPath(); g.arc(rnd() * w, rnd() * h, 6 + rnd() * 14, 0, 7); g.fill(); } }
    for (let i = 0; i < 26; i++) { const x = rnd() * w, y = rnd() * h, r = 20 + rnd() * 60, gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(20,10,0,${grime})`); gr.addColorStop(1, 'rgba(20,10,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
  }, { repeat: true });
  const bump = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#808080'; g.fillRect(0, 0, w, h); for (let i = 0; i < 5000; i++) { const v = 90 + rnd() * 90 | 0; g.strokeStyle = `rgb(${v},${v},${v})`; const x = rnd() * w, y = rnd() * h; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - .5) * 4, y + 2 + rnd() * 5); g.stroke(); } }, { srgb: false, repeat: true });
  const out = { col, bump }; cache.set(key, out); return out;
}

export function fur(base, opt = {}) {
  const m = furMaps(base, opt);
  return new THREE.MeshStandardMaterial({ map: m.col, bumpMap: m.bump, bumpScale: opt.bump ?? 1.2, roughness: opt.rough ?? 0.9, metalness: 0 });
}
/* Toy bodies: glossy clear-coated plastic instead of plush. */
export function plastic(color, opt = {}) {
  return new THREE.MeshPhysicalMaterial({ color, roughness: opt.rough ?? 0.28, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12, sheen: 0 });
}
export const metal = (c = 0x8a8f96, r = 0.42) => new THREE.MeshStandardMaterial({ color: c, metalness: 0.9, roughness: r });
export const matte = (c, r = 0.8) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0 });

export function mesh(geo, mat, parent, pos, rot, scl) {
  const m = new THREE.Mesh(geo, mat);
  if (pos) m.position.set(...pos);
  if (rot) m.rotation.set(...rot);
  if (scl) typeof scl === 'number' ? m.scale.setScalar(scl) : m.scale.set(...scl);
  m.castShadow = m.receiveShadow = true;
  parent && parent.add(m);
  return m;
}
export function group(parent, pos, name) { const g = new THREE.Group(); if (pos) g.position.set(...pos); if (name) g.name = name; parent && parent.add(g); return g; }

const Y = new THREE.Vector3(0, 1, 0);
/* A tapered limb segment between two points (capsule-like, but with different end radii). */
export function limb(parent, a, b, r0, r1, mat) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, 16, 1, true);
  const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true;
  m.position.copy(A).addScaledVector(d, .5); m.quaternion.setFromUnitVectors(Y, d.normalize());
  parent.add(m);
  mesh(new THREE.SphereGeometry(r0, 16, 12), mat, parent, a); mesh(new THREE.SphereGeometry(r1, 16, 12), mat, parent, b);
  return m;
}

/* Smooth lathe body from a list of [radius, y] pairs. */
export function lathe(profile, mat, seg = 40) {
  return new THREE.Mesh(new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), seg), mat);
}

export const loadFace = (() => {
  const L = new THREE.TextureLoader(), mem = {};
  return (name) => mem[name] || (mem[name] = L.load('assets/faces/' + name + '.png', (t) => { t.colorSpace = THREE.SRGBColorSpace; }));
})();

/* The real face, mapped onto a dome that sits just outside the head sphere. */
export function faceDome(head, tex, { r = 0.322, y = 0.3, z = 0, aspect = 1 } = {}) {
  const w = Math.min(2.4, 1.75 * aspect);
  const m = new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.45, roughness: 0.7, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0 });
  const f = new THREE.Mesh(new THREE.SphereGeometry(r, 40, 32, Math.PI / 2 - w / 2, w, Math.PI / 2 - 0.875, 1.75), m);
  f.position.set(0, y, z); head.add(f);
  return f;
}
