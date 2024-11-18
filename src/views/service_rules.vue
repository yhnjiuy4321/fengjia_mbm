<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'

import {ref} from "vue";
import { Ruler } from '../data/rulerContent.js'
import { Service } from '../data/rulerContent.js'
const forRuler = ref(Ruler)
const forService = ref(Service)


</script>

<template>

  <pagehead/>
  <carouselComponent/>
  <div class="d-flex mt-5">
    <menuComponent/>
    <div class="container w-100 p-5 d-grid">


      <div class="rule">

        <div class="title">
          <h2>【場館規則】</h2>
        </div>

        <div  v-for="item in forRuler" :key="item.id" class="content p-3">
          <div class="d-flex">
            <div class="name">{{item.id}}.</div>
            <div class="content">{{item.content}}</div>
          </div>
        </div>
      </div>


      <div class="service mt-5">

        <div class="title">
          <h2>【場館服務】</h2>
        </div>

        <div v-for="item in forService" :key="item.id" class="content p-3">
          <div class="d-flex">
            <div class="name">{{item.id}}.</div>
            <div class="content">{{item.content}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <pagefooter/>
</template>

<style scoped>

</style>