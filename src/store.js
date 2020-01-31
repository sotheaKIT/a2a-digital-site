import Vue from 'vue'
import Vuex from 'vuex'

// store
import { ServiceStore } from './stores/service-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
   serviceContent : ServiceStore
  },
  state: {},
  mutations: {},
  actions: {}
})