<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
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

        <div class="content p-3">
          <p>1. 本館為保護動物及環境，請勿隨意投擲物品。</p>
          <p>2. 請勿攜帶寵物進入本館。</p>
          <p>3. 請勿攜帶食物進入本館。</p>
          <p>4. 請勿在本館內吸菸。</p>
          <p>5. 請勿在本館內大聲喧嘩。</p>
          <p>6. 請勿在本館內奔跑。</p>
          <p>7. 請勿在本館內拍照。</p>
          <p>8. 請勿在本館內使用手機。</p>
          <p>9. 請勿在本館內使用擴音器。</p>
          <p>10. 請勿在本館內使用自拍棒。</p>
          <p>11. 請勿在本館內使用三腳架。</p>
          <p>12. 請勿在本館內使用煙火。</p>
          <p>13. 請勿在本館內使用煙花。</p>
          <p>14. 請勿在本館內使用煙霧彈。</p>
        </div>
      </div>


      <div class="service">

        <div class="title">
          <h2>【場館服務】</h2>
        </div>

        <div class="content p-3">
          <p>1. 本館提供免費無線網路。</p>
          <p>2. 本館提供免費停車場。</p>
          <p>3. 本館提供免費嬰兒車。</p>
          <p>4. 本館提供免費輪椅。</p>
          <p>5. 本館提供免費儲物櫃。</p>
        </div>
      </div>

    </div>
  </div>

  <pagefooter/>
</template>

<style scoped>

</style>