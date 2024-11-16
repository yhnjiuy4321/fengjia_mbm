<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const goToQA = () => {
  router.push('/homepage/Q&A')
}

const goToShow = () => {
  router.push('/homepage/Show')
}

const goToNews = () => {
  router.push('/homepage/News')
}

const goToVenueTour = () => {
  router.push('/homepage/VenueTour')
}
</script>

<template>
  <div class="container w-100 h-100">
    <div>
      <h1 class="text-center text-white mt-3">功能列表</h1>
    </div>
    <div class="row d-flex flex-row">

    <!--場館導覽-->
      <div class="col-12 col-md-6 col-lg-2 d-flex mt-4">
        <div class="card">
          <h5 class="card-title text-center">場館導覽</h5>
          <div class="cover" @click="goToVenueTour">
            <img src="https://picsum.photos/400/600" class="card-img-top rounded-0" alt="...">
          </div>
        </div>
      </div>

      <!--服務與售票-->
      <div class="col-12 col-md-6 col-lg-2 d-flex mt-4">
        <div class="card">
          <h5 class="card-title text-center">服務與售票</h5>
          <div class="cover">
            <img src="https://picsum.photos/400/600" class="card-img-top rounded-0" alt="...">
          </div>
        </div>
      </div>


      <!--表演活動-->
      <div class="col-12 col-md-6 col-lg-2 d-flex mt-4">
        <div class="card">
          <h5 class="card-title text-center">表演活動</h5>
          <div class="cover" @click="goToShow()">
            <img src="https://picsum.photos/400/600" class="card-img-top rounded-0" alt="...">
          </div>
        </div>
      </div>

      <!--Q&A問答-->
      <div class="col-12 col-md-6 col-lg-2 d-flex mt-4">
        <div class="card">
          <h5 class="card-title text-center">Q&A問答</h5>
          <div class="cover" @click="goToQA()">
            <img src="https://picsum.photos/400/600" class="card-img-top rounded-0" alt="...">
          </div>
        </div>
      </div>

      <!--最新消息-->
      <div class="col-12 col-md-6 col-lg-2 d-flex mt-4">
        <div class="card">
          <h5 class="card-title text-center">最新消息</h5>
          <div class="cover" @click="goToNews">
            <img src="https://picsum.photos/400/600" class="card-img-top rounded-0" alt="...">
          </div>
        </div>
      </div>

      <!--互動專區-->
      <div class="col-12 col-md-6 col-lg-2 d-flex mt-4">
        <div class="card">
          <h5 class="card-title text-center">互動專區</h5>
          <div class="cover">
            <img src="https://picsum.photos/400/600" class="card-img-top rounded-0" alt="...">
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>



.container {
  background-color: #77b2ef;
  overflow: hidden;
}

.card {
  width: 100%;
  height: 550px;
  border: none;
  background-color: rgba(24, 24, 24, 0);
  justify-content: start;
}

.cover {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 100, 179, 0); /* 初始為透明 */
  transition: background-color 0.3s ease;
  z-index: 1;
}
.cover:hover::before {
  background-color: rgba(0, 0, 0, 0.53); /* 應用半透明遮罩效果 */
  z-index: 2;
  cursor: pointer;
}

.cover::after {
  content: "點擊進入";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  opacity: 0; /* 初始為隱藏 */
  transition: opacity 0.7s ease;
  z-index: 2;
}

.cover:hover::after {
  opacity: 1; /* 顯示文字 */
}

.card-img-top {
  position: relative;
  z-index: 0; /* 保持圖片在遮罩層下方 */
  height: 100%; /* 設置圖片高度 */
  object-fit: cover; /* 確保圖片覆蓋整個容器 */

}

.card-title {
  background-color: rgba(27, 111, 189, 0);
  color: white;
  padding: 10px;
  margin: 0;
}

</style>