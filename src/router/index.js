import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
      {
        path:'/index',
        name:'Index',
        component:Index
      },
      {
        path:'/category',
        name:'Category',
        component:()=> import('../views/Category.vue')
      },
      {
        path:'/shopcart',
        name:'Shopcart',
        component:()=> import('../views/Shopcart.vue')
      },
      {
        path:'/my',
        name:'My',
        component:()=> import('../views/My.vue')
      },
]

const router = new VueRouter({
  routes
})

export default router
