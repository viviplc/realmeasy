import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ItemsList',
    component: () => import(/* webpackChunkName: "itemsList" */ '../views/ItemsListView.vue')
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import(/* webpackChunkName: "reviews" */ '../views/ReviewsView.vue')
  },
  { path: '/item/:id', component: () => import(/* webpackChunkName: "itemsList" */ '../views/ItemsDetailView.vue') },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "shoppingCart" */ '../views/ShoppingCartView.vue')
  },
  {
    path: '/loginToAccount',
    name: 'LoginToAccount',
    
  }
]

const router = new VueRouter({
  routes
})

export default router
