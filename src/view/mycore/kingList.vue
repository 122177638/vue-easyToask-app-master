<template>
  <section class="kingList-container">
    <div class="kingList-wrapper">
      <tabTG :tabList="tabList" :tabActive="tabActive" @switchTab="switchTab"></tabTG>
      <scroll class="kingList-content" 
        v-show="tabActive == 0">
        <ul class="kingList-list">
          <li class="kingList-item" v-for="(item,index) in howeData" :key="index">
            <div :class="['item-num',{'on':index < 3}]"><span class="item-num-txt">NO.{{index+1}}</span></div>
            <div class="item-headImg"><img :src="item.img" alt=""></div>
            <div class="item-info">
              <h3 class="item-name">{{item.name}}</h3>
              <p class="item-money">奉献值：¥{{item.money}}</p>
            </div>
            <div :class="['item-title',{'on':index < 3}]">{{item.title}}</div>
          </li>
        </ul>
      </scroll>
      <scroll class="kingList-content" 
        :isScrollInit="isScrollInit" 
        v-show="tabActive == 1">
        <div class="kingList-tab">
          <div :class="['tab-item',{'on': weekActive==0}]" @click="weekTab(0)">周榜</div>
          <div :class="['tab-item',{'on': weekActive==1}]" @click="weekTab(1)">总榜</div>
        </div>
        <ul class="kingList-list">
          <li class="kingList-item" v-for="(item,index) in howeData" :key="index">
            <div :class="['item-num',{'on':index < 3}]"><span class="item-num-txt">NO.{{index+1}}</span></div>
            <div class="item-headImg"><img :src="item.img" alt=""></div>
            <div class="item-info">
              <h3 class="item-name">{{item.name}}</h3>
              <p class="item-money">奉献值：¥{{item.money}}</p>
            </div>
            <div class="item-quest"><span class="item-quest-txt">提问</span></div>
          </li>
        </ul>
      </scroll>
    </div>
  </section>
</template>

<script>
import tabTG from '../../components/tabTG/tabTG';
export default {
  components: {
    tabTG
  },
  data () {
    return {
      tabList: ['土豪榜', '老师打赏榜'],
      tabActive: 0,
      weekActive: 0,
      isScrollInit: false,
      howeData: [
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' },
        { name: 'anles', money: '135245', title: '富可敌国', img: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg' }
      ]
    }
  },
  created () {
  
  },
  methods: {
    switchTab (idx) {
      if (this.tabActive !== idx) {
        this.tabActive = idx;
        this.isScrollInit = true;
      }
    },
    weekTab (idx) {
      if (this.weekActive !== idx) {
        this.weekActive = idx;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .kingList-container{width:100%;height:100%;}
  .kingList-wrapper{height:100%;display: flex;flex-direction: column;}
  .kingList-content{
    flex:1;
    height:100%;
    background-color:#ffffff;
    .kingList-list{
      padding:0 15px;
      .kingList-item{
        padding:18px 0;
        display: flex;
        align-items:center;
        border-bottom:1px solid #e6e6e6;
        &:nth-last-child(1){border-bottom:none;}
        .item-num{
          width:30px;
          height:50px;
          border:1px solid #eeeeee;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items:center;
          &.on{
            border:1px solid rgba(224, 78, 62, 0.2);
            .item-num-txt{
              background-color:rgba(224, 78, 62, 0.2);
              color:#e04e3e;
            }
          }
          .item-num-txt{
            width:23px;
            height:43px;
            font-size:12px;
            background-color: #eeeeee;
            color: #757575;
            box-sizing:border-box;
            word-wrap:break-word; 
            word-break:normal; 
            display: inline-block;
            padding-top:6px;
            line-height: 1.4;
            text-align: center;
          }
          
        }
        .item-headImg{
          font-size:0;
          margin-lefT:12px;
          margin-right:10px;
          img{
            width:55px;
            height:55px;
            border-radius:50%;
            display: block;
          }
        }
        .item-info{
          flex:1;
          width:100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content:center;
          .item-name{font-size:15px;color:#333333;}
          .item-money{font-size:13px;color:#757575;margin-top:8px;}
        }
        .item-quest{
          width:72px;
          height:30px;
          padding:3px;
          border:1px solid #e04e3e;
          box-sizing:border-box;
          .item-quest-txt{
            display:inline-block;
            width:100%;
            height:100%;
            background-color:#e04e3e;
            text-align: center;
            color:#ffffff;
            font-size:15px;
            line-height: 22 px;
          }
        }
        .item-title{
          width:85px;
          height:28px;
          background:url('../../assets/img/btnBg02.png') 0% 0% / 100% 100% no-repeat;
          line-height:28px;
          text-align:center;
          color:#757575;
          font-size:16px;
          &.on{
            background:url('../../assets/img/btnBg.png') 0% 0% / 100% 100% no-repeat;
            color:#e04e3e;
          }
        }
      }
    }
  }
  .kingList-tab{
    display: flex;
    justify-content: center;
    align-items:center;
    padding:20px 0 10px;
    .tab-item{
      width:120px;
      height:30px;
      font-size:16px;
      text-align: center;
      line-height:30px;
      border:1px solid #757575;
      color:#757575;
      box-sizing:border-box;
      &.on{ 
        background-color:#e04e3e;
        border:none;
        color:#ffffff;
      }
    }
  }
</style>
