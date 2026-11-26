import * as THREE from 'three';
import { mergeByMaterial, lookSig } from './merge.js';
import { fur, plastic, metal, matte, mesh, group, limb, smoothLathe, canvasTex, loadFace, faceDome } from './kit.js';

/* The Zayeds. One soul, four bodies: the Camel (patience), the Cat (nerve), the Goat (memory) and the Falcon (hunger).
 * "withered" = the old bodies from the first game, worn and broken. "toy" = the newer, shinier bodies the soul was moved into.
 * Proportions follow a cartoon animatronic: a big round head on a pear-shaped body, thin jointed limbs, big shoes. */
export const SPEC = {
  zayed:   { kind: 'camel',  face: 'zayed',   fur: '#c99556', toy: '#e2b46a', belly: '#f4e3bd', tie: 0xb3262e, word: 'ZAYED' },
  bubbles: { kind: 'cat',    face: 'bubbles', fur: '#d9809f', toy: '#ff8cc0', belly: '#ffe0ee', tie: 0x2d5fd0, word: 'BUBBLES' },
  taffy:   { kind: 'goat',   face: 'taffy',   fur: '#e3d6bd', toy: '#fff0d4', belly: '#ffd9e6', tie: 0x2f9a58, word: 'TAFFY' },
  sherbet: { kind: 'falcon', face: 'sherbet', fur: '#93714a', toy: '#c9a36a', belly: '#f1dcae', tie: 0xe8872b, word: 'SHERBET' }
};

const J = (parent, pos, r, mat) => mesh(new THREE.SphereGeometry(r, 18, 14), mat, parent, pos); // a ball joint

function bellyEmblem(color, word, toy) {
  return canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = color; g.fillRect(0, 0, W, H);
    if (toy) { g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(W * .38, H * .3, 60, 34, -.5, 0, 7); g.fill(); }
    g.fillStyle = toy ? '#6a2a8a' : 'rgba(60,40,30,.55)'; g.font = '800 44px system-ui,sans-serif'; g.textAlign = 'center'; g.fillText(word, W / 2, H * .62);
    g.fillStyle = toy ? '#ffd24a' : 'rgba(80,60,40,.5)'; for (let i = 0; i < 5; i++) { const x = W * (.2 + i * .15), y = H * .78; g.beginPath(); for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 7 : 16; g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); } g.closePath(); g.fill(); }
  });
}

export function buildZayed(who, variant = 'withered') {
  const s = SPEC[who], toy = variant === 'toy';
  const skin = toy ? plastic(s.toy, { rough: .32 }) : fur(s.fur, { grime: .35, bump: .8 });
  const dark = matte(0x16111a, .55), bone = metal(toy ? 0xd7dbe2 : 0x7a7e86, toy ? .22 : .55), white = toy ? plastic(0xfff6e6, { rough: .3 }) : matte(0xd9ccb0, .85);
  const tieM = toy ? plastic(s.tie, { rough: .2 }) : matte(s.tie, .7), shoe = toy ? tieM : matte(0x3a2a22, .8);
  const root = group(null, null, who + '-' + variant), body = group(root);

  // legs: thigh, knee ball, shin, big rounded shoe
  for (const sx of [-1, 1]) {
    limb(body, [sx * .15, .66, 0], [sx * .15, .38, .015], .08, .07, skin); J(body, [sx * .15, .38, .015], .08, bone);
    limb(body, [sx * .15, .38, .015], [sx * .15, .13, 0], .066, .06, skin);
    const f = mesh(new THREE.SphereGeometry(.13, 22, 16), shoe, body, [sx * .15, .075, .075], 0, [1, .55, 1.6]); f.castShadow = true;
  }
  // torso: a smooth pear (wide hips, narrow chest)
  const torso = smoothLathe([[0, .55], [.2, .58], [.3, .7], [.33, .9], [.3, 1.1], [.24, 1.3], [.15, 1.42], [.09, 1.5], [0, 1.52]], skin, 64, 56); torso.rotation.y = Math.PI; body.add(torso); torso.castShadow = true; // seam at the back
  // belly: a lighter panel with an emblem (toy) or a torn-open hatch showing the metal ribs (withered)
  if (toy) { const emb = mesh(new THREE.SphereGeometry(.27, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ map: bellyEmblem(s.belly, s.word, true), roughness: .35, clearcoat: .6 }), body, [0, .92, .06], [Math.PI / 2, 0, 0], [1, .55, 1.2]); emb.castShadow = false; }
  else {
    mesh(new THREE.CylinderGeometry(.17, .2, .08, 20), dark, body, [0, .93, .26], [Math.PI / 2, 0, 0], [1, 1, 1]);
    for (let i = -2; i <= 2; i++) limb(body, [i * .055, 1.07, .3], [i * .06, .8, .3], .012, .012, bone);
    for (const y of [.88, .98]) limb(body, [-.14, y, .3], [.14, y, .3], .011, .011, bone);
    for (let i = 0; i < 3; i++) limb(body, [.1 + i * .02, .8, .3], [.17 + i * .05, .62 - i * .03, .3], .006, .004, dark);
  }
  // neck joint and bow tie wrapped around it
  J(body, [0, 1.52, 0], .085, bone);
  for (const sx of [-1, 1]) mesh(new THREE.SphereGeometry(.07, 18, 12), tieM, body, [sx * .095, 1.47, .12], [0, sx * .5, sx * -.25], [1.5, .8, .5]);
  J(body, [0, 1.47, .15], .04, tieM);

  // arms: shoulder ball, upper arm, elbow ball, forearm, mitten hand with a thumb
  const arms = {};
  for (const [side, sx] of [['L', -1], ['R', 1]]) {
    const sh = group(body, [sx * .31, 1.3, 0], 'arm' + side); J(sh, [0, 0, 0], .095, skin);
    limb(sh, [0, 0, 0], [sx * .06, -.26, .03], .06, .052, skin); const el = group(sh, [sx * .06, -.26, .03], 'elbow' + side); J(el, [0, 0, 0], .06, bone);
    const gone = !toy && side === 'R' && who !== 'taffy';
    if (gone) { limb(el, [0, 0, 0], [0, -.26, .08], .03, .026, bone); J(el, [0, -.27, .085], .04, dark); for (let k = -1; k <= 1; k++) limb(el, [0, -.27, .085], [k * .045, -.42, .13], .01, .006, bone); }
    else { limb(el, [0, 0, 0], [0, -.24, .08], .052, .046, skin); const h = mesh(new THREE.SphereGeometry(.075, 18, 14), white, el, [0, -.31, .1], 0, [1, 1.25, .8]); mesh(new THREE.SphereGeometry(.032, 10, 8), white, el, [sx * -.06, -.28, .11]); h.castShadow = true; }
    arms[side] = sh; sh.rotation.z = sx * .1; sh.userData.rest = [0, 0, sx * .1];
  }

  // head: a big round cartoon head with a wide cheek, the real face on its front, a lower jaw with teeth
  const head = group(body, [0, 1.55, 0], 'head');
  mesh(new THREE.SphereGeometry(.35, 44, 32), skin, head, [0, .33, 0], 0, [1.08, .95, 1]);
  const jaw = group(head, [0, .07, .08], 'jaw');
  mesh(new THREE.SphereGeometry(.2, 28, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), skin, jaw, [0, .02, .13], 0, [1.1, .7, 1.1]);
  mesh(new THREE.SphereGeometry(.175, 22, 12, 0, Math.PI * 2, 0, Math.PI / 2), dark, jaw, [0, .03, .13], [Math.PI, 0, 0], [1.1, .45, 1.05]);
  for (let i = 0; i < 9; i++) { const a = -0.8 + i * .2; mesh(new THREE.ConeGeometry(.016, .05, 6), white, jaw, [Math.sin(a) * .185, .045, .13 + Math.cos(a) * .17], [Math.PI, 0, 0]); }
  if (!toy) { jaw.rotation.x = .26; jaw.userData.rest = .26; }
  const face = faceDome(head, loadFace(s.face), { r: .362, y: .35, z: 0, aspect: .74 });
  const extras = kindExtras(s.kind, head, skin, dark, toy, who, body, white);
  if (toy) toyDetails(head, who, body); else tornHead(head, who, bone, dark);
  face.userData.keep = true; // the live photo dome stays its own mesh
  // one mesh per look per joint: animate() only moves root > body > (head > jaw, armL, armR)
  const joints = new Set([head, jaw, arms.L, arms.R]);
  for (const j of [body, head, jaw, arms.L, arms.R]) mergeByMaterial(j, { stop: new Set([...joints, body].filter((x) => x !== j)), sig: lookSig });
  return { root, body, head, jaw, face, armL: arms.L, armR: arms.R, who, variant, kind: s.kind, toy, extras, t: Math.random() * 100 };
}

function kindExtras(kind, head, skin, dark, toy, who, body, white) {
  const inner = toy ? plastic(0xffb7cf, { rough: .4 }) : matte(0x8c5a52, .9);
  if (kind === 'camel') {
    mesh(new THREE.SphereGeometry(.3, 26, 18), skin, body, [0, 1.28, -.3], 0, [.95, 1, 1.05]); // hump
    for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.11, 18, 12), skin, head, [sx * .33, .58, -.02], [0, 0, sx * .5], [1, 1.5, .55]); mesh(new THREE.SphereGeometry(.065, 14, 10), inner, head, [sx * .335, .58, .02], [0, 0, sx * .5], [1, 1.4, .3]); }
    mesh(new THREE.CylinderGeometry(.15, .19, .2, 24), matte(0xb3262e, .5), head, [0, .72, -.02]); mesh(new THREE.TorusGeometry(.19, .012, 8, 24), matte(0xffd24a, .35), head, [0, .64, -.02], [Math.PI / 2, 0, 0]);
    mesh(new THREE.CylinderGeometry(.012, .012, .12, 8), matte(0xffd24a, .35), head, [0, .85, -.02]);
  } else if (kind === 'cat') {
    for (const sx of [-1, 1]) { mesh(new THREE.ConeGeometry(.14, .34, 4), skin, head, [sx * .24, .7, -.02], [0, Math.PI / 4, sx * -.3]); mesh(new THREE.ConeGeometry(.08, .24, 4), inner, head, [sx * .24, .67, .02], [0, Math.PI / 4, sx * -.3]); for (let w = 0; w < 3; w++) limb(head, [sx * .15, .2 - w * .025, .3], [sx * .46, .26 - w * .09, .32], .005, .003, matte(0xffffff, .3)); }
    mesh(new THREE.SphereGeometry(.04, 12, 8), matte(0xff5a8a, .4), head, [0, .22, .35], 0, [1.2, .8, .8]);
    const tail = new THREE.CatmullRomCurve3([new THREE.Vector3(0, .62, -.28), new THREE.Vector3(0, .5, -.6), new THREE.Vector3(.1, .9, -.7), new THREE.Vector3(.04, 1.2, -.55)]); mesh(new THREE.TubeGeometry(tail, 24, .05, 10), skin, body);
  } else if (kind === 'goat') {
    for (const sx of [-1, 1]) { mesh(new THREE.TorusGeometry(.15, .04, 10, 22, Math.PI * 1.2), matte(toy ? 0xf3e2c0 : 0x8a7a5a, .4), head, [sx * .2, .68, -.02], [0, 0, sx > 0 ? .1 : Math.PI - .1]); mesh(new THREE.SphereGeometry(.085, 14, 10), skin, head, [sx * .38, .42, 0], [0, 0, sx * -.9], [1.6, .5, .7]); }
    mesh(new THREE.ConeGeometry(.055, .22, 10), white, head, [0, -.03, .32], [Math.PI, 0, 0]);
  } else {
    mesh(new THREE.ConeGeometry(.085, .26, 10), matte(toy ? 0xffc548 : 0xb98a2e, .3), head, [0, .17, .4], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 5; i++) mesh(new THREE.ConeGeometry(.045, .26 - Math.abs(i - 2) * .035, 6), skin, head, [(i - 2) * .07, .7, -.05 - Math.abs(i - 2) * .02], [-.3 - Math.abs(i - 2) * .08, 0, (i - 2) * -.2]);
    for (const sx of [-1, 1]) for (let i = 0; i < 4; i++) mesh(new THREE.BoxGeometry(.016, .5 - i * .06, .13), skin, body, [sx * (.5 + i * .06), 1.0 - i * .1, -.1], [0, sx * .3, sx * (.5 + i * .12)]);
  }
  return {};
}

/* Toy bodies: rosy cheeks outside the photo, a gloss highlight and a different party piece for each character. */
const onHead = (r, up, around) => [Math.sin(around) * Math.cos(up) * r, 0.33 + Math.sin(up) * r, Math.cos(around) * Math.cos(up) * r];
function toyDetails(head, who, body) {
  const blush = new THREE.MeshStandardMaterial({ color: 0xff4a80, roughness: .5, emissive: 0xff2060, emissiveIntensity: .3, polygonOffset: true, polygonOffsetFactor: -3 });
  for (const sx of [-1, 1]) { const ar = sx * 1.0, [x, y, z] = onHead(.352, -0.14, ar); const c = mesh(new THREE.CircleGeometry(.07, 24), blush, head, [x, y, z]); c.rotation.set(0.12, ar, 0); c.castShadow = false; }
  const gold = plastic(0xffd24a, { rough: .2 }), pink = plastic(0xff6aa8, { rough: .2 });
  if (who === 'bubbles') { mesh(new THREE.ConeGeometry(.12, .3, 18), pink, head, [0.02, .86, -.06], [-.12, 0, .18]); mesh(new THREE.SphereGeometry(.035, 10, 8), gold, head, [.05, 1.01, -.08]); }
  if (who === 'taffy') for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; mesh(new THREE.SphereGeometry(.04, 10, 8), plastic([0xff7aa0, 0xfff1a0, 0x9ae0ff][i % 3], { rough: .3 }), head, [Math.sin(a) * .29, .68, Math.cos(a) * .29 - .02]); }
  if (who === 'sherbet') { for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; mesh(new THREE.ConeGeometry(.035, .09, 6), gold, head, [Math.sin(a) * .15, .78, Math.cos(a) * .15 - .02]); } mesh(new THREE.CylinderGeometry(.16, .16, .045, 18), gold, head, [0, .74, -.02]); }
  if (who === 'zayed') mesh(new THREE.SphereGeometry(.035, 10, 8), gold, head, [0, .87, -.02]);
  mesh(new THREE.CircleGeometry(.055, 18), matte(0xffd24a, .35), body, [.14, 1.18, .29]).rotation.y = .3; // delivery badge
}

/* Withered bodies: torn fur on the head over bare metal, loose wires, an empty socket. */
function tornHead(head, who, bone, dark) {
  mesh(new THREE.SphereGeometry(.15, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), bone, head, [.24, .46, .12], [.5, 0, -.9], [1, .5, 1]);
  mesh(new THREE.TorusGeometry(.1, .013, 6, 16), dark, head, [.24, .44, .14], [.5, .6, 0]);
  for (let i = 0; i < 3; i++) limb(head, [.24 + i * .02, .46, .22], [.35 + i * .04, .33 - i * .05, .27], .006, .004, dark);
  mesh(new THREE.SphereGeometry(.03, 8, 6), matte(0xd0453a, .4), head, [-.31, .2, .1]);
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
  b.jaw.rotation.x = (b.toy ? 0 : .26) + Math.max(0, Math.sin(t * 1.7)) * (b.toy ? .15 : .1);
  b.armL.rotation.x = Math.sin(t * .9) * .05; b.armR.rotation.x = Math.sin(t * .9 + 1) * .05;
}
