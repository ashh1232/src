<template>
  <div class="nav-bar">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <div class="count" v-for="item in navItems" :key="item.link">
      <router-link :to="item.link"
        ><div class="text-black fw-lighter mt-2 mx-2">
          <span class="material-symbols-outlined" @click="asdf()">
            {{ item.icon }}
          </span>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      navItems: [
        { link: '/', icon: 'home' },
        { link: '/manage', icon: 'manage_search' },
        { link: '/new', icon: 'apparel' },
        { link: '/cart', icon: 'shopping_Bag' },
        { link: '/user', icon: 'person' }
      ]
    }
  },
  methods: {
    asdf() {
      return scroll(0, 0)
    }
  }
}
</script>
<style >
.nav-bar {
  width: 100%;
  height: 45px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  z-index: 10;
}

.router-link-active div span {
  font-variation-settings: 'FILL' 1;
}
</style>
