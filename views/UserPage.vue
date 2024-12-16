<template>
  <div class="fullscreen bg-blue S q-pa-md flex flex-center">
    <div class="container">
      <h4 class="fw-bolder">تسجيل الدخول/انشاء حساب</h4>
      <div class="container rounded bg-warning-subtle d-flex align-items-baseline">
        <div class="side">
          <h6>DOCANA CLUB</h6>
          <p class="text-muted w-75">مركز علمي في الصناعة و التقنية والأعمال الإبداعية للمجتمع</p>
        </div>
        <div class="other-side">
          <div class="rounded-5 border p-1">join us</div>
        </div>
      </div>
      <div class="container d-flex justify-content-around p-2 align-items-center align-items-baseline">
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> badge </span>
          </div>
          <p>كوبون</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> monetization_on </span>
          </div>
          <p>نقاط</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> account_balance_wallet </span>
          </div>
          <p>محفظه</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> redeem </span>
          </div>
          <p>بطاقه هديه</p>
        </div>
      </div>
      <div class="container bg-warning-subtle d-flex justify-content-between align-items-center py-3">
        <div class="side">
          <span class="text-muted">مركز علمي في الصناعة و التقنية والأعمال </span>
        </div>
        <div class="other-side d-flex align-items-center">
          <div class="bg-black text-white text-center px-2">take it</div>
          <div class="btn-close mx-2"></div>
        </div>
      </div>
      <div class="container p-1"></div>
    </div>
    <div class="container mt-2 p-2">
      <h6>طلبي</h6>
      <div class="container d-flex justify-content-around p-2 align-items-center align-items-baseline">
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> badge </span>
          </div>
          <p>كوبون</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> precision_manufacturing </span>
          </div>
          <p>قيد التجهيز</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> local_shipping </span>
          </div>
          <p>تم الشحن</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> sms </span>
          </div>
          <p>تعليق</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> amend </span>
          </div>
          <span class="fw-lighter">النتجات</span>
          <p>المسترجعه</p>
        </div>
      </div>
    </div>
    <div class="container mt-2 p-2">
      <h6>المزيد من الخدمات</h6>
      <div class="container d-flex justify-content-around p-2 align-items-center align-items-baseline">
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> support_agent </span>
          </div>
          <p>دعم</p>
        </div>
        <div class="iؤ text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> receipt_long </span>
          </div>
          <p>استطلاع</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> account_balance_wallet </span>
          </div>
          <p>محفظه</p>
        </div>
        <div class="ic text-center">
          <div class="icon">
            <span class="material-symbols-outlined"> check_box </span>
          </div>
          <p>متابع</p>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <div class="container p-2">
        <div class="d-flex justify-content-around">
          <div class="wish-list active">
            <h6>قائمه الاماني</h6>
          </div>
          <div class="last-seen text-secondary">
            <h6>شوهد مؤخرا</h6>
          </div>
        </div>
        <div class="bodwy">
          <p class="text-secondary">لم تقم بحفظ اي شيء مؤخرا</p>
          <div class="shoppingBtn border p-2 px-4">
            <h6>للتسوق</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorNotFound'
}
</script>
<style scoped>
p {
  font-size: 12px;
  font-weight: bolder;
}

.active {
  border-bottom: 3px solid;
}

.bodwy {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.side {
  font-size: 13px;
  font-weight: 500;
}</style>