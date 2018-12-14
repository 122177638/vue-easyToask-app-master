// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store' 
import router from './router'
import axios from './config/axios'
// import VueLazyload from 'Vue-lazyload'
import './config/rem'
import * as api from './api'
// 全局注入scroll组件
import scroll from './components/scroll/scroll';
// 引入路由记录插件
import Navigation from 'vue-navigation'
// 引入mockjs
import './mock'
Vue.use(Navigation, {router, moduleName: 'navigation', keyName: 'AK47'})
Vue.component('scroll', scroll)
// 引入微信SDK 可通过vue.$wechat全局访问
// import './config/lib'
// 解决移动端300ms事件延迟
// import FastClick from 'fastclick'
// FastClick.attach(document.body)
// vue配置
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$http = axios;
// 动态开启原生滚动
Vue.prototype.$overscroll = function (el) {
  el.addEventListener('touchstart', function () {
      var top = el.scrollTop;
      var totalScroll = el.scrollHeight;
      var currentScroll = top + el.offsetHeight
      if (top === 0) {
          el.scrollTop = 1
      } else if (currentScroll === totalScroll) {
          el.scrollTop = top - 1
      }
  }, {passive: true})
  el.addEventListener('touchmove', function (evt) {
    if (el.offsetHeight < el.scrollHeight) { evt._isScroller = true }
  }, {passive: true})
};
// VueLazyload
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '',
//   loading: '',
//   attempt: 1
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
