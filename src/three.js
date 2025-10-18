import * as THREE from 'three'


const container = document.querySelector('scene-container');

const scene = new THREE.Scene();

scene.background = new THREE.Color('skyblue');
 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x6623a5, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#bg'),
// });
// const renderer = new THREE.WebGLRenderer( { antialias: true ,
//     canvas: document.querySelector('#bg'),
//  } );


const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
renderer.setAnimationLoop( animate );
container.append(renderer.domElement);

function animate( time ) {
  requestAnimationFrame(animate);

  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  torus.rotation.x = time / 2000;
	torus.rotation.y = time / 1000;

//   moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}