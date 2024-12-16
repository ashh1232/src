<template>
  <div class="app-bar">
    <nav class="navbar" data-bs-theme="light">
      <div class="container">
        <button
          @click="nav"
          id="navBtn"
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" style="font-size: 17px"></span>
        </button>
        <router-link to="/mail" class="">
          <div class="mail text-black fw-lighter mt-2 mx-2">
            <span class="material-symbols-outlined"> mail </span>
          </div>
        </router-link>
        <router-link to="/" class="navbar-brand fw-bold docana mx-auto">دكانه</router-link>
        <div class="text-black mx-2 mt-2 icon_h">
          <span class="material-symbols-outlined"> search </span>
        </div>
        <div class="mx-1 mt-2 icon_h">
          <span class="material-symbols-outlined"> favorite </span>
        </div>

        <div class="carts">
          <router-link to="/cart" class="position-relative">
            <div class="stekker opacity-75">
              {{ store.cart.length }}
            </div>
            <div class="text-black mx-2 mt-2 icon_h">
              <span class="material-symbols-outlined"> shopping_Bag </span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="catbox"></div>
    <nav id="navCat" class="navbar navbar-light navbar-expand-lg" data-bs-theme="light">
      <div class="container">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center flex-row">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">المتجر</router-link>
          </li>
          <li class="nav-item mx-5">
            <router-link to="/salon" class="nav-link active">الصالون</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/neon" class="nav-link active">نيون</router-link>
          </li>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <li class="nav-item dropdown mx-5">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الاعدادات
              </a>
              <ul class="dropdown-menu position-absolute text-center">
                <li class="nav-item">
                  <router-link to="/shada" class="nav-link">شده</router-link>
                </li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">تسجيل الخروج</a></li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app-bar',
  methods: {
    nav() {
      $('#navCat').toggle(1000)
    }
  }
}
</script>
<script setup>
import { productStore } from '@/stores/product.js'
const store = productStore()
</script>
<style>
.navbar {
  background-color: #fff !important;
  font-family: 'Amiri', serif;
  height: 50px !important;
  z-index: 3;
}
#navBtn {
  border: none;
}
.docana {
  font-family: 'Noto Nastaliq Urdu', serif;
  font-weight: 100;
  font-size: 20px;
}

#cat-nav,
.cat-navv {
  height: 45px;
  position: sticky !important;
  top: 50px;
  z-index: 1;
}
.cat-navv .container {
  padding: 0 5px;
  display: flex;
  flex-wrap: inherit;
  align-items: stretch;
  justify-content: space-evenly;
}
.material-symbols-outlined {
  cursor: pointer;
}

#navCat {
  display: none;
}
.container {
  background: #fff;
}
.container ul {
  font-size: 15px;
  font-weight: 100;
  color: #222;
}
.stekker {
  display: none;
  position: absolute;
  background: red;
  border-radius: 50%;
  width: 25px;
  color: #efefef;
  height: 23px;
  text-align: center;
  top: -15vh;
  left: 25px;
}
</style>
