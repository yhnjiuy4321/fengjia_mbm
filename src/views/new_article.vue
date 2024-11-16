<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'

window.scrollTo(0,0);//來到此頁面時，將滾動條移動到最上方
</script>

<template>
  <pagehead/>
  <carouselComponent/>

    <div class="d-flex mt-5">
      <menuComponent/>

      <div class="container">
        <div class="title text-center">
          <h2>海龜復育計畫進展：成功釋放三隻稀有保育類海龜回歸大海</h2>
          <div class="date text-end">
            <p>2021/10/01</p>
          </div>
        </div>
        <div class="content mt-3 p-5">
          <p>　　為了保護和復育海洋生態系中瀕危的海龜族群，海生館的海龜復育團隊近期完成了一項重要任務——成功釋放三隻經過護理和康復的稀有保育類海龜，使它們重返自然棲息地。這些海龜在被救援時皆處於健康狀況不佳的情況，經過海生館專業團隊的悉心照顧，牠們終於具備足夠的體力和生存能力，能夠適應野外環境。

            此次釋放的三隻海龜包括一隻綠蠵龜和兩隻玳瑁，牠們分別因誤食海洋垃圾、受傷及病患而被救助。經過數月的復健治療，團隊不僅幫助牠們恢復了正常的進食和活動能力，還為牠們進行了詳細的健康檢查和行為觀察，確保牠們在野外能夠找到食物並適應環境。

            在釋放過程中，海生館特別邀請了附近學校的學生和志工參與這一重要時刻，讓大家一同見證這些海洋生物的重生。釋放儀式上，工作人員介紹了復育海龜的故事，並強調了保護海洋環境、減少垃圾排放的迫切性。隨著海龜們滑入海水，現場響起了掌聲，觀眾們為牠們的重生感到欣慰與喜悅。

            海生館表示，未來將持續進行海龜復育計畫，並希望藉由推廣這些成功案例，讓更多人關注海洋保護的重要性，減少塑膠等垃圾對海洋生態的威脅，保護海龜及其他珍稀生物的生存空間。</p>
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