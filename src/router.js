import Vue from 'vue'
import VueMeta from 'vue-meta'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import SolutionDetail from './views/SolutionDetail.vue'
import AboutPage from  './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'
import JobsPage  from './views/JobsPage.vue'
import JobsPageDetail from './views/JobsPageDetail.vue'
import JobsSubmitPage from './views/JobsSubmitPage.vue'
import ErrorPage from './views/ErrorPage.vue'
import ServiceDetailPage from './views/ServiceDetailPage.vue'
import ProfilePage from './views/ProfilePage.vue'

Vue.use(Router)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/solutiondetail',
      name: 'solutiondetail',
      component: SolutionDetail
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsPage
    },
    {
      path: '/jobsdetail',
      name: 'jobsdetail',
      component: JobsPageDetail
    },
    {
      path: '/jobform',
      name: 'jobform',
      component: JobsSubmitPage
    },
    {
      path: '*',
      name: '404',
      component: ErrorPage
    },
    {
      path: '/servicedetail/:service',
      name: 'servicedetail',
      component: ServiceDetailPage,
    },

    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },

  ]
})
