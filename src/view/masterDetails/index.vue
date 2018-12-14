<template>
  <section class="masterDetails-container">
    <scroll class="masterDetails-wrapper">
      <section class="masterDetails-top" style="background:url(http://img.ggwan.com/yd/userPic/201804/54ac18aa1773476e.jpg) 0% 0% / 100% 100% no-repeat">
        <div class="master-top-msg">
          <div class="master-top-name">
            <h2 class="name">同乐</h2>
            <div class="score">5.0</div>
          </div>
          <p class="master-top-post">资深命理风水师</p>
          <div class="master-top-tabs">
            <span>风水</span>
            <span>风水</span>
            <span>风水</span>
          </div>
          <div class="master-top-follow on" @click="switchFollow()">已关注</div>
          <div class="master-top-statis">
            <div class="followNum"><span>206</span>个关注</div>
            <div class="answerNum"><span>1985</span>个回答</div>
          </div>
        </div>
        <div class="master-top-description">
          <p>任何人都会有高低潮的时候，但是知命而不是认命。马来西亚玄学风水命理师，师承八宅派阳宅风水。有多年解决住宅企业风水的经验，擅长现代派解答感情与事业问题。能让您更浅白的认清问题，并给于您适当的解决方案。</p>
        </div>
      </section>
      <section class="master-nav-box">
        <ul class="master-nav-list" ref="tabbarNode">
          <li :class="['consult',{'on':serverType == 0}]" @click="switchServer(0)"></li>
          <li :class="['selfTest',{'on':serverType == 1}]" @click="switchServer(1)"></li>
        </ul>
        <div class="master-nav-active" :style="'transform:translate('+tabActiveLeft+'px)'"></div>
      </section>
      <section class="master-type-content">
        <serverList v-show="serverType==0" :questPromtShow="questPromtShow" @questShow="childQuestShow"></serverList>
        <div class="answer-container" v-show="serverType==0">
          <tabTG :tabList="['回答问题', '匿名评价']" :tabActive="tabActive" @switchTab="switchTab"></tabTG>
          <div class="answer-wrapper">
            <answer v-show="tabActive == 0"></answer>
            <evaluate v-show="tabActive == 1"></evaluate>
          </div>
        </div>
        <curriculum v-show="serverType==1"></curriculum>
      </section>
    </scroll>
    <!-- 高级服务解释 -->
    <transition name="fade">
      <div class="quest-promt-container" v-show="questPromtShow">
        <div class="quest-promt-bg"></div>
          <div class="quest-promt-content">
            <scroll class="quest-promt-wrap" 
              :readyScrollX="true" 
              :scrollbar="false" 
              :isScrollInit="isScrollInit" 
              :scrollX="true">
              <ul class="quest-promt-ul">
                <li class="quest-promt-li" v-for="item in questPromt" :key="item.title">
                  <p class="quest-promt-title">{{item.title}}</p>
                  <img :src="item.img" alt="">
                </li>
              </ul>
            </scroll>
            <div class="quest-promt-footer">
              <div class="quest-promt-close" @click="questPromtShow = !questPromtShow">返回</div>
              <div class="quest-promt-pay" @click="orderEvent()">马上下单</div>
            </div>
          </div>
      </div>
    </transition>
    <!-- footer-wrapper -->
    <aside class="footer-container">
      <div class="footer-wrap">
        <div class="consult">免费咨询</div>
        <div class="placeOrder" @click="orderEvent()">马上下单</div>
      </div>
    </aside>
  </section>
</template>
<script>
import serverList from './serverList';
import curriculum from './curriculum';
import Bscroll from '../../components/Bscroll/Bscroll';
import answer from '../../components/answer/answer';
import evaluate from '../../components/evaluate/evaluate';
import tabTG from '../../components/tabTG/tabTG';
export default {
  data () {
    return {
      serverType: 0, // 0 咨询 1 课程
      tabActiveLeft: 0, // 选中的left值
      questPromtShow: false, // 是否显示高级服务解释
      scrollUlWidth: 0, // 动态获取高级服务宽度
      isScrollInit: false, // 是否页面渲染就实例化Scroll组件
      questPromt: [
        {title: '与老师一对一实时沟通', img: 'https://img.ggwan.com/yd/h5.yiqiwen.cn/dist/static/img/whatHigh1.3f7c2ff.png'},
        {title: '根据个人实际情况专属分析解答', img: 'https://img.ggwan.com/yd/h5.yiqiwen.cn/dist/static/img/whatHigh2.71f48d9.png'},
        {title: '简易流畅的交流体验,支持语音及图片', img: 'https://img.ggwan.com/yd/h5.yiqiwen.cn/dist/static/img/whatHigh3.9bdaff1.png'},
        {title: '48小时个人专属咨询,专注为你解答疑难', img: 'https://img.ggwan.com/yd/h5.yiqiwen.cn/dist/static/img/whatHigh4.82bc88a.png'}
      ],
      tabActive: 0
    }
  },
  components: {
    serverList,
    curriculum,
    Bscroll,
    tabTG,
    answer,
    evaluate
  },
  watch: {
    // 监听type切换
    serverType () {
      this.comtabActive()
    }
  },
  mounted () {
    this.comtabActive()
  },
  methods: {
    initPromtWidth () {
      let ul = this.$refs.questList.children;
      let liWidth = ul[0].offsetWidth;
      if (liWidth) this.scrollUlWidth = ul.length * liWidth;
    },
    switchServer (idx) {
      this.serverType = idx;
    },
    switchTab (idx) {
      if (this.tabActive !== idx) {
        this.tabActive = idx;
      }
    },
    orderEvent () {
      this.$router.push('/Order')
    },
    childQuestShow (boolean) {
      this.questPromtShow = boolean;
      this.isScrollInit = true; // 通知scroll组件实例化
    },
    // 计算三角位置
    comtabActive () {
      let event = this.$refs.tabbarNode.children[this.serverType];
      let activeNode = event.parentNode.nextElementSibling.offsetWidth / 2; // 获取选中三角宽度取半
      this.tabActiveLeft = event.offsetLeft + event.clientWidth / 2 - activeNode; // 计算三角位置
    }
  }
}
</script>

<style lang="scss" scoped>
  .masterDetails-container{
    width:100%;
    height:100%;
    padding-bottom:50px;
    box-sizing:border-box;
  }
  .masterDetails-top{
    height:218px;
    overflow: hidden;
    position: relative;
    .master-top-msg{
      float: right;
      width:200px;
      height:100%;
      padding-bottom:80px;
      box-sizing:border-box;
      color:#ffffff;
      .master-top-name{
        display: flex;
        padding:5px 0 2px;
        align-items:center;
        .name{font-size:19px;}
        .score{
          width:32px;
          height:18px;
          background-color:#f85943;
          border-radius:35px;
          text-align:center;
          line-height: 18px;
          margin-left:5px;
        }
      }
      .master-top-post{
        font-size:12px;
        color:rgba(255, 255, 255, 0.6);
      }
      .master-top-tabs{
        padding:5px 0;
        font-size:0;
        span{
          font-size:12px;
          display:inline-block;
          padding:0 5px;
          line-height: 18px;
          border:0.5px solid #ffffff;
          border-radius: 2px;
          margin-right:5px;
          &:nth-last-child(1){margin-right:0;}
        }
      }
      .master-top-follow{
        width:55px;
        height:22px;
        text-align: center;
        line-height: 22px;
        background-color:#f85943;
        box-sizing:border-box;
        border-radius: 4px;
        margin:4px 0;
        font-size:13px;
        &.on{
          background:none;
          border: 1px solid #ffffff;
        }
      }
      .master-top-statis{
        display: flex;
        justify-content:space-between;
        margin-top:8px;
        padding:2px 15px 0 0;
        border-top:1px solid rgba(255, 255, 255, 0.3);
        font-size:12px;
        span{color:#f85943;}
        .followNum{
          padding-left:16px;
          background:url('../../assets/img/person.png') 0% center / 14px 14px no-repeat;
        }
        .answerNum{
          padding-left:16px;
          background:url('../../assets/img/answer.png') 0% center / 14px 14px no-repeat;
        }
      }
    }
    .master-top-description{
      position: absolute;
      color:#ffffff;
      font-size:12px;
      width:100%;
      box-sizing:border-box;
      padding:5px 15px;
      bottom:0;
      background-color:rgba(0,0,0,0.3);
      line-height: 1.5;
    }
  }
  .master-nav-box{
    position: relative;
    .master-nav-list{
      padding:20px 40px;
      background: #f8f8f8;
      display: flex;
      justify-content: space-between;
      border-bottom:1px solid #eaeaea;
      .consult{
        background:url('../../assets/img/quest.png') 0% 0% /100% 100% no-repeat;
        width:120px;
        height:50px;
        &.on{
          background:url('../../assets/img/quest_on.png') 0% 0% /100% 100% no-repeat;
        }
      }
      .selfTest{
        background:url('../../assets/img/kecheng.png') 0% 0% /100% 100% no-repeat;
        width:120px;
        height:50px;
        &.on{
          background:url('../../assets/img/kecheng_on.png') 0% 0% /100% 100% no-repeat;
        }
      }
    }
    .master-nav-active{
      width:22.5px;
      height:12.5px;
      position: absolute;
      bottom:0;
      transition:0.3s all ease-out;
      background:url('../../assets/img/sanjiao2.png') 0% 0% / 100% 100% no-repeat;
    } 
  }
  .answer-container{
    margin-top:10px;
  }
  // 高级服务解释
  .quest-promt-container{
      position: fixed;
      width:100%;
      height:100%;
      left:0;bottom:0;
      top:0;right:0;
      z-index: 99;
      .quest-promt-bg{
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.5);
      }
      .quest-promt-content{
        width:100%;
        position: absolute;
        bottom:0;
        left:0;
        background-color:#ffffff;
        overflow:hidden;
        .quest-promt-wrap{
          padding:20px 0 15px;
          border-bottom: solid 1px #eaeaea;
          .quest-promt-ul{
            display: flex;
            .quest-promt-li{
              padding-left:15px;
              &:nth-last-child(1){
                padding:0 15px;
              }
              .quest-promt-title{
                margin-bottom: 20px;
                padding-left:15px;
                border-left:4px solid #f85943;
                font-size:12px;
              }
              img{
                width:237px;height:350px;
                border: 1px solid #9f9f9f;
              }
            }
          }
        }
      }
      .quest-promt-footer{
        margin-top:20px;
        display: flex;
        height:50px;
        line-height: 50px;
        text-align: center;
        .quest-promt-close{
          width:150px;
          background-color:#d3d1d1;
          color:#333333;
          font-size:15px;
        }
        .quest-promt-pay{
          flex: 1;
          background-color:#de4d3a;
          color:#ffffff;
          font-size:15px;
        }
      }
    }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  // 下单
  .footer-container{
    width:100%;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    .footer-wrap{
      display: flex;
      div{
        height:50px;
        line-height: 50px;
        text-align: center;
        color:#ffffff;
        &.consult{
          width:150px;
          font-size:16px;
          background-color:#3bc063;
        }
        &.placeOrder{
          flex:1;
          font-size:16px;
          background-color:#f85943;
        }
      }
    }
  }

</style>
