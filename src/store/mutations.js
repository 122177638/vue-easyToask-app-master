import * as types from './mutation-types.js'
export default {
  // 这里操作要大写
   [types.TABBARSHOW] (state, value) {
     state.tabbarShow = value
   },
   [types.ISPREVIEWER] (state, value) {
     state.isPreviewer = value
   }
}
