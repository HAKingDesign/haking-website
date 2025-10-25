import {
   DirectionalLight,
   DirectionalLightHelper,
   PointLight,
   PointLightHelper, 
 } from "three";
  function createLights(color) {
   const light = new DirectionalLight(color, 10);
   const lightHelper = new DirectionalLightHelper(light, 0);
   light.position.set(0, 100, -1000);

   
   const pointLight = new PointLight( color, 7, 0, 0);
   pointLight.position.set(0, 100, -450);

   const light2 = new DirectionalLight(color, 0.1);
   const lightHelper2 = new DirectionalLightHelper(light, 0);
   light2.position.set(10, 30, 1000);
   light.tick = (delta) => {
   
   };
    return { light, lightHelper,light2,lightHelper2,pointLight };
 }
  export { createLights };