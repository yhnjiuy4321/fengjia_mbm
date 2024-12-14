<script setup>
import { intro } from "@/data/homepage/sampleIntro.js";
const introContent = intro;
</script>

<template>
  <div v-for="intro in introContent" class="container p-0">

    <div class="openTime w-100 h-100 d-flex">
      <div class="time text-center w-50 h-100 d-grid justify-center my-auto">
        <span>開館時間</span>
        <p>{{intro.day}}</p>
        <p>{{intro.time}}</p>
      </div>
      <div class="photo w-50 h-100">
        <img :src="intro.img1" alt="...">
      </div>
    </div>

    <div class="address d-flex">
      <div class="photo w-50 h-100">
        <img :src="intro.img2" alt="...">
      </div>
      <div class="location text-center w-50 h-100 d-grid justify-center my-auto">
        <span>本館地址</span>
        <p>{{intro.address}}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>

.address{
  background-color: rgba(119, 178, 239, 0.8);
}

.openTime{
  background-color: rgba(119, 178, 239, 0.8);
}

img{
  width: 100%;
  height: 100%;
}

p {
  font-size: 40px;
}

span {
  font-size: 50px;
  font-weight: bold;
}

</style>