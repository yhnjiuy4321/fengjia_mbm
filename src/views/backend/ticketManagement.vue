<script setup>
import { ref, onMounted } from 'vue';
import b_header from '@/components/b_header.vue'
import b_menu from '@/components/b_menuBar.vue'
import axios from 'axios'

const post = 5001

const tickets = ref([])

//抓取資料
async function fetchTickets() {
  try {
    const response = await axios.get(`http://localhost:${post}/api/data/ticket`)

    //將日期格式化
    tickets.value = response.data.map(ticket => ({
      ...ticket,
      visit_date: new Date(ticket.visit_date).toLocaleDateString(),
      purchase_time: new Date(ticket.purchase_time).toLocaleDateString()

    }))
  } catch (error) {
    console.error('Error fetching ticket data:', error)
  }
}


//刪除資料(抓ticketId)
async function deleteItem(ticketId) {
  try {
    if (confirm('確定要刪除嗎?')) {
      await axios.delete(`http://localhost:${post}/api/data/ticket/${ticketId}`)
      window.location.reload()
    }
  } catch (error) {
    console.error('Error deleting ticket:', error)
  }
}



onMounted(() => {
  fetchTickets()
})


</script>

<template>

  <b_header></b_header>
  <b_menu></b_menu>

  <div class="container">

    <div class="title">
      <h1>票務管理</h1>
    </div>

    <div class="tool justify-between">

      <form class="searchArea d-flex">
        <input class="form-control mr-sm-2" type="search" placeholder="輸入姓名或序號搜尋" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0"  type="submit"><i class="fas fa-search p-2"></i></button>
      </form>

      <select class="form-select w-25">
        <option disabled selected>--篩選--</option>
        <option value="idAsc">依id排序(升冪)</option>
        <option value="idDesc">依id排序(降冪)</option>
        <option value="scoreHtoL">只選男生</option>
        <option value="scoreLtoH">只選女生</option>
      </select>

    </div>

    <div class="staffTable">
      <table>
        <tr>
          <th>訂單編號</th>
          <th>參觀日期</th>
          <th>購票日期</th>
          <th>姓名</th>
          <th>性別</th>
          <th>操作</th>
        </tr>
        <tr  v-for="ticket in tickets" :key="ticket.ticket_id">
          <td>{{ticket.ticketId}}</td>
          <td>{{ticket.visit_date}}</td>
          <td>{{ticket.purchase_time}}</td>
          <td>{{ticket.name}}</td>
          <td>{{ticket.gender}}</td>
          <td>
          <div class="d-flex">
            <button class="btn btn-primary w-100 m-1" data-bs-toggle="modal" data-bs-target="#profileModal" title="查看"><i class="fas fa-eye"></i></button>
            <button class="btn btn-primary w-100 m-1" data-bs-toggle="tooltip" title="編輯"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger w-100 m-1" data-bs-toggle="tooltip" title="刪除" @click="deleteItem(ticket.ticketId)"><i class="fas fa-trash-alt"></i></button>
          </div>
          </td>


          <!-- The Modal -->
          <div class="modal fade" id="profileModal">
            <div class="modal-dialog">
              <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">詳細資料</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                  <div class="d-flex">
                    <div class="w-75">
                      <p>姓名: {{ticket.name}}</p>
                      <p>性別: {{ticket.gender}}</p>
                      <p>電話: {{ticket.phone}}</p>
                      <p>信箱: {{ticket.email}}</p>
                      <p>參觀日期: {{ticket.visit_date}}</p>
                      <p>購票日期: {{ticket.purchase_time}}</p>
                      <p>全票: {{ticket.adultTicket}}張</p>
                      <p>兒童票: {{ticket.childTicket}}張</p>
                      <p>敬老票: {{ticket.elderlyTicket}}張</p>
                    </div>
                  </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>



        </tr>
      </table>
    </div>


  </div>
</template>

<style scoped>



  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
  }

  .tool {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  }

  .staffTable {
    width: 100%;
    padding: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background-color: #d7d9fa;
    border: 1px solid #000000;
    padding: 8px;
    text-align: center;
  }

  td {
    border: 1px solid #a39999;
    padding: 8px;
    text-align: center;
  }

  button {
    padding: 5px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(119, 178, 239, 0.5);
    color: white;
  }

</style>