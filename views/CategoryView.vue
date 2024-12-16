<template>
  <div>
    <div class="padd">
      <div class="try"><Carousel :carList="carouselList" /></div>
      <div class="p-2">
        <ProductCard @productDetail="goToproductDetail" :proList="selectedProduct" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import Carousel from '@/components/global/Carousel.vue'
import ProductCard from '@/components/global/ProductCard.vue'

import { productStore } from '@/stores/product.js'
const store = productStore()
const route = useRoute()
const router = useRouter()
const goToproductDetail = (id) => {
  scroll(0, 0)

  router.push({ name: 'DetailPage', params: { id } })
}
const selectedProduct = computed(() => {
  return store.products.filter((item) => item.product_cat === route.params.id)
})
const carouselList = ref([])
carouselList.value.push(
  store.category.filter((e) => e.categories_id == route.params.id)[0].categories_image1
)
carouselList.value.push(
  store.category.filter((e) => e.categories_id == route.params.id)[0].categories_image2
)
carouselList.value.push(
  store.category.filter((e) => e.categories_id == route.params.id)[0].categories_image3
)
</script>

<style lang="scss" scoped>
.try {
  padding: 0 7px;
  background-color: #fff;
}
</style>