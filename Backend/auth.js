import {reactive} from 'vue';
import axios from "axios";


export const authState = reactive({
    isAuthenticated: false,
});

export const login = async (account, password) => {
    try {
        const response = await axios.post('http://localhost:5001/api/login', { account, password });
        if (response.data.success) {
            authState.isAuthenticated = true;
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

