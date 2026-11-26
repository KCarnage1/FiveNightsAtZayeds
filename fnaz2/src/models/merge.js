import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/* Fewer draw calls: every mesh under `root` that shares a material is baked into one mesh (positions moved into root's space).
 * Skips anything that moves or has its own animation (mark with userData.keep). */
export function mergeByMaterial(root, { castShadow = true } = {}) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert(), groups = new Map(), drop = [];
  root.traverse((o) => {
    if (!o.isMesh || o.userData.keep || Array.isArray(o.material) || o.isInstancedMesh) return;
    const m = o.material, key = [m.uuid].join('|');
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!g.attributes.normal) g.computeVertexNormals();
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    if (!groups.has(key)) groups.set(key, { mat: m, geos: [], recv: o.receiveShadow });
    groups.get(key).geos.push(g); drop.push(o);
  });
  for (const o of drop) o.parent && o.parent.remove(o);
  let made = 0;
  for (const { mat, geos, recv } of groups.values()) { const merged = mergeGeometries(geos, false); if (!merged) continue; const mesh = new THREE.Mesh(merged, mat); mesh.castShadow = castShadow; mesh.receiveShadow = recv; root.add(mesh); made++; }
  return { before: drop.length, after: made };
}
