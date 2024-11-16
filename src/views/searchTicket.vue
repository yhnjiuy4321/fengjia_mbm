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

    <div class="container p-5 w-50 mt-5 mb-5">

      <div class="title text-center mb-3">
        <h2>【查詢訂票】</h2>
      </div>

      <div class="searchBox d-grid ">
          <input type="text" placeholder="請輸入手機號碼或身分證" class="w-100 p-3 mb-5">
          <button class="btn btn-primary p-3 w-50"  type="button" data-bs-toggle="modal" data-bs-target="#noSearch" >查詢</button>
      </div>

    </div>
  </div>


  <!-- The Modal -->
  <div class="modal" id="haveSearch">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">查詢結果</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">

          <div class="result">
            <p>您的訂票資訊如下：</p>
            <p>姓名：王小明</p>
            <p>票種：全票</p>
            <p>場次：2021/10/01 14:30</p>
            <p>座位：A區第一排</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="modal" id="noSearch">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">查詢結果</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">

          <div class="result text-center justify-center">
            <i class="fas fa-times-circle"></i>
            <div class="error">
            <p>目前無法取得相關資訊</p>
            <p>請更改搜尋條件或聯絡客服</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <pagefooter/>

</template>

<style scoped>

.container{
  border: black 1px solid;
}

.searchBox{
  margin: 0 auto;
}

input{
  border-radius: 20px;
}

button{
  margin: 0 auto;
}


i{
  font-size: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: red;
}

.error{
  font-size: 20px;
  color: red;
}
</style>