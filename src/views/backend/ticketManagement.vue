<script setup>
import b_header from '@/components/b_header.vue'
import b_menu from '@/components/b_menuBar.vue'
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
        <tr>
          <td>1</td>
          <td>2021-10-10</td>
          <td>2021-10-09</td>
          <td>小明</td>
          <td>男</td>
          <td>
            <div class="d-grid">
            <button>查看</button>
            <button>刪除</button>
            </div>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>2021-10-10</td>
          <td>2021-10-09</td>
          <td>小美</td>
          <td>女</td>
          <td>
            <div class="d-grid">
            <button>查看</button>
            <button>刪除</button>
            </div>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>2021-10-10</td>
          <td>2021-10-09</td>
          <td>小華</td>
          <td>男</td>
          <td>
            <div class="d-grid">
            <button>查看</button>
            <button>刪除</button>
            </div>
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>2021-10-10</td>
          <td>2021-10-09</td>
          <td>小強</td>
          <td>男</td>
          <td>
            <div class="d-grid">
            <button>查看</button>
            <button>刪除</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>2021-10-10</td>
          <td>2021-10-09</td>
          <td>小強</td>
          <td>男</td>
          <td>
            <div class="d-grid">
              <button>查看</button>
              <button>刪除</button>
            </div>
          </td>
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
    background-color: #1fb92e;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(19, 117, 68);
    color: white;

  }

  .d-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }


</style>