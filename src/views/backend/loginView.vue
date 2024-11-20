<script setup>
import b_header from '@/components/b_header.vue'
import axios from 'axios'
import { ref } from 'vue'
import router from "@/router/index.js";



const account = ref('')
const password = ref('')
const login = async () => {
  try {
    const response = await axios.post('http://localhost:5001/api/login', {
      account: account.value,
      password: password.value
    });
    if (response.data.success) {
      alert('Login successful');
      // 跳轉到票務頁面
      await router.push('/backend/login/ticketManagement');
    } else {
      alert('輸入錯誤，請重新確認帳號密碼');
    }
  } catch (error) {
    console.error(error);
    alert('輸入錯誤，請重新確認帳號密碼');
  }
}
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

      <button class="btn btn-primary mt-3" @click="login">登入</button>

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