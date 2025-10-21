import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";
import { 
  createTerrain,
  randomizePlane
 } from "./components/terrain.js"
import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/loop.js";
import { Resizer } from "./systems/resizer.js";

import {
  Raycaster,
  BufferAttribute, 
  PlaneGeometry, 
 WireframeGeometry,
 LineSegments,
 SphereGeometry,
 MeshPhongMaterial,
 DoubleSide,
 Mesh
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as dat from 'dat.gui'

const gui = new dat.GUI()
const worldVar = {
  plane: {
    width: 500, 
    height: 1000,
    widthSegments: 50,
    heightSegments: 100,
  }
}

   const initialColor = {
      r: 0,
      g: 0.19,
      b: .9
    }

    const hoverColor = {
      r: 0.2,
      g: 0.7,
      b: 3
    }

function regenPlane(){
  terrain.geometry.dispose()
  terrain.geometry = new PlaneGeometry(
    worldVar.plane.width, 
    worldVar.plane.height, 
    worldVar.plane.widthSegments, 
    worldVar.plane.heightSegments);
  terrain = randomizePlane(terrain, {
     plane: worldVar.plane,
     initialColor: initialColor,
     wireframe: false
   })
}

gui.add(worldVar.plane, 'width', 50 , 1000)
.onChange(regenPlane)
gui.add(worldVar.plane, 'height', 50 , 1000)
.onChange(regenPlane)
gui.add(worldVar.plane, 'widthSegments', 25 , 100)
.onChange(regenPlane)
gui.add(worldVar.plane, 'heightSegments', 25 , 100)
.onChange(regenPlane)

// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let renderer;
let scene;
let loop;
let terrain;
let line;

const mouse = {
  x: undefined, 
  y: undefined
}
 
class World {
   constructor(container) {
    let color = '0e00cf'
     // Instances of camera, scene, and renderer
    const raycaster = new Raycaster()
     camera = createCamera();
     scene = createScene("#0f0d0f");
     renderer = createRenderer();
      // Initialize Loop
     
      container.append(renderer.domElement);
      // Light Instance, with optional light helper
     const { light, lightHelper } = createLights(0xffffff);
      // loop.updatables.push(light);
      scene.add(light);
 
     const resizer = new Resizer(container, camera, renderer);
      resizer.onResize = () => {
      this.render();
     };
     
     new OrbitControls(camera, renderer.domElement)
 
   // Terrain Instance
   terrain = createTerrain({
     plane: worldVar.plane,
     initialColor: initialColor,
     wireframe: false
   });
   
    
//  const wireframe = new WireframeGeometry( terrain.geometry );

//  const line = new LineSegments( wireframe );
//   line.material.depthTest = true;
//   line.material.opacity = 0.25;
//   line.material.transparent = true;
    
//  const material = new MeshPhongMaterial({
//    color: 0x000000,
//    side : DoubleSide,
//    flatShading: true, 
//   //  vertexColors: true, 
//    shininess:60,
//  });

//  const geometry = new SphereGeometry(15, 32, 16)
//  const sphere = new Mesh(geometry, material);
  
   loop = new Loop(
    camera, 
    scene, 
    renderer, 
    raycaster, 
    mouse,
    terrain, 
    initialColor,
    hoverColor);

    loop.updatables.push(light);
    // loop.updatables.push(mouse);
    // loop.updatables.push(terrain);
    
    scene.add(light, terrain, lightHelper);
 
    }
    render() {
     // Draw a single frame
     renderer.render(scene, camera);
   }
    // Animation handlers
   start() {
     loop.start();
   }
    stop() {
     loop.stop();
   }

   
 }


 addEventListener('mousemove', (event)=> {
    mouse.x = (event.clientX / innerWidth)*2-1
    mouse.y = -(event.clientY / innerHeight)*2+1
})


export { World };