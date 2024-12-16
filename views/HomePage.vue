<template>
  <div class="home-view">
    <nav class="shadow-sm navbar">
      <div class="container con-list">
        <ul id="category" class="nav-link text-center">
          <li id="id_false" class="active nav-link text-center" @click="catPro(false)">الكل</li>
        </ul>
        <ul id="category" class="nav-link text-center" v-for="cat in store.catApp" :key="cat.ho_ca_id">
          <li :class="{ active: isActive, 'nav-link text-center': hasError }" :id="'id_' + cat.ho_ca_id"
            @click="catPro(cat.ho_ca_id)">
            {{ cat.ho_ca_name }}
          </li>
        </ul>
        <!-- {{ store.category}} -->
      </div>
    </nav>
    <div class="home-page">
      <div class="try">
        <Carousel :carList="carouselList" />

        <div class="container">
          <div class="d-flex align-items-center flex-wrap">
            <div class="ic text-center w-25 p-2" v-for="cat in store.category" :key="cat.categories_id"
              @click="goToCatPage(cat.categories_id)">
              <div class="icon w-100">
                <img class="cat-img" :src="cat.categories_image1" alt="" />
              </div>
              <p>{{ cat.categories_name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="padd">
        <ProductCard @productDetail="goToproductDetail" :proList="prds" />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, defineComponent } from 'vue'
import ProductCard from '@/components/global/ProductCard.vue'

export default defineComponent({
  components: { ProductCard },
  name: 'HomePage'
})
</script>

<script setup>
import { productStore } from '@/stores/product.js'
import { useRouter } from 'vue-router'
import Carousel from '@/components/global/Carousel.vue'
const carouselList = ref([
  'https://res.cloudinary.com/dwsuclcox/image/upload/v1686048226/docana_logo_u4dovo.png',
  'https://res.cloudinary.com/dwsuclcox/image/upload/v1686048260/Online-food-delivery_phzi3e.webp',
  'https://res.cloudinary.com/dwsuclcox/image/upload/v1699793806/onboarding/Supermarkets-in-Palm-Jumeirah-_-Cover-ar07112022_ftgm7j.jpg'
])
var isActive = ref(false)
const hasError = ref(false)
const store = productStore()
const router = useRouter()


const goToproductDetail = (id) => {
  scroll(0, 0)

  router.push({ name: 'DetailPage', params: { id } })
}
const goToCatPage = (id) => {
  scroll(0, 0)

  router.push({ name: 'CategoryPage', params: { id } })
}
onMounted(() => {
  !store.cart.length ? store.showCartLength() : store.showCartLength()
})
var prds = ref(store.products)

function catPro(id) {
  let catid = document.querySelectorAll('.container #category li')
  catid.forEach((e) => e.classList.remove('active'))

  let iddd = document.getElementById(`id_${id}`)
  iddd.classList.add('active')

  if (id) {
    prds.value = []
    let po = store.category.filter((q) => q.ho_ca_id === id)
    po.forEach((e) =>
      store.products.forEach((el) => {
        if (el.product_cat === e.categories_id) {
          prds.value.push(el)
        }
      })
    )
  } else {
    prds.value = store.products
  }
}
</script>

<style scoped>
li {
  list-style: none;
  cursor: pointer;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 3;
}

.try {
  padding: 0 7px;
  background-color: #fff;
}

.padd {
  padding: 0px 7px;
}

.cat-img {
  object-position: initial;
  object-fit: fill;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  box-shadow: -2px 5px 33px 6px rgba(0, 0, 0, 0.1);
}

.ic p {
  font-size: 10px;
  font-weight: bolder;
}

.active {
  cursor: pointer;
  padding: 0;
  border-bottom: 3px solid #333;
}

#all {
  display: flex;
  flex-direction: row;

  padding: 0 20px;
}

.con-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
</style>
