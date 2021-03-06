import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import vueHeadful from 'vue-headful';
import VeeValidate from 'vee-validate';
import VueProgressBar from 'vue-progressbar'



const options = {
  color: '#138690',
  failedColor: '#874b4b',
  thickness: '5px',
  autoRevert: true,
  location: 'top',
  inverse: false,
  autoFinish : true
}

Vue.config.productionTip = false
Vue.use(VueProgressBar, options)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component('vue-headful', vueHeadful);
Vue.use(VeeValidate);
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
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')



