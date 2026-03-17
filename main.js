// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Geometry (particles)
const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000
  );
}

geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(vertices, 3)
);

// Material
const material = new THREE.PointsMaterial({
  color: 0x00ffff,
  size: 2,
});

// Points
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Camera position
camera.position.z = 500;

// Animation
function animate() {
  requestAnimationFrame(animate);

  particles.rotation.x += 0.0005;
  particles.rotation.y += 0.0005;

  renderer.render(scene, camera);
}

animate();

// Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});