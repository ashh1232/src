<template>
  <div id="popular-product">
    <section class="product"></section>
    <section>
      <h2 class="product-category">أفضل المبيعات</h2>

      <button class="bak-btn" id="al" aria-label="bak-btn">
        <img
          src="https://res.cloudinary.com/dwsuclcox/image/upload/c_scale,fl_awebp,w_280/v1686048225/arrow2_rlaya8.webp"
          alt=""
        />
      </button>
      <button class="nxt-btn" id="al2" aria-label="nxt-btn">
        <img
          src="https://res.cloudinary.com/dwsuclcox/image/upload/c_scale,fl_awebp,w_280/v1686048225/arrow2_rlaya8.webp"
          alt=""
        />
      </button>
      <!-- product -->
      <div class="product-container">
        <div
          v-for="pro in store.products"
          :key="pro.product_id"
          class="product-card shadow"
          id="6"
          @click="goToproductDetail(pro.product_id)"
        >
          <div class="product-image">
            <img class="product-thumbs-2" :src="pro.product_image" alt="" />
            <span class="discount-tag" v-if="pro.product_discount !== '0'"
              >%{{ +pro.product_discount }}</span
            >
          </div>
          <div class="product-inf d-flex flex-column justify-content-between">
            <div>
              <span class="f-namef">{{ pro.product_name }}</span>
            </div>
            <div>
              <span class="price">{{ pro.product_price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="idd">
        <input type="number" class="id" value="0" id="bas" hidden />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'popular-product'
}
</script>
<script setup>
import { productStore } from '@/stores/product.js'
import { useRouter } from 'vue-router'
const store = productStore()
const router = useRouter()
const goToproductDetail = (id) => {
  scroll(0, 0)
  router.push({ name: 'DetailPage', params: { id } })
}
</script>

<style scoped>
.product {
  position: relative;
  overflow: hidden;
  padding: 20px 0;
}
.product-category {
  padding: 0 10vw;
  font-weight: 500;
  margin-bottom: 40px;
  text-transform: capitalize;
}
.product-container {
  padding: 0 3vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin-bottom: 10px;
  font-weight: 600;
}

.bak-btn,
.nxt-btn {
  border: none;
  height: 41%;
  position: absolute;
  top: 585;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  cursor: pointer;
  z-index: 8;
}
.bak-btn {
  left: 0;
  transform: rotate(180deg);
}
.nxt-btn {
  right: 0;
}
.bak-btn img,
.nxt-btn img {
  width: 100px;
  opacity: 0.3;
  height: 100;
}
.bak-btn:hover img,
.nxt-btn:hover img {
  opacity: 1;
}

.price {
  font-weight: 600;
}
.product-inf {
  padding: 3px;

  padding-right: 9px;
}
.discount-tag {
  position: absolute;
  background: #ffe2d3b0;
  padding: 5px;
  border-radius: 10px;
  color: black;
  right: 10px;
  top: 10px;
  text-transform: capitalize;
}

.product-image {
  position: relative;
  width: 100%;
  border-radius: 9px;
}
.product-card {
  display: flex;
  border-radius: 7px;
  flex: 0 0 auto;
  width: 21.5vh;
  margin-bottom: 13px;
  background-color: #fff;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  margin-right: 13px;
}
</style>
