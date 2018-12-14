import * as types from './mutation-types.js'
export default {
  tabbarShow ({commit}, value) {
    commit(types.TABBARSHOW, value)
  },
  previewerList ({commit}, value) {
    commit(types.PREVIEWERLIST, value)
  },
  deleteImg ({commit}, value) {
    commit(types.DELETEIMG, value)
  }
}
