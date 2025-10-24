import { Clock } from 'three';
 
import gsap from 'gsap';
const clock = new Clock();
 
 
class Loop {
 constructor(
    camera, 
    scene, 
    renderer, 
    raycaster, 
    mouse,
    terrain, 
    initialColor,
    hoverColor) {
   this.camera = camera;
   this.scene = scene;
   this.renderer = renderer;
   this.updatables = [];
   this.raycaster = raycaster;
   this.mouse=mouse;
   this.terrain=terrain;
   this.initialColor=initialColor;
   this.hoverColor=hoverColor;
   this.frame = 0;
 }
 
 start() {
   this.renderer.setAnimationLoop(() => {
       this.tick();
       // render a frame
      this.frame += 0.01
      const { array, originalPosition, randomVals } = this.terrain.geometry.attributes.position
      for (let i = 0; i < array.length; i+=3) {
        array[i] = originalPosition[i] + Math.cos(this.frame + randomVals[i]) * .004 //X
        array[i+1] = originalPosition[i+1] + Math.sin(this.frame + randomVals[i+1]) * .004 //Y
        array[i+2] = originalPosition[i+2] + Math.cos(this.frame + randomVals[i+2]) * .005 //z
        
      }
      this.terrain.geometry.attributes.position.needsUpdate = true

       this.renderer.render(this.scene, this.camera);
       this.raycaster.setFromCamera(this.mouse, this.camera)
      //  const intersects = this.raycaster.intersectObject(this.terrain)
      //  if (intersects.length > 0){
        
      //     const {color} = intersects[0].object.geometry.attributes
      //     // console.log(this.initialColor)  
      //         // vertex 1
      //         color.setX(intersects[0].face.a,this.hoverColor.r)
      //         color.setY(intersects[0].face.a,this.hoverColor.g)
      //         color.setZ(intersects[0].face.a,this.hoverColor.b)
      //         // vertex 2
      //         color.setX(intersects[0].face.b,this.hoverColor.r)
      //         color.setY(intersects[0].face.b,this.hoverColor.g)
      //         color.setZ(intersects[0].face.b,this.hoverColor.b)
      //         // vertex 3
      //         color.setX(intersects[0].face.c,this.hoverColor.r)
      //         color.setY(intersects[0].face.c,this.hoverColor.g)
      //         color.setZ(intersects[0].face.c,this.hoverColor.b)
      //     color.needsUpdate = true

      //     const constHoverColor = Object.assign({}, this.hoverColor);
      //     const constInitialColor = Object.assign({}, this.initialColor);
      //     // console.log(constHoverColor)
      //     gsap.to(constHoverColor, {
      //       r: constInitialColor.r,
      //       g: constInitialColor.g,
      //       b: constInitialColor.b,
      //       duration: 1,
      //       onUpdate: () => {
      //         // vertex 1
      //         color.setX(intersects[0].face.a,constHoverColor.r)
      //         color.setY(intersects[0].face.a,constHoverColor.g)
      //         color.setZ(intersects[0].face.a,constHoverColor.b)
      //         // vertex 2
      //         color.setX(intersects[0].face.b,constHoverColor.r)
      //         color.setY(intersects[0].face.b,constHoverColor.g)
      //         color.setZ(intersects[0].face.b,constHoverColor.b)
      //         // vertex 3
      //         color.setX(intersects[0].face.c,constHoverColor.r)
      //         color.setY(intersects[0].face.c,constHoverColor.g)
      //         color.setZ(intersects[0].face.c,constHoverColor.b)
      //         color.needsUpdate = true
      //       }

      //     })
      //  }
      //  console.log(this.mouse)

   });
 }
 
 stop() {
   this.renderer.setAnimationLoop(null);
 }
 
 tick() {
   const delta = clock.getDelta();
   for (const object of this.updatables) {
       object.tick(delta);
   }
   
 }
}
 
export { Loop }