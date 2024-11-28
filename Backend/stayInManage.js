const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const SECRET_KEY = 'your_secret_key'; // JWT 密鑰

// 中間件
app.use(cors());
app.use(bodyParser.json());

// 模擬用戶數據（實際中應該存儲在數據庫中）
const users = [
    { username: 'user1', password: bcrypt.hashSync('password1', 8) }
];

// 登入接口
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).send({ message: '用戶不存在' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).send({ message: '密碼錯誤' });
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY, {
        expiresIn: 86400 // 24小時
    });

    res.status(200).send({
        username: user.username,
        token: token
    });
});

// 驗證接口
app.get('/api/protected', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).send({ message: '未提供 Token' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Token 無效' });
        }
        res.status(200).send({ message: `歡迎, ${decoded.username}` });
    });
});

// 啟動服務
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`後端服務運行於 http://localhost:${PORT}`);
});
