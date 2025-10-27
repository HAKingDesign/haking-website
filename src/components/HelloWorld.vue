<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Full-stack, Game Dev, 3D Graphics, Shaders
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

h3 {
  visibility: hidden;
  font-size: 0rem;
}

.greetings h1,
.greetings h3 {
  
  text-align: center;
}

@media (min-width: 1024px) {
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  visibility: visible;
  font-size: 1.2rem;
}
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
