<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
import { ticketInfo } from "@/data/ticketInfo.js";
import { ref } from "vue";
import router from "@/router/index.js";
const tickets = ref(ticketInfo);

const goToOnlineBooking = () => {
  window.scrollTo(0, 0);
  router.push('/homepage/bookingPage');
}

</script>

<template>
  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="table-container">
      <div class="table-header">
        <button class="table-button" @click="goToOnlineBooking">線上訂票</button>
        <h2 class="table-title">票價總覽</h2>

        <table class="table-full table-bordered table-bg">
          <thead>
          <tr>
            <th class="table-cell-header">票種</th>
            <th class="table-cell-header">價格</th>
            <th class="table-cell-header">規定</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="ticket in tickets" :key="ticket.type">
            <td class="table-cell">{{ ticket.type }}</td>
            <td class="table-cell">{{ ticket.price }}元</td>
            <td class="table-cell text-start w-75">{{ ticket.rule }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


  <pagefooter/>
</template>

<style scoped>
.table-container {
  max-width: 75%;
  margin: 50px auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.table-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

/* 線上訂票按鈕 */
.table-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #6b5b95, #826eaf);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(107, 91, 149, 0.3);
}

.table-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(107, 91, 149, 0.4);
  background: linear-gradient(135deg, #7d6cad, #9683c3);
}

/* 標題 */
.table-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: bold;
  position: relative;
  padding-bottom: 15px;
}

.table-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #6b5b95, #826eaf);
  border-radius: 2px;
}

/* 表格樣式 */
.table-full {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

.table-bordered {
  border-collapse: separate;
  border-spacing: 0;
}

.table-bg {
  background-color: white;
}

/* 表格標題列 */
.table-cell-header {
  font-size: 1.2rem;
  background: linear-gradient(135deg, #6b5b95, #826eaf);
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-align: center;
  border: none;
}

/* 表格單元格 */
.table-cell {
  padding: 1.2rem 1rem;
  border: 1px solid #eee;
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.6;
  transition: background-color 0.3s ease;
}

/* 表格列懸停效果 */
tbody tr:hover {
  background-color: #f8f9ff;
}

/* 票種列樣式 */
.table-cell:first-child {
  font-weight: bold;
  color: #6b5b95;
}

/* 價格列樣式 */
.table-cell:nth-child(2) {
  font-weight: bold;
  color: #e74c3c;
}

/* 規定列表樣式 */
.table-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.table-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.table-list li::before {
  content: '•';
  color: #6b5b95;
  font-weight: bold;
  position: absolute;
  left: 0.5rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .table-container {
    max-width: 95%;
    padding: 1rem;
  }

  .table-cell-header {
    font-size: 1rem;
  }

  .table-cell {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  .table-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .table-title {
    font-size: 1.5rem;
  }
}

/* 增加整體頁面背景 */
:deep(body) {
  background-color: #f5f7fa;
  min-height: 100vh;
  font-family: 'Microsoft JhengHei', Arial, sans-serif;
}
</style>