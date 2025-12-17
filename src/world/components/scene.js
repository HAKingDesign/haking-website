import { Color, Scene, TextureLoader } from 'three';
 
function createScene(color) {
 const scene = new Scene();
 
//  scene.background = new TextureLoader().load('./src/assets/Space_WIP_blend2_2_stars.png');
 scene.background = new Color( 0x22152d );
 
 return scene;
}
 
export { createScene };