<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
import { bioContent } from "@/data/bioContent.js";
import {ref} from "vue";
const bio = ref(bioContent);
</script>

<template>
  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="w-100 p-4">

      <div class=" title ">
        <h1>【圖片上傳注意事項】</h1>
      </div>

      <div v-for="item in bio" :key="item.id" class="content">
        <div class="content_text">
          <p>{{item.id}}.{{item.rule}}</p>
        </div>
      </div>

      <div class="d-flex justify-center mt-5">
        <button type="button" class="btn btn-primary">上傳圖片</button>
        <input type="file" id="file">
      </div>

      <div class="fetchPhoto w-25 mt-5">
        <a>您選擇的圖片</a>
      </div>
    </div>
  </div>

  <pagefooter/>

</template>

<style scoped>

.fetchPhoto{
  height: 200px;
  border: 5px dashed #000;
  border-radius: 10px;
  background-color: #737373;
}

</style>