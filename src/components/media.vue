<script setup>
import { mediaContent } from "@/data/homepage/media.js";
const media = mediaContent;
</script>

<template>

  <div class="container w-100  p-2">
    <h1 class="text-center ml-3 mr-3 fw-bold">媒體影音</h1>
    <div v-for=" item  in media" class="box d-flex justify-content-around">


      <!--影片-->
      <div class="video ">
        <iframe :src="item.video" frameborder="0" allowfullscreen></iframe>
      </div>

      <!--海報-->
      <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1000">
        <div class="carousel-indicators">

          <!--圓形按鈕-->
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="btn circle-btn active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="btn circle-btn " aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="btn circle-btn " aria-label="Slide 3"></button>
        </div>

        <!--輪播內容-->
        <div class="carousel-inner">
          <div v-for="(Item, index) in item.poster" :key="Item.id" :class="['carousel-item', { active: index === 0 }]">
            <img :src="Item.img" class="d-block w-100" :alt="'Slide ' + (index + 1)">
          </div>
        </div>

      </div>
  </div>
  </div>

</template>

<style scoped>

.container {
  background: url('/src/assets/photo/sea1.jpg') no-repeat center center fixed
}

.video {
  width: 80%;
}

iframe{
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: auto;

}

.carousel {
  width: 400px;
  height: 600px;
  margin-right: 3px;
  margin-left: 10px;
}

.carousel-inner,
.carousel-item,
.carousel-item img {
  width: 100%;
  height: 100%;
}

.carousel-item img {
  object-fit: cover;
  transition: opacity 0.5s ease-in-out; /* 平滑的透明度過渡效果 */
}

.carousel-item img:hover {
  opacity: 0.8;
}

.circle-btn {
  background-color: #5287f2;   /* 透明背景 */
  color: #007bff;                  /* 圖標顏色，這裡使用 Bootstrap 主題藍色 */
  border: 2px solid #007bff;       /* 邊框顏色 */
  border-radius: 50%;              /* 圓形 */
  width: 15px;                     /* 固定寬度 */
  height: 15px;                    /* 固定高度 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background-color 0.3s, color 0.3s;
}
.circle-btn:hover {
  background-color: #007bff; /* 懸停時填滿藍色背景 */
  color: #000000;              /* 懸停時圖標變白 */
}
</style>