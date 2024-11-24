<script setup>
import { useRouter } from 'vue-router'
import { logout , getStaffName } from "../../Backend/auth.js";
const router = useRouter()


const goToTicket = () => {
  router.push('/backend/login/ticketManagement')
}

const goToStaff = () => {
  router.push('/backend/login/staffManagement')
}

const leave = () => {
  //詢問是否登出，登出後導向登入頁
  if (confirm('確定要登出嗎?')) {
    logout()
    router.push('/backend/login')
    alert('登出成功')
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-sm bg-black">

    <div class="container-fluid">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="goToTicket">票務管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="goToStaff">人員管理</a>
        </li>
      </ul>

      <!-- Logout -->
      <div class="d-flex justify-content-end">
        <div class="whoLogin justify-content-center">
          <i class="fas fa-user-circle m-2"></i>
          <span>{{getStaffName.name}}</span><!--登入人員的名子-->
        </div>
        <button class="btn_logout" @click="leave" data-bs-toggle="tooltip" title="登出"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    </div>

  </nav>
</template>

<style scoped>
nav {
  margin-top: 55px;
  position: fixed; /* 固定在網頁最上方 */
  z-index: 1000; /* 確保在其他元素之上 */
  top: 0;
  width: 100%; /* 佔滿整個寬度 */
}

.nav-link {
  color: #ffffff;
  border-radius: 5px;
  margin-right:10px;
}



.nav-item:hover .nav-link {
  color: #ffd500;
  background: rgba(119, 178, 239, 0.5);
}

.btn_logout {
  background-color: #000000;
  color: #ffffff;
  border: none;
  margin: 3px;
  font-size: 20px;
  cursor: pointer;
}

.btn_logout:hover {
  color: #ffd500;
}

.whoLogin {
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: white;
}
</style>