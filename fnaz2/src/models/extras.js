import * as THREE from 'three';
import { matte, plastic, metal, mesh, group, limb, faceTexture, faceDome } from './kit.js';

/* Ibrahim (the Puppet), Gelly (Mangle) and Bidoof (Balloon Boy).
 * These are stand-in bodies with the right silhouettes. Their real faces and details come when the pictures arrive. */
function shell(name) {
  const root = group(null, null, name), body = group(root), head = group(body, [0, 1.7, 0], 'head'), jaw = group(head, [0, .05, .1], 'jaw');
  return { root, body, head, jaw, face: { material: { emissive: new THREE.Color(0), emissiveIntensity: 0 } }, armL: group(body, [-.4, 1.4, 0]), armR: group(body, [.4, 1.4, 0]), t: Math.random() * 50, toy: true };
}

export function buildIbrahim() { // tall, thin, black body, white mask face, long arms
  const b = shell('ibrahim'), black = matte(0x0c0a10, .5), white = plastic(0xf4f0e6, { rough: .35 });
  limb(b.body, [0, .1, 0], [0, 1.45, 0], .16, .12, black);
  mesh(new THREE.CylinderGeometry(.26, .12, .5, 12), black, b.body, [0, 1.3, 0]);
  b.head.position.y = 1.85; mesh(new THREE.SphereGeometry(.26, 28, 20), white, b.head, [0, .26, 0], 0, [.95, 1.1, .9]); faceDome(b.head, faceTexture('ibrahim'), { r: .275, y: .27, z: 0, aspect: .74 }); // the live picture goes here
  for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.05, 10, 8), black, b.head, [sx * .11, .33, .22], 0, [1, 1.6, .5]); mesh(new THREE.CircleGeometry(.05, 10), matte(0xd33, .6), b.head, [sx * .12, .12, .235], [0, 0, 0]); }
  mesh(new THREE.TorusGeometry(.07, .012, 8, 20, Math.PI), black, b.head, [0, .08, .235], [0, 0, Math.PI]);
  for (const [s, a] of [[b.armL, -1], [b.armR, 1]]) { limb(s, [0, 0, 0], [a * .1, -.7, .05], .05, .04, black); limb(s, [a * .1, -.7, .05], [a * .12, -1.35, .12], .035, .03, black); mesh(new THREE.SphereGeometry(.06, 8, 8), white, s, [a * .12, -1.4, .12]); }
  b.armL.position.set(-.18, 1.55, 0); b.armR.position.set(.18, 1.55, 0);
  return b;
}
export function buildGelly() { // white fox body with pink patches, long neck, cracked head, long limbs
  const b = shell('gelly'), w = plastic(0xf3eef0, { rough: .4 }), p = plastic(0xe86a9a, { rough: .4 }), dk = matte(0x14101a, .6), bone = metal(0x888c94, .5);
  limb(b.body, [0, .7, 0], [0, 1.3, 0], .2, .17, w);
  mesh(new THREE.SphereGeometry(.28, 18, 14), p, b.body, [0, .95, .05], 0, [1.1, 1.2, .8]);
  limb(b.body, [0, 1.3, 0], [.03, 1.95, .12], .08, .06, w); // long neck
  b.head.position.set(.03, 1.95, .12); mesh(new THREE.SphereGeometry(.24, 22, 16), w, b.head, [0, .24, 0], 0, [1, .95, 1.1]); faceDome(b.head, faceTexture('gelly'), { r: .27, y: .26, z: .02, aspect: .74 });
  mesh(new THREE.ConeGeometry(.12, .38, 8), w, b.head, [0, .2, .3], [Math.PI / 2, 0, 0]); mesh(new THREE.SphereGeometry(.05, 10, 8), dk, b.head, [0, .2, .5]);
  for (const sx of [-1, 1]) { mesh(new THREE.ConeGeometry(.1, .35, 6), w, b.head, [sx * .16, .56, 0], [0, 0, sx * -.2]); mesh(new THREE.SphereGeometry(.04, 8, 6), dk, b.head, [sx * .1, .3, .22], 0, [1, 1.5, .5]); }
  for (const [s, a] of [[b.armL, -1], [b.armR, 1]]) { limb(s, [0, 0, 0], [a * .3, -.5, .1], .06, .05, a < 0 ? w : bone); limb(s, [a * .3, -.5, .1], [a * .45, -1.15, .3], .05, .04, bone); }
  b.armL.position.set(-.3, 1.2, 0); b.armR.position.set(.3, 1.2, 0);
  for (const sx of [-1, 1]) limb(b.body, [sx * .15, .7, 0], [sx * .3, .25, .1], .09, .07, w);
  limb(b.body, [0, .7, -.1], [0, .4, -.9], .1, .04, w); // long tail
  return b;
}
export function buildBidoof() { // small round brown body, big front teeth, a propeller cap
  const b = shell('bidoof'), br = plastic(0xa87849, { rough: .5 }), cr = plastic(0xe8d8b0, { rough: .5 });
  mesh(new THREE.SphereGeometry(.42, 24, 18), br, b.body, [0, .55, 0], 0, [1, 1.05, .95]); mesh(new THREE.SphereGeometry(.3, 18, 12), cr, b.body, [0, .5, .22], 0, [1, 1, .6]);
  for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.14, 12, 10), br, b.body, [sx * .22, .12, .05], 0, [1, .6, 1.3]); }
  b.head.position.set(0, 1.0, .05); mesh(new THREE.SphereGeometry(.34, 26, 20), br, b.head, [0, .3, 0]); faceDome(b.head, faceTexture('bidoof'), { r: .355, y: .31, z: 0, aspect: .74 });
  mesh(new THREE.SphereGeometry(.2, 16, 12), cr, b.head, [0, .18, .2], 0, [1.2, .9, .8]);
  for (const sx of [-1, 1]) { mesh(new THREE.SphereGeometry(.07, 10, 8), matte(0x101010, .3), b.head, [sx * .13, .36, .3]); mesh(new THREE.BoxGeometry(.07, .12, .03), matte(0xffffff, .4), b.head, [sx * .035, .08, .39]); mesh(new THREE.SphereGeometry(.1, 10, 8), br, b.head, [sx * .27, .58, 0]); }
  mesh(new THREE.CylinderGeometry(.18, .3, .12, 18), matte(0xd23a3a, .5), b.head, [0, .62, 0]); mesh(new THREE.CylinderGeometry(.02, .02, .14, 6), matte(0x888888), b.head, [0, .75, 0]);
  const prop = group(b.head, [0, .83, 0]); mesh(new THREE.BoxGeometry(.5, .02, .09), matte(0x3a7ad2, .4), prop); mesh(new THREE.BoxGeometry(.09, .02, .5), matte(0xd23a3a, .4), prop); b.prop = prop;
  b.armL.position.set(-.42, .75, 0); b.armR.position.set(.42, .75, 0);
  for (const [s, a] of [[b.armL, -1], [b.armR, 1]]) limb(s, [0, 0, 0], [a * .12, -.35, .1], .1, .08, br);
  b.root.userData.balloon = null; return b;
}
