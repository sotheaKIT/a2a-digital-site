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
      commit('LOAD')
    },
  },

  getters: { 
    content: (state) => {
      return state.content
    },
  }
}
  