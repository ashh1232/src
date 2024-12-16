<template>
  <div>
    <div class="product">
      <div
        v-for="proo in proListProps.proList"
        :key="proo.product_id"
        @click="emit('productDetail', proo.product_id)"
      >
        <div class="product-card-2" id="6">
          <div class="product-image-2">
            <span class="discount-tag-2" v-if="proo.product_discount !== '0'"
              >%{{ proo.product_discount }}</span
            >
            <img class="product-thumbs-2" loading="lazy" :src="proo.product_image" alt="" />
          </div>
          <div class="product-inf-2 d-flex flex-column justify-content-between">
            <div>
              <span class="f-namef">{{ proo.product_name }}</span>
            </div>
            <div>
              <span class="price-2">{{ proo.product_price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCard'
}
</script>
<script setup>
const proListProps = defineProps({
  proList: {
    default: [
      {
        product_image:
          'https://res.cloudinary.com/dwsuclcox/image/upload/v1686048226/docana_logo_u4dovo.png'
      }
    ]
  }
})
const emit = defineEmits(['productDetail'])
</script>
<style lang="scss" scoped>
.product {
  cursor: pointer;
}
</style>
