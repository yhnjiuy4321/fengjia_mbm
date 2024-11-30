<script setup>
import { ref, onMounted } from 'vue';
import b_header from '@/components/b_header.vue';
import b_menu from '@/components/b_menuBar.vue';
import axios from 'axios';
import router from "@/router/index.js";
import {authState, getStaffName} from "../../../Backend/auth.js";

const post = 5001;//port


//員工資料
const staffs = ref([]);

//原始資料
const originalStaffs = ref({
});

//選中的員工資料
const selectedStaff = ref({
  employeeId: '',
  name:'',
  gender: '',
  email: '' ,
  phone: '',
  hireDate: '',
  account: '',
  password: ''

});

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

//新增資料
const newStaff = ref({
  employeeId : '',
  name: '',
  gender: '',
  email: '',
  phone: '',
  hireDate: '',
  password: '',
  //account: ''
});

const create = async () => {
  try {
    await axios.post(`http://localhost:${post}/api/data/member`, newStaff.value);
    await fetchStaffs();
    alert('新增成功，請返回頁面確認');
  } catch (error) {
    console.error('Error creating staff:', error);
  }
};


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

//更新資料
const updateStaff = async (e) => {
  e.preventDefault();//防止表單提交
  try {
    await axios.put(`http://localhost:${post}/api/data/member/${selectedStaff.value.employeeId}`, selectedStaff.value);
    await fetchStaffs();
    alert('更新成功，請返回頁面確認');
  } catch (error) {
    console.error('Error updating staff:', error);
  }
};

const editStaff = (staff) => {
  selectedStaff.value = {
    ...staff,
    email: staff.email.replace('@fengjia.mbm.com', '')
  };
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

const token = localStorage.getItem('stayToken');

//檢查是否有token
const checkAuth = async () => {
  if (token) {
    //如果token存在，則在刷新頁面時，不要求重新登入
    const response = await axios.get('http://localhost:5001/api/protected', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data.message);
    authState.isAuthenticated = true;
    getStaffName.name = response.data.user.name;
    await router.push('/backend/login/staffManagement');
  } else {
    console.error('Token verification failed');
    authState.isAuthenticated = false;
    await router.push('/backend/login');
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
  checkAuth();
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
        <input class="form-control mr-sm-2" type="search" placeholder="輸入姓名或員工編號" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0 m-2"  type="submit"><i class="fas fa-search p-2"></i></button>
      </form>


      <button class="btn btn-primary d-flex" data-bs-toggle="modal" title="新增人員"  data-bs-target="#createModal" ><i class="fas fa-plus"></i><br><i class="fas fa-user"></i></button>

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
              <button class="btn btn-info w-100 m-1" data-bs-toggle="modal" title="編輯" data-bs-target="#profileModal" @click="editStaff(staff)"><i class="fas fa-edit"></i></button>
              <button class="btn btn-danger w-100 m-1" data-bs-toggle="tooltip" title="刪除" @click="deleteItem(staff.employeeId)"><i class="fas fa-trash-alt"></i></button>
            </div>
          </td>
        </tr>
      </table>
    </div>


    <!-- 新增Modal -->
    <div class="modal fade" id="createModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title">新增人員</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="create">

              <div class="form-group ">
                <label for="id">員編:</label>
                <input type="text" class="form-control" id="id" v-model="newStaff.employeeId">
              </div>
              <div class="form-group ">
                <label for="name">姓名:</label>
                <input type="text" class="form-control" id="name" v-model="newStaff.name">
              </div>
              <div class="form-group d-flex w-100">
                <label for="gender">性別:</label>
                <div class="radioButton">
                  <input   type="radio" id="gender" value="男" v-model="newStaff.gender">
                  <label for="male">男</label>
                </div>
                <div class="radioButton d-flex">
                  <input   type="radio" id="gender" value="女" v-model="newStaff.gender">
                  <label for="female">女</label>
                </div>

              </div>
              <div class="form-group">
                <label for="tel">電話:</label>
                <input type="text" class="form-control" id="tel" v-model="newStaff.phone">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <div class="d-flex">
                <input type="text" class="form-control" id="email" v-model="newStaff.email">
                <span class="companyEmail">@fengjia.mbm.com</span>
                </div>
              </div>
              <div class="form-group">
                <label for="date">到職時間:</label>
                <input type="date" class="form-control" id="date" v-model="newStaff.hireDate">
              </div>
<!--              <div class="form-group">
                <label for="account">帳號(同員編):</label>
                <input type="text" class="form-control" id="account" v-model="newStaff.account" disabled>
              </div>-->

              <div class="form-group">
                <label for="password">密碼:</label>
                <input type="text" class="form-control" id="password" v-model="newStaff.password">
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger w-25" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary w-25" data-bs-dismiss="modal" @click="create">新增</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>




    <!-- 更新Modal -->
    <div class="modal fade" id="profileModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">員工資料</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit="updateStaff">
              <div class="mb-3">
                <label for="employeeId" class="form-label text-dark ">員工編號</label>
                <input type="text" class="form-control" id="employeeId" v-model="selectedStaff.employeeId" disabled>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label text-dark">姓名</label>
                <input type="text" class="form-control" id="name" v-model="selectedStaff.name">
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label text-dark">性別</label>
                <input type="text" class="form-control" id="name" v-model="selectedStaff.gender">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label text-dark">信箱</label>
                <div class="d-flex">
                <input type="text" class="form-control" id="email" v-model="selectedStaff.email">
                  <span class="companyEmail">@fengjia.mbm.com</span>
                  </div>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label text-dark">手機</label>
                <input type="text" class="form-control" id="phone" v-model="selectedStaff.phone">
              </div>
              <div class="mb-3">
                <label for="hireDate" class="form-label text-dark">到職日期</label>
                <input type="date" class="form-control" id="hireDate" v-model="selectedStaff.hireDate">
              </div>
              <div class="mb-3">
                <label for="hireDate" class="form-label text-dark">帳號</label>
                <input type="text" class="form-control" id="hireDate" v-model="selectedStaff.account" disabled>
              </div>
              <div class="mb-3">
                <label for="hireDate" class="form-label text-dark">密碼</label>
                <input type="text" class="form-control" id="hireDate" v-model="selectedStaff.password">
              </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger w-25" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary w-25" data-bs-dismiss="modal">Save</button>
          </div>
            </form>
        </div>
      </div>
    </div>
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

.modal-body {
  overflow-y: auto;
  max-height: 400px;
}

.companyEmail{
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.form-group.d-flex {
  margin-bottom: 10px;
  margin-top: 10px;
}

.radioButton{
  margin-right: 20px;
  margin-left: 20px;
}

.form-group .form-control{
  margin-bottom: 10px;
}
</style>