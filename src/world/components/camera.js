import { PerspectiveCamera } from 'three';
 
function createCamera() {
 const camera = new PerspectiveCamera(
   45, // FOV = Field Of View
   1, // Aspect ratio (dummy value)
   0.1, // Near clipping plane
   1000, // Far clipping plane
 );
 
 // Move the camera back so we can view the scene
 //      x y  z
 camera.position.set(0, 0, 50);
 camera.rotation.x -= Math.PI * 0.35;
 camera.tick = (delta) => {
  
 };
 
 return camera;
}
 
export { createCamera };