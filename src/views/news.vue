<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
import router from "@/router/index.js";

const goToArticle = (id) => {
  console.log('go to article')
  router.push(`/homepage/News/article/${id}`)
}

import {ref} from "vue";
import { newsContent } from '../data/newsContent.js'
import { venusContent } from '../data/newsContent.js'
const forNews = ref(newsContent)
const forVenus = ref(venusContent)

//反轉陣列(時間由新到舊)
//forNews.value.reverse()
//forVenus.value.reverse()

window.scrollTo(0,0);//來到此頁面時，將滾動條移動到最上方
</script>

<template>

  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>
    <div class="news_container w-100 p-5">

<div class="selectBar mb-3">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active " id="field-tab" data-bs-toggle="tab" href="#field" role="tab" aria-controls="field"
             aria-selected="true">場館消息</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="report-tab" data-bs-toggle="tab" href="#report" role="tab" aria-controls="report"
             aria-selected="false">相關報導</a>
        </li>
      </ul>
    </div>

      <!-- 選項卡內容 -->
      <div class="tab-content" id="myTabContent">

        <!--場館資訊-->
        <div class="tab-pane fade show active" id="field" role="tabpanel" aria-labelledby="field-tab">
          <div class="content">
            <table class="table table-striped w-100">
              <thead>
              <tr class="title">
                <td class="date">發布日期</td>
                <td class="article">內容</td>
              </tr>
              </thead>
              <tbody v-for="item in forVenus" :key="item.id">
              <tr>
                <td>{{item.date}}</td>
                <td>
                  <a @click="goToArticle(item.id)">{{item.title}}</a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tab-pane fade" id="report" role="tabpanel" aria-labelledby="report-tab">
          <div class="content">
            <table class="table table-striped w-100">
              <thead>
              <tr class="title">
                <td class="date">發布日期</td>
                <td class="article">內容</td>
              </tr>
              </thead>
              <tbody v-for="item in forNews" :key="item.id">
              <tr>
                <td>{{item.date}}</td>
                <td>
                  <a @click="goToArticle(item.id)">{{item.title}}</a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <pagefooter/>


</template>

<style scoped>

table{
  border-collapse: collapse;
}

td{
  padding: 10px;
  text-align: center;
}

.news_container{
  overflow: hidden;
}


.title{
  color: rgb(32, 70, 207);
  font-weight: bold;
}

.date{
  width: 20%;
  background-color: rgba(119, 178, 239, 0.5);
}

.article{
  background-color: rgba(119, 178, 239, 0.5);
}

.nav-link{
  background-color: #c3c3ca;
  color: white;
}
.nav-link.active {
  background-color: rgb(243, 243, 243);
  color: rgba(27, 31, 106, 0.99); /* 修改為你想要的顏色 */
}


tbody td a:hover{
  color: rgb(0, 0, 0); /* This changes the text color */
  border-bottom: rgb(0, 0, 0) 1px solid;
  cursor: pointer;
}

</style>