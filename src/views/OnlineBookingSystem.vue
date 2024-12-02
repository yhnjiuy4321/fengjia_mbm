<template>


  <div class="container">
    <div class="header">線上訂票系統</div>
    <form @submit.prevent="submitOrder">

      <div class="form-group">
        <label>購票人姓名：</label>
        <input type="text" v-model="formData.name" placeholder="輸入姓名" />
        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div class="form-group gender-group">
        <label>購票人性別：</label>
        <div class="gender-options">
          <input type="radio" id="male" value="男" v-model="formData.gender" />
          <label for="male">男</label>
          <input type="radio" id="female" value="女" v-model="formData.gender" />
          <label for="female">女</label>
          <span class="error-message" v-if="errors.gender">{{ errors.gender }}</span>
        </div>
      </div>
      <div class="form-group">
        <label>購票人身分證：</label>
        <input type="text" v-model="formData.id" placeholder="輸入身分證" @input="handleIdInput" maxlength="10" />
        <span class="error-message" v-if="errors.id">{{ errors.id }}</span>
      </div>
      <div class="form-group">
        <label>出生年月日：</label>
        <input type="date" v-model="formData.birthdate" />
        <span class="error-message" v-if="errors.birthdate">{{ errors.birthdate }}</span>
      </div>

      <div class="form-group">
        <label>手機號碼：</label>
        <input type="tel" v-model="formData.phone" placeholder="輸入號碼 例:09xxxxxxxx" maxlength="10" />
        <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <label>參觀日期：</label>
        <input type="date" v-model="formData.visitDate" />
        <span class="error-message" v-if="errors.visitDate">{{ errors.visitDate }}</span>
      </div>

      <div class="form-group">
        <label>票型種類：</label>
        <div class="ticket-type">
          <span>全票</span>
          <button type="button" @click="adjustCount('adult', 1)">+</button>
          <span class="ticket-count">{{ formData.tickets.adult }}</span>
          <button type="button" @click="adjustCount('adult', -1)">-</button>
        </div>
        <div class="ticket-type">
          <span>敬老</span>
          <button type="button" @click="adjustCount('senior', 1)">+</button>
          <span class="ticket-count">{{ formData.tickets.senior }}</span>
          <button type="button" @click="adjustCount('senior', -1)">-</button>
        </div>
        <div class="ticket-type">
          <span>兒童</span>
          <button type="button" @click="adjustCount('child', 1)">+</button>
          <span class="ticket-count">{{ formData.tickets.child }}</span>
          <button type="button" @click="adjustCount('child', -1)">-</button>
        </div>
        <span class="error-message" v-if="errors.tickets">{{ errors.tickets }}</span>
      </div>

      <div class="buttons">
        <button type="button" @click="resetForm">返回</button>
        <button type="submit">確認送出</button>
      </div>
    </form>


    <!-- 訂單確認彈窗 -->
    <div v-if="showSummary" class="modal-summary-enhanced">
      <div class="modal-content-summary-enhanced">
        <div class="modal-header-summary">
          <h3>訂單確認</h3>
          <div class="countdown-container">
            <div class="countdown-box" :class="{ 'countdown-warning': isCountdownWarning }">
              <div class="countdown-progress" :style="{ width: `${(countdown / 300) * 100}%` }"></div>
              <span class="countdown-text">剩餘時間：{{ formatTime(countdown) }}</span>
            </div>
          </div>
          <button @click="closeSummary" class="close-button">×</button>
        </div>

        <div class="modal-body-summary">
          <div class="summary-section personal-info">
            <h4>個人資訊</h4>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">姓名：</span>
                <span class="value">{{ formData.name }}</span>
              </div>
              <div class="info-item">
                <span class="label">性別：</span>
                <span class="value">{{ formData.gender }}</span>
              </div>
              <div class="info-item">
                <span class="label">身分證：</span>
                <span class="value">{{ formData.id }}</span>
              </div>
              <div class="info-item">
                <span class="label">出生日期：</span>
                <span class="value">{{ formData.birthdate }}</span>
              </div>
              <div class="info-item">
                <span class="label">手機號碼：</span>
                <span class="value">{{ formData.phone }}</span>
              </div>
              <div class="info-item">
                <span class="label">參觀日期：</span>
                <span class="value">{{ formData.visitDate }}</span>
              </div>
            </div>
          </div>

          <div class="summary-section ticket-info">
            <h4>票券明細</h4>
            <div class="ticket-details">
              <div class="ticket-item">
                <span>全票</span>
                <span class="ticket-count">{{ formData.tickets.adult }} 張</span>
              </div>
              <div class="ticket-item">
                <span>敬老票</span>
                <span class="ticket-count">{{ formData.tickets.senior }} 張</span>
              </div>
              <div class="ticket-item">
                <span>兒童票</span>
                <span class="ticket-count">{{ formData.tickets.child }} 張</span>
              </div>
            </div>
            <div class="total-amount">
              <div class="amount-title">總金額</div>
              <div class="amount-value">
                <span class="currency">NT$</span>
                <span class="price">{{ totalAmount }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer-summary">
          <div class="confirm-section">
            <div class="confirm-box">
              <button @click="confirmPayment" class="btn-confirm">請點選LINE PAY付款</button>
            </div>
            <div class="linepay-logo">
              <img src="@/assets/linepay.png" alt="LINE Pay" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 完成訂單彈窗 -->
    <div v-if="paymentComplete" class="modal-payment-complete">
      <div class="modal-content-complete">
        <div class="modal-header-complete">
          <div class="checkmark">✓</div>
          <h3>訂單已完成</h3>
        </div>
        <div class="modal-body-complete">
          <p class="order-number">訂單編號：<span>{{ orderNumber }}</span></p>
          <p class="order-message">感謝您的購買！</p>
        </div>
        <div class="modal-footer-complete">
          <button @click="closePaymentComplete" class="back-button">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import test from '@/assets/test.json'

export default {

  props: {
    transactionId: String,
    orderId: String
  },
  data() {
    return {
      formData: process.env.NODE_ENV === 'development' ? test : {
        name: '',
        gender: '',
        id: '',
        birthdate: '',
        phone: '',
        visitDate: '',
        tickets: {adult: 0, senior: 0, child: 0},
      },
      countdown: 20, // 5分鐘 = 300秒
      countdownTimer: null,
      errors: {
        name: '',
        id: '',
        phone: '',
        birthdate: '',
        visitDate: '',
      },
      totalAmount: 0, // 新增屬性來保存總金額
      showSummary: false,
      paymentComplete: false,
      orderNumber: null,
    };
  },
  beforeUnmount() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  },
  computed: {
    isCountdownWarning() {
      return this.countdown <= 60;
    }
  },

  created() {
    // 如果有交易 ID 和訂單 ID，表示是支付回調
    if (this.transactionId && this.orderId) {
      this.handlePaymentCallback(this.transactionId, this.orderId);
    } else {
      // 檢查 URL 參數
      const urlParams = new URLSearchParams(window.location.search);
      const urlTransactionId = urlParams.get('transactionId');
      const urlOrderId = urlParams.get('orderId');

      if (urlTransactionId && urlOrderId) {
        this.handlePaymentCallback(urlTransactionId, urlOrderId);
      }
    }
  },
  methods: {
    // 重置表單
    resetForm() {
      this.formData = {
        name: '',
        gender: '',
        id: '',
        birthdate: '',
        phone: '',
        visitDate: '',
        tickets: {adult: 0, senior: 0, child: 0},
      };
      this.totalAmount = 0;

      // 導航回主頁面
      window.scrollTo(0, 0);
      this.$router.push('/homepage/TicketShop');  // 假設主頁面的路由是 '/'
    },

    startCountdown() {
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer);
      }
      this.countdown = 300;
      this.countdownTimer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.handleTimeout();
        }
      }, 1000);
    },

    handleTimeout() {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;

      // 使用 confirm 讓用戶確認
      if (confirm('已超過付款時間，請按確認返回主頁面')) {
        this.resetForm();
      }
    },

    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    },
    // 調整票券數量
    adjustCount(type, amount) {
      if (this.formData.tickets[type] + amount >= 0) {
        this.formData.tickets[type] += amount;
      }
    },

    // 計算總金額
    calculateTotalAmount() {
      const ticketPrices = {
        adult: 300,  // 全票價格
        senior: 130, // 敬老票價格
        child: 150,  // 兒童票價格
      };

      this.totalAmount =
          this.formData.tickets.adult * ticketPrices.adult +
          this.formData.tickets.senior * ticketPrices.senior +
          this.formData.tickets.child * ticketPrices.child;
    },




    // 添加處理付款回調的方法
    async handlePaymentCallback(transactionId, orderId) {
      try {
        // 從 localStorage 獲取訂單資訊
        const orderInfo = JSON.parse(localStorage.getItem('currentOrder'));

        if (!orderInfo) {
          throw new Error('找不到訂單資訊');
        }

        // 確認付款
        const response = await axios.get(`http://localhost:3000/confirm`, {
          params: {
            transactionId,
            orderId,
            amount: orderInfo.amount
          }
        });

        if (response.data.success) {
          // 設置訂單編號
          this.orderNumber = orderId;
          // 顯示完成訂單彈窗
          this.paymentComplete = true;
          // 清除訂單資訊
          localStorage.removeItem('currentOrder');
        } else {
          throw new Error('付款確認失敗');
        }
      } catch (error) {
        console.error('處理付款回調時出錯:', error);
        alert('付款處理失敗，請聯繫客服');
      }
    },

    // 關閉訂單確認彈窗
    closePaymentComplete() {
      this.paymentComplete = false;
      this.resetForm();
      this.$router.push('/homepage/TicketShop');  // 添加這一行
      // 清除 URL 參數
      window.history.replaceState({}, document.title, window.location.pathname);
    },

    // 確認付款
    async confirmPayment() {
      try {
        const response = await axios.post('http://localhost:3000/create-payment', {
          amount: this.totalAmount,
          orderInfo: {
            name: this.formData.name,
            phone: this.formData.phone,
            visitDate: this.formData.visitDate,
            tickets: this.formData.tickets,
          }
        });

        if (response.data.paymentUrl) {
          // 儲存訂單資訊
          localStorage.setItem('currentOrder', JSON.stringify({
            orderId: response.data.orderId,
            transactionId: response.data.transactionId,
            amount: this.totalAmount
          }));

          // 跳轉至 LINE Pay 付款頁面
          window.location.href = response.data.paymentUrl;
        } else {
          throw new Error('未收到有效的付款 URL');
        }
      } catch (error) {
        console.error('付款錯誤:', error.response?.data || error.message);
        alert('付款失敗，請稍後再試。');
      }
    },

    closeSummary() {
      this.showSummary = false;
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer);
        this.countdownTimer = null;
      }
    },


    validateForm() {
      let isValid = true;
      // 重置所有錯誤訊息
      this.errors = {
        name: '',
        gender: '',
        id: '',
        birthdate: '',
        phone: '',
        visitDate: '',
        tickets: ''
      };

      // 驗證姓名
      if (!this.formData.name.trim()) {
        this.errors.name = '請輸入姓名';
        isValid = false;
      }

      // 驗證性別
      if (!this.formData.gender) {
        this.errors.gender = '請選擇性別';
        isValid = false;
      }

      // 驗證身分證
      if (!this.formData.id) {
        this.errors.id = '請輸入身分證字號';
        isValid = false;
      } else if (!this.validateID(this.formData.id)) {
        this.errors.id = '請輸入正確的身分證字號';
        isValid = false;
      }

      // 驗證生日
      if (!this.formData.birthdate) {
        this.errors.birthdate = '請選擇出生日期';
        isValid = false;
      }

      // 驗證手機
      if (!this.formData.phone) {
        this.errors.phone = '請輸入手機號碼';
        isValid = false;
      } else if (!this.validatePhone(this.formData.phone)) {
        this.errors.phone = '請輸入正確的手機號碼格式';
        isValid = false;
      }

      // 驗證參觀日期
      if (!this.formData.visitDate) {
        this.errors.visitDate = '請選擇參觀日期';
        isValid = false;
      }

      // 驗證票數
      const totalTickets =
          this.formData.tickets.adult +
          this.formData.tickets.senior +
          this.formData.tickets.child;

      if (totalTickets <= 0) {
        this.errors.tickets = '請至少選擇一張票券';
        isValid = false;
      }

      return isValid;
    },

    validateID(id) {
      const idRegex = /^[A-Z][12]\d{8}$/;
      return idRegex.test(id);
    },

    validatePhone(phone) {
      const phoneRegex = /^09\d{8}$/;
      return phoneRegex.test(phone);
    },

    handleIdInput(event) {
      this.formData.id = this.formData.id.toUpperCase();
    },

    handlePhoneInput(event) {
      this.formData.phone = this.formData.phone.replace(/\D/g, '');
    },

    submitOrder() {
      if (this.validateForm()) {
        this.calculateTotalAmount();
        this.showSummary = true;
        this.startCountdown(); // 開始倒數計時
      }
    },
  },

};

</script>

<style scoped>
.container {
  width: 65%;
  margin: 30px auto;
  border: none;
  padding: 30px;
  font-family: 'Microsoft JhengHei', Arial, sans-serif;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* 標題美化 */
.header {
  background: #6b5b95;
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: -30px -30px 30px -30px;
  padding: 25px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.required {
  color: #dc3545;
  margin-left: 4px;
}
/* 錯誤輸入框樣式 */
.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}

/* 錯誤輸入框樣式 */
.error-input {
  border-color: #dc3545 !important;
}

.error-input:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}

/* 表單群組美化 */
.form-group {
  margin-bottom: 25px;
  margin-left: 15%;
  position: relative;
}

.gender-group {
  display: flex;
  align-items: center;
}

.gender-options {
  display: inline-flex;
  gap: 10px;
}

.gender-options input {
  margin: 0 5px 0 0;
}

/* 標籤美化 */
label {
  font-weight: 600;
  font-size: 17px;
  color: #2c3e50;
  margin-bottom: 8px;
  display: block;
}

/* 輸入框美化 */
input[type="text"],
input[type="tel"],
input[type="date"] {
  width: 60%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

input[type="text"]:focus,
input[type="tel"]:focus,
input[type="date"]:focus {
  border-color: #004aad;
  box-shadow: 0 0 5px rgba(0, 74, 173, 0.2);
  outline: none;
}

/* 性別選項美化 */
.gender-group {
  margin-bottom: 25px;
}

.gender-options {
  display: flex;
  gap: 10px;
}

.gender-options input[type="radio"] {
  margin-right: -1px;
}

span {
  font-weight: bold;
  font-size: 18px;
}

input {
  background-color: #eae7e7;
  padding: 1px;
  width: 40%;
}

/* 票券選擇區域美化 */
.ticket-type {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
}

.ticket-type span {
  color: #2c3e50;
  font-size: 17px;
}

.ticket-type button {
  background-color: white;
  border: 2px solid #e8265a;
  color: #004aad;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}


.ticket-type button:hover {
  background-color: #b80f4f;
  color: white;
  transform: scale(1.1);
}

.ticket-count {
  background-color: #b7cad8;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  min-width: 40px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.total-amount {
  margin-top: 20px;
  padding: 15px 20px;
  background-color: #004aad;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.amount-title {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.amount-value {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.currency {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.price {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

/* 可以添加一個漸變效果 */
.total-amount {
  background: linear-gradient(135deg, #004aad 0%, #0066cc 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.total-amount:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
/* 按鈕美化 */
.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  padding: 20px 0;
}

.buttons button {
  background-color: white;
  color: #004aad;
  border: 2px solid #004aad;
  border-radius: 8px;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.buttons button[type="submit"] {
  background-color: #004aad;
  color: white;
}

.buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 整體頁面背景 */
body {
  background-color: #f5f7fa;
  min-height: 100vh;
}

/* 確認訂單彈窗樣式 */
.modal-summary-enhanced {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content-summary-enhanced {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header-summary h3 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.close-button {
  font-size: 24px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}

.modal-body-summary {
  padding: 20px;
}

.summary-section {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.summary-section h4 {
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #004aad;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.info-item {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.info-item .label {
  color: #666;
}

.info-item .value {
  color: #333;
  font-weight: bold;
}

.ticket-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.ticket-item {
  background-color: #e6f2ff;
  padding: 15px;
  border-radius: 8px;
  width: 30%;
  text-align: center;
}

.ticket-item span {
  display: block;
}

.ticket-item .ticket-count {
  background-color: #004aad;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  margin-top: 8px;
  display: inline-block;
}

/* 確認訂單區域樣式 */
.confirm-section {
  padding: 15px;
  border: 2px solid #00B900;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
}

.confirm-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.confirm-box span {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.btn-confirm {
  background-color: #00B900;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: background-color 0.3s ease;
}

.btn-confirm:hover {
  background-color: #009900;
}

.linepay-logo {
  text-align: center;
  margin-top: 5px;
}

.linepay-logo img {
  height: 150px;
  width: auto;
}

/* 完成訂單彈窗樣式 */
.modal-payment-complete {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content-complete {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.modal-header-complete {
  text-align: center;
  margin-bottom: 20px;
}

.checkmark {
  font-size: 48px;
  color: #4CAF50;
  margin-bottom: 15px;
}

.modal-header-complete h3 {
  color: #333;
  font-size: 24px;
  margin: 0;
}

.modal-body-complete {
  margin: 20px 0;
}

.modal-body-complete .order-number {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.modal-body-complete .order-number span {
  color: #004aad;
  font-weight: bold;
}

.modal-body-complete .order-message {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.modal-footer-complete {
  margin-top: 20px;
}

.back-button {
  background-color: #004aad;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #003f89;
}
/*倒數計時樣式*/
.countdown-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px; /* 調整寬度 */
}

.countdown-box {
  position: relative;
  width: 100%;
  height: 40px; /* 調整高度 */
  background-color: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.countdown-progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #004aad, #0066cc);
  transition: width 1s linear;
  z-index: 1;
}

.countdown-text {
  position: relative;
  z-index: 2;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
/* 警告狀態樣式 */
.countdown-warning .countdown-circle-progress {
  stroke: #dc3545;
}

.countdown-warning .countdown-text {
  color: #dc3545;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.modal-header-summary {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  min-height: 80px; /* 確保有足夠空間 */
}
.modal-header-summary h3 {
  margin: 0;
  font-size: 24px;
  color: #333;
  flex: 1;
  text-align: left;
}

/* 添加倒數計時動畫效果 */
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

/* 添加動畫效果 */
.countdown-box {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

/* 當倒數時間小於60秒時的警告樣式 */
.countdown-warning .countdown-progress {
  background: linear-gradient(90deg, #dc3545, #ff4d5a);
}

.countdown-warning .countdown-text {
  animation: blink 1s infinite;
}
</style>