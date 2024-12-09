<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
import { bioContent } from "@/data/bioContent.js";

import { ref } from "vue";

const PORT = 5002
const bio = ref(bioContent);

const imageFile = ref(null)
const imagePreview = ref(null)
const loading = ref(false)
const error = ref(null)
const results = ref(null)

const marineTranslations = {
  'Dolphin': '海豚 🐬',
  'Whale': '鯨魚 🐋',
  'Seal': '海豹 🦭',
  'Sea lion': '海獅',
  'Otter': '水獺',
  'Fish': '魚 🐠',
  'Clownfish': '小丑魚',
  'Shark': '鯊魚 🦈',
  'Blue tang': '藍雀鯛',
  'Seahorse': '海馬',
  'Starfish': '海星 ⭐',
  'Stingray': '魟魚',
  'Octopus': '章魚 🐙',
  'Jellyfish': '水母',
  'Turtle': '海龜 🐢',
  'Crab': '螃蟹 🦀',
  'Penguin': '企鵝 🐧',
  'Ocean': '海洋 🌊',
  'Sea': '大海 🌊',
  'Coral': '珊瑚 🪸',
  'Seaweed': '海藻',
  'Marine life': '海洋生物',
  'Marine mammal': '海洋哺乳類',
  'Marine biology': '海洋生物',
  'Aquatic': '水生生物'
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  imageFile.value = file
  imagePreview.value = URL.createObjectURL(file)
  results.value = null
  error.value = null
}

const analyzeImage = async () => {
  if (!imageFile.value) return

  loading.value = true
  error.value = null
  results.value = null

  try {
    const base64Image = await getBase64(imageFile.value)

    const requestBody = {
      requests: [{
        image: {
          content: base64Image.split(',')[1]
        },
        features: [
          { type: 'LABEL_DETECTION' },      // 標籤識別
          { type: 'TEXT_DETECTION' },       // 文字識別
        ]
      }]
    }

    // 提用後端 API
    const response = await fetch(`http://localhost:${PORT}/api/analyze-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      throw new Error('API 請求失敗')
    }

    const data = await response.json()
    results.value = data.responses[0]
  } catch (err) {
    error.value = `分析失敗: ${err.message}`
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}


</script>

<template>
  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>

    <div class="w-100 p-4">

      <div class=" title ">
        <h1>【圖片上傳注意事項】</h1>
      </div>

      <div v-for="item in bio" :key="item.id" class="content">
        <div class="content_text">
          <p>{{item.id}}.{{item.rule}}</p>
        </div>
      </div>

      <div class="vision-analyzer">
        <div class="upload-section">
          <input type="file" @change="handleFileUpload" accept="image/*" ref="fileInput" class="form-control mb-3">
          <img v-if="imagePreview" :src="imagePreview" class="preview-image mb-3">
        </div>

        <button @click="analyzeImage" :disabled="!imageFile || loading" class="btn btn-primary">分析圖片</button>

        <div v-if="loading" class="loading mt-3">處理中...</div>

        <div v-if="error" class="error mt-3">{{ error }}</div>

        <div v-if="results" class="results mt-3">
          <h3>🌊 海洋生物辨識結果 🌊</h3>
          <div v-if="results.labelAnnotations">
            <!-- 顯示第一個標籤作為學名 -->
            <div v-if="results.labelAnnotations[0]" class="scientific-name">
              學名: {{ results.labelAnnotations[0].description }}
            </div>

            <!-- 只顯示可信度高的結果 -->
            <ul class="marine-list">
              <template v-for="label in results.labelAnnotations" :key="label.description">
                <li v-if="label.score >= 0.95" class="marine-item">
                  {{ label.description }} ({{ Math.round(label.score * 100) }}%)
                </li>
              </template>
            </ul>
          </div>

          <div v-if="results.textAnnotations">
            <h4>文字識别:</h4>
            <p>{{ results.textAnnotations[0]?.description || '未檢測到文字' }}</p>
          </div>

        </div>
      </div>

    </div>
  </div>

  <pagefooter/>

</template>

<style scoped>

.vision-analyzer {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.upload-section {
  margin-bottom: 20px;
}

.preview-image {
  max-width: 100%;
  max-height: 300px;
}

.loading {
  margin: 20px 0;
  color: #666;
}

.error {
  color: red;
  margin: 20px 0;
}

.results {
  margin-top: 20px;
}

button {
  min-width: 120px;
}

.marine-list {
  list-style: none;
  padding: 0;
}

.marine-item {
  background-color: #e3f2fd;
  border-radius: 15px;
  padding: 15px;
  margin: 10px 0;
  font-size: 1.2em;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 5px solid #2196f3;
  transition: all 0.3s;
}

.marine-item:hover {
  transform: translateX(10px);
  background-color: #bbdefb;
}
.scientific-name {
  background-color: #e3f2fd;
  border-radius: 15px;
  padding: 15px;
  margin: 10px 0;
  font-size: 1.2em;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 5px solid #2196f3;
  transition: all 0.3s;
}

</style>