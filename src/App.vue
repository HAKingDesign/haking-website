<script setup lang="ts">
import './assets/app.css'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/HAKing_logo.svg" />

    <div class="wrapper">
      <HelloWorld msg="Hunter Austin King" />
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Home">Home</RouterLink> -->
      </nav>
    </div>
  </header>
  <RouterView style="max-height: 70vh; " />
</template>
