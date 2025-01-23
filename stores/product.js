import { defineStore } from 'pinia'
import VueSelect from '@/components/WebLink.vue'
import $ from 'jquery'






export const productStore = defineStore('product', {
  state: () => ({
    products: localStorage.products != null ? JSON.parse(localStorage.products) : [],
    cart: localStorage.cart != null ? JSON.parse(localStorage.cart) : [],
    category: localStorage.category != null ? JSON.parse(localStorage.category) : [],
    catApp: localStorage.catApp != null ? JSON.parse(localStorage.catApp) : [],
    le: 0
  }),
  actions: {
    async fetchPro() {
      await fetch(VueSelect.data().appLink.product)
        .then((r) => {
          if (r.status === 200) {
            return r.json()
          }
          throw 'error'
        })
        .then((data) => {
          this.products = data.data
          localStorage.setItem('products', JSON.stringify(this.products))
        })
        .catch((err) => console.log(err))
    },
    async fetchCat() {
      await fetch(VueSelect.data().appLink.onborder)
        .then((r) => {
          if (r.status === 200) {
            return r.json()
          }
          throw 'error'
        })
        .then((catt) => {
          this.category = catt.data
          localStorage.setItem('category', JSON.stringify(this.category))

          this.catApp = []
          this.category.forEach((e) => {
            if (!this.catApp.length) {
              this.catApp.push(e)
            } else if (this.catApp.length == 4) {
              return
            } else {
              let q = false
              this.catApp.forEach((o) => {
                o.ho_ca_id !== e.ho_ca_id ? (q = true) : (q = false)
              })
              if (q) {
                this.catApp.push(e)
              }
            }
          })

          // this.catApp.length = 4
        })
        .catch((err) => console.log(err))
    },
    addtocart(product) {
      let o = this.cart.filter((item) => {
        return item.product_id === product.product_id
      })
      if (o.length === 0) {
        this.cart.push(product)
      } else {
        this.cart.filter((item) => {
          item.product_id === product.product_id ? item.product_count++ : console.log('e')
        })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    lessfromcart(product) {
      this.cart.filter((item) => {
        if (item.product_id === product.product_id) {
          if (item.product_count > 1) {
            item.product_count--
          } else {
            this.cart = this.cart.filter((item) => item.product_id !== product.product_id)
          }
        }
      })
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeFromCart(id) {
      this.cart.filter((item) => {
        item.product_id === id.product_id ? (item.product_count = 0) : console.log('e')
      })

      this.cart = this.cart.filter((item) => {
        return item.product_id !== id.product_id
      })
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    showCartLength: showcartNum,
    showalert: showalert2
  }
})
$(window).on('load', function loooad() {
  $(window).scrollTop(0)
  productStore.fetchPro
  $('.loading-page .name').fadeOut(1000, function () {
    $(window).scrollTop(0)

    $(this)
      .parent()
      .fadeOut(1000, () => {
        $(this).remove()
        $('body').css('overflow', 'auto')
        $(window).scrollTop(0)
        $('.base').load('../templates/index.html')
      })
  })
})
function showcartNum() {
  if (this.cart.length > 0) {
    $('.stekker').fadeIn(1000)
    $('.stekker').animate(
      {
        top: '-4px',
        left: '-8px'
      },
      function () {
        $('.stekker').animate(
          {
            left: '-3px',
            top: '-10px'
          },
          100,
          function () {
            $('.stekker').animate(
              {
                top: '-5px',
                left: '-5px'
              },
              300
            )
          }
        )
      }
    )
  } else {
    $('.stekker').animate({
      top: '-35vh',
      left: '25px'
    })
    $('.stekker').fadeOut(1000)
    $('.check-container ').fadeOut(1000)
  }
}
function showalert2(text = 'تم اضافه المنتج الى سلتك', color = 'success') {
  let allert = document.createElement('div')
  allert.className += `allert-${this.le} allert shadow bg-${color}`
  let al_home = document.createElement('div')
  al_home.className += `al-home al-home-${this.le}`
  let span1 = document.createElement('span')
  let span1text = document.createTextNode(`${text}`)
  span1.appendChild(span1text)
  al_home.appendChild(span1)
  let al_border = document.createElement('div')
  al_border.className += ` al-border al-border-${this.le} bg-${color} shadow`
  allert.appendChild(al_home)
  allert.appendChild(al_border)
  document.body.appendChild(allert)
  this.le++
  $(`.allert-${this.le - 1}`).fadeIn(100)

  $(`.allert-${this.le - 1}`).animate(
    {
      right: '20px',
      width: 30
    },
    500,
    () => {
      $(`.al-home-${this.le - 1}`).fadeIn(100)
      $(`.al-border-${this.le - 1}`).animate(
        {
          right: 285,
          width: 10,
          transform: 'translateY(30px)'
        },
        100,
        () => {
          $(`.al-border-${this.le - 1}`).fadeIn(100)
          $(`.al-home-${this.le - 1}`).css({
            display: 'flex',
            'justify-content': 'center'
          })
          $(`.al-home-${this.le - 1}`).animate(
            {
              width: '55vw',
              padding: '0 30'
            },
            400,
            () => {
              $(`.al-home-${this.le - 1} span`).animate(
                {
                  opacity: 1
                },
                300
              )
              $(`.al-home-${this.le - 1} span`).fadeIn()
              setTimeout(() => {
                $(`.allert-${this.le - 1}`).fadeOut(() => {
                  $(`.allert-${this.le - 1}`).remove(() => {
                    $(`.allert`).fadeOut()
                  })
                  $(`.allert`).fadeOut()
                })
              }, 1000)
            }
          )
        }
      )
    }
  )
}
