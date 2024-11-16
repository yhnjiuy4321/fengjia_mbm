<script setup>

</script>

<template>
  <header class="header">
    <div class="site-name">
      <span class="chineseName  text-center">FCMBM後臺管理系統</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #3587e4;
  position: fixed; /* 固定在網頁最上方 */
  z-index: 1000; /* 確保在其他元素之上 */
  top: 0;
  width: 100%; /* 佔滿整個寬度 */
}



.site-name {
  font-size: 26px;
  justify-content: left;
  margin: auto;
  cursor: pointer;
}
</style>