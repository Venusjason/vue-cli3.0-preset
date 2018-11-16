import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import config from '@/config'
import { getUserInfo, testApi } from '../service/index'

const debug = process.env.API_ENV !== 'production'

console.log(config)

Vue.use(Vuex)

const state = {
  userInfo: {
    name: '',
    id: '',
  },
}

const getters = {

}

const mutations = {
  updateUserInfo(state, data) {
    Object.assign(state.userInfo, data)
  },
}

const actions = {
  // 接口内联到state
  async getUserInfo({ commit }, userId) {
    const data = await getUserInfo(userId)
    commit('updateUserInfo', data)
  },
  // 接口不内联到state，需要作为返回值
  async testApi() {
    const response = await testApi()
    return response.data.data
  },
}


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export default store
