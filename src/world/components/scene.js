import { Color, Scene, TextureLoader } from 'three';
 
function createScene(color) {
 const scene = new Scene();
 
 scene.background = new TextureLoader().load('./src/assets/Space_WIP_blend2_2_stars.png');
 
 return scene;
}
 
export { createScene };