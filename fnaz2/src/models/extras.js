import * as THREE from 'three';
import { matte, plastic, metal, mesh, group, limb, faceTexture, faceDome } from './kit.js';

/* Ibrahim (the Puppet), Gelly (Mangle) and Bidoof (Balloon Boy).
 * These are stand-in bodies with the right silhouettes. Their real faces and details come when the pictures arrive. */
function shell(name) {
  const root = group(null, null, name), body = group(root), head = group(body, [0, 1.7, 0], 'head'), jaw = group(head, [0, .05, .1], 'jaw');
  return { root, body, head, jaw, face: { material: { emissive: new THREE.Color(0), emissiveIntensity: 0 } }, armL: group(body, [-.4, 1.4, 0]), armR: group(body, [.4, 1.4, 0]), t: Math.random() * 50, toy: true };
}

export function buildIbrahim() { // tall, thin, black body, white mask face, long arms
  const b = shell('ibrahim'), black = matte(0x1c1828, .5), white = plastic(0xf4f0e6, { rough: .35 });
  limb(b.body, [0, .1, 0], [0, 1.45, 0], .16, .12, black);
  mesh(new THREE.CylinderGeometry(.26, .12, .5, 12), black, b.body, [0, 1.3, 0]);
  limb(b.body, [0, 1.4, 0], [0, 1.88, 0], .08, .07, black); mesh(new THREE.TorusGeometry(.11, .025, 8, 20), white, b.body, [0, 1.72, 0], [Math.PI / 2, 0, 0]); // neck and collar
  for (const sx of [-1, 1]) mesh(new THREE.SphereGeometry(.11, 12, 8), black, b.body, [sx * .06, .05, .06], 0, [1, .6, 1.6]);
  b.head.position.y = 1.85; mesh(new THREE.SphereGeometry(.26, 28, 20), white, b.head, [0, .26, 0], 0, [.95, 1.1, .9]); faceDome(b.head, faceTexture('ibrahim'), { r: .275, y: .27, z: 0, aspect: .74 }); // the live picture goes here
  for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.05, 10, 8), black, b.head, [sx * .11, .33, .22], 0, [1, 1.6, .5]); mesh(new THREE.CircleGeometry(.05, 10), matte(0xd33, .6), b.head, [sx * .12, .12, .235], [0, 0, 0]); }
  mesh(new THREE.TorusGeometry(.07, .012, 8, 20, Math.PI), black, b.head, [0, .08, .235], [0, 0, Math.PI]);
  for (const [s, a] of [[b.armL, -1], [b.armR, 1]]) { limb(s, [0, 0, 0], [a * .1, -.7, .05], .05, .04, black); limb(s, [a * .1, -.7, .05], [a * .12, -1.35, .12], .035, .03, black); mesh(new THREE.SphereGeometry(.06, 8, 8), white, s, [a * .12, -1.4, .12]); }
  b.armL.position.set(-.18, 1.55, 0); b.armR.position.set(.18, 1.55, 0);
  return b;
}
export function buildGelly() { // a chunky white fox crawler with pink patches, short strong limbs, a big head with the photo face
  const b = shell('gelly'), w = plastic(0xf3eef0, { rough: .4 }), p = plastic(0xe86a9a, { rough: .4 }), bone = metal(0x888c94, .5);
  for (const sx of [-1, 1]) { // stubby legs with big paws
    limb(b.body, [sx * .2, .6, 0], [sx * .24, .22, .04], .13, .1, w);
    mesh(new THREE.SphereGeometry(.14, 14, 10), p, b.body, [sx * .24, .1, .12], 0, [1, .6, 1.5]);
  }
  mesh(new THREE.SphereGeometry(.4, 24, 18), w, b.body, [0, .82, 0], 0, [1.05, 1.1, .9]); // chunky torso
  mesh(new THREE.SphereGeometry(.3, 18, 14), p, b.body, [0, .76, .14], 0, [1, 1.05, .7]); // pink belly patch
  mesh(new THREE.SphereGeometry(.16, 12, 10), p, b.body, [-.28, .98, -.12], 0, [1, 1, .6]); // patch on the shoulder
  limb(b.body, [0, 1.12, .02], [0, 1.32, .08], .15, .13, w); // short thick neck
  b.head.position.set(0, 1.3, .08);
  mesh(new THREE.SphereGeometry(.3, 28, 20), w, b.head, [0, .3, 0], 0, [1.08, .95, 1]);
  faceDome(b.head, faceTexture('gelly'), { r: .325, y: .3, z: 0, aspect: .74 });
  for (const sx of [-1, 1]) { mesh(new THREE.ConeGeometry(.11, .34, 8), w, b.head, [sx * .2, .66, -.02], [0, 0, sx * -.25]); mesh(new THREE.ConeGeometry(.06, .24, 8), p, b.head, [sx * .2, .63, .02], [0, 0, sx * -.25]); }
  mesh(new THREE.SphereGeometry(.12, 12, 10), w, b.head, [0, .02, .2], 0, [1.3, .7, 1]); // chin
  for (const [s, a] of [[b.armL, -1], [b.armR, 1]]) {
    limb(s, [0, 0, 0], [a * .2, -.32, .08], .1, .085, a < 0 ? w : bone); limb(s, [a * .2, -.32, .08], [a * .26, -.62, .2], .085, .065, bone);
    mesh(new THREE.SphereGeometry(.1, 12, 10), a < 0 ? p : bone, s, [a * .27, -.68, .22], 0, [1, 1.1, .8]);
  }
  b.armL.position.set(-.36, 1.02, 0); b.armR.position.set(.36, 1.02, 0);
  limb(b.body, [0, .6, -.3], [0, .5, -.75], .11, .06, w); mesh(new THREE.SphereGeometry(.09, 12, 10), p, b.body, [0, .5, -.78]); // stumpy tail
  return b;
}
export function buildBidoof() { // small round brown body, big front teeth, a propeller cap
  const b = shell('bidoof'), br = plastic(0xa87849, { rough: .5 }), cr = plastic(0xe8d8b0, { rough: .5 });
  mesh(new THREE.SphereGeometry(.42, 24, 18), br, b.body, [0, .55, 0], 0, [1, 1.05, .95]); mesh(new THREE.SphereGeometry(.3, 18, 12), cr, b.body, [0, .5, .22], 0, [1, 1, .6]);
  for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.14, 12, 10), br, b.body, [sx * .22, .12, .05], 0, [1, .6, 1.3]); }
  b.head.position.set(0, 1.0, .05); mesh(new THREE.SphereGeometry(.34, 26, 20), br, b.head, [0, .3, 0]); faceDome(b.head, faceTexture('bidoof'), { r: .355, y: .31, z: 0, aspect: .74 });
  mesh(new THREE.SphereGeometry(.15, 16, 12), cr, b.head, [0, .0, .18], 0, [1.3, .7, .9]); // chin, below the photo
  for (const sx of [-1, 1]) { mesh(new THREE.BoxGeometry(.07, .09, .03), matte(0xffffff, .4), b.head, [sx * .035, .02, .33]); mesh(new THREE.SphereGeometry(.1, 10, 8), br, b.head, [sx * .27, .58, 0]); }
  mesh(new THREE.CylinderGeometry(.18, .3, .12, 18), matte(0xd23a3a, .5), b.head, [0, .62, 0]); mesh(new THREE.CylinderGeometry(.02, .02, .14, 6), matte(0x888888), b.head, [0, .75, 0]);
  const prop = group(b.head, [0, .83, 0]); mesh(new THREE.BoxGeometry(.5, .02, .09), matte(0x3a7ad2, .4), prop); mesh(new THREE.BoxGeometry(.09, .02, .5), matte(0xd23a3a, .4), prop); b.prop = prop;
  b.armL.position.set(-.42, .75, 0); b.armR.position.set(.42, .75, 0);
  for (const [s, a] of [[b.armL, -1], [b.armR, 1]]) { limb(s, [0, 0, 0], [a * .12, -.35, .1], .1, .08, br); mesh(new THREE.SphereGeometry(.1, 12, 10), cr, s, [a * .13, -.4, .11]); }
  b.root.userData.balloon = null; return b;
}
