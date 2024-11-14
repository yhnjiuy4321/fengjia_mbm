<script setup>

</script>

<template>

<div class="menu">
  <div>
    <span class="youchoose ">所選功能</span>
  </div>
  <div class="navbar d-flex justify-content-start">
    <div class="container-fluid">
      <ul class="navbar-nav">

        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            場館導覽
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#">導覽簡介</a></li>
            <li><a class="dropdown-item" href="#">深海區</a></li>
            <li><a class="dropdown-item" href="#">淺海區</a></li>
            <li><a class="dropdown-item" href="#">極地世界</a></li>
            <li><a class="dropdown-item" href="#">鯨魚世界</a></li>
          </ul>
        </div>

        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            售票與服務
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#">場館規則與服務</a></li>
            <li><a class="dropdown-item" href="#">線上購票</a></li>
            <li><a class="dropdown-item" href="#">票務查詢</a></li>
          </ul>
        </div>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#">表演活動</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#">最新消息</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#">Q&A問答</a>
        </li>

        <li class="nav-item bg-primary">
          <a class="nav-link" href="#">關於我們</a>
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
  align-items: flex-start;
  width: 20%;
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

  .youchoose {
    font-size: 42px;
    color: #ffffff;
    font-weight: 600;
    padding: 1rem;
    background: #77b2ef;
    display: flex;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 5px;

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