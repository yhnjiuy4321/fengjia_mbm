import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { StaffModel } from './staffModel.js';  // 替換為你自己創建的模型
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

//API獲取資料
app.get('/api/data/member', async (req, res) => {
    try {
        const data = await StaffModel.find();
        console.log('Data from DB:', data); // 替換為你自己創建的模型
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API刪除資料(用employeeId)
app.delete('/api/data/member/:employeeId', async (req, res) => {
    const employeeId = req.params.employeeId;
    try {
        const data = await StaffModel.deleteOne({ employeeId: employeeId });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API新增資料
app.post('/api/data/member', async (req, res) => {
    const newStaff = req.body;
    try {
        const data = await StaffModel.create(newStaff);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 啟動服務
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
    console.log('MongoDB connection is successful.');
});