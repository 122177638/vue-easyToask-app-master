<template>
  <div id="app">
    <main class="content">
      <transition :name="transitionName">
        <keep-alive :max="10" :include="keepAlive">
          <navigation>
            <router-view></router-view>
          </navigation>
        </keep-alive>
      </transition>
    </main>
    <v-tabbar v-if="!$route.meta.tabHiiden"></v-tabbar>
    <v-loading :loadParams="{title:'加载中...', hasBgShow:0, loadShow:0}" :isShow='false' :loadShow="0"></v-loading>
    <previewer :list="prevImgList" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
  </div>
</template>

<script>
import VTabbar from './components/tabbar/tabbar';
import VLoading from './components/loading/loading';
import { Previewer } from 'vux'
import router from './router';

export default {
  name: 'App',
  components: {
    VTabbar,
    VLoading,
    Previewer
  },
  computed: {
    previewerList () {
      return this.$store.getters.getPreviewerList
    }
  },
  data () {
    return {
      transitionName: '',
      keepAlive: [],
      options: {},
      isPreviewer: false,
      prevImgList: []
    }
  },

  created () {
    // 遍历路由设置keepAlive
    router.options.routes.map((item) => { 
      if (item.meta && item.meta.keepAlive) {
        this.keepAlive.push(item.name)
      }
    })
    // 记录路由,动态给定动画
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = to.route.meta.isTransition ? 'slide-left' : '';
    })
    this.$navigation.on('back', (to, from) => {
      if (to.route.meta.isTransition || from.route.meta.isTransition) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = '';
      }
    })
  },
  mounted () {

  },
  watch: {
    isPreviewer (now) {
      if (now) {
        this.prevImgList = [];
        this.previewerInit(); 
      }
    },
    '$route' (to, from) {
      if (to.meta.title)document.title = to.meta.title;
      this.isPreviewer = true;
    }
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    previewerInit () {
      this.$nextTick(() => {
        setTimeout(() => {
          let that = this;
          let imgList = this.$el.querySelectorAll('img[previewerImg]');
          console.log(imgList)
          that.options = {
            getThumbBoundsFn (index) {
              let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
              let rect = imgList[index].getBoundingClientRect()
              return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            }
          }
          that.prevImgList = [...imgList].map((item) => { return {msrc: item.src, src: item.src} })
          // that.$store.commit('PREVIEWERLIST', list)
          // console.log(that.prevImgList)  
          let imgListLen = imgList.length;
          for (let i = 0; i < imgListLen; i++) {
            imgList[i].addEventListener('click', function (e) {
              e.stopPropagation();
              that.$refs.previewer.show(i);
            })
          }
          that.isPreviewer = false;
        }, 500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
    color:#333333;
    font-size:14px;
    display: flex;
    flex-direction: column;
    height:100%;
    background-color:#f5f5f5;
  }
  .content{flex:1;overflow: hidden;}

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 450ms;
    position: fixed;
    top:0;
    left:0;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
<style lang="scss">
  @import url('./assets/css/reset.css');
  // 设置scroll组件滚动条大小
  // .bscroll-vertical-scrollbar{width:4px !important;}
   // 公用标题
  .public-title{
    padding:14px 0 16px;
    text-align:center;
    &::before,&::after{
      content:'';
      width:18%;
      height:1px;
      background-color:#DBDBDB;
      display: inline-block;
      vertical-align:middle;
      margin-right:10px;
    }
    &::before{margin-right:10px;}
    &::after{margin-left:10px;}
    .zrcs-icon{
      width:70px;
      height:20px;
      background:url('./assets/img/zrcs.png') 0% 0% / 100% 100% no-repeat;
      display: inline-block;
      vertical-align: middle;
    }
    .yzmxls-icon{
      width:108px;
      height:20px;
      background:url('./assets/img/yzmxls.png') 0% 0% / 100% 100% no-repeat;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
