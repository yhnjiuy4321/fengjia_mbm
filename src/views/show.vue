<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
window.scrollTo(0,0);
</script>

<template>

  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="show_container d-grid w-100">
      <div class="show_title p-4">
        <h2>【每日表演活動】</h2>
      </div>

      <div class="show_content justify-center p-4">
        <div class="photo">
          <img src="https://picsum.photos/600/400" class="w-80">
          <div class="info w-10">
            <h2>海獅餵食秀</h2>
            <p>　　每場海獅餵食秀都是一場視覺和聽覺的盛宴，搭配著背景音樂和訓練師的幽默解說，讓觀眾能在輕鬆愉快的氛圍中學習到關於海獅的知識。</p>
            <br>
            <p>場次：2場／日</p>
            <p>時間：10:30、14:30</p>
            <p>地點：極地世界區</p>
          </div>
        </div>
      </div>

      <div class="show_content justify-center p-4">
        <div class="photo">
          <img src="https://picsum.photos/600/400" class="w-80">
          <div class="info w-10">
            <h2>海獅餵食秀</h2>
            <p>　　每場海獅餵食秀都是一場視覺和聽覺的盛宴，搭配著背景音樂和訓練師的幽默解說，讓觀眾能在輕鬆愉快的氛圍中學習到關於海獅的知識。</p>
            <br>
            <p>場次：2場／日</p>
            <p>時間：10:30、14:30</p>
            <p>地點：極地世界區</p>
          </div>
        </div>
      </div>



    </div>
  </div>

  <pagefooter/>
</template>

<style scoped>

.photo{
  position: relative;

}

.info {
    position: absolute;
    top: 20px;
    left: 500px;
    background-color: rgba(227, 209, 209, 0.90); /* 半透明背景 */
    color: #000000;
    padding: 35px;
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
}

img {
  border-radius: 10px;
}

</style>