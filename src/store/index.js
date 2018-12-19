import Vue from 'vue'
import Vuex from 'Vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'

const state = {
  tabbarShow: true,
  isPreviewer: false
}
const store = new Vuex.Store({
  strict: isDev, // 只能在开发环境使用，限制state在mutation之外的修改
  state,
  actions,
  mutations,
  getters
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      state,
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
