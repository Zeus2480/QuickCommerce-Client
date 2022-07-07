import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import StoreHome from '../views/store-home.vue'
import StorePrdouct from '../views/store-product.vue'
import StoreShoppingCart from "../views/store-shopping-cart.vue"
import StoreMyOrders from "../views/store-my-orders.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: StoreHome
  },
  {
    path: '/product/:id',
    name: 'product',
    component: StorePrdouct,
    props:true
  },
  {
    path: '/shopping-cart/:userId',
    name: 'shopping-cart',
    component:StoreShoppingCart ,
    props:true
  },
  {
    path: '/my-orders/:userId',
    name: 'my-orders',
    component:StoreMyOrders ,
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
