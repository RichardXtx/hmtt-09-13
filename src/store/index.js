import Vue from 'vue'
import Vuex from 'vuex'

import { fetchLogin } from '@/api'
import { getToken, setToken } from '@/utils/ls'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || ''
  },

  mutations: {
    setToken (state, newToken) {
      state.token = newToken
      setToken(newToken)
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
