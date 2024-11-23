<script setup>
import b_header from '@/components/b_header.vue'
import { login } from "/Backend/auth.js";
import { ref } from 'vue'
import router from "@/router/index.js";

const account = ref('')
const password = ref('')

const enter = async () => {
  try {
    await login(account.value, password.value)
    alert('登入成功')
    await router.push('/backend/login/staffManagement')
  } catch (error) {
    console.error('Login failed:', error)
    alert('登入失敗. 請確認您的帳號密碼是否正確')
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