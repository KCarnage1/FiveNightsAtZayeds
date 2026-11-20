import * as THREE from 'three';
import { buildZayed, SPEC, animate } from './models/cast.js';
const q = new URLSearchParams(location.search);
const W = innerWidth, H = innerHeight;
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(W, H); r.shadowMap.enabled = true; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.25; document.body.appendChild(r.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a0710);
scene.add(new THREE.HemisphereLight(0xb8b0ff, 0x221018, .8));
const key = new THREE.DirectionalLight(0xfff0d8, 2.2); key.position.set(2, 4, 4); key.castShadow = true; scene.add(key);
const rim = new THREE.DirectionalLight(0x6a7cff, 1.2); rim.position.set(-3, 2, -3); scene.add(rim);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 10), new THREE.MeshStandardMaterial({ color: 0x1a1420, roughness: .9 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
const who = Object.keys(SPEC), bots = [];
['withered', 'toy'].forEach((v, row) => who.forEach((w, i) => { const b = buildZayed(w, v); b.root.position.set((i - 1.5) * 1.9, 0, -row * 3); scene.add(b.root); bots.push(b); }));
const cam = new THREE.PerspectiveCamera(q.get('fov') ? +q.get('fov') : 38, W / H, .1, 100);
const view = q.get('view') || 'all';
if (view === 'all') { cam.position.set(0, 3.4, 10.5); cam.lookAt(0, 1.2, -1.5); }
else { const [x, z] = view.split(',').map(Number); cam.position.set(x, 1.95, z + (q.get('d') ? +q.get('d') : 3.6)); cam.lookAt(x, 1.95, z); }
window.__ready = false;
let n = 0; const L = THREE.DefaultLoadingManager; 
function frame() { bots.forEach((b) => animate(b, .016)); r.render(scene, cam); if (++n === 30) window.__ready = true; requestAnimationFrame(frame); }
setTimeout(frame, 800);
