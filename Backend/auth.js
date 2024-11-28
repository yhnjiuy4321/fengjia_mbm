import {reactive} from 'vue';
import axios from "axios";


//做一個變數，接收name，回傳給前端，讓前端可以顯示目前誰是登入者
export const getStaffName = reactive({
    name: ''
});

//做一個變數，接收isAuthenticated，回傳給前端，讓前端可以判斷是否登入
export const authState = reactive({
    isAuthenticated: false,
});

//登入
export const login = async (account, password) => {
    try {
        const response = await axios.post('http://localhost:5001/api/login', { account, password });
        if (response.data.success) {
            authState.isAuthenticated = true;//登入成功，authState.isAuthenticated = true
            console.log(response.data.user);
            getStaffName.name = response.data.user.name;//將登入者的名字存到getStaffName.name
            const token = response.data.token;//將token存到token
            localStorage.setItem('stayToken', token);//將token存到localStorage，以便之後使用
            console.log(`Login successful, token: ${token }`);
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        authState.isAuthenticated = false;
        throw error;
    }
};

//登出
export const logout = () => {
    authState.isAuthenticated = false;
    localStorage.removeItem('stayToken');
};

