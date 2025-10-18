import {
 PlaneGeometry,
 MeshStandardMaterial,
 Mesh,
 TextureLoader,
} from "three";
 
export function createTerrain(props) {
 const loader = new TextureLoader();
 const height = loader.load("textures/height.png");

 const geometry = new PlaneGeometry(30, 15);
 
 const material = new MeshStandardMaterial({
   color: props.color,
 });
 
 
 
 const plane = new Mesh(geometry, material);
 plane.position.set(0, -2, 0);
 plane.rotation.x -= Math.PI * 0.35;
 
 let frame = 0;
 plane.tick = (delta) => {
 
 };
 
 return plane;
}