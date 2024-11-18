<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'

import {ref} from "vue";
import { introContent } from '../data/venueTourContent/introContent.js'
import { deepSeaContent } from '../data/venueTourContent/deepContent.js'
import { shallowContent } from '../data/venueTourContent/shallowContent.js'
import { iceContent } from '../data/venueTourContent/iceContent.js'
import { whaleContent } from '../data/venueTourContent/whaleContent.js'

const forIntro = ref(introContent)
const forDeep = ref(deepSeaContent)
const forShallow = ref(shallowContent)
const forIce = ref(iceContent)
const forWhale = ref(whaleContent)



</script>

<template>

  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>
    <div class="news_container w-100 p-5">

      <div class="selectBar mb-3">
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a class="nav-link active" id="tour-tab" data-bs-toggle="tab" href="#tour" role="tab" aria-controls="tour" aria-selected="true">導覽簡介</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="deep-tab" data-bs-toggle="tab" href="#deep" role="tab" aria-controls="deep" aria-selected="false">深海區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="shallow-tab" data-bs-toggle="tab" href="#shallow" role="tab" aria-controls="shallow" aria-selected="false">淺海區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="ice-tab" data-bs-toggle="tab" href="#ice" role="tab" aria-controls="ice" aria-selected="false">極地世界</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="whale-tab" data-bs-toggle="tab" href="#whale" role="tab" aria-controls="whale" aria-selected="false">鯨魚世界</a>
          </li>
        </ul>
      </div>


      <!--導覽簡介-->
      <div class="tab-content p-3" id="myTabContent">
        <div v-for="intro in forIntro" class="tab-pane fade show active" id="tour" role="tabpanel"
             aria-labelledby="tour-tab">

          <div class="content">

            <div class="Introduction">
              <a>{{ intro.Preface }}</a>
            </div>

            <div class="Main Body mt-5">

              <div v-for="deepItem in intro.deep" class="deepInfo">
                <div class="infoName">
                  <h2>{{ deepItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="deepItem.photo" alt="...">
                  </div>
                  <p>{{ deepItem.content }}</p>
                </div>
              </div>

              <div v-for="shallowItem in intro.shallow" class="shallowInfo mt-5">
                <div class="infoName">
                  <h2>{{ shallowItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="shallowItem.photo" alt="...">
                  </div>
                  <p>{{ shallowItem.content }}</p>
                </div>
              </div>

              <div v-for="iceItem in intro.ice" class="iceInfo mt-5">
                <div class="infoName">
                  <h2>{{ iceItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="iceItem.photo" alt="...">
                  </div>
                  <p>{{ iceItem.content }}</p>
                </div>
              </div>

              <div v-for="whaleItem in intro.whale" class="whaleInfo mt-5">
                <div class="infoName">
                  <h2>{{ whaleItem.name }}</h2>
                </div>
                <div class="infoContent">
                  <div class="w-100 h-50 pb-3 ">
                    <img :src="whaleItem.photo" alt="...">
                  </div>
                  <p>{{ whaleItem.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--深海區-->
        <div  class="tab-pane fade" id="deep" role="tabpanel" aria-labelledby="deep-tab">
          <div class="content">
            <div class="row">
              <div v-for="deepItem in forDeep" :key="deepItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="deepItem.photo" alt="深海區" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ deepItem.name }}</h5>
                    <p>學名：{{ deepItem.sciName }}</p>
                    <p>分類:{{ deepItem.class }}</p>
                    <p>介紹：{{ deepItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--淺海區-->
        <div class="tab-pane fade" id="shallow" role="tabpanel" aria-labelledby="shallow-tab">
          <div class="content">
            <div class="row">
              <div v-for="shallowItem in forShallow" :key="shallowItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="shallowItem.photo" alt="淺海區" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ shallowItem.name }}</h5>
                    <p>學名：{{ shallowItem.sciName }}</p>
                    <p>分類:{{ shallowItem.class }}</p>
                    <p>介紹：{{ shallowItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--極地世界-->
        <div class="tab-pane fade" id="ice" role="tabpanel" aria-labelledby="ice-tab">
          <div class="content">
            <div class="row">
              <div v-for="iceItem in forIce" :key="iceItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="iceItem.photo" alt="極地世界" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ iceItem.name }}</h5>
                    <p>學名：{{ iceItem.sciName }}</p>
                    <p>分類:{{ iceItem.class }}</p>
                    <p>介紹：{{ iceItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--鯨魚世界-->
        <div class="tab-pane fade" id="whale" role="tabpanel" aria-labelledby="whale-tab">
          <div class="content">
            <div class="row">

              <div v-for="whaleItem in forWhale" :key="whaleItem.id" class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img :src="whaleItem.photo" alt="鯨魚世界" class="rounded me-3 w-50 h-50">
                  <div>
                    <h5>名稱：{{ whaleItem.name }}</h5>
                    <p>學名：{{ whaleItem.sciName }}</p>
                    <p>分類:{{ whaleItem.class }}</p>
                    <p>介紹：{{ whaleItem.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  </div>
</div>

  <pagefooter/>
</template>

<style scoped>

</style>