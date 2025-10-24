import {
   DirectionalLight,
   DirectionalLightHelper,
 } from "three";
  function createLights(color) {
   const light = new DirectionalLight(color, 10);
   const lightHelper = new DirectionalLightHelper(light, 0);
   light.position.set(0, 100, -1000);
    light.tick = (delta) => {
   
   };
    return { light, lightHelper };
 }
  export { createLights };