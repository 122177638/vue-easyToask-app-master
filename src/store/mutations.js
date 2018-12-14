import * as types from './mutation-types.js'
export default {
  // 这里操作要大写
   [types.TABBARSHOW] (state, value) {
     state.tabbarShow = value
   },
   [types.PREVIEWERLIST] (state, value) {
     state.previewerList = value
   },
  [types.DELETEIMG] (state, value) {
    state.previewerList.splice(value, 1)
    console.log(state.previewerList)
  }
}
