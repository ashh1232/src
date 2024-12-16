import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/detail/:id', name: 'DetailPage', component: ()=>import("../views/DetailPage.vue")  },
    { path: '/cart', name: 'cart', component: ()=>import("../views/CartView.vue")  },
    { path: '/neon', name: 'neon', component: ()=>import("../views/NeonView.vue")  },
    { path: '/manage', name: 'manage', component: ()=>import("../views/ManageSearch.vue") },
    { path: '/shada', name: 'shada', component: ()=>import("../views/ShadaPage.vue") },
    { path: '/new', name: 'new', component:()=>import("../views/NewView.vue")  },
    { path: '/user', name: 'user', component:()=>import("../views/UserPage.vue")  },
    { path: '/mail', name: 'mail', component:  ()=>import("../views/MsgView.vue") },
    { path: '/cat/:id', name: 'CategoryPage', component:  ()=>import("../views/CategoryView.vue") },
    {
      path: '/salon',
      name: 'salon',
      component: ()=>import("../views/SalonView.vue")
    }
  ]
})

export default router
