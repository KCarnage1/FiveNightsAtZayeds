import * as THREE from 'three';
import { loadProp, PROPS } from './models/props.js';
const W = innerWidth, H = innerHeight; const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(W, H); r.toneMapping = THREE.ACESFilmicToneMapping; document.body.appendChild(r.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a0710); scene.add(new THREE.HemisphereLight(0xb8b0ff, 0x221018, 1.2));
const k = new THREE.DirectionalLight(0xfff0d8, 2.5); k.position.set(2, 4, 4); scene.add(k);
const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 10), new THREE.MeshStandardMaterial({ color: 0x1a1420 })); fl.rotation.x = -Math.PI / 2; scene.add(fl);
const info = [];
Promise.all(PROPS.map(async (n, i) => { const g = await loadProp(n); if (!g) { info.push(n + ': FAILED'); return; } g.position.set((i - 2.5) * 1.5, 0, 0); g.rotation.y = -0.5; scene.add(g); const b = new THREE.Box3().setFromObject(g).getSize(new THREE.Vector3()); info.push(`${n}: ${b.x.toFixed(2)}x${b.y.toFixed(2)}x${b.z.toFixed(2)} m`); })).then(() => { const cam = new THREE.PerspectiveCamera(40, W / H, 0.1, 100); cam.position.set(0, 1.8, 7.5); cam.lookAt(0, 0.9, 0); r.render(scene, cam); window.__info = info; window.__ready = true; });
