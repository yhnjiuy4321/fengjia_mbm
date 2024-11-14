


<template>
  <header class="header">
      <img src="../assets/logo.svg" alt="logo" />
    <div class="site-name">
     <span class="chineseName  text-center">逢甲海洋生物博物館</span>
      <span class="engName  text-center">Feng Chia Marine Biology Museum</span>
    </div>
    <select class="form-select">
      <option>-LANGUEGE-</option>
      <option value="nameAsc">繁體中文</option>
      <option value="nameDesc">ENGLISH</option>
    </select>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #0314b1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 陰影效果 */
  position: fixed; /* 固定在網頁最上方 */
  z-index: 1000; /* 確保在其他元素之上 */
  top: 0;
  width: 100%; /* 佔滿整個寬度 */
}



.site-name {
  justify-content: left;
  margin: auto;
  cursor: pointer;
}


.header img {
  width: 30px;
  height: auto;
  margin-right: 10px;
}


.site-name {
  flex: 1;
  text-align:left;
  margin: 0;
  font-size: 24px;
  color: #ced4da;
  display: grid;
}

.engName {
  font-size: 13px;
  color: #ced4da;
}

.form-select {
  width: 150px;
  height: 30px;
  background-color: rgba(115, 183, 255, 0.5);
  color: #000000;
  font-size: 12px;
  cursor: pointer;
  border: none;
}

.form-select:hover {
  background-color: rgba(115, 183, 255, 0.8);
}

.form-select:focus {
  background-color: rgba(115, 183, 255, 0.8);
}




</style>

<script>

</script>