import * as THREE from 'three';
import { canvasTex, matte, mesh, group } from './models/kit.js';

/* The pizzeria. +z is toward the player, -z runs away down the hallway into the main hall.
 * Rooms are boxes with doorway gaps; vents are low ducts that open into the office's side walls. */
export const ROOMS = {
  office:  { b: [-3, -2.5, 3, 2.5], h: 3.1, floor: 0x2a2530, wall: 0x4a3f48, name: 'Office' },
  hall:    { b: [-1.2, -12, 1.2, -2.5], h: 3.1, floor: 0x2a2630, wall: 0x3c3640, name: 'Hallway' },
  main:    { b: [-9, -22, 9, -12], h: 4.2, floor: 0x3a3440, wall: 0x5a4a66, name: 'Main Hall' },
  partyL:  { b: [-15, -14, -9, 0], h: 3.4, floor: 0x40303a, wall: 0x6a4a5a, name: 'Party Room 1' },
  partyR:  { b: [9, -14, 15, 0], h: 3.4, floor: 0x40303a, wall: 0x4a5a6a, name: 'Party Room 2' },
  prize:   { b: [-15, -22, -9, -14.2], h: 3.4, floor: 0x35303c, wall: 0x5a3f66, name: 'Prize Corner' },
  game:    { b: [9, -22, 15, -14.2], h: 3.4, floor: 0x303a3c, wall: 0x3f5a66, name: 'Game Area' },
  parts:   { b: [-4, -30, 4, -22], h: 3.2, floor: 0x252228, wall: 0x38343a, name: 'Parts & Service' },
  kids:    { b: [-10, -29, -5, -22], h: 3.2, floor: 0x3a3030, wall: 0x6a4040, name: "Kid's Cove" },
  ventL:   { b: [-9, -0.9, -3, 0.1], h: 1.1, floor: 0x1c1c20, wall: 0x2a2c32, name: 'Left Vent' },
  ventR:   { b: [3, -0.9, 9, 0.1], h: 1.1, floor: 0x1c1c20, wall: 0x2a2c32, name: 'Right Vent' }
};
/* Doorways: [axis, fixed coordinate, from, to] — a gap cut in the wall shared by two rooms. */
const GAPS = [
  ['z', -2.5, -1.2, 1.2], ['z', -12, -1.2, 1.2],
  ['x', -9, -13.6, -12.4], ['x', 9, -13.6, -12.4], ['x', -9, -19, -17], ['x', 9, -19, -17],
  ['z', -14.1, -13, -11], ['z', -14.1, 11, 13],
  ['z', -22, -8, -6.5], ['z', -22, -1, 1],
  ['x', -9, -0.9, 0.1], ['x', 9, -0.9, 0.1], ['x', -3, -0.9, 0.1], ['x', 3, -0.9, 0.1]
];
const T = 0.18;
const inGap = (axis, c, lo, hi) => GAPS.some((g) => g[0] === axis && Math.abs(g[1] - c) < 0.05 && lo >= g[2] - 0.01 && hi <= g[3] + 0.01);

export const CAMS = {
  stage: { pos: [0, 2.8, -13], look: [0, 1.3, -20], name: 'Show Stage', room: 'main' },
  main: { pos: [-7.5, 3.2, -13], look: [3, 1, -19], name: 'Main Hall', room: 'main' },
  game: { pos: [14.5, 2.8, -15], look: [11, 1, -19], name: 'Game Area', room: 'game' },
  prize: { pos: [-14.5, 2.8, -15], look: [-11.5, 1, -19], name: 'Prize Corner', room: 'prize' },
  partyL: { pos: [-14.5, 2.8, -12.5], look: [-12, 1, -3], name: 'Party Room 1', room: 'partyL' },
  partyR: { pos: [14.5, 2.8, -12.5], look: [12, 1, -3], name: 'Party Room 2', room: 'partyR' },
  parts: { pos: [0, 2.8, -22.5], look: [0, 1.1, -28], name: 'Parts & Service', room: 'parts' },
  kids: { pos: [-9.6, 2.8, -22.5], look: [-7.5, 1, -27], name: "Kid's Cove", room: 'kids' },
  hall: { pos: [0, 2.7, -3.2], look: [0, 1.2, -11], name: 'Main Hallway', room: 'hall' },
  ventL: { pos: [-8.6, .75, -.4], look: [-3.5, .5, -.4], name: 'Left Air Vent', room: 'ventL' },
  ventR: { pos: [8.6, .75, -.4], look: [3.5, .5, -.4], name: 'Right Air Vent', room: 'ventR' }
};

export function buildMap(scene) {
  const lights = {};
  const checker = (a, b) => canvasTex(128, 128, (g, w, h) => { g.fillStyle = a; g.fillRect(0, 0, w, h); g.fillStyle = b; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) if ((x + y) % 2) g.fillRect(x * 32, y * 32, 32, 32); }, { repeat: true });
  for (const [id, r] of Object.entries(ROOMS)) {
    const [x0, z0, x1, z1] = r.b, w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, g = group(scene, null, 'room-' + id);
    const ft = checker('#' + new THREE.Color(r.floor).getHexString(), '#' + new THREE.Color(r.floor).multiplyScalar(.75).getHexString()); ft.repeat.set(w / 2, d / 2);
    const floorM = new THREE.MeshStandardMaterial({ map: ft, roughness: .55, metalness: .05 });
    mesh(new THREE.PlaneGeometry(w, d), floorM, g, [cx, 0, cz], [-Math.PI / 2, 0, 0]);
    mesh(new THREE.PlaneGeometry(w, d), matte(0x1b1820, .9), g, [cx, r.h, cz], [Math.PI / 2, 0, 0]);
    const wm = matte(r.wall, .85);
    const wallSide = (axis, c, lo, hi) => { // split a wall at its doorway gaps
      const gaps = GAPS.filter((q) => q[0] === axis && Math.abs(q[1] - c) < 0.05 && q[2] >= lo - .01 && q[3] <= hi + .01).sort((a, b) => a[2] - b[2]);
      let cur = lo; const segs = [];
      for (const q of gaps) { if (q[2] > cur) segs.push([cur, q[2]]); cur = q[3]; }
      if (cur < hi) segs.push([cur, hi]);
      for (const [a, b] of segs) {
        const len = b - a; if (len < .02) continue;
        if (axis === 'z') mesh(new THREE.BoxGeometry(len, r.h, T), wm, g, [(a + b) / 2, r.h / 2, c]); else mesh(new THREE.BoxGeometry(T, r.h, len), wm, g, [c, r.h / 2, (a + b) / 2]);
      }
      for (const q of gaps) { // a lintel over each doorway so the opening reads as a door
        if (id.startsWith('vent')) continue;
        const len = q[3] - q[2], top = r.h - 2.4; if (top < .05) continue;
        if (axis === 'z') mesh(new THREE.BoxGeometry(len, top, T), wm, g, [(q[2] + q[3]) / 2, 2.4 + top / 2, c]); else mesh(new THREE.BoxGeometry(T, top, len), wm, g, [c, 2.4 + top / 2, (q[2] + q[3]) / 2]);
      }
    };
    wallSide('z', z0, x0, x1); wallSide('z', z1, x0, x1); wallSide('x', x0, z0, z1); wallSide('x', x1, z0, z1);
    if (!id.startsWith('vent')) {
      const L = new THREE.PointLight(0xffd9a8, 0, 22, 1.6); L.position.set(cx, Math.min(r.h - .5, 3), cz); g.add(L); lights[id] = L;
    } else { const L = new THREE.PointLight(0x9fb2ff, 0, 9, 1.8); L.position.set(cx, .8, cz); g.add(L); lights[id] = L; }
  }
  props(scene);
  return { lights };
}

function props(scene) {
  const wood = matte(0x5a3a22, .6), dk = matte(0x16131a, .7), red = matte(0x8a1f2a, .7), cloth = matte(0xe9e2d0, .9);
  // the desk
  mesh(new THREE.BoxGeometry(3.2, .12, 1.1), wood, scene, [0, .95, 1.55]); for (const sx of [-1.4, 1.4]) mesh(new THREE.BoxGeometry(.12, .95, 1), wood, scene, [sx, .48, 1.55]);
  mesh(new THREE.BoxGeometry(.7, .5, .06), dk, scene, [-.9, 1.4, 1.35], [-.15, 0, 0]); // monitor
  mesh(new THREE.CylinderGeometry(.18, .2, .05, 14), dk, scene, [.9, 1.02, 1.5]); // fan base
  // posters and a sign over the hallway
  const sign = canvasTex(512, 128, (g, w, h) => { g.fillStyle = '#1a0f14'; g.fillRect(0, 0, w, h); g.fillStyle = '#ffd24a'; g.font = '900 56px sans-serif'; g.textAlign = 'center'; g.fillText("ZAYED'S", w / 2, 62); g.fillStyle = '#f56'; g.font = '700 30px sans-serif'; g.fillText('Salem’s Candy · Abdulla’s Cafeteria', w / 2, 108); });
  mesh(new THREE.PlaneGeometry(2.2, .55), new THREE.MeshStandardMaterial({ map: sign, emissive: 0x442211, emissiveMap: sign, emissiveIntensity: .6 }), scene, [-2.3, 2.5, 2.4], [0, Math.PI, 0]);
  // the stage in the main hall
  mesh(new THREE.BoxGeometry(9, .4, 3), matte(0x3a2a4a, .6), scene, [0, .2, -20]);
  const curtainL = mesh(new THREE.BoxGeometry(1.8, 4, .2), red, scene, [-4, 2, -21.8]); mesh(new THREE.BoxGeometry(1.8, 4, .2), red, scene, [4, 2, -21.8]);
  // tables with party hats in the party rooms and main hall
  for (const [x, z] of [[-12, -7], [-12, -2.5], [12, -7], [12, -2.5], [-4, -16], [4, -16], [0, -14.5]]) { mesh(new THREE.CylinderGeometry(.7, .7, .08, 20), cloth, scene, [x, .8, z]); mesh(new THREE.CylinderGeometry(.08, .12, .8, 10), dk, scene, [x, .4, z]); mesh(new THREE.ConeGeometry(.12, .3, 10), matte(0xe84a8a, .5), scene, [x + .2, .99, z]); }
  // the music box in the prize corner: a gift box on a tall shelf
  mesh(new THREE.BoxGeometry(1.6, 1.4, 1.4), matte(0x70409a, .5), scene, [-12, .7, -20]);
  mesh(new THREE.BoxGeometry(1.7, .25, 1.5), matte(0xffd24a, .4), scene, [-12, 1.5, -20]);
  mesh(new THREE.SphereGeometry(.28, 14, 10), matte(0xe84a8a, .45), scene, [-12, 1.78, -20]);
  for (let i = 0; i < 6; i++) mesh(new THREE.BoxGeometry(.6, .6, .6), matte([0xd0453a, 0x3aa0d0, 0x5ab05a][i % 3], .6), scene, [-14.2 + (i % 3) * .75, .3 + (i / 3 | 0) * .6, -16.4]);
  // arcade machines in the game area
  for (let i = 0; i < 3; i++) { mesh(new THREE.BoxGeometry(.9, 2, .8), matte(0x203050, .5), scene, [10.8 + i * 1.3, 1, -21.3]); mesh(new THREE.PlaneGeometry(.6, .5), new THREE.MeshStandardMaterial({ color: 0x66ccff, emissive: 0x2288cc, emissiveIntensity: 1.2 }), scene, [10.8 + i * 1.3, 1.5, -20.88]); }
  // the cove: a curtain and a stage
  mesh(new THREE.BoxGeometry(4, .3, 2.5), matte(0x5a3040, .7), scene, [-7.5, .15, -26.5]); mesh(new THREE.BoxGeometry(4, 2.4, .12), red, scene, [-7.5, 1.5, -24.6]);
  // shelves and broken parts in Parts & Service
  for (let i = 0; i < 4; i++) { mesh(new THREE.BoxGeometry(1.8, .12, .6), dk, scene, [-3 + i * 2, 1 + (i % 2) * .6, -29.5]); mesh(new THREE.SphereGeometry(.25, 10, 8), matte(0x8a8070, .8), scene, [-3 + i * 2, 1.4 + (i % 2) * .6, -29.5]); }
  // hallway stripe lights (off until the flashlight finds them)
  for (let z = -4; z > -12; z -= 2) mesh(new THREE.BoxGeometry(.05, .05, 1.2), matte(0x333333), scene, [0, 3.05, z]);
  // vent grilles on the office walls
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(.06, 1, 1.15), matte(0x303338, .4), scene, [sx * 2.92, .6, -.4]);
}
