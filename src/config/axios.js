import axios from 'axios'
import qs from 'qs'
// 亦可使用vux携带的AjaxPlugin
import { LoadingPlugin } from 'vux'
import Vue from 'vue'
Vue.use(LoadingPlugin)
// axios配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true 跨域发送cookie
// 发起请求前
axios.interceptors.request.use((config, qq) => {
  // 是否拦截显示load
  if (!config.NOINTERCEPT) {
    Vue.$vux.loading.show({
      text: '加载中...'
    })
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  Vue.$vux.toast.show({
    text: '加载超时',
    type: 'warn'
  })
  return Promise.reject(error)
})
// 发起请求后
axios.interceptors.response.use((res) => {
  Vue.$vux.loading.hide()
  return res
}, (error) => {
  console.log('好多人在访问呀，请重新试试[timeout]')
  Vue.$vux.loading.hide()
  if (error) {
    let errortime = null
    clearTimeout(errortime)
    errortime = setTimeout(() => {
      Vue.$vux.toast.show({
        text: '加载失败',
        type: 'cancel'
      })
      clearTimeout(errortime)
    }, 0)
  }
  return Promise.reject(error)
})

export default axios
