import {reactive} from 'vue';
import axios from "axios";


//做一個變數，接收name，回傳給前端，讓前端可以顯示目前誰是登入者
export const getStaffName = reactive({
    name: ''
});

export const authState = reactive({
    isAuthenticated: false,
});

export const login = async (account, password) => {
    try {
        const response = await axios.post('http://localhost:5001/api/login', { account, password });
        if (response.data.success) {
            authState.isAuthenticated = true;
            console.log(response.data.user);
            getStaffName.name = response.data.user.name;//將登入者的名字存到getStaffName.name
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        authState.isAuthenticated = false;
        throw error;
    }
};

export const logout = () => {
    authState.isAuthenticated = false;
};

