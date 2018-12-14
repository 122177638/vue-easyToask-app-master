<template>
  <section class="mycore-container">
    <scroll class="mycore-warpper">
      <div class="mycore-top">
        <div class="mycore-top-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
        <h2 class="mycore-nickName">微信用户15646231656</h2>
        <p class="mycore-nickName">手机号：185****1654</p>
      </div>
      <div class="mycore-page-wrapper">
        <ul class="mycore-page-list">
          <li class="mycore-page-item" v-for="(item,index) in pageList" :key="index" @click="naviPageTo(item)">
            <h4 class="item-box">
              <img :src="item.img" class="item-icon" alt="">{{item.name}}
            </h4>
          </li>
        </ul>
      </div>
    </scroll>
  </section>
</template>

<script>
import pageIcon01 from '../../assets/img/mycore01.png'
import pageIcon02 from '../../assets/img/mycore02.png'
import pageIcon03 from '../../assets/img/mycore03.png'
import pageIcon04 from '../../assets/img/mycore04.png'
import pageIcon05 from '../../assets/img/mycore05.png'
import pageIcon06 from '../../assets/img/mycore06.png'
import pageIcon07 from '../../assets/img/mycore07.png'
export default {
  name: 'mycore',
  data () {
    return {
      pageList: [
        {name: '大师售前咨询', path: '/Mycore/Consultation', img: pageIcon01},
        {name: '查看打赏榜', path: '/Mycore/KingList', img: pageIcon02},
        {name: '我的问题', path: '/Mycore/MyQuest', img: pageIcon03},
        {name: '我的优惠券', path: '/Mycore/MyCoupon', img: pageIcon04},
        {name: '收入支出', path: '/Mycore/CapitalFlow', img: pageIcon05},
        {name: '用户反馈', path: '/Mycore/Feedback', img: pageIcon06},
        {name: '用户协议', path: '/Mycore/Agreement', img: pageIcon07}
      ]
    }
  },
  mounted () {

  },
  methods: {
    naviPageTo (item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
  .mycore-container{width:100%;height:100%;}
  .mycore-warpper{width:100%;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;}
  .mycore-top{
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top:20px;
    background:url('../../assets/img/mycore_top.png') 0% 30px / contain no-repeat;
    .mycore-top-headImg{
      width:90px;
      height:90px;
      text-align: center;
      border:1px solid rgba(72, 67, 64, 0.3);
      border-radius:50%;
      font-size:0;
      display: flex;
      justify-content:center;
      align-items:center;
      box-sizing:border-box;
      img{
        width:75px;
        height:75px;
        border-radius: 50%;
        display: block;
      }
    }
    .mycore-nickName{
      font-size:18px;
      color:#151515;
      padding:12px 0 5px;
    }
  }
  .mycore-page-wrapper{
    padding-bottom:50px;
    .mycore-page-list{
      margin:0 15px;
      border:1px solid #e8e8e9;
      padding:0 12px;
      background-color:#ffffff;
      .mycore-page-item{
        padding:15px 0;
        border-bottom:1px solid #F1EEEE;
        &:nth-last-child(1){border-bottom:none;}
        .item-box{
          padding-left:35px;
          position: relative;
          font-size:15px;
          color:#333333;
          &::after{
            content:'';
            position: absolute;
            width:9px;height:9px;
            border-right:1px solid #cdcdcd;
            border-bottom:1px solid #cdcdcd;
            right:0;
            top:50%;
            margin-top:-4.5px;
            transform:rotate(-45deg);
            box-sizing:border-box;
          }
          .item-icon{
            width:19px;
            height:18.5px;
            position: absolute;
            left:0;
            top:50%;
            margin-top:-9.5px;
          }
        }
      }
    }
  }
</style>
