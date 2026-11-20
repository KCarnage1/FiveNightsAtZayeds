import * as THREE from 'three';
import { fur, plastic, metal, matte, mesh, group, limb, lathe, loadFace, faceDome } from './kit.js';

/* The Zayeds. One soul, four bodies: the Camel (patience), the Cat (nerve), the Goat (memory) and the Falcon (hunger).
 * "withered" = the old bodies from the first game, worn and broken. "toy" = the newer bodies the soul was moved into. */
export const SPEC = {
  zayed:   { kind: 'camel',  face: 'zayed',   fur: '#c99556', toy: '#e0b56c', tie: 0xb3262e, word: 'ZAYED' },
  bubbles: { kind: 'cat',    face: 'bubbles', fur: '#e58fb0', toy: '#ff8cc0', tie: 0x2d5fd0, word: 'BUBBLES' },
  taffy:   { kind: 'goat',   face: 'taffy',   fur: '#e9dcc2', toy: '#fff1d0', tie: 0x2f9a58, word: 'TAFFY', stripes: 'rgba(200,120,150,.35)' },
  sherbet: { kind: 'falcon', face: 'sherbet', fur: '#9a7a52', toy: '#c9a36a', tie: 0xe8872b, word: 'SHERBET', spots: 'rgba(60,40,20,.45)' }
};

export function buildZayed(who, variant = 'withered') {
  const s = SPEC[who], toy = variant === 'toy';
  const skin = toy ? plastic(s.toy) : fur(s.fur, { spots: s.spots, stripes: s.stripes, grime: .3 });
  const dark = matte(toy ? 0x1b1722 : 0x120e0c, .6), tieM = toy ? plastic(s.tie, { rough: .2 }) : matte(s.tie, .7);
  const bone = metal(toy ? 0xcfd3da : 0x777b82, toy ? .25 : .55);
  const root = group(null, null, who + '-' + variant);
  const body = group(root);
  const T = toy ? 1.06 : 1; // toys are a little rounder and neater

  // legs + feet
  for (const sx of [-1, 1]) {
    limb(body, [sx * .2, .62, 0], [sx * .2, .16, .02], .13 * T, .11 * T, skin);
    mesh(new THREE.SphereGeometry(.19, 20, 14), skin, body, [sx * .2, .1, .1], 0, [1, .55, 1.5]);
  }
  // torso: lathe so it has a real waist and chest
  const torso = lathe([[0, .55], [.32 * T, .6], [.43 * T, .85], [.42 * T, 1.1], [.36 * T, 1.38], [.2, 1.56], [0, 1.6]], skin);
  body.add(torso); torso.castShadow = true;
  const patch = mesh(new THREE.SphereGeometry(.4 * T, 24, 16, 0, Math.PI * 2, .55, .9), matte(toy ? 0xfff4e0 : 0xd9ccb0, .8), body, [0, .98, .03], [Math.PI / 2 - .2, 0, 0], [.9, 1, .5]);
  mesh(new THREE.ConeGeometry(.07, .17, 12), tieM, body, [-.07, 1.4, .34], [Math.PI, 0, -.9]);
  mesh(new THREE.ConeGeometry(.07, .17, 12), tieM, body, [.07, 1.4, .34], [Math.PI, 0, .9]);
  mesh(new THREE.SphereGeometry(.06, 12, 10), tieM, body, [0, 1.4, .35]);
  mesh(new THREE.CylinderGeometry(.11, .14, .34, 20), toy ? skin : bone, body, [0, 1.6, 0]);

  // arms: shoulder / elbow / wrist so they can bend
  const arms = {};
  for (const [side, sx] of [['L', -1], ['R', 1]]) {
    const sh = group(body, [sx * .46, 1.42, 0], 'arm' + side);
    mesh(new THREE.SphereGeometry(.15 * T, 18, 14), skin, sh);
    const upper = limb(sh, [0, 0, 0], [sx * .08, -.34, .04], .1 * T, .085 * T, skin);
    const el = group(sh, [sx * .08, -.34, .04], 'elbow' + side);
    const broken = !toy && side === 'R' && who !== 'taffy';
    if (broken) { limb(el, [0, 0, 0], [0, -.34, .1], .035, .03, bone); mesh(new THREE.SphereGeometry(.05, 10, 8), bone, el, [0, -.36, .11]); for (let k = -1; k <= 1; k++) limb(el, [0, -.36, .11], [k * .04, -.5, .15], .01, .006, bone); }
    else { limb(el, [0, 0, 0], [0, -.3, .1], .08 * T, .07 * T, skin); const hand = mesh(new THREE.SphereGeometry(.1, 14, 12), toy ? plastic(0xfff4e0) : matte(0xd9ccb0, .85), el, [0, -.38, .12], 0, [1, 1.2, .8]); for (let k = -1; k <= 1; k++) mesh(new THREE.CapsuleGeometry(.018, .09, 4, 8), hand.material, el, [k * .04, -.48, .14]); }
    arms[side] = sh; sh.userData.rest = [0, 0, sx * .12];
    sh.rotation.z = sx * .12;
  }

  // head: sphere, muzzle, jaw, eyes behind the photo face
  const head = group(body, [0, 1.66, 0], 'head');
  mesh(new THREE.SphereGeometry(.3 * T, 36, 28), skin, head, [0, .3, 0]);
  const jaw = group(head, [0, .08, .06], 'jaw');
  mesh(new THREE.SphereGeometry(.2 * T, 24, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), skin, jaw, [0, .04, .12], 0, [1, .8, 1.2]);
  mesh(new THREE.SphereGeometry(.17, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), dark, jaw, [0, .045, .12], [Math.PI, 0, 0], [1, .5, 1.1]);
  for (let i = 0; i < 9; i++) { const a = -0.75 + i * .19; mesh(new THREE.ConeGeometry(.018, .06, 6), matte(toy ? 0xffffff : 0xcfc7a5, .45), jaw, [Math.sin(a) * .16, .075, .12 + Math.cos(a) * .16 * .9], [Math.PI, 0, 0]); }
  if (!toy) { // withered: the jaw hangs loose
    jaw.rotation.x = .22; jaw.userData.rest = .22;
  }
  const face = faceDome(head, loadFace(s.face), { aspect: .72 });
  const extras = kindExtras(s.kind, head, skin, dark, toy, who, body);
  if (!toy) wear(root, body, head, bone, dark, who);
  return { root, body, head, jaw, face, armL: arms.L, armR: arms.R, who, variant, kind: s.kind, toy, extras, t: Math.random() * 100 };
}

function kindExtras(kind, head, skin, dark, toy, who, body) {
  const inner = toy ? plastic(0xffb7cf) : matte(0x8c5a52, .9);
  if (kind === 'camel') {
    mesh(new THREE.SphereGeometry(.34, 24, 18), skin, body, [0, 1.52, -.3], 0, [.9, .85, 1]); // hump
    for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.09, 14, 10), skin, head, [sx * .26, .56, 0], [0, 0, sx * .6], [1, 1.5, .5]); mesh(new THREE.SphereGeometry(.05, 12, 8), inner, head, [sx * .26, .56, .03], [0, 0, sx * .6], [1, 1.4, .3]); }
    const hat = mesh(new THREE.CylinderGeometry(.16, .2, .2, 20), matte(0xb3262e, .6), head, [0, .66, 0]);
    mesh(new THREE.CylinderGeometry(.015, .015, .12, 8), matte(0xe0c25a, .4), head, [0, .8, 0]);
  } else if (kind === 'cat') {
    for (const sx of [-1, 1]) { mesh(new THREE.ConeGeometry(.12, .3, 4), skin, head, [sx * .2, .62, 0], [0, Math.PI / 4, sx * -.28]); mesh(new THREE.ConeGeometry(.07, .2, 4), inner, head, [sx * .2, .6, .05], [0, Math.PI / 4, sx * -.28]); for (let w = 0; w < 3; w++) limb(head, [sx * .12, .2 - w * .02, .27], [sx * (.38), .24 - w * .07, .29], .005, .003, matte(0xffffff)); }
    mesh(new THREE.TorusGeometry(.32, .06, 10, 24, Math.PI * 1.3), skin, body, [0, .7, -.4], [Math.PI / 2.6, 0, 1.2]);
  } else if (kind === 'goat') {
    for (const sx of [-1, 1]) { mesh(new THREE.TorusGeometry(.14, .035, 10, 20, Math.PI * 1.15), matte(toy ? 0xf0e0c0 : 0x8a7a5a, .4), head, [sx * .17, .62, -.02], [0, 0, sx > 0 ? .2 : Math.PI - .2]); mesh(new THREE.SphereGeometry(.07, 12, 8), skin, head, [sx * .3, .4, 0], [0, 0, sx * -.9], [1.5, .5, .7]); }
    mesh(new THREE.ConeGeometry(.05, .2, 8), skin, head, [0, -.02, .3], [Math.PI, 0, 0]);
  } else {
    mesh(new THREE.ConeGeometry(.07, .2, 8), matte(toy ? 0xffc548 : 0xb98a2e, .35), head, [0, .22, .4], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 5; i++) mesh(new THREE.ConeGeometry(.04, .24 - Math.abs(i - 2) * .03, 6), skin, head, [(i - 2) * .06, .64, -.04 - Math.abs(i - 2) * .02], [-.3 - Math.abs(i - 2) * .08, 0, (i - 2) * -.18]);
    for (const sx of [-1, 1]) for (let i = 0; i < 4; i++) mesh(new THREE.BoxGeometry(.015, .5 - i * .05, .12), skin, body, [sx * (.5 + i * .05), 1.1 - i * .09, -.12], [0, sx * .3, sx * (.5 + i * .1)]);
  }
  return {};
}

/* Withered extras: torn patches, a bare endoskeleton chest, bent wires. */
function wear(root, body, head, bone, dark, who) {
  const wire = matte(0x2a2420, .6);
  mesh(new THREE.BoxGeometry(.16, .22, .05), bone, body, [.16, 1.1, .39], [0, 0, .15]);
  for (let i = 0; i < 4; i++) limb(body, [.1 + i * .03, 1.0, .4], [.12 + i * .06, .8 - i * .03, .44], .008, .006, wire);
  mesh(new THREE.SphereGeometry(.055, 10, 8), dark, head, [-.13, .24, .27], 0, [1, 1, .4]); // a dead eye socket
}

/* Procedural motion: idle sway, a chewing jaw, and the scare shake. */
export function animate(b, dt, mode = 'idle') {
  b.t += dt;
  const t = b.t;
  if (mode === 'scare') {
    b.jaw.rotation.x = .55 + Math.sin(t * 40) * .18;
    b.head.rotation.set(Math.sin(t * 31) * .12, Math.sin(t * 23) * .2, Math.sin(t * 37) * .1);
    b.armL.rotation.set(-1.5 + Math.sin(t * 29) * .15, 0, -.2); b.armR.rotation.set(-1.5 + Math.sin(t * 33) * .15, 0, .2);
    return;
  }
  const sway = Math.sin(t * .8), twitch = Math.max(0, Math.sin(t * 2.3 + Math.sin(t * .7) * 3) - .92) * 12;
  b.body.rotation.z = sway * .015; b.body.rotation.x = b.toy ? 0 : .05 + Math.sin(t * .5) * .01;
  b.head.rotation.set(Math.sin(t * .6) * .04, Math.sin(t * .4) * .25 + twitch * .1, Math.sin(t * .9) * .03 + twitch * .05);
  b.jaw.rotation.x = (b.toy ? 0 : .22) + Math.max(0, Math.sin(t * 1.7)) * (b.toy ? .15 : .1);
  b.armL.rotation.x = Math.sin(t * .9) * .05; b.armR.rotation.x = Math.sin(t * .9 + 1) * .05;
}
