<script setup>
import { intro } from "@/data/homepage/sampleIntro.js";
const introContent = intro;
</script>

<template>
  <div v-for="intro in introContent" class="container p-0">

    <div class="openTime w-100 h-100 d-flex bg-info">
      <div class="time text-center w-50 h-100 d-grid justify-center my-auto">
        <h2>開館時間</h2>
        <p>{{intro.day}}</p>
        <p>{{intro.time}}</p>
      </div>
      <div class="photo w-50 h-100">
        <img :src="intro.img1" alt="...">
      </div>
    </div>

    <div class="address d-flex bg-info">
      <div class="photo w-50 h-100">
        <img :src="intro.img2" alt="...">
      </div>
      <div class="location text-center w-50 h-100 d-grid justify-center my-auto">
        <h2>本館地址</h2>
        <p>{{intro.address}}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>

img{
  width: 100%;
  height: 100%;
}

</style>