<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const pageName = router.currentRoute.value.name


const scrollToSection = async (section) => {
  await router.push('/homepage/VenueTour')
  setTimeout(() => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100) // Adjust the timeout as needed
}


const gotoQA = () => {
  router.push('/homepage/Q&A')
}

const gotoAboutUs = () => {
  router.push('/homepage/about')
}

const gotoShow = () => {
  router.push('/homepage/Show')
}

const gotoNews = () => {
  router.push('/homepage/News')
}

const gotoSR = () => {
  router.push('/homepage/service_rules')
}

const gotoTicket = () => {
  router.push('/homepage/ticketShop')
}

const gotoSearchTicket = () => {
  router.push('/homepage/searchTicket')
}





</script>

<template>

<div class="menu d-grid">
  <div class="pagename">
    <span class="whatYouChoose">{{ pageName }}</span>
  </div>

  <div class="navbar d-flex justify-content-center">
    <div class="container-fluid">
      <ul class="navbar-nav">

        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            場館導覽
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#" @click.prevent="scrollToSection('tour')">導覽簡介</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="scrollToSection('deep')">深海區</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="scrollToSection('shallow')">淺海區</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="scrollToSection('ice')">極地世界</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="scrollToSection('whale')">鯨魚世界</a></li>
          </ul>
        </div>

        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            售票與服務
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#" @click="gotoSR()">場館規則與服務</a></li>
            <li><a class="dropdown-item" href="#" @click="gotoTicket()">線上購票</a></li>
            <li><a class="dropdown-item" href="#" @click="gotoSearchTicket()">票務查詢</a></li>
          </ul>
        </div>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#"  @click="gotoShow()">表演活動</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#"  @click="gotoNews()">最新消息</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#" @click="gotoQA()">Q&A問答</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#" @click="gotoAboutUs()">關於我們</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#">互動專區</a>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<style scoped>

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 19%;
  padding: 10px;
  margin-top: 10px;
  height: 100%;
  margin-left: 10px;
}

  .navbar {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 10px;
    background-color: rgba(115, 183, 255, 0.5);
    justify-content: center;
    align-content: center;
  }

  .container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pagename {
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .nav-item {
    display: inline;
    border-radius: 15px;
    margin-bottom: 10px;
  }

  .nav-link {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    margin: 0 50px;
    padding: 2px;
  }

  .nav-link:hover {
    color: #666;
  }

  .whatYouChoose {

    font-size: 36px;
    color: #ffffff;
    font-weight: 600;
    padding: 12px;
    background: #77b2ef;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-bottom: 5px;
    width: 100%;
  }

  .dropdown{
    margin-bottom: 10px;
  }

  button {
    border-radius: 15px;
    padding: 2px;
    width: 100%
  }

.dropdown-menu {
  border-radius: 15px;
}

</style>