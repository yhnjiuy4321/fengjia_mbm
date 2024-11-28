<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
</script>

<template>
  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="text-center w-100">

      <div class="title">
        <h1>關於我們</h1>
      </div>

      <div class="content">
        <p>本公司成立於2021年，是一家專業的水族館公司，我們致力於提供最好的服務給顧客，讓顧客有一個愉快的參觀經驗。</p>
      </div>

    </div>
  </div>


  <pagefooter/>
</template>

<style scoped>

</style>