
import api from '../API/APIClient'

export const ServiceDetailStore = {
  namespaced: true,
  state: {
    content : null

  },
  mutations: {
    LOAD (state, payload) {
      state.content = payload
    }
  },

  actions: { 
    load ({ commit }) {
      var payload = api.loadServiceContent()
      commit('LOAD', payload)
    },
  },

  getters: { 
    content: (state) => {
      return state.content
    },
  }
}
  