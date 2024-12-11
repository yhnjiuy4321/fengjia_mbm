import express from 'express';
import axios from 'axios';
import cors from 'cors';
import crypto from 'crypto';
import { TicketModel } from "./ticketModel.js";


const app = express();
const port = 3000;



const orderInfo = [
    {
        ticketId: '',
        name: '',
        gender: '',
        identity: '',
        birthdate: '',
        phone: '',
        visit_date: '',
        adultTicket: 0,
        childTicket: 0,
        elderlyTicket: 0,
        purchase_time: ''
    }
];

const saveTicketInfo = []


let amount = [
    {
        amount: 0
    }
];

app.use(cors({
    origin: ['http://localhost:5173', 'https://sandbox-web-pay.line.me'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'X-LINE-ChannelId', 'X-LINE-Authorization-Nonce', 'X-LINE-Authorization'],
}));

app.use(express.json());



const CHANNEL_ID = '2006558114'; // LINE Pay Channel ID
const CHANNEL_SECRET = '4c8df56051806d2d84505688d61e7906';// LINE Pay Channel Secret
const BASE_URL = 'https://sandbox-api-pay.line.me';// LINE Pay API Base URL

const LINE_NOTIFY_TOKEN = 'hWjHnPlhsnPAQPmjBULRHOpwGUt6JLOy6qziOYAPKSK';
const LINE_NOTIFY_TOKEN1 = 'iaXMDYkMqGL0jfSB3kxg7n9TpuRlKj02QkVj8foMjSP';


// 創建簽名，用於驗證請求
function createSignature(requestUrl, requestBody, nonce) {
    const bodyString = JSON.stringify(requestBody);
    const signatureString = CHANNEL_SECRET + requestUrl + bodyString + nonce;
    const hmac = crypto.createHmac('sha256', CHANNEL_SECRET);
    hmac.update(signatureString);
    return hmac.digest('base64');
}



async function sendLineNotify(message) {
    try {
        await Promise.all([
            axios.post(
                'https://notify-api.line.me/api/notify',
                new URLSearchParams({ message }),
                {
                    headers: {
                        'Authorization': `Bearer ${LINE_NOTIFY_TOKEN}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            ),
            axios.post(
                'https://notify-api.line.me/api/notify',
                new URLSearchParams({ message }),
                {
                    headers: {
                        'Authorization': `Bearer ${LINE_NOTIFY_TOKEN1}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
        ]);
        console.log('LINE Notify 發送成功');
    } catch (error) {
        console.error('LINE Notify 發送失敗:', error);
        console.error('錯誤詳情:', error.response?.data);
    }
}


// 創建付款，返回付款 URL
app.post('/create-payment', async (req, res) => {

        try {






        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount', message: '金額無效' });
        }

        const nonce = Date.now().toString();// 產生一個隨機數
        const requestUrl = '/v3/payments/request';// 請求路徑
        const orderId = `${Date.now()}`;// 訂單編號

            //處理回傳的資料
            req.body.orderInfo.ticketId = orderId;
            orderInfo.value = req.body.orderInfo;
            amount = req.body.amount;
            console.log('orderInfo:', orderInfo.value);

        const requestBody = {
            orderInfo,
            amount,
            currency: 'TWD',
            orderId,
            packages: [
                {
                    id: 'package-1',
                    amount,
                    name: '票券訂購',
                    products: [
                        {
                            name: '票券',
                            quantity: 1,
                            price: amount,
                        },
                    ],
                },
            ],
            redirectUrls: {
                confirmUrl: 'http://localhost:5173/confirm',
                cancelUrl: 'http://localhost:5173/cancel',
            },
        };

        const signature = createSignature(requestUrl, requestBody, nonce);

        const response = await axios.post(`${BASE_URL}${requestUrl}`, requestBody, {
            headers: {
                'X-LINE-ChannelId': CHANNEL_ID,
                'X-LINE-Authorization-Nonce': nonce,
                'X-LINE-Authorization': signature,
                'Content-Type': 'application/json',
            },
        });

        console.log('LINE Pay Response:', response.data);

        const paymentUrl = response.data?.info?.paymentUrl?.web;
        if (!paymentUrl) {
            throw new Error('無法從 LINE Pay 取得付款 URL');
        }

        res.json({
            paymentUrl,
            orderId,
            transactionId: response.data.info.transactionId,
        });
    } catch (error) {
        console.error('LINE Pay Error:', error.response?.data || error.message);
        res.status(500).json({
            error: 'Payment request failed',
            message: '建立付款請求失敗：' + (error.response?.data?.message || error.message),
        });
    }
});



// 儲存票券資訊（創建訂單時）
/*
app.post('/save-ticket-info', async (req, res) => {
    try {

        const newTicket = new TicketModel({
            ticketId: req.body.orderId,
            name: req.body.name,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            phone: req.body.phone,
            visit_date: req.body.visit_date,
            adultTicket: req.body.adultTicket,
            childTicket: req.body.childTicket,
            elderlyTicket: req.body.elderlyTicket,
            purchase_time: new Date().toISOString(),
        });

        await newTicket.save();
        res.json({
            success: true,
            message: 'Ticket information saved successfully'
        });
    } catch (error) {
        console.error('Error saving ticket information:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to save ticket information',
            message: error.message
        });
    }
});
*/



app.get('/confirm', async (req, res) => {
    try {
        const { transactionId, orderId, amount } = req.query;

        //將回傳的資料存到資料庫
        const datasend = await axios.post('http://localhost:5001/api/data/ticket', orderInfo.value);
        console.log('資料庫回傳:', datasend.data);

        console.log('接收到付款確認請求:', { transactionId, orderId, amount });
        const nonce = Date.now().toString();
        const requestUrl = `/v3/payments/${transactionId}/confirm`;

        const requestBody = {
            amount: parseInt(amount),
            currency: 'TWD'
        };



        const signature = createSignature(requestUrl, requestBody, nonce);

        const response = await axios.post(
            `${BASE_URL}${requestUrl}`,
            requestBody,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-LINE-ChannelId': CHANNEL_ID,
                    'X-LINE-Authorization-Nonce': nonce,
                    'X-LINE-Authorization': signature
                }
            }
        );

        if (response.data.returnCode === '0000') {
            const notifyMessage = `
🎫 訂單完成通知 🎫
----------------
訂單編號: ${orderId}
付款金額: NT$ ${amount}
交易時間: ${new Date().toLocaleString('zh-TW')}
----------------
感謝您的購買！`;
            await sendLineNotify(notifyMessage);
        }


        // 回傳成功給前端
        res.json({
            success: true,
            orderId: orderId,
            transactionId: transactionId,
            paymentStatus: response.data.returnCode,
            message: '資料儲存成功'
        });

        console.log(response.data);


    } catch (error) {
        console.error('確認付款時發生錯誤:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            error: 'Payment confirmation failed',
            message: error.response?.data?.message || error.message
        });
    }
});

app.listen(port, () => {
    console.log(`LineServe is running on http://localhost:${port}`);
});