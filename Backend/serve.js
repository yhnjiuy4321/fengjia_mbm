import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { StaffModel } from './staffModel.js';// 替換為你自己創建的模型
import { TicketModel } from './ticketModel.js';// 替換為你自己創建的模型
const app = express();
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key'; // JWT 密鑰


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


// API獲取員工資料(用employeeId)
app.get('/api/data/member/:employeeId', async (req, res) => {
    const employeeId = req.params.employeeId;
    try {
        const data = await StaffModel.findOne({ employeeId: employeeId });
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
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
    newStaff.email = newStaff.email+'@fengjia.mbm.com';
    newStaff.account=newStaff.employeeId
    try {
        const data = await StaffModel.create(newStaff);

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// API更新員工資料(用employeeId)
app.put('/api/data/member/:employeeId', async (req, res) => {
    const employeeId = req.params.employeeId;
    const updatedStaff = req.body;
    updatedStaff.email =updatedStaff.email+'@fengjia.mbm.com';
    try {
        const data = await StaffModel.updateOne({ employeeId: employeeId }, updatedStaff);
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


// API查詢票務資料(用電話或身分證或訂單編號)
app.get('/api/data/ticket/:phoneOrIdentityOrTicketId', async (req, res) => {
    const phoneOrIdentityOrTicketId = req.params.phoneOrIdentityOrTicketId;
    try {
        const data = await TicketModel.find({ $or: [{ phone: phoneOrIdentityOrTicketId }, { identity: phoneOrIdentityOrTicketId },{ticketId: phoneOrIdentityOrTicketId}] });
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
            const token = jwt.sign({ id: user._id, account: user.account }, SECRET_KEY, { expiresIn: '5min' });//expiresIn: '5min'表示token有效期為5分鐘
            res.json({ success: true, message: 'Login successful', token, user });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// API驗證(token)
app.get('/api/protected', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        console.error('No token provided');
        return res.status(403).send({ message: 'No token provided' });
    }
    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
        if (err) {
            console.error('Failed to authenticate token:', err);
            return res.status(401).send({ message: 'Failed to authenticate token' });
        }
        try {
            const user = await StaffModel.findById(new mongoose.Types.ObjectId(decoded.id));
            if (!user) {
                console.error('User not found');
                return res.status(404).send({ message: 'User not found' });
            }
            res.status(200).send({ message: `Welcome, ${decoded.account}`, user });
        } catch (err) {
            console.error('Failed to retrieve user information:', err);
            res.status(500).send({ message: 'Failed to retrieve user information' });
        }
    });
});




const PORT = process.env.PORT || 5001;


// 啟動服務
app.listen(PORT, () => {
    console.log(`Server(forMongoDB) is running on http://localhost:${PORT}`);
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
    console.log('MongoDB connection is successful.');
});