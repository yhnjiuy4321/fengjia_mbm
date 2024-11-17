<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'

import menuComponent from '@/components/menu.vue'

window.scrollTo(0,0);//來到此頁面時，將滾動條移動到最上方

const toAquarium = () => {
  document.querySelector('.Aquarium_question').style.display = 'block'
  document.querySelector('.bio_question').style.display = 'none'
}

const tobio = () => {
  document.querySelector('.Aquarium_question').style.display = 'none'
  document.querySelector('.bio_question').style.display = 'block'
}

import { Qa_venue } from '@/data/qaContent.js';
import { Qa_bio } from '@/data/qaContent.js';
import {ref} from "vue";
const questions_venue = ref(Qa_venue);
const questions_bio = ref(Qa_bio);

</script>

<template>

<pagehead/>
<carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="question m-3 w-50">
      <div class="btn_group d-flex">
        <div class="button-group">
          <input type="radio" id="FORchild" name="frameworks" checked="" @click="toAquarium"/>
          <label for="FORchild">場館問題</label>
        </div>

        <div class="button-group">
          <input type="radio" id="FORadult" name="frameworks" @click="tobio"/>
          <label for="FORadult">生物問題</label>
        </div>
      </div>


      <!--場館問題-->
      <div class="Aquarium_question">
        <div v-for="item in questions_venue" :key="item.id" class="question_content  w-100 p-2">
          <div class="question">
            <h2>Q:{{item.question}}</h2>
          </div>
          <div class="answer">
            <p class="text-end">A:{{item.answer}}</p>
          </div>
        </div>
      </div>

      <!--生物問題-->
      <div class="bio_question">
        <div v-for="item in questions_bio" :key="item.id"  class="question_content  w-100 p-2">
          <div class="question">
            <h2>Q:{{item.question}}</h2>
          </div>
          <div class="answer">
            <p class="text-end">A:{{item.answer}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <pagefooter/>

</template>

<style scoped>

.question_content{
  background-color: #77b2ef;
  border: #2c3e50 2px solid;
}


.button-group {
  margin: 20px;
}

.button-group input[type="radio"] {
  display: none;
}

.button-group label {
  display: inline-block;
  padding: 1px 2px;
  cursor: pointer;
  border: 1px solid #2b426d;
  background-color: rgba(99, 132, 163, 0.5);
  color: white;
  border-radius: 15px;
  transition: all ease 0.2s;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  width: 120px;
  font-size: 24px;
  margin: 5px;
  box-shadow: 0px 0px 50px -15px #000000;
}

.button-group input[type="radio"]:checked + label {
  background-color: #132d83;
  color: #ffffff;
  border: 1px solid #2b426d;
}

.bio_question {
  display: none;
}

</style>