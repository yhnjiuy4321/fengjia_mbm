<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
import { aboutusContent } from "@/data/aboutusContent.js";
import {ref} from "vue";
const aboutus = ref(aboutusContent);
</script>

<template>

  <pagehead/>
  <carouselComponent/>


  <div class="d-flex mt-5">
    <menuComponent/>

    <div v-for="item in aboutus" :key="item.id" class="text-start w-100 p-5">

      <div class="text-center title">
        <h1>{{item.title}}</h1>
      </div>

      <div class="content" v-for="item in aboutus" :key="item.id">
        <div class="content_text p-4 " >
          <p>{{item.content1}}</p>
          <img src="/src/assets/photo/about/about1.webp" class="w-50 h-50">
          <p>{{item.content2}}</p>
          <img src="/src/assets/photo/about/open.webp" class="w-50 h-50">
          <p>{{item.content3}}</p>
          <img src="/src/assets/photo/about/about2.jpg" class="w-50 h-50">
        </div>
      </div>

    </div>




  </div>


  <pagefooter/>

</template>

<style scoped>

.content_text{
  display: flex;
  flex-direction: column;
  align-items: center;
}


.content_text img{
  margin: 15px;
}

</style>