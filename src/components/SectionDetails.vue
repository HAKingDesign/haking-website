<script setup>
import { useSlots } from 'vue'
const slots = useSlots()  
</script>

<template>
    <div v-if="slots.heading">
    <h3>
        <slot name="heading"></slot>
    </h3>
    <hr>
    </div>
      <slot></slot>
      <div v-if="slots.details">
        <details>
          <summary><slot name="detailsLabel"></slot></summary>
        </details>
        <div class="detailsContent" style="padding-left: 1rem;">
        <slot name="details"></slot>
        </div>
      </div>
  <!-- <div class="item">
    <div class="content">
      
    </div>
  </div> -->
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  /* background-color: #ffffff2a; */
  /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2); */
}

.content {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}


details[open] + div.detailsContent {
  max-height: 800px; /* Set a max-height value enough to show all the content */
  border-color: #888;
  transition: max-height 400ms ease-out, border 0ms linear;
}

details[open] span::before {
  rotate: 90deg;
  transition: rotate 200ms ease-out;
}

  div.detailsContent {
      box-sizing: border-box;
      max-width: 500px;
      max-height: 0;
      overflow: hidden;
      padding: 0 10px;
      border: 2px solid transparent;
      transition: max-height 400ms ease-out, border 0ms 400ms linear;
    }

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: 0;
    left: 16px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  /* .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: calc(var(--section-gap) / 4);
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: calc(var(--section-gap) / 4);
    top: calc(50px);
    height: calc(100% - 50px);
  }

  /* .item:first-of-type:before {
    display: none;
  } */

  /* .item:last-of-type:after {
    display: none;
  } */
   
} 
</style>
