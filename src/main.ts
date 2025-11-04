import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import { World } from "./world/world.js";

function main() {
 // Get a reference to the container element
 const container = document.querySelector("#scene-container");
 
 // Create an instance of the World app
 const world = new World(container);
 
 // Start the loop (produce a stream of frames)
//  world.createDatGui()
//  world.createOrbitControls()
 world.start();
}

main();

const app = createApp(App)

app.use(router)

app.mount('#app')