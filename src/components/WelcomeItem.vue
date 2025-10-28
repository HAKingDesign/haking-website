<script setup>
import { useSlots } from 'vue'
const slots = useSlots()  
</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="content">
      <h1>
        <slot name="heading"></slot>
      </h1>
      <slot></slot>
      <div v-if="slots.details">
        <details>
          <summary>Details</summary>
          <slot name="details"></slot>
        </details>
      </div>
    </div>
  </div>
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

h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-highlight-heading);
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
