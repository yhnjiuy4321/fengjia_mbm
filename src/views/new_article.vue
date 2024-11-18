<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'

import { ref } from 'vue';
import { newsContent, venusContent } from '../data/newsContent.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const articleId =route.params.id; // 將 ID 轉換為數字
const forNewArticle = ref([...newsContent, ...venusContent].find(article => article.id === articleId));

const title = forNewArticle.value?.title || '文章未找到';
const date = forNewArticle.value?.date || '';
const content = forNewArticle.value?.content || '';


window.scrollTo(0,0);//來到此頁面時，將滾動條移動到最上方
</script>

<template>
  <pagehead/>
  <carouselComponent/>

    <div class="d-flex mt-5">
      <menuComponent/>

      <div class="container">
        <div class="title text-center">
          <h2>{{title}}</h2>
          <div class="date text-end">
            <p>{{date}}</p>
          </div>
        </div>
        <div class="content mt-3 p-5">
          <p>{{content}}</p>
        </div>
    </div>
  </div>

  <pagefooter/>

</template>

<style scoped>
.title{
  border-bottom: 5px solid #000;
}

.container{

padding-top:40px ;
  padding-left: 60px;
  padding-right: 80px;
}

</style>