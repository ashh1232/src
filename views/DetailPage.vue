<template>
  <div class="detail-page">
    <div class="pro-detail" style="opacity: border m-4 p-4">
      <section id="product-detail" class="product-detail">
        <div
          class="image-slider"
          v-back.bind
          :style="{ backgroundImage: `url(${selectedProduct.product_image})` }"
        >
          <div class="product-images">
            <img
              loading="lazy"
              @click="changebg(0)"
              :src="selectedProduct.product_image"
              class="active"
            />
            <img
              loading="lazy"
              :src="selectedProduct.product_image2"
              class="asd"
              @click="changebg(1)"
            /><img
              loading="lazy"
              :src="selectedProduct.product_image3"
              class=""
              @click="changebg(2)"
            />
          </div>
        </div>
        <div class="detail" v-if="selectedProduct.product_discount !== '0'">
          <span class="prod-discount">{{ selectedProduct.product_discount }}%</span>
          <h2 class="prod-des">{{ selectedProduct.product_name }}</h2>
        </div>
        <div class="pricce">
          <span class="prod-price">₪{{ selectedProduct.product_price }}</span>
          <span class="prod-old-price"
            >₪{{
              (
                selectedProduct.product_price /
                (1 - selectedProduct.product_discount / 100)
              ).toFixed()
            }}</span
          >
          <div class="p-3">
            <div @click="addTocard" class="add-cart shadow rounded p-2">اضف الى السلة</div>
          </div>
          <h2 class="m-3 heading">التفاصيل</h2>
          <p>{{ selectedProduct.product_desc }}</p>
        </div>
      </section>
      <section class="detail-des" id="detail-des"></section>
    </div>
    <!-- <script src="../static/js/product_details.js"></script> -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductDetails',
  methods: {
    changebg(i) {
      let asd = document.querySelectorAll('.product-images img')
      let img = document.querySelector('.image-slider')
      img.style.backgroundImage = `url('${asd[i].src}')`
    }
  },
  directives: {
    back: {
      bind: function (el) {
        el.style.backgroundImage = 'selectedProduct.product_image2'
      }
    }
  }
})
</script>
<script setup>
import { computed } from 'vue'
import { productStore } from '@/stores/product.js'
import { useRoute } from 'vue-router'

const store = productStore()
const route = useRoute()
// const router = useRouter()
const selectedProduct = computed(() => {
  return store.products.find((item) => item.product_id == route.params.id)
})
console.log(selectedProduct)
const addTocard = () => {
  store.addtocart(selectedProduct.value)
  store.showalert('تم اضافه المنتج الى سلتك', 'dark')
  store.showCartLength()
}
</script>

<style>
.product-detail {
  width: 100%;
  padding: 10px 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.image-slider {
  width: 500px;
  height: 500px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
  margin: 10px 2px;
}
.product-images {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background: #ffffff3d;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100px;
  grid-gap: 10px;
  padding: 10px;
}
.product-images img {
  width: 100%;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
}
.product-images img.active {
  opacity: 0.5;
}
.pricce,
.detail {
  width: 100%;
}
.detail .prod-name {
  text-transform: capitalize;
  font-size: 30px;
  padding: 3px 19px;
  margin: 5px;
}
.detail .prod-des {
  font-size: 20px;
  line-height: 30px;
  height: auto;
  margin: 15px 0 30px;
}
.prod-price {
  font-weight: 700;
  font-size: 30px;
}
.prod-old-price {
  font-size: 30px;
  opacity: 0.5;
  text-decoration: line-through;
  margin: 0 20px;
  font-weight: 300;
}
.prod-discount {
  color: #ff7d7d;
  font-size: 20px;
  padding: 2px 10px;
  background: #e0e0e080;
  border-radius: 42px;
}
.prod-size {
  font-size: 30px;
  text-transform: uppercase;
  margin: 60px 0 10px;
  font-weight: 300;
}
.add-cart {
  cursor: pointer;
  margin-right: 2%;
  background: #383838;
  color: #fff;
  font-weight: bold;
  font-size: 23px;
  margin: 0 auto;
  text-align: center;
  width: 70%;
}
.detail-des {
  padding: 0 10vw;
  text-transform: capitalize;
}
.heading {
  font-size: 30px;
  margin-bottom: 30px;
}
.des {
  color: #383838;
  line-height: 25px;
}
</style>
