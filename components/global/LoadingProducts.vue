<template>
  <div class="user">
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
    <div class="cardd">
      <div class="cardd__image"></div>
      <div class="cardd__content">
        <h2></h2>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadingProducts'
}
</script>
<style>
.user {
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.cardd {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.cardd__content {
  padding: 20px;
}
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
.cardd__image,
h2,
p {
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1s shine linear infinite;
}
.cardd__image {
  height: 200px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.cardd__content {
  padding: 20px;
}
h2 {
  height: 30px;
}
p {
  height: 70px;
  width: 80%;
}
</style>
