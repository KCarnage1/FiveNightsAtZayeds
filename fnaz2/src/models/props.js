import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/* Hard-surface props modelled in CAD (build123d, source in models-src/*.py) and exported as glTF. They are authored in millimetres with Z up;
 * this loader turns them into metres with Y up, resting on the floor, and gives them the game's lighting. */
const loader = new GLTFLoader(), cache = new Map();
export const PROPS = ['music_box', 'arcade_cabinet', 'desk_fan', 'vent_grille', 'flashlight', 'party_table'];

function fix(gltf, name) {
  const g = new THREE.Group(); const inner = gltf.scene; g.add(inner);
    // the exporter already converts CAD's Z-up to glTF's Y-up
  inner.updateMatrixWorld(true);
  inner.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; const m = o.material; if (m && name === 'arcade_cabinet' && m.color) { const c = m.color; if (c.b > 0.9 && c.g > 0.7 && c.r < 0.4) { m.emissive = c.clone(); m.emissiveIntensity = 1.1; } else if (c.r > 0.9 && c.g > 0.75 && c.b < 0.35) { m.emissive = c.clone(); m.emissiveIntensity = .7; } }
      if (m) { m.metalness = Math.min(m.metalness || 0, 0.5); m.roughness = Math.max(m.roughness ?? 0.6, 0.35); m.side = THREE.FrontSide; } } });
  const box = new THREE.Box3().setFromObject(inner); const big = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z); g.scale.setScalar(big > 20 ? 0.001 : 1); // millimetres or already metres
  inner.position.set(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2); // centred, on the floor
  return g;
}
/* Resolves with a new copy of the prop, or null if it could not be loaded (the game then keeps its simple shapes). */
export function loadProp(name) {
  if (!cache.has(name)) cache.set(name, new Promise((res) => loader.load('assets/models/' + name + '.glb', (gl) => { try { res(fix(gl, name)); } catch (e) { console.warn('prop', name, e); res(null); } }, undefined, () => res(null))));
  return cache.get(name).then((g) => (g ? g.clone(true) : null));
}
