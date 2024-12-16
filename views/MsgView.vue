<template>
  <div class="msg m-5">
    <div class="crt mx-3" v-for="crt in smList" :key="crt">
      <a :href="crt.link" class="p-2 rounded-2">
        <div class="d-flex justify-content-around align-items-center">
          <div class="shadow">التواصل من خلال {{ crt.name }}</div>
          <img class="shadow rounded-5" :src="crt.logoSrc" alt="" /></div
      ></a>
    </div>
    <!-- <MyComponent /> -->
  </div>
</template>
<script>
export default {
  name: 'MessageView',
  data() {
    return {
      smList: [
        {
          link: 'https://www.facebook.com/profile.php?id=61553765874476',
          name: 'facebook',
          logoSrc:
            'https://res.cloudinary.com/dwsuclcox/image/upload/v1701334037/icon/face_wiq2j2.png'
        },
        {
          link: 'https://www.facebook.com/profile.php?id=61553765874476',
          name: 'instagram ',
          logoSrc:
            'https://res.cloudinary.com/dwsuclcox/image/upload/v1701334049/icon/inst_oaxabv.png'
        },
        {
          link: 'https://www.facebook.com/profile.php?id=61553765874476',
          name: 'whatsapp ',
          logoSrc:
            'https://res.cloudinary.com/dwsuclcox/image/upload/v1701334049/icon/wapp_nu1jjr.png'
        }
      ]
    }
  }
}
</script>

<script setup>
// import MyComponent from "@/components/icons/IconTooling.vue"
</script>

<style scoped>
.msg {
  height: 50vh;
}
a {
  color: rebeccapurple;
  text-decoration: none;
  font-size: 15px;
}
</style>