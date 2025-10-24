import { PerspectiveCamera } from 'three';
 
function createCamera(
  x,
  y,
  z, 
  FOV, 
  aspectRatio, 
  nearClip, 
  farClip
) {
 const camera = new PerspectiveCamera(
   FOV, // FOV = Field Of View
   aspectRatio, // Aspect ratio (dummy value)
   nearClip, // Near clipping plane
   farClip, // Far clipping plane
 );
 
 // Move the camera back so we can view the scene
 //      x y  z
 camera.position.set(x, y, z);
 
 return camera;
}
 
export { createCamera };