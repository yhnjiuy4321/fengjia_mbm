<script setup>
import { carousel_img } from "@/data/homepage/carousel_img.js";
const carousel = carousel_img;

</script>

<template>
<div id="titleCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div v-for="(Item, index) in carousel" :key="Item.id" :class="['carousel-item', { active: index === 0 }]">
      <img :src="Item.img" class="d-block w-100" :alt="'Slide ' + (index + 1)">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="text-white">{{ Item.text }}</h1>
      </div>
    </div>
  </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#titleCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#titleCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>

.carousel {
  margin-top: 60px;
  width: 100%;
  height: 450px;
  overflow: hidden;
  position: relative;
}


.carousel-item img {
  width: 1200px;
  height: 600px;
  object-fit: cover;
  filter: brightness(75%);
}
.carousel-caption h1 {
  font-size: 3em;
  text-shadow: 2px 2px 4px black;
}

@media (max-width: 1200px) {
  .carousel-caption h1 {
    font-size: 2.5em;
  }
}

@media (max-width: 992px) {
  .carousel-caption h1 {
    font-size: 2em;
  }
}

@media (max-width: 768px) {
  .carousel-caption h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 576px) {
  .carousel-caption h1 {
    font-size: 1.2em;
  }
}

</style>