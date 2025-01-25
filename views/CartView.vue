<template>
  <div class="m-2">
    <div
      class="empty-cart d-flex justify-content-center align-items-center"
      v-if="!store.cart.length"
    >
      <div class="text-center d-flex">
        <h1 class="empty-cart d-flex justify-content-center align-items-center">سلتك فارغه</h1>
      </div>
    </div>

    <div class="cart-home" v-else>
      <div class="cart-body fw-bold">
        <div class="flex-wrap row new-item p-3 justify-content-around">
          <div class="text-center card shadow w-50 p-2">اشتري ب 100 للتوصيل المجاني</div>
        </div>
        <div v class="cart-container" v-for="item in store.cart" :key="item.product_id">
          <div class="card shadow">
            <div class="d-flex justify-align-content-between- carItemdiv">
              <div class="halgh d-flex">
                <div
                  class="del m-1 d-flex flex-column justify-content-center align-content-center"
                  @click="xTocard(item)"
                >
                  <div class="btn btn-close p-2 rounded-5 border-0 shadow"></div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="divcartImg mx-3" @click="goToproductDetail(item.product_id)">
                    <a><img class="shadow immmmg" :src="item.product_image" /></a>
                  </div>
                  <div class="d-flex flex-column justify-content-between">
                    {{ item.product_name }}
                    <p id="test">{{ item.product_price * item.product_count }} ₪</p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="row-price d-flex">
                  <div class="add-rem d-flex align-items-center">
                    <div
                      @click="lessFromcart(item)"
                      class="fw-bolder shadow btn rounded-end-pill border"
                    >
                      -
                    </div>
                    <span class="rounded border p-2">{{ item.product_count }}</span>
                    <div
                      @click="addTocard(item)"
                      class="fw-bolder shadow btn rounded-start-pill border"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="order-box d-flex flex-column justify-content-evenly align-items-center shadow">
        <div id="title" class="">
          <div
            id="x-btn"
            @click="x"
            class="dd-none btn btn-close p-2 rounded-5 border-0 shadow w-25"
          ></div>

          <p id="" class="dd-none">تأكيد الطلب</p>
          <i class="fa-sharp fa-solid fa-x"></i>
          <form action="" method="post" @submit.prevent="validateForm">
            <div class="error m-2 bg-danger-subtle fw-bolder" v-for="er in formError" :key="er">
              {{ er }}
            </div>
            <div id="container" class="container d-flex justify-content-around flex-row mt-3">
              <label id="" for="name_or" class="dd-none">ادخل الاسم</label>
              <input
                id="name_or"
                type="text"
                v-model="username"
                name="name"
                class="textBox dd-none input-group-text w-50 shadow-sm"
                maxlength="20"
                minlength="3"
              />
            </div>
            <div id="container" class="container d-flex justify-content-around flex-row mt-3">
              <label id="" for="phone_or" class="dd-none">رقم الهاتف</label>
              <input
                id="phone_or"
                type="text"
                v-model="phone"
                name="phone"
                class="dd-none input-group-text w-50 shadow-sm"
                maxlength="10"
                minlength="3"
              />
            </div>
            <div id="container" class="container d-flex justify-content-around flex-row mt-3">
              <label id="" for="address_or" class="dd-none">العنوان</label>
              <input
                id="address_or"
                v-model="address"
                name="address"
                type="text"
                class="dd-none input-group-text w-50 shadow-sm"
                maxlength="10"
                minlength="3"
              />
            </div>

            <div class="btndiv btndiv-2 shadow">
              <input
                type="submit"
                class="text-white dd-none btn btn-dark shadow"
                value="تأكيد الطلب"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- check-container -->
    <div class="check-container shadow" style="display: block">
      <div
        class="total-contaner d-flex row shadow"
        style="border-top-left-radius: 15px; border-top-right-radius: 15px"
      >
        <div class="table-group-divider" style="height: 3vh; border-top: 1px solid #bbb"></div>
        <div class="d-flex justify-content-between">
          <h2>المجموع الفرعي</h2>
          <h2 class="sub-total">{{ sum }} ₪</h2>
        </div>
        <div class="d-flex justify-content-between">
          <h2>رسوم التوصيل</h2>
          <h2 class="delevery">{{ del }} ₪</h2>
        </div>
        <div class="total d-flex justify-content-between shadow">
          <h2>المجموع</h2>
          <h2 id="kok" class="total-h text-white-50">{{ tot }} ₪</h2>
        </div>
      </div>
      <div class="w-50 m-auto">
        <div class="btndiv shadow d-flex justify-content-center">
          <button
            id="order"
            class="fw-bold order-btn bg-black p-3 rounded-3 shadow"
            @click="orderBtn"
          >
            تأكيد الطلب
          </button>
        </div>
      </div>
    </div>
    <!-- end-check-container -->
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import VueSelect from '@/components/WebLink.vue'
import $ from 'jquery'
const router = useRouter()
const goToproductDetail = (id) => {
  scroll(0, 0)

  router.push({ name: 'DetailPage', params: { id } })
}
import { productStore } from '@/stores/product.js'
const store = productStore()
const xTocard = (id) => {
  store.removeFromCart(id)
  store.showCartLength()
}
var formError = ref([])
const username = ref('')
const phone = ref('')
const address = ref('')
const validateForm = function (e) {
  formError.value = []

  if (!username.value) {
    formError.value.push('اكتب اسمك')
  }
  if (!phone.value) {
    formError.value.push('اكتب رقم هاتف')
  }
  if (!address.value) {
    formError.value.push('اكتب عنوانك')
  }
  if (username.value && username.value.length < 3) {
    formError.value.push('اكتب اسمك بشكل صحيح')
  }
  if (phone.value && phone.value.length !== 10) {
    formError.value.push('اكتب رقمك بشكل صحيح')
  }
  if (!formError.value.length) {
    makeOrder()
    e.preventDefault()
  }
  e.preventDefault()
}
const makeOrder = function () {
  let orderlist = []
  orderlist['total_price'] = 0
  for (let e = 0; e < store.cart.length; e++) {
    const obj = {}
    obj['id'] = store.cart[e]['product_id']
    obj['q'] = store.cart[e]['product_count']
    orderlist['total_price'] += store.cart[e]['product_count'] * store.cart[e]['product_price']
    orderlist.push(obj)
  }
  var formatted = `${orderlist.map((v) => JSON.stringify(v)).join(', ')}`
  let ordersend = ''
  for (var i = 0; i < formatted.length; i++) {
    ordersend += formatted[i].replace('"', 'w')
  }
  $.ajax({
    method: 'POST',
    url: VueSelect.data().appLink.order,
    data: {
      username: `${$('#name_or').val()}`,
      addressid: `${$('#address_or').val()}`,
      ordersprice: `${orderlist['total_price']}`,
      phone: `${$('#phone_or').val()}`,
      cart: ordersend
    }
  }).done((q, w) => {
    if (w !== 'success') {
      store.showalert('مشكله في الشبكه', 'danger')
    } else {
      store.cart = []
      localStorage.removeItem('cart')
      sessionStorage.setItem('username', `${$('#name_or').val()}`)
      sessionStorage.setItem('address', `${$('#address_or').val()}`)
      sessionStorage.setItem('phone', `${$('#phone_or').val()}`)
      setTimeout(() => {
        store.showCartLength()
        store.showalert('تم ارسال   طلبك بنجاح', 'success')
      }, 1000)
    }
  })
}
var del = 0
var sum = 0
var tot = 0
total()
function total() {
  sum = 0

  store.cart.map((i) => (sum += +(i.product_price * i.product_count)))
  sum === 0 ? (del = 0) : sum >= 100 ? (del = 0) : (del = 10)
  tot = sum + del
}
const addTocard = (product) => {
  store.addtocart(product)
  store.showalert('تم اضافه المنتج الى سلتك', 'dark')
  store.showCartLength()
  total()
}

const lessFromcart = (product) => {
  store.lessfromcart(product)
  store.showalert('تم ازاله المنتج الى سلتك', 'dark')
  store.showCartLength()
  total()
}
const orderBtn = function () {
  var usernameSes = sessionStorage.getItem('username')
  var addressSes = sessionStorage.getItem('address')
  var phoneSes = sessionStorage.getItem('phone')

  $('.check-container').fadeOut(500)

  $('.order-box').animate(
    {
      margin: 'auto',
      top: '14vh',
      left: '5%'
    },
    500,
    function () {
      $('.order-box').animate(
        {
          width: '90%',
          // width: '44vh'
          opacity: 1
        },
        500
      )
      $('.order-box').animate(
        {
          height: '70%',
          borderRadius: '9px'
        },
        700,
        () => {
          $('.order-box .dd-none').toggle()
          $('.btndiv-2').fadeIn()

          if (usernameSes != null) {
            $('#name_or').val(usernameSes)
          }
          if (addressSes != null) {
            $('#address_or').val(addressSes)
          }
          if (phoneSes != null) {
            $('#phone_or').val(phoneSes)
          }
        }
      )
    }
  )
}

const x = function () {
  $('.order-box .dd-none').toggle()
  $('.btndiv-2').fadeOut()

  $('.order-box').animate(
    {
      margin: 'auto',
      height: '3vh',
      opacity: 0.5
    },
    500,
    function () {
      $(this).animate({ width: '50px' }, () => {
        $('.order-box').animate({ width: '15px' }, () => {
          $(this).animate({ top: -50 }, 500, () => {
            $('.order-box').fadeOut()
            $('.check-container').fadeIn(1000)
          })
        })
      })
    }
  )
}
</script>

<style>
.cart-body {
  width: 100%;
  padding: 0px 7px;
  padding-bottom: 33vh;
}
.order-box {
  position: fixed;
  top: -9vh;
  left: 1vh;
  background: white;
  width: 5vh;
  height: 3vh;
  opacity: 0.5;
  z-index: 9;
  text-align: center;
}
.order-box #title {
  margin: 15px 5px;
}
.dd-none {
  display: none;
}
.check-container {
  padding: 0 12px;
  padding-top: 15px;
  padding-bottom: 15px;

  display: none;
  flex-direction: column;
  position: sticky;
  bottom: 35px;
  border-radius: 15px;
  z-index: 9;
}
.carItemdiv {
  padding: 7px;

  justify-content: space-between;
}
.divcartImg {
  width: 70px !important;
  height: 70px !important;
}
.immmmg {
  height: 100%;
  width: 70px;

  border-radius: 10%;
  box-shadow: 7px 8px 15px 1px #6d6a6a66 !important;

  border-radius: 30%;
  box-shadow: 4px 5px 20px 0px rgb(0 0 255 / 21%) !important
  ;

}

.order-box #title {
  margin: 15px 5px;
}
.dd-none {
  display: none;
}

.total-contaner {
  background: #fff;
  width: 90%;
  margin: auto;
  padding: 10px 2vh;
  padding-top: 15px;
  border-radius: 15px;
}

.total-contaner .total {
  background: #333;
  color: #c3c2c2;
  padding: 4px 15px;
  border-radius: 5px;
}
.btndiv {
  padding: 7px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #fff;
}
#order {
  background-color: #333;
  color: #fff;
}
.empty-cart {
  height: 70vh;
  font-family: 'Noto Nastaliq Urdu', serif;
  font-size: 60px;
}
</style>

