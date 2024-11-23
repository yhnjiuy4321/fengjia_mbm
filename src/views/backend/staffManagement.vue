<script setup>
import { ref, onMounted } from 'vue';
import b_header from '@/components/b_header.vue';
import b_menu from '@/components/b_menuBar.vue';
import axios from 'axios';

const post = 5001;

const staffs = ref([]); //顯示資料
const originalStaffs = ref([]); //原始資料

//抓取資料
async function fetchStaffs() {
  try {
    const response = await axios.get(`http://localhost:${post}/api/data/member`);
    staffs.value = response.data;
    originalStaffs.value = response.data;
  } catch (error) {
    console.error('Error fetching staff data:', error);
  }
}

//刪除資料(抓employeeId)
const deleteItem = async (employeeId) => {
  try {
    if (confirm('確定要刪除嗎?')) {
      await axios.delete(`http://localhost:${post}/api/data/member/${employeeId}`);
      staffs.value = staffs.value.filter(staff => staff.employeeId !== employeeId);
      originalStaffs.value = originalStaffs.value.filter(staff => staff.employeeId !== employeeId);
    }
  } catch (error) {
    console.error('Error deleting staff:', error);
  }
};

//篩選
const handleSelection = (e) => {
  console.log(e.target.value);
  //依員工編號排序
  switch (e.target.value) {
    case 'idAsc':
      staffs.value = [...originalStaffs.value].sort((a, b) =>
          Number(a.employeeId.replace("EMP", "")) - Number(b.employeeId.replace("EMP", ""))
      );
      break;
    case 'idDesc':
      staffs.value = [...originalStaffs.value].sort((a, b) =>
          Number(b.employeeId.replace("EMP", "")) - Number(a.employeeId.replace("EMP", ""))
      );
      break;
    case 'male':
      staffs.value = originalStaffs.value.filter(staff => staff.gender === '男');
      break;
    case 'female':
      staffs.value = originalStaffs.value.filter(staff => staff.gender === '女');
      break;
    case 'showall':
      staffs.value = originalStaffs.value;
      break;
    default:
      console.error('Unknown sorting/filtering option:', e.target.value);
  }

};

//搜尋
const searchRes = (e) => {
  e.preventDefault();
  const searchValue = e.target[0].value;
  staffs.value = originalStaffs.value.filter(staff => staff.name.includes(searchValue) || staff.employeeId.includes(searchValue));
};

onMounted(() => {
  fetchStaffs();
});



</script>

<template>

  <b_header></b_header>
  <b_menu></b_menu>

  <div class="container">

    <div class="title">
      <h1>人員管理</h1>
    </div>

    <div class="tool justify-between">

      <form class="searchArea d-flex" @submit.prevent="searchRes">
        <input class="form-control mr-sm-2" type="search" placeholder="輸入姓名或員編搜尋" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0 m-2"  type="submit"><i class="fas fa-search p-2"></i></button>
      </form>


      <button class="btn btn-primary d-flex" data-bs-toggle="tooltip" title="新增人員"><i class="fas fa-plus"></i><br><i class="fas fa-user"></i></button>

      <select class="form-select w-25"  @change="handleSelection" >
        <option  disabled selected  >--篩選--</option>
        <option value="idAsc">依員編排序(升冪)</option>
        <option value="idDesc">依員編排序(降冪)</option>
        <option value="male">只選男生</option>
        <option value="female">只選女生</option>
        <option value="showall">顯示全部</option>
      </select>

    </div>

    <div class="staffTable">
      <table id="data">
        <tr>
          <th>員工編號</th>
          <th>姓名</th>
          <th>性別</th>
          <th>信箱</th>
          <th>手機</th>
          <th>到職日期</th>
          <th>操作</th>
        </tr>
        <tr v-for="staff in staffs" :key="staff._id">
          <td>{{ staff.employeeId }}</td>
          <td>{{ staff.name }}</td>
          <td>{{ staff.gender }}</td>
          <td>{{ staff.email }}</td>
          <td>{{ staff.phone }}</td>
          <td>{{ new Date(staff.hireDate).toLocaleDateString() }}</td>
          <td>
            <div class="d-flex">
              <button class="btn btn-primary w-100 m-1" data-bs-toggle="tooltip" title="編輯"><i class="fas fa-edit"></i></button>
              <button class="btn btn-danger w-100 m-1" data-bs-toggle="tooltip" title="刪除" @click="deleteItem(staff.employeeId)"><i class="fas fa-trash-alt"></i></button>
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
  border: none;
  border-radius: 5px;
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