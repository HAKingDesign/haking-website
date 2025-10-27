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
  Vector3,
 WireframeGeometry,
 MeshPhongMaterial,
 EdgesGeometry,
 LineSegments,
 SphereGeometry,
 MeshStandardMaterial,
 LineBasicMaterial,
 DoubleSide,
 Mesh
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as dat from 'dat.gui'


const worldVar = {
  plane: {
    width: 2500, 
    height: 1000,
    widthSegments: 250,
    heightSegments: 100,
  },
  camTargetPosn:{
    x: 0, 
    y: 30,
    z: -500
  },
  camPosn:{
    x: 0, 
    y: 35,
    z: 500
  },
  camFOV: 45,
  camAspectRatio: 1,
  camNearClip: 0.1,
  camFarClip: 2000,

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

function moveCamera(){
  const {camPosn} = worldVar
  const {camTargetPosn} = worldVar
  const {camFOV} = worldVar
  const {camAspectRatio} = worldVar
  const {camNearClip} = worldVar
  const {camFarClip} = worldVar

  camera.position.set(camPosn.x, camPosn.y, camPosn.z)
  camera.fov=camFOV
  // camera.aspect=camAspectRatio
  camera.near=camNearClip
  camera.far=camFarClip
  camTarget.x = camTargetPosn.x
  camTarget.y = camTargetPosn.y
  camTarget.z = camTargetPosn.z
  camera.lookAt(camTarget)
  camera.updateProjectionMatrix();
}

function createDatGui(){
  const gui = new dat.GUI()
  var planeFolder = gui.addFolder('plane');
  planeFolder.add(worldVar.plane, 'width', 50 , 1000)
  .onChange(regenPlane)
  planeFolder.add(worldVar.plane, 'height', 50 , 1000)
  .onChange(regenPlane)
  planeFolder.add(worldVar.plane, 'widthSegments', 25 , 1000)
  .onChange(regenPlane)
  planeFolder.add(worldVar.plane, 'heightSegments', 25 , 1000)
  .onChange(regenPlane)
  var camFolder = gui.addFolder('camera')
  var camPosnFolder = camFolder.addFolder('camera Position')
  var camTargetFolder = camFolder.addFolder('camera Target')
  camPosnFolder.add(worldVar.camPosn, 'x', -100, 100).onChange(moveCamera)
  camPosnFolder.add(worldVar.camPosn, 'y', 0, 200).onChange(moveCamera)
  camPosnFolder.add(worldVar.camPosn, 'z', -100, 1000).onChange(moveCamera)
  camTargetFolder.add(worldVar.camTargetPosn, 'x', -750, 750).onChange(moveCamera)
  camTargetFolder.add(worldVar.camTargetPosn, 'y', -100, 200).onChange(moveCamera)
  camTargetFolder.add(worldVar.camTargetPosn, 'z', -1000, 100).onChange(moveCamera)
  camFolder.add(worldVar, 'camFOV', 0, 100).onChange(moveCamera)
  // camFolder.add(worldVar, 'camAspectRatio', 0, 10).onChange(moveCamera)
  camFolder.add(worldVar, 'camNearClip', 0, 10).onChange(moveCamera)
  camFolder.add(worldVar, 'camFarClip', 1000, 5000).onChange(moveCamera)
}
// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let renderer;
let scene;
let loop;
let terrain;
let line;
let camTarget;

const mouse = {
  x: undefined, 
  y: undefined
}

class World {
   constructor(container) {
    createDatGui()
    let color = '0e00cf'
     // Instances of camera, scene, and renderer
    const raycaster = new Raycaster()
    const {camPosn, camTargetPosn} = worldVar
     camera = createCamera(camPosn.x, camPosn.y, camPosn.z);
     camTarget = new Vector3(camTargetPosn.x, camTargetPosn.y, camTargetPosn.z);
     scene = createScene("#0f0d0f");
     renderer = createRenderer();
      // Initialize Loop
     camera.lookAt(camTarget)
      container.append(renderer.domElement);
      // Light Instance, with optional light helper
     const { light, lightHelper,light2,lightHelper2, pointLight } = createLights('#d89ff0');
      // loop.updatables.push(light);
      
      scene.add(light2);

    
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

   const material = new MeshStandardMaterial({
       color: 'purple',
       emissive: '#b646e6',
      flatShading: true,  
      polygonOffset: true,
      polygonOffsetFactor: 1, // positive value pushes polygon further away
      polygonOffsetUnits: 1
    });
    const geometry = new SphereGeometry( 150, 32, 16 ); 
    const sphere = new Mesh( geometry, material ); 
    sphere.position.z = -550
    sphere.position.y = 100
    // sphere.rotation.z = -Math.PI * 0.1
    scene.add( sphere );

    // wireframe
    var geo = new EdgesGeometry( sphere.geometry ); // or WireframeGeometry
    var mat = new LineBasicMaterial( { color: '#e1d2ff' } );
    var wireframe = new LineSegments( geo, mat );
    sphere.add( wireframe );
      
    
//  

//  const line = new LineSegments( wireframe );
//   line.material.depthTest = true;
//   line.material.opacity = 0.25;
//   line.material.transparent = true;
    
 const material2 = new MeshPhongMaterial({
   color: '#015d92',
  //  side : DoubleSide,
  //  flatShading: true, 
  
   wireframe:true
  //  vertexColors: true, 
  //  shininess:60,
 });

//  const geometry = new SphereGeometry(15, 32, 16)
 terrain.add(new Mesh(terrain.geometry, material2));
  console.log(terrain)
   loop = new Loop(
    camera, 
    scene, 
    renderer, 
    raycaster, 
    mouse,
    terrain, 
    initialColor,
    hoverColor,
    sphere);

    loop.updatables.push(light);
    // loop.updatables.push(mouse);
    // loop.updatables.push(terrain);
    
    // scene.add(light, lightHelper);
    scene.add(terrain,pointLight);
 
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