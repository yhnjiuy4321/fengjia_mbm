<script setup>
import b_header from '@/components/b_header.vue'
import {login, authState, getStaffName} from "/Backend/auth.js";
import { ref, onMounted } from 'vue'
import router from "@/router/index.js";
import axios from 'axios';

const account = ref('')
const password = ref('')
const token = localStorage.getItem('stayToken');//取得token

const enter = async () => {
  try {
    await login(account.value, password.value)
    localStorage.setItem('token', 'your-token-here');//將token存入localStorage
    alert('登入成功')
    await router.push('/backend/login/ticketManagement')
    //console.log該帳號的資料

  } catch (error) {
    console.error('Login failed:', error)
    alert('登入失敗. 請確認您的帳號密碼是否正確')
  }
}

//檢查是否有token
const checkAuth = async () => {
  console.log('Retrieved token:', token);// Add this line to log the token
  if (token) {
      const response = await axios.get('http://localhost:5001/api/protected', {
        headers: { Authorization: `Bearer ${token}` }//將token放入header，進行驗證，確認是否有權限，有權限則取得資料，無權限則返回錯誤
      });
      console.log(response.data.message);
      authState.isAuthenticated = true;//
      console.log('Auth:', authState.isAuthenticated);
      getStaffName.name = response.data.user.name;// 設置用戶名稱
  } else {
    console.error('Token verification failed');
    authState.isAuthenticated = false;
    await router.push('/backend/login');
    console.log('Auth:', authState.isAuthenticated);
  }
}

onMounted(() => {
  checkAuth();
});


</script>

<template>

  <b_header/>
  <div class="container">

    <div class="input_box d-grid">
      <div class="account d-flex mt-3">
        <label class="name">帳號：</label>
        <input type="text" id="account" v-model="account" name="account" placeholder="請輸入帳號">
      </div>

      <div class="passwords d-flex">
        <div class="name">密碼：</div>
        <input type="text" id="password" v-model="password" name="password" placeholder="請輸入密碼">
      </div>

      <button class="btn btn-primary mt-3" @click="enter">登入</button>

    </div>
  </div>

</template>

<style scoped>

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .input_box{
    width: 40%;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    background: #77b2ef;

  }


  .name{
    width: 18%;
    text-align: right;
    display: flex;
    align-items: center;
  }

  .account{
    margin-bottom: 20px;
  }

  .passwords{
    margin-bottom: 20px;
  }

  input{
    width: 100%;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }

  button{
    width: 100%;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    margin: 0 auto;

  }

</style>