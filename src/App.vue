<script setup>
import pagehead from './components/header.vue'
import menuComponent from './components/menu.vue'
import pagefooter from './components/footer.vue'
import carouselComponent from './components/carousel.vue'
import menufromhome from './components/menuForHomePage.vue'
import mediaComponent from './components/media.vue'
import  infoComponent from './components/info.vue'


</script>

<template>

<pagehead/>

  <carouselComponent/>


  <router-view></router-view>


  <pagefooter/>

</template>

<style scoped>


</style>
