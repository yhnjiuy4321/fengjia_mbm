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

      <div class="title">
        <h1>{{item.title}}</h1>
      </div>

      <div class="content">

        <div class="content_text">
          <p>{{item.content}}</p>
        </div>
      </div>

    </div>




  </div>


  <pagefooter/>

</template>

<style scoped>

</style>