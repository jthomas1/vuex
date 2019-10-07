import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thanks',
      name: 'thankYou',
      component: () => import('./views/ThankYou')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/Product'),
      props (route) {
        return {
          id: +route.params.id
        }
      }
    }
  ]
})
