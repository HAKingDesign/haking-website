<script setup lang="ts">
</script>
<template>
    <div class="content">
        <a href="https://github.com/HAKingDesign" target="_blank" rel="noreferrer"><img src="@/assets/contact_icons/github-mark.svg" alt="Github" class="filter"></img></a>
        <a href="https://hunt-a-king.itch.io/" target="_blank" rel="noreferrer"><img src="@/assets/contact_icons/itchio-textless-black.svg" class="filter"></img></a>
        <a href="https://www.linkedin.com/in/hunter-a-king" target="_blank" rel="noreferrer"><img src="@/assets/contact_icons/linkedin-plain-logo.svg" class="filter"></img></a>
        <a href="mailto:haustinking@gmail.com" target="_blank" rel="noreferrer"><img src="@/assets/contact_icons/email.svg" class="filter"></img></a>
    </div>
</template>
<style scoped>
.filter{
    height: 75px;;
    filter: invert(100%) contrast(100%);
}
div .content{
    justify-content: center;
    gap: 10px;
    display: flex;
    margin-left: 0px;
    padding-top: 25px;
    padding-bottom: 25px;
}
@media (min-width: 1024px) {
    
    div .content{
        display: flex;
        place-items: center;
        justify-content:flex-start;
        margin-left: 182px;
    }
}
</style>