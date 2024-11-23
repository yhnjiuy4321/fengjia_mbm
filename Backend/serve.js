import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { StaffModel } from './staffModel.js';// 替換為你自己創建的模型
import { TicketModel } from './ticketModel.js';// 替換為你自己創建的模型
const app = express();

// 使用 CORS 來允許前端連接
app.use(cors());
app.use(express.json()); // 解析 JSON 請求體

// 連接 MongoDB Atlas
mongoose.connect(
    'mongodb+srv://d1204360:PnyNLvZ0DV0Kz1kK@fcmbmcluster.hxriy.mongodb.net/Fengjia_mbm?retryWrites=true&w=majority&appName=FcmbmCluster',
    {
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

//API獲取員工資料
app.get('/api/data/member', async (req, res) => {
    try {
        const data = await StaffModel.find();
        console.log('Data from DB:', data); // 替換為你自己創建的模型
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API刪除員工資料(用employeeId)
app.delete('/api/data/member/:employeeId', async (req, res) => {
    const employeeId = req.params.employeeId;
    try {
        const data = await StaffModel.deleteOne({ employeeId: employeeId });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API新增員工資料
app.post('/api/data/member', async (req, res) => {
    const newStaff = req.body;
    try {
        const data = await StaffModel.create(newStaff);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API獲取票務資料
app.get('/api/data/ticket', async (req, res) => {
    try {
        const data = await TicketModel.find();
        console.log('Data from DB:', data);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API新增票務資料
app.post('/api/data/ticket', async (req, res) => {
    const newTicket = req.body;
    try {
        const data = await TicketModel.create(newTicket);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API刪除票務資料(用ticketId)
app.delete('/api/data/ticket/:ticketId', async (req, res) => {
    const ticketId = req.params.ticketId;
    try {
        const data = await TicketModel.deleteOne({ ticketId: ticketId });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API查詢票務資料(用電話或身分證)
app.get('/api/data/ticket/:phoneOrIdentity', async (req, res) => {
    const phoneOrIdentity = req.params.phoneOrIdentity;
    try {
        const data = await TicketModel.find({ $or: [{ phone: phoneOrIdentity }, { identity: phoneOrIdentity }] });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// API登入
app.post('/api/login', async (req, res) => {
    const { account, password } = req.body;
    console.log(`Login attempt with account: ${account}, password: ${password}`);
    try {
        const user = await StaffModel.findOne({ account, password });
        if (user) {
            res.json({ success: true, message: 'Login successful', user });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5001;

// 啟動服務
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
    console.log('MongoDB connection is successful.');
});