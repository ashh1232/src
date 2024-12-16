<template>
  <div class="manage">
    <div>
      <ul class="cat-list">
        <li id="id_false" class="active nav-link text-center" @click="catPro(false)">الكل</li>

        <li
          v-for="cat in store.catApp"
          :key="cat.ho_ca_id"
          @click="isActivee($event, 'active', '.cat-list li', cat.ho_ca_id)"
          class="p-2"
        >
          {{ cat.ho_ca_name }}
        </li>
      </ul>
    </div>
    <div class="cat-home d-flex">
      <ul class="ul-list">
        <li
          v-for="cat in newCat"
          :key="cat.ho_ca_id"
          class="p-2"
          @click="catPro(cat.categories_id)"
        >
          {{ cat.categories_name }}
        </li>
      </ul>

      <div class="blok-listt">
        <div
          v-for="proo in prds"
          :key="proo.product_id"
          @click="goToproductDetail(proo.product_id)"
          class="bg-white p-2"
        >
          <img class="card-img" :src="proo.product_image" alt="" />
          <div class="card-body text-center">{{ proo.product_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { productStore } from '@/stores/product.js'
const store = productStore()
// const catApp = store.catApp
import { useRouter } from 'vue-router'
const router = useRouter()
const goToproductDetail = (id) => {
  scroll(0, 0)

  router.push({ name: 'DetailPage', params: { id } })
}
var prds = ref(store.products)

function catPro(id) {
  if (id) {
    prds.value = []
    prds.value = store.products.filter((q) => q.categories_id === id)
  }
}

// const isActive = false
const newCat = ref(store.category)

const isActivee = function (event, theClass, list, id) {
  newCat.value = []
  newCat.value = store.category.filter((e) => e.ho_ca_id === id)

  let listt = document.querySelectorAll(list)
  listt.forEach((e) => e.classList.remove(theClass))
  event.target.classList.toggle(theClass)
}
</script>
<style scoped>
.manage {
  margin-top: 25px;
}
.cat-list {
  display: flex;
  /* flex-direction: row; */
  /* padding: 10px; */
  overflow-x: auto;
}
.cat-list li {
  padding: 10px;
}
.active {
  padding: 10px;
  background-color: #555;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
li {
  cursor: pointer;
  list-style: none;
}
.cat-list {
  margin: 0;
  padding: 3px;

  width: 200%;
}
.ul-list li {
  padding: 10px 0;
}
li:hover {
  background: #555;
  color: #fff;
}
ul {
  background: #fff;

  padding: 10px;
}
.blok-listt {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 12px;
}
.ul-list {
  background: #f6f6f6;
  width: 29%;
  display: flex;
  flex-direction: column;
}
</style>