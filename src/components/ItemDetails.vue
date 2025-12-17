<script setup>
import { useSlots } from 'vue'
const slots = useSlots()  
</script>

<template>
      <div v-if="slots.details">
        <details>
          <summary><span class="detailButton"><slot  name="label"></slot></span></summary>
        </details>
        <div class="detailsContent" style="padding-left: 1rem;">
        <slot name="details"></slot>
        </div>
      </div>
      <div v-if="!slots.details">
        <span class="NoDetail"><slot name="icon"></slot><slot name="label"></slot></span>
      </div>
  <!-- <div class="item">
    <div class="content">
      
    </div>
  </div> -->
</template>

<style scoped>
.skillLogo{
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }
  
  .tableOfContent {
    display: grid;
    grid-template-columns: 1fr 9fr;
    /* padding: 0 2rem; */
  }
  .content{
    padding-right: 10px;
    overflow: scroll; 
    max-height: inherit; 
    max-width: inherit;
    overscroll-behavior-x: contain;
    scrollbar-gutter: auto;
    scrollbar-color: gray;
    scrollbar-width: thin;
    scroll-behavior: smooth;  
    padding-bottom: 1rem;
    scroll-padding: 100px;
  }
  span.detailButton, span.NoDetail {
      position: relative;
      display: flex;
      align-items: center;
      background: var(--color-background-mute-trans);
      color: var(--color-text);
      height: 4rem;
      padding-left: 1rem;
    }
    span.NoDetail{
      margin-right: 0.1rem;
    }
    span.detailButton::before {
      content: ">";
      font-size: 2rem;
      display: flex;
      align-items: center;
      margin-right: 0.1rem;
      transition: rotate 200ms 400ms ease-out;
    }

    span.detailButton:hover {
      cursor: pointer;
    }
 details > summary {
  list-style: none;
  border: 2px solid transparent;
  border-radius: 1px;
}
summary {
      display: block;
    }
summary::-webkit-details-marker {
  display: none;
}
details[open] + div.detailsContent {
  max-height: 800px; /* Set a max-height value enough to show all the content */
  border-color: rgba(255, 255, 255, 0.39);
  transition: max-height 400ms ease-out, border 0ms linear;
}

details[open] span.detailButton::before {
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
</style>