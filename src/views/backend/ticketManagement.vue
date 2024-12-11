<script setup>
import { ref, onMounted } from 'vue';
import b_header from '@/components/b_header.vue'
import b_menu from '@/components/b_menuBar.vue'
import axios from 'axios'
import router from "@/router/index.js";
import {authState, getStaffName} from "../../../Backend/auth.js";

const post = 5001

const tickets = ref([])
const originalTickets = ref([])
const token = localStorage.getItem('stayToken')

//檢查是否有token
const checkAuth = async () => {
  console.log('Retrieved token:', token)
  if (token) {
    try {
      const response = await axios.get('http://localhost:5001/api/protected', {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(response.data.message)
      authState.isAuthenticated = true
      getStaffName.name = response.data.user.name
      await router.push('/backend/login/ticketManagement')
    } catch (error) {
      console.error('Token verification failed:', error)
      localStorage.removeItem('stayToken')
      await router.push('/backend/login')
    }
  } else {
    await router.push('/backend/login')
  }
}

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

    originalTickets.value = response.data.map(ticket => ({
      ...ticket,
      visit_date: new Date(ticket.visit_date).toLocaleDateString(),
      purchase_time: new Date(ticket.purchase_time).toLocaleDateString()
    }))

  } catch (error) {
    console.error('Error fetching ticket data:', error)
  }
}

const theOneData = ref({
  ticketId: '',
  name: '',
  gender: '',
  identity: '',
  phone: '',
  visit_date: '',
  purchase_time: '',
  adultTicket: 0,
  childTicket: 0,
  elderlyTicket: 0
})



//抓取特定資料(抓ticketId)
async function fetchOne(ticketId) {
  try {
    const response = await axios.get(`http://localhost:${post}/api/data/ticket/${ticketId}`)

    //將日期格式化
    response.data[0].visit_date = new Date(response.data[0].visit_date).toLocaleDateString()
    response.data[0].purchase_time = new Date(response.data[0].purchase_time).toLocaleDateString()

    theOneData.value = response.data[0]

    console.log('ticket:', tickets.value)
  } catch (error) {
    console.error('Error fetching ticket data:', error)
  }
}


//刪除資料(抓ticketId)
async function deleteItem(ticketId) {
  try {
    if (confirm('確定要刪除嗎?')) {
      await axios.delete(`http://localhost:${post}/api/data/ticket/${ticketId}`)
      tickets.value = tickets.value.filter(ticket => ticket.ticketId !== ticketId)
      originalTickets.value = originalTickets.value.filter(ticket => ticket.ticketId !== ticketId)
    }
  } catch (error) {
    console.error('Error deleting ticket:', error)
  }
}

//篩選
const handleSelection = (e) => {
  console.log(e.target.value)
  //依訂單編號排序
  switch (e.target.value) {
    case 'idAsc':
      tickets.value = [...originalTickets.value].sort((a, b) =>
        Number(a.ticketId.replace("t","")) - Number(b.ticketId.replace("t",""))
      )
      break
    case 'idDesc':
      tickets.value = [...originalTickets.value].sort((a, b) =>
        Number(b.ticketId.replace("t","")) - Number(a.ticketId.replace("t",""))
      )
      break
    case 'male':
      tickets.value = originalTickets.value.filter (ticket => ticket.gender === '男')
      break
    case 'female':
      tickets.value = originalTickets.value.filter (ticket => ticket.gender === '女')
      break
    case 'showall':
      tickets.value = originalTickets.value
      break
    case 'visitAsc':
      tickets.value = [...originalTickets.value].sort((a, b) =>
        new Date(a.visit_date) - new Date(b.visit_date)
      )
      break
    case 'visitDesc':
      tickets.value = [...originalTickets.value].sort((a, b) =>
        new Date(b.visit_date) - new Date(a.visit_date)
      )
      break
    case 'purchaseAsc':
      tickets.value = [...originalTickets.value].sort((a, b) =>
        new Date(a.purchase_time) - new Date(b.purchase_time)
      )
      break
    case 'purchaseDesc':
      tickets.value = [...originalTickets.value].sort((a, b) =>
        new Date(b.purchase_time) - new Date(a.purchase_time)
      )
      break
    default:
      console.error('Unknown sorting/filtering option:', e.target.value)
  }
}


//搜尋
const searchRes = (e) => {
  e.preventDefault()
  const searchInput = e.target[0].value
  tickets.value = originalTickets.value.filter(ticket => ticket.name.includes(searchInput) || ticket.ticketId.includes(searchInput))
}


onMounted(() => {
  fetchTickets();
  checkAuth();
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

      <form class="searchArea d-flex" @submit.prevent="searchRes">
        <input class="form-control mr-sm-2" type="search" placeholder="輸入姓名或訂單編號" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0"  type="submit"><i class="fas fa-search p-2"></i></button>
      </form>

      <select class="form-select w-25" @change="handleSelection">
        <option disabled selected>--篩選--</option>
        <option value="idAsc">依訂單編號排序(由小到大)</option>
        <option value="idDesc">依訂單編號排序(由大到小)</option>
        <option value="visitAsc">依參觀日期排序(從最早)</option>
        <option value="visitDesc">依參觀日期排序(從最晚)</option>
        <option value="purchaseAsc">依購票日期排序(從最早)</option>
        <option value="purchaseDesc">依購票日期排序(從最晚)</option>
        <option value="male">只選男生</option>
        <option value="female">只選女生</option>
        <option value="showall">顯示全部</option>
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
            <button class="btn btn-info w-100 m-1" data-bs-toggle="modal" data-bs-target="#profileModal" title="查看" @click="fetchOne(ticket.ticketId)"><i class="fas fa-eye"></i></button>
        <!--<button class="btn btn-primary w-100 m-1" data-bs-toggle="tooltip" title="編輯"><i class="fas fa-edit"></i></button>-->
            <button class="btn btn-danger w-100 m-1" data-bs-toggle="tooltip" title="刪除" @click="deleteItem(ticket.ticketId)"><i class="fas fa-trash-alt"></i></button>
          </div>
          </td>


          <!-- The Modal -->
          <div class="modal fade" id="profileModal">
            <div class="modal-dialog">
              <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">編號 {{theOneData.ticketId}} 的詳細資料</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                  <div class="d-flex">
                    <div class="w-100">
                      <p>姓名: {{theOneData.name}}</p>
                      <p>性別: {{theOneData.gender}}</p>
                      <p>身分證: {{theOneData.identity}}</p>
                      <p>電話: {{theOneData.phone}}</p>
                      <p>參觀日期: {{theOneData.visit_date}}</p>
                      <p>購票日期: {{theOneData.purchase_time}}</p>
                      <p>全票: {{theOneData.adultTicket}} 張</p>
                      <p>兒童票: {{theOneData.childTicket}} 張</p>
                      <p>敬老票: {{theOneData.elderlyTicket}} 張</p>
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
  .modal-body{
    display: flex;
    overflow-y: auto;
    max-height: 300px;
    margin-bottom: 10px;
  }

</style>