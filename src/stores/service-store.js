
import api from '../API/APIClient'

export const ServiceStore = {
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
      for ( var i in payload) {
        alert(i.title)
      }
      commit('LOAD', payload)
    },
  },

  getters: { 
    content: (state) => {
      return state.content
    },
  }
}
  