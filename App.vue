<template>
  <div dir="rtl">
    <app-bar />
    <div class="rout">
      <RouterView />
      <popular-product />
    </div>
    <nav-bar />
    <div class="loading-page">
      <p class="name">دكانvbjnه</p>
      <p class="loa">-</p>
    </div>
  </div>
</template>
<script>
import AppBar from '@/components/global/AppBar.vue'
import NavBar from '@/components/global/NavBar.vue'
import PopularProduct from '@/components/global/PopularProduct.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    NavBar,
    PopularProduct
  }
}
</script>
<script setup>
import { onMounted } from 'vue'
import { productStore } from '@/stores/product.js'
const store = productStore()

onMounted(() => {
  store.fetchPro()
  store.fetchCat()
})
</script>

<style >
.rout {
  padding-bottom: 50px;
}

.loading-page {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #333;
  height: 100%;
  width: 100%;
  z-index: 50;
  color: #c3c2c2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

.loading-page p {
  font-family: 'Noto Nastaliq Urdu', serif;
}

.loading-page .loa {
  position: absolute;
  bottom: 100px;
  color: red;

  animation-name: loading-now;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes loading-now {
  from {
    left: 30%;
  }

  to {
    opacity: 0.1;
    left: 70%;
    color: #333;
  }
}

.wewe {
  background: #0f0;
  background-color: rgba(255, 0, 0, 0.896);
  border-left: 8px solid #f00;
}

.good {
  background: #0f0;
  background-color: rgba(0, 255, 4, 0.132);
  border-left: 8px solid rgb(0, 255, 38);
}

.allert {
  width: 0px;
  height: 60px;
  position: fixed;
  top: 65px;
  right: -20px;

  z-index: 15;
  border-radius: 3px;
  border: 1px solid #33333334;
}

.al-home {
  background-color: rgba(255, 255, 255, 0.8);
  display: none;
  flex-direction: row-reverse;
  align-items: center;
  height: 50px;
  position: absolute;
  right: 33px;
  top: 5px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  width: 100%;
  z-index: 5;
}

.al-home span {
  font-size: 17px;

  font-weight: 900;
  opacity: 0.001;
}

.al-border {
  display: none;
  /* width: 10px; */
  height: 60px;
  margin-bottom: 101px;
  position: fixed;
  top: 65px;
  right: 40px;
  /* background-color: red; */
  z-index: 7;
  border-radius: 3px;
  border: 1px solid #33333334;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}
</style>
