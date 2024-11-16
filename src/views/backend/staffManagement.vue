<script setup>
import b_header from '@/components/b_header.vue'
import b_menu from '@/components/b_menuBar.vue'
</script>

<template>

  <b_header></b_header>
  <b_menu></b_menu>

  <div class="container">

    <div class="title">
      <h1>人員管理</h1>
    </div>

    <div class="tool justify-between">

      <form class="searchArea d-flex">
        <input class="form-control mr-sm-2" type="search" placeholder="輸入姓名或員編搜尋" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0"  type="submit"><i class="fas fa-search p-2"></i></button>
      </form>


      <button class="btn btn-primary d-flex" data-bs-toggle="tooltip" title="新增人員"><i class="fas fa-plus"></i><br><i class="fas fa-user"></i></button>

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
          <th>員工編號</th>
          <th>姓名</th>
          <th>性別</th>
          <th>信箱</th>
          <th>手機</th>
          <th>到職日期</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>EMP001</td>
          <td>王小明</td>
          <td>男</td>
          <td>xming@example.com</td>
          <td>0912345678</td>
          <td>2023-01-15</td>
          <td><button>編輯</button> <button>刪除</button></td>
        </tr>
        <tr>
          <td>EMP002</td>
          <td>李美麗</td>
          <td>女</td>
          <td>mllee@example.com</td>
          <td>0987654321</td>
          <td>2022-08-10</td>
          <td><button>編輯</button> <button>刪除</button></td>
        </tr>
        <tr>
          <td>EMP003</td>
          <td>陳大志</td>
          <td>男</td>
          <td>dzchen@example.com</td>
          <td>0933221100</td>
          <td>2023-05-20</td>
          <td><button>編輯</button> <button>刪除</button></td>
        </tr>
        <tr>
          <td>EMP004</td>
          <td>林佳宜</td>
          <td>女</td>
          <td>jylin@example.com</td>
          <td>0922113344</td>
          <td>2021-11-05</td>
          <td><button>編輯</button> <button>刪除</button></td>
        </tr>
        <tr>
          <td>EMP005</td>
          <td>張建國</td>
          <td>男</td>
          <td>jguo@example.com</td>
          <td>0911002233</td>
          <td>2020-07-18</td>
          <td><button>編輯</button> <button>刪除</button></td>
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
  border: none;
  border-radius: 5px;
  background-color: #1fb92e;
  cursor: pointer;
}

button:hover {
  background-color: rgb(19, 117, 68);
  color: white;

}

button.btn-primary {
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 7%;
}
button .fas{
  margin: 0 3px;
}
</style>