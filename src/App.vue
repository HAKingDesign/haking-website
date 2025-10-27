<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

    <div class="wrapper">
      <HelloWorld msg="Hunter Austin King" />
      
      <nav>
        <RouterLink to="/">Resume</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Home">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView style="max-height: 70vh; " />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 50vh;
  background-color: #00000000;
}
header .wrapper {
  background-color: #00000000;
}
.logo {
  display: block;
  width:75px; 
  height:75px;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    width:125px; 
    height:125px;
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 2rem;
  }
}
</style>
