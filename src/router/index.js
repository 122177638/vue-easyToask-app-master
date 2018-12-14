import Vue from 'vue'
import Router from 'vue-router'

const Hotlist = () => import(/* webpackChunkName: "Hotlist" */ './../view/hotlist')
const Mycore = () => import(/* webpackChunkName: "Mycore" */ './../view/mycore')
const KingList = () => import(/* webpackChunkName: "KingList" */ './../view/mycore/kingList')
const MyQuest = () => import(/* webpackChunkName: "MyQuest" */ './../view/mycore/myQuest')
const MyCoupon = () => import(/* webpackChunkName: "MyCoupon" */ './../view/mycore/myCoupon')
const CapitalFlow = () => import(/* webpackChunkName: "CapitalFlow" */ './../view/mycore/capitalFlow')
const Feedback = () => import(/* webpackChunkName: "Feedback" */ './../view/mycore/feedback')
const Agreement = () => import(/* webpackChunkName: "Agreement" */ './../view/mycore/agreement')
const Consultation = () => import(/* webpackChunkName: "Consultation" */ './../view/mycore/consultation')
const MasterDetails = () => import(/* webpackChunkName: "MasterDetails" */ './../view/masterDetails')
const AnswerList = () => import(/* webpackChunkName: "AnswerList" */ './../view/masterDetails/answerList')
const EvaluateList = () => import(/* webpackChunkName: "EvaluateList" */ './../view/masterDetails/evaluateList')
const Order = () => import(/* webpackChunkName: "Order" */ './../view/masterDetails/Order')
const Secret = () => import(/* webpackChunkName: "Secret" */ './../view/secret')
const Putquest = () => import(/* webpackChunkName: "Putquest" */ './../view/putquest')
const Chat = () => import(/* webpackChunkName: "Chat" */ './../view/chat')
const NotFoundComponent = () => import(/* webpackChunkName: "NotFoundComponent" */ './../view/NotFound')

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  /**
   * meta：{
   *  title: 页面标题，
   *  keepAlive：是否开启缓存
   *  tabHiiden： 是否隐藏tabbar
   *  isTransition: 是否开启过渡动画
   * } 
   */
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/Hotlist'
    },
    {
      path: '/Hotlist',
      name: 'Hotlist',
      component: Hotlist,
      meta: { title: '热门榜', keepAlive: true }
    },
    {
      path: '/Putquest',
      name: 'Putquest',
      component: Putquest,
      meta: { title: '提问', keepAlive: true }
    },  
    {
      path: '/MasterDetails',
      name: 'MasterDetails',
      component: MasterDetails,
      meta: { title: '大师详情', tabHiiden: true, isTransition: true, keepAlive: false }
    },
    {
      path: '/AnswerList',
      name: 'AnswerList',
      component: AnswerList,
      meta: { title: '全部回答', tabHiiden: true, isTransition: true }
    },
    {
      path: '/EvaluateList',
      name: 'EvaluateList',
      component: EvaluateList,
      meta: { title: '全部评价', tabHiiden: true, isTransition: true }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: { title: '收银台', tabHiiden: true, isTransition: true }
    },
    {
      path: '/Secret',
      name: 'Secret',
      component: Secret,
      meta: { title: '开运秘籍', keepAlive: true }
    },
    {
      path: '/Mycore',
      name: 'Mycore',
      component: Mycore,
      meta: { title: '个人中心' }
    },
    {
      path: '/Mycore/Consultation',
      name: 'Consultation',
      component: Consultation,
      meta: { title: '咨询', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Mycore/KingList',
      name: 'KingList',
      component: KingList, 
      meta: { title: '打赏榜单', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Mycore/MyQuest',
      name: 'MyQuest',
      component: MyQuest, 
      meta: { title: '我的问题', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Mycore/MyCoupon',
      name: 'MyCoupon',
      component: MyCoupon, 
      meta: { title: '我的优惠券', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Mycore/CapitalFlow',
      name: 'CapitalFlow',
      component: CapitalFlow, 
      meta: { title: '收入支出', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Mycore/Feedback',
      name: 'Feedback',
      component: Feedback, 
      meta: { title: '用户反馈', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Mycore/Agreement',
      name: 'Agreement',
      component: Agreement, 
      meta: { title: '用户协议', isTransition: true, tabHiiden: true }
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat, 
      meta: { title: '聊天详情', isTransition: true, tabHiiden: true }
    },

    {
      path: '*',
      name: '404',
      meta: { title: '请求路径不存在', tabHiiden: true },
      component: NotFoundComponent
    }
  ]
})

export default router
