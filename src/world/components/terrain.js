import {
 PlaneGeometry,
 MeshStandardMaterial,
 MeshPhongMaterial,
 Mesh,
 BufferAttribute, 
 TextureLoader,
 DoubleSide,
//  FlatShading
} from "three";
 
export function createTerrain(props) {
//  const loader = new TextureLoader();
//  const height = loader.load("textures/height.png");

 const geometry = new PlaneGeometry(
  props.plane.width, 
  props.plane.height,
  props.plane.widthSegments,
  props.plane.heightSegments
);
 
 const material = new MeshPhongMaterial({
  //  color: props.color,
   side : DoubleSide,
   flatShading: true, 
   vertexColors: true, 
   shininess:60,
 });
 
 
 const plane = new Mesh(geometry, material);
//  plane.position.set(0, 5, 0);
//  plane.rotation.x -= Math.PI * 0.35;

 return randomizePlane(plane, props);
}

export function randomizePlane(plane, props) {
 const { array } = plane.geometry.attributes.position
 const randomVals = []
 for (let i=0; i< array.length; i ++){
  if (i % 3 === 0){
  const x = array[i]
  const y = array[i+1]
  const z = array[i+2]

  array[i] = x + (Math.random() -0.5) *5
  array[i+1] = y + (Math.random() -0.5) *5
  array [i+2] = z + (Math.random() -0.5) *5
}
  randomVals.push(Math.random() * Math.PI *2)

 }
 plane.geometry.attributes.position.originalPosition = plane.geometry.attributes.position.array
 plane.geometry.attributes.position.randomVals = randomVals

 const colors = []
   for (let i = 0; i < plane.geometry.attributes.position.count; i++) {
    colors.push(props.initialColor.r, props.initialColor.g, props.initialColor.b)
   }

   plane.geometry.setAttribute(
    'color', 
    new BufferAttribute(new Float32Array(colors), 3)
  )
 
 return plane;
}

