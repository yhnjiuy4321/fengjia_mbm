<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
import axios from "axios";
import {ref} from "vue";


const userInput = ref('')
const ticket = ref({})

/*visit_date: new Date(ticket.visit_date).toLocaleDateString(),
    purchase_time: new Date(ticket.purchase_time).toLocaleDateString()*/



function searchGo() {
  axios.get(`http://localhost:5001/api/data/ticket/${userInput.value}`)
    .then(response => {
      if (response.data.length === 0) {
        console.error('No ticket found')
        // Show the modal
        //抓取modal的id
        const modal = new bootstrap.Modal(document.getElementById('noSearch'), { backdrop: true })
        modal.show()
      } else {
        ticket.value = response.data[0]
        console.log('ticket:', ticket.value)
        //把visit_date和purchase_time轉換成日期格式
        ticket.value.visit_date = new Date(ticket.value.visit_date).toLocaleDateString()
        ticket.value.purchase_time = new Date(ticket.value.purchase_time).toLocaleDateString()

        //總金額
        ticket.value.totalPrice = ticket.value.adultTicket * 300 + ticket.value.childTicket * 150 + ticket.value.elderlyTicket * 130


        // Show the modal
        //抓取modal的id
        const modal = new bootstrap.Modal(document.getElementById('haveSearch'), { backdrop: true })
        modal.show()
      }
    })
    .catch(error => {
      console.error('Error fetching ticket data:', error)
    })
}




/*const searchGo = async () => {
  try {
    const response = await axios.get(`http://localhost:5001/api/data/ticket/${userInput.value}`)
    if (response.data.length === 0) {
      console.error('No ticket found')
    } else {
      ticket.value = response.data[0]
      console.log('ticket:', ticket.value)
      // Show the modal

    }
  } catch (error) {
    console.error('Error fetching ticket data:', error)
    // Show the modal

  }
}*/
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
          <input type="text" placeholder="請輸入手機號碼、身分證、訂單編號（三擇一）" v-model="userInput"  class="w-100 p-3 mb-5">
          <button class="btn btn-primary p-3 w-50"  type="button"  @click="searchGo" data-bs-toggle="modal">查詢</button>
      </div>

    </div>
  </div>


  <!-- 有找到票 -->
  <div class="modal fade" id="haveSearch" >
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
            <p>姓名: {{ticket.name}}</p>
            <p>電話: {{ticket.phone}}</p>
            <p>參觀日期: {{ticket.visit_date}}</p>
            <p>購票日期: {{ticket.purchase_time}}</p>
            <p>全票: {{ticket.adultTicket}}張</p>
            <p>兒童票: {{ticket.childTicket}}張</p>
            <p>敬老票: {{ticket.elderlyTicket}}張</p>
            <p>總金額: {{ticket.totalPrice}}元</p>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!--查無此票-->
  <div class="modal fade" id="noSearch" >
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

  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
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

.modal-body{
  overflow-y: auto;
  max-height: 300px;
  margin-bottom: 10px;

}
</style>