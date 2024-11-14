<script setup>

</script>

<template>

  <div class="container w-100 bg-primary p-2">
    <h1 class="text-center ml-3 mr-3">媒體影音</h1>
    <div class="box d-flex justify-content-around">


      <!--影片-->
      <div class="video ">
          <iframe src="https://www.youtube.com/embed/7lCDEYXw3mM" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <div class="carousel-item active">
            <img src="https://uniquephoto.com.tw/wp-content/uploads/2024/02/%E5%AE%98%E7%B6%B2%E7%9B%B4%E5%BC%8F_%E7%9B%B4%E6%B5%B7%E5%A0%B1-09.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://uniquephoto.com.tw/wp-content/uploads/2024/02/%E5%AE%98%E7%B6%B2%E7%9B%B4%E5%BC%8F_%E7%9B%B4%E6%B5%B7%E5%A0%B1-09.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://uniquephoto.com.tw/wp-content/uploads/2024/02/%E5%AE%98%E7%B6%B2%E7%9B%B4%E5%BC%8F_%E7%9B%B4%E6%B5%B7%E5%A0%B1-09.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
  </div>
  </div>

</template>

<style scoped>

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
  opacity: 0.5;
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