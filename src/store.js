import Vue from 'vue'
import Vuex from 'vuex'

// store
import { ServiceStore } from './stores/service-store'
import {ServiceDetailStore} from './stores/service-detail-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
   serviceContent : ServiceStore,
   serviceDetailContent : ServiceDetailStore

  },
  state: {},
  mutations: {},
  actions: {}
})