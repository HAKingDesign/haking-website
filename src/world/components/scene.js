import { Color, Scene, TextureLoader } from 'three';
 
function createScene(color) {
 const scene = new Scene();
 
 scene.background = new TextureLoader().load('./src/assets/Space WIP_blend2_2 stars.png');
 
 return scene;
}
 
export { createScene };