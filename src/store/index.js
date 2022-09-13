import Vue from 'vue'
import Vuex from 'vuex'

import { fetchLogin } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },

  mutations: {
    setToken (state, newToken) {
      state.token = newToken
    }
  },
  actions: {
    async asyncToken ({ commit }, form) {
      const res = await fetchLogin(form)

      // console.log(res)
      commit('setToken', res.data.token)
    }
  }

})
