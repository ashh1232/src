<template>
  <div class="salon">
    <section>
      <div id="deleteall">
        <div class="bg-info border-0 text-white fs-3 fw-bold shadow rounded-3 aldor">
          <p>الدور</p>
          <div class="fw-bolder fs-1">{{ msg.length }}</div>
        </div>
      </div>
      <table class="table">
        <thead class="theat">
          <tr>
            <th>الرقم</th>
            <th>الاسم</th>
            <th>الحلاق</th>
            <th>التاريخ</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr v-for="(ms, index) in msg" :key="ms.salon_id">
            <th class="text-warning fw-bolder">{{ index === 0 ? 'الدور' : index + ':' }}</th>
            <th class="">
              <h6 class="text-danger fw-bolder">
                {{ ms.salon_username }}
              </h6>
            </th>
            <th>
              {{ ms.barbar_name }}
            </th>
            <th class="fw-normal">{{ ms.order_time }}</th>
            <th class="d-flex">
              <div class="bg-danger rounded m-1 p-2 align-self-center border-0 text-white shadow">
                حذف
              </div>
              <div class="bg-warning rounded m-1 p-2 align-self-center border-0 shadow">تعديل</div>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
// import Salon from ;
export default {
  name: 'About-view',

  mounted() {
    fetch('https://lobulate-rhythm.000webhostapp.com/salon/salon_read.php').then((r) => {
      r.json()
        .then((data) => {
          data['data'].map((m) => {
            for (let o = 0; o < +m.salon_reservation; o++) {
              this.msg.push(m)
            }
          })
        })
        .catch((err) => console.log(err))
    })
  },
  data: function () {
    return {
      msg: []
    }
  }
}
</script>
<style scoped>
.aldor {
  margin: 10px 25vw;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: space-evenly;
}
.theat {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
