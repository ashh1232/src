<template>
  <div class="neon">
    <div class="out-contaner">
      <div class="image">
        <div class="logo">
          <div class="font">
            <h2><span>نيون</span></h2>
            <div class="quiz-area"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="colors">
      <ul>
        <li>
          <div class="color-block">
            <div class="red-box" onclick="getcolor('lightcoral');">
              <a href="#"></a>
            </div>
          </div>
        </li>
        <li>
          <div class="color-block">
            <div class="green-box" onclick="getcolor(' lightgreen')">
              <a href="#"></a>
            </div>
          </div>
        </li>
        <li>
          <div class="color-block" onclick="getcolor('lightblue')">
            <div class="blue-box"><a href="#"></a></div>
          </div>
        </li>
        <li>
          <div class="color-block" onclick="getcolor('lightyellow')">
            <div class="yello-box"><a href="#"></a></div>
          </div>
        </li>
        <li>
          <div class="color-block" @onclick="getcolor('lightsalmon')">
            <div class="orange-box"><a href="#"></a></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="input-text">
      <input @onkeyup="getWord()" maxlength="15" type="text" id="write" />
      <label for="write">اكتب هنا</label>
    </div>
  </div>
</template>
<script>
export default {
  getWord() {
    let inputworld = document.getElementById("write");
    let write = document.querySelector(".font h2 span");

    if (inputworld.value != "") {
      write.innerHTML = inputworld.value;
    } else {
      write.innerHTML = "";
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600&display=swap");

.out-contaner {
  margin: 16px;
  background-color: darkslategray;
  border-radius: 5px;
  padding: 9px;
  width: 90%;
  box-shadow: 0 0 15px rgb(119, 119, 119);
}

.image {
  border-radius: 5px;
  background-image: url(https://res.cloudinary.com/dwsuclcox/image/upload/v1695872691/917SgXTkkxL._AC_SL1500__duixro.jpg);
  background-size: 100% 100%;
  height: 60vw;
  width: 100%;
}

.logo {
  display: block;
  margin: auto;

  align-items: center;
}

.font {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Nastaliq Urdu", serif;
}
.font h2 {
  margin-top: 5vh;
  display: flex;
  color: transparent;
  font-size: 7vw;
  font-weight: 800;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}
.font span {
  color: rgb(255, 255, 255);
  text-shadow: 0 0 20px #fff, 0 0 30px var(--color), 0 0 40px var(--color),
    0 0 50px var(--color), 0 0 60px var(--color), 0 0 70px var(--color),
    0 0 80px var(--color);
}
.colors {
  display: flex;

  justify-content: center;
  width: 80%;
  margin: auto;
  align-items: center;
  padding: 20px 0;
}
ul li {
  display: inline-block;
}
.color-block {
  border-radius: 5px;
  background-color: antiquewhite;
  width: 30px;
  margin: 0 7px;
  height: 30px;
  box-shadow: 0 0 5px wheat;
  padding: 4px;
  cursor: pointer;
}
.red-box {
  background-color: red;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.green-box {
  background-color: green;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.blue-box {
  background-color: blue;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.yello-box {
  background-color: yellow;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.orange-box {
  background-color: orange;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.input-text {
  padding: 0 15px;
  margin: 5px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
}
.input-text input {
  font-family: "Fuggles", cursive;
  border-radius: 7px;
  background-color: gainsboro;
  font-size: 19px;
  padding: 0 12px;
  width: 50%;
  height: 40px;
  padding: 3px 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid #d1d1d1;
  text-transform: capitalize;
  background: #ffffff;
  color: #a9a9a9;
  outline: none;
}
.input-text label {
  font-size: 25px;
  padding: 0 5px;
  color: #3a3a3a;
  text-align: center;
}
</style>
