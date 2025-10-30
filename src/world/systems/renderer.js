import { WebGLRenderer } from "three";
 
function createRenderer(container) {
 const renderer = new WebGLRenderer({ 
    antialias: true,
    canvas: container
  });
 
 // Turn on the physically correct lighting model.
 renderer.physicallyCorrectLights = true;
 
 return renderer;
}
 
export { createRenderer };