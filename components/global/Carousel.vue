<template>
  <div class="carousel-widget">
    <div class="gallery">
      <div class="gallery-container">
        <img
          v-for="(car, index) in carListProps.carList"
          :data-index="index"
          :key="car"
          :class="'gallery-item-' + index + ' gallery-item bg-white'"
          :src="car"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarouselView'
}
</script>
<script setup>
import { onMounted } from 'vue'
const carListProps = defineProps({
  carList: {
    default: [
      'https://res.cloudinary.com/dwsuclcox/image/upload/v1686048226/docana_logo_u4dovo.png',
      'https://res.cloudinary.com/dwsuclcox/image/upload/v1686048226/docana_logo_u4dovo.png',
      'https://res.cloudinary.com/dwsuclcox/image/upload/v1686048226/docana_logo_u4dovo.png'
    ]
  }
})
function carouselFun() {
  const galleryContainer = document.querySelector('.gallery-container')
  const galleryItems = document.querySelectorAll('.gallery-container .gallery-item')
  class Carousell {
    constructor(container, items) {
      this.carouselContainer = container
      this.carouselArray = [...items]
    }
    updateGallery() {
      this.carouselArray.forEach((el) => {
        el.classList.remove('gallery-item-0')
        el.classList.remove('gallery-item-1')
        el.classList.remove('gallery-item-2')
      })
      this.carouselArray.slice(0, 3).forEach((el, i) => {
        el.classList.add(`gallery-item-${i}`)
      })
    }
    setCurrentState(direction) {
      if (direction.className == 'gallery-controls-previous') {
        this.carouselArray.unshift(this.carouselArray.pop())
      } else {
        this.carouselArray.push(this.carouselArray.shift())
      }
      this.updateGallery()
    }

    useControls() {
      setInterval(() => {
        this.setCurrentState('')
      }, 5000)
    }
  }
  const example = new Carousell(galleryContainer, galleryItems)
  example.useControls()
}
onMounted(() => {
  carouselFun()
})
</script>
<style lang="scss" scoped>
.gallery {
  margin: 0 auto;
  // width: 90%;
}
.gallery-container {
  // align-items: center;
  display: flex;
  margin: 0 auto;
  min-width: 80%;
  position: relative;
}
.gallery-item {
  opacity: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 330px;
  z-index: 0;
  // border-radius: 15px;
  background-size: contain;
}
.gallery-item-0,
.gallery-item-2 {
  height: 200px;
  opacity: 0.3;
  width: 50%;
  z-index: 1;
}
.gallery-item-0 {
  left: 20%;
  transform: translateX(-50%);
}
.gallery-item-1 {
  // box-shadow: -2px 5px 33px 6px rgba(0, 0, 0, 0.35);
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;
}
.gallery-item-2 {
  // right: -30%;
  transform: translateX(-50%);
}
</style>