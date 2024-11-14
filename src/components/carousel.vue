<script setup>
import { ref } from 'vue';

const title1 = ref('保留');
const title2 = ref('保留');
const title3 = ref('保留');
</script>

<template>
  <div id="titleCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://ws.nmmba.gov.tw/001/Upload/217/relpic/6628/2104/34ce7298-d938-4a92-a9e2-9723e8e5b57c.jpg" class="d-block w-100" alt="Slide 1">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="text-white"> {{title1}} </h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://ws.nmmba.gov.tw/001/Upload/217/ckfile/3155848f-2209-42a3-aa0c-82273fd3dd08.jpg" class="d-block w-100" alt="Slide 2">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="text-white"> {{title2}} </h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://ws.nmmba.gov.tw/001/Upload/217/relpic/6628/2079/127704ac-8dbd-4bbc-b152-d8b53d2f9999.jpg" class="d-block w-100" alt="Slide 3">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="text-white"> {{title3}}  </h1>
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