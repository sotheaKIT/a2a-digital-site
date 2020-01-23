import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import About from './views/AboutPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})
