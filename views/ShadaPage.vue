<template>
  <div class="shada-page">
    <div class="btns d-flex p-5 justify-content-around align-items-center">
      <div
        id="new-game"
        class="new-game fw-bold border-0 shadow btn btn-info d-flex justify-content-center align-items-center mx-5 align-self-center center"
        @click="new_game()"
      >
        new game!
      </div>
      <div class="btn-close border-0 btn x-shda-btn rounded-5 shadow" @click="x_shada()"></div>
    </div>
    <!-- <div id="content"></div> -->
    <div class="sizeee" style="min-height: 100vh">
      <div class="old-list"></div>
      <table class="table shda-table" border-0 cellpadding="5" cellspacing="5">
        <thead class="thead table-secondary">
          <tr class="tra">
            <th>الدور</th>
            <th id="name_0"></th>
            <th id="name_1"></th>
            <th id="name_2"></th>
            <th id="name_3"></th>
          </tr>
        </thead>
        <tbody class="tbody tbody_1">
          <thead id="tap" class="tap t-body"></thead>
          <tr class="end-score">
            <td>النتيجه</td>
            <td id="score_0">
              <div class="result text-center" id="mx_0"></div>
            </td>
            <td id="score_1">
              <div class="result text-center" id="mx_1"></div>
            </td>
            <td id="score_2">
              <div class="result text-center" id="mx_2"></div>
            </td>
            <td id="score_3">
              <div class="result text-center" id="mx_3"></div>
            </td>
          </tr>

          <tr class="input-si tr">
            <td>
              <button
                class="btn w-100 border-0 btn-warning shadow"
                type="
                  submit"
                id="addbtn"
              >
                <span @click="newsc()" class="fw-bold">اضف</span>
              </button>
            </td>
            <td>
              <input
                v-on:keyup="tot"
                class="add-new-score form-control dd-none"
                type="number"
                id="input_0"
              />
            </td>
            <td>
              <input
                v-on:keyup="tot"
                class="add-new-score form-control dd-none"
                type="number"
                id="input_1"
              />
            </td>
            <td>
              <input
                v-on:keyup="tot"
                class="add-new-score form-control dd-none"
                type="number"
                id="input_2"
              />
            </td>
            <td>
              <input
                v-on:keyup="tot"
                class="add-new-score form-control dd-none"
                type="number"
                id="input_3"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="enter-name d-flex justify-content-around">
        <button
          id="btnn"
          class="btn border-0 text-white fw-bold fs-3 w-25 rounded-4 btn-success shadow"
          @click="newply()"
        >
          الاسم
        </button>
        <input type="text" class="name form-control w-50" />
      </div>
    </div>
    <div class="d-flex justify-content-around p-5">
      <div class="show-history btn btn-close-white">show history</div>
    </div>
    <div class="table">
      <table class="table table-bordered text-center">
        <thead class="thead table-dark">
          <tr class="tra">
            <th scope="col">#</th>
            <th scope="col">الاسم</th>
            <th scope="col">النتيجه</th>
            <th scope="col">الاسم</th>
            <th scope="col">النتيجه</th>
            <th scope="col">الاسم</th>
            <th scope="col">النتيجه</th>
            <th scope="col">الاسم</th>
            <th scope="col">النتيجه</th>
          </tr>
        </thead>
        <tbody class="tbody tbody-shda-2"></tbody>
      </table>
      <div class="d-flex justify-content-around align-items-lg-end">
        <div class="dl-his btn btn-danger">dekete all history</div>
      </div>
      <!-- {{ mideL }} -->
    </div>
  </div>
</template>
<script>
let mode = 'newgame'
var round = 1
let newGame
let ne = 0
let shdaData
let newplayer
if (localStorage.shdaData != null) {
  shdaData = JSON.parse(localStorage.shdaData)
} else {
  shdaData = [{}]
  localStorage.setItem('shdaData', JSON.stringify(shdaData))
}
if (localStorage.newGame != null) {
  shdaData = JSON.parse(localStorage.newGame)
} else {
  newGame = [
    {
      name: '',
      total: '',
      score: '',
      round: '0',
      date: date
    }
  ]
}
if (localStorage.newplayer != null) {
  shdaData = JSON.parse(localStorage.newplayer)
} else {
  newplayer = {
    name: '',
    total: '',
    score: '',
    round: '0',
    date: date
  }
}

var date = Date().toString()

function newgamebtn() {
  if (mode === 'start') {

    $('#new-game').animate({ width: `85%` }, () => {
      $(`#new-game`).removeClass('rounded-5')
      $(`#new-game`).html('new game')
      $('.x-shda-btn').fadeIn()
      return (mode = 'newgame')
    })
  } else {
    $('.x-shda-btn').fadeOut()
    round = 1
    for (let i = 0; i < 4; i++) {


      $(`#mx_${i}`).html('')
      $(`#name_${i}`).html('')
      $(`#input_${i}`).val('')
      $(`.new-scor`).html(``)
      $(`#input_${i}`).fadeOut()
    }

    $('.sizeee #btnn').fadeIn()
    $('.sizeee .name').fadeIn()
    newGame = [
      {
        name: '',
        total: '',
        score: '',
        round: '0',
        date: date
      }
    ]
    ne = 0
    shdaData.push(newGame)
    localStorage.setItem('shdaData', JSON.stringify(shdaData))
    $(`#new-game`).html('')
    $('#new-game').animate({ width: 40, height: 40 }, () => {
      $(`#new-game`).addClass('rounded-5')
      mode = 'start'
    })
  }
}

function addNewPlayer() {
  let inputname = document.querySelector('.sizeee .name')
  if (inputname.value === '') {
    inputname.placeholder = 'اسم اللاعب'
    inputname.focus()
  } else {
    let newname = document.querySelector('.name')
    let newtdname = document.querySelector(`#name_${ne}`)
    let newtratext = document.createTextNode(`${newname.value}`)
    newplayer = {
      name: '',
      total: '',
      round: '',
      score: '',
      date: date
    }
    newplayer.name = newname.value
    newGame.push(newplayer)
    localStorage.setItem('shdaData', JSON.stringify(shdaData))
    newtdname === null || newtdname === void 0 ? void 0 : newtdname.appendChild(newtratext)
    let divwin = document.createElement('div')
    divwin.className = 'result text-center'
    divwin.id = `mx_${ne}`

    newname.value = ''
    $(`#input_${ne}`).fadeIn()

    ne++
    if (ne == 4) {
      $('#btnn').fadeOut()
      $('.name').fadeOut()
    }
  }
}

function getTotal() {

  let min
  let max
  let g = []
  for (let r = 0; r < newGame.length; r++) {
    var k
    var t
    k = $(`#input_${r - 1}`).val()
    if (k != undefined) {
      k = +k
      t = +newGame[r].total
      g.push(t + k)
      $(`#mx_${r - 1}`).html(`${t + k}`)
    } else k = 0
    min = g.indexOf(Math.min(...g))
    max = g.indexOf(Math.max(...g))
    $(`#mx_${r - 1}`).removeClass('lose')
    $(`#mx_${r - 1}`).removeClass('winner')
  }
  $(`#mx_${max}`).addClass('lose')
  $(`#mx_${min}`).addClass('winner')
}
// let g;
// var tt;
function addScore() {
  let score_input = document.querySelectorAll('.add-new-score')
  let tryw = 0
  for (let i = 0; i < ne; i++) {
    if ($(`#input_${i}`).val() !== '') {
      tryw++
    }
  }

  if (tryw == ne) {
    score_input.forEach((inp) => {
      let k

      if (k === '') {
        inp.placeholder = 'نتيجه '
      } else {


        if (ne > 0) {
          let test = []
          let k = []
          let trround = document.createElement('tr')
          trround.className = 'new-scor'
          for (let u = 0; u < ne; u++) {
            let o = ''
            let inputdata = document.querySelector(`#input_${u}`)
            if (inputdata.value !== '') {
              if (isNaN(parseInt(inputdata.value))) {
                return
              } else {
                o = inputdata.value
                if (u == 0) {
                  let tdround = document.createElement('td')
                  let tdroundtext = document.createTextNode(`${round} :`)
                  tdround.appendChild(tdroundtext)
                  trround.appendChild(tdround)
                }
                let tdround = document.createElement('td')
                tdround.id = `round_${u}`
                tdround.className = 'text-center'
                let tdroundtext = document.createTextNode(`${inputdata.value}`)
                tdround.appendChild(tdroundtext)
                trround.appendChild(tdround)
                inputdata.value = ''
              }
            }
            newGame[u + 1]['total'] = (+newGame[u + 1]['total'] + +o).toString()
            newGame[u + 1]['score'] = o
            newGame[u + 1]['round'] = round.toString()
            // g = o;
            // tt = u + 1;
            k.push(+newGame[u + 1]['total'])
            test.push(+newGame[u + 1]['total'])
          }
          let tbody = document.querySelector(`.tbody`)
          tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(trround)
        }
      }
    })
    localStorage.setItem('shdaData', JSON.stringify(shdaData))
    round++
  }
}
import $ from 'jquery'

export default {
  data: () => {
    return {
      round: round,
      ne: ne,
      newplayer: newplayer
    }
  },

  methods: {
    x_shada() {
      $('.x-shda-btn').fadeOut(100, () => {
        $(`#new-game`).html('')
        $('#new-game').animate({ width: 40, height: 40 }, () => {
          mode = 'start'
          $(`#new-game`).addClass('rounded-5')
        })
      })
    },
    new_game() {
      newgamebtn()
    },
    newply() {
      addNewPlayer()
    },
    tot() {
      getTotal()
    },
    newsc() {
      addScore()
    }
  }
}
</script>
<style>
.sizeee #btnn {
  display: none;
}
.new-game {
  width: 10px;
  width: 80%;
}
.sizeee #btnn {
  display: none;
}
.sizeee .name {
  display: none;
}
.dd-none {
  display: none;
}
.winner {
  background-image: linear-gradient(to top, red, #ffff00);
  color: white;
  font-size: 51px;
  text-align: center;
  padding: 0 0;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 1.07);
}
.lose {
  background-image: linear-gradient(to top, red, #ffff00) !important;
  color: white !important;
  font-size: 37px !important;
  text-align: center !important;
  padding: 0 0 !important;
  border-radius: 10px !important;
  font-weight: 700 !important;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 1.07) !important;
}
</style>
