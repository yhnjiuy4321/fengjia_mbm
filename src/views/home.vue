<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menufromhome from '@/components/menuForHomePage.vue'
import mediaComponent from '@/components/media.vue'
import  infoComponent from '@/components/info.vue'

//來到此頁面時，將滾動條移動到最上方
window.scrollTo(0,0);
</script>

<template>
  <div class="home-container">

  <pagehead/>
  <carouselComponent/>

  <menufromhome/>
  <mediaComponent/>
  <infoComponent/>

  <pagefooter/>

  </div>

</template>

<style scoped>

.home-container{
  background: url('public/fish.jpg') no-repeat center center fixed
}

</style>