<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="content">With 3 years of experience, crafting full-stack tools and applications for diverse teams, 
I have developed the skills required to meet customers' unique UX/UI and data visualization/aggregation needs. 
Combine that with my experience with game development and computer graphics makes for engaging and visually appealing experiences.
    </div>
  </main>
</template>

<style scoped>
.filter{
    height: 75px;;
    filter: invert(100%) contrast(100%);
}
div .content{
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    display: flex;
    margin-left: 0px;
    padding-top: 25px;
    padding-bottom: 35px;
}
@media (min-width: 1024px) {
    
    div .content{
        display: flex;
        font-size: 18px;
        place-items: center;
        justify-content:flex-start;
        margin-left: 182px;
        padding-bottom: 25px;
    }
}
</style>