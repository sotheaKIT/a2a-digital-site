import Vue from 'vue'
import Meta from 'vue-meta';
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(Meta);
//
// module.exports = {
//   metaInfo: {
//     title: 'Page Title',
//     titleTemplate: '%s | A2A Digital',
//     meta: [
//       {charset: 'utf-8'},
//       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
//       {property: 'og:site_name', content: 'A2A Digital, inc.'},
//       {property: 'og:type', content: 'website'},
//       {property: 'og:url', content: 'https://a2adigital-seo.netlify.com/'},
//       {property: 'og:image', content: 'https://images-cdn.9gag.com/img/9gag-og.png'},
//     ]
//   }
// }

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});


new Vue({
  Meta,
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')



