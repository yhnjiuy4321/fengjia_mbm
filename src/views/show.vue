<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
window.scrollTo(0,0);

import {ref} from "vue";
import { showContent } from '../data/showContent.js'
const forShow = ref(showContent)
</script>

<template>

  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="show_container d-grid w-100">
      <div class="show_title p-4 text-center">
        <h2>【每日表演活動】</h2>
      </div>

      <div  v-for="item in forShow" :key="item.id" class="show_content justify-center p-4">
        <div class="photo">
          <img :src="item.photo" alt="...">
          <div class="info w-10">
            <h2>{{item.title}}</h2>
            <p>{{item.intro}}</p>
            <br>
            <p>場次：{{item.Session}}場／日</p>
            <div class="time d-flex">
            <p>時間：</p>
            <div  v-for="time in item.Time" :key="time.id" class="d-flex">
              <div class="timeContent">
              <p>{{time.time}}</p>
              </div>
              <br>
            </div>
            </div>
            <p>地點：{{item.Location}}</p>
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
  width: 600px;
  height: 400px;
}

.timeContent{
  margin-right: 10px;
}

</style>