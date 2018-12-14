<template>
  <section class="hotlist-container">
    <scroll class="hotlist-wrapper">
      <section class="hostlist-banner-container">
        <div class="swiper-container banner-swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" style="background:url('http://img.ggwan.com/yd/userPic/201808/c803096fb0f38f48.jpg') 0% 0% / 100% 100% no-repeat"></div>
              <div class="swiper-slide" style="background:url('http://img.ggwan.com/yd/userPic/201808/e4503d4286dff2b2.jpg') 0% 0% / 100% 100% no-repeat"></div>
              <div class="swiper-slide" style="background:url('http://img.ggwan.com/yd/userPic/201808/f5fb9a7ba2235bcd.jpg') 0% 0% / 100% 100% no-repeat"></div>
          </div>
        </div>
      </section>
      <div class="quickQuest">
        <p>已有<span>6万+</span>个提问被老师解答</p>
        <div class="quickBtn">快速提问 ></div>
      </div>
      <section class="menu-nav-container">
        <div class="menu-nav-wrap">
          <ul class="menu-nav-ul">
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
            <li class="menu-nav-li"><img src="http://img.ggwan.com/yd/userPic/201811/0ec989b4809cc0b0.jpg" width="100%" alt=""></li>
          </ul>
        </div>
      </section>
      <section class="hot-test-container">
        <h3 class="public-title"><span class="zrcs-icon"></span></h3>
        <div class="hot-test-wrap">
          <div class="hot-test-box-public">
            <h4 class="hot-test-wrap-title">应采儿为您推荐</h4>
            <div class="hot-test-wrap-more">更多测算</div>
          </div>
          <ul class="hot-test-wrap-ul">
            <li class="hot-test-wrap-li">什么时候结束单身遇到另一半？</li>
            <li class="hot-test-wrap-li">什么时候结束单身遇到另一半？</li>
            <li class="hot-test-wrap-li">什么时候结束单身遇到另一半？</li>
          </ul>
        </div>
      </section>
      <section class="week-star-container">
        <h3 class="public-title"><span class="yzmxls-icon"></span></h3>
        <div class="week-star-icon"></div>
        <div class="week-star-wrap">
          <ul class="week-star-ul">
            <li class="week-star-li">
              <h4 class="week-star-type"><span class="week-star-txt">人气榜前十</span></h4>
              <scroll class="week-swiper-container" :readyScrollX="true" :scrollbar="false" :scrollX="true">
                <div class="week-wrapper">
                  <div class="week-slide" v-for="item in weekList" :key="item.id">
                    <div class="week-star-box">
                      <div class="week-star-box-img"><span class="month-icon" v-if="item.hasHot"></span><img :src="item.headImg" alt=""></div>
                      <h5 class="week-star-name">{{item.name}}</h5>
                    </div>
                  </div>
                </div>
              </scroll>
            </li>
            <li class="week-star-li">
              <h4 class="week-star-type"><span class="week-star-txt">人气榜前十</span></h4>
              <scroll class="week-swiper-container" :readyScrollX="true" :scrollbar="false" :scrollX="true">
                <div class="week-wrapper">
                  <div class="week-slide" v-for="item in weekList" :key="item.id">
                    <div class="week-star-box">
                      <div class="week-star-box-img"><span class="month-icon" v-if="item.hasHot"></span><img :src="item.headImg" alt=""></div>
                      <h5 class="week-star-name">{{item.name}}</h5>
                    </div>
                  </div>
                </div>
              </scroll>
            </li>
            <li class="week-star-li">
              <h4 class="week-star-type"><span class="week-star-txt">人气榜前十</span></h4>
              <scroll class="week-swiper-container" :readyScrollX="true" :scrollbar="false" :scrollX="true">
                <div class="week-wrapper">
                  <div class="week-slide" v-for="item in weekList" :key="item.id">
                    <div class="week-star-box">
                      <div class="week-star-box-img"><span class="month-icon" v-if="item.hasHot"></span><img :src="item.headImg" alt=""></div>
                      <h5 class="week-star-name">{{item.name}}</h5>
                    </div>
                  </div>
                </div>
              </scroll>
            </li>
          </ul>
        </div>
      </section>
    </scroll>
  </section>
</template>

<script>
import Swiper from '../../../static/js/swiper.min.js';
export default {
  name: 'Hotlist',
  data () {
    return {
      weekList: [
        {id: 0, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: true},
        {id: 1, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 2, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 3, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 4, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 5, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 6, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 7, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false},
        {id: 8, name: '张天师', headImg: 'http://img.ggwan.com/yd/userPic/201809/e6d2922549d8dbca.jpg', hasHot: false}
      ]
    }
  },
  mounted () {
    this.plugin();
  },
  activated () {
    // console.log('keep-alive')
  },
  methods: {
    plugin () {
      this.$nextTick(() => {
        new Swiper('.banner-swiper-container', { // eslint-disable-line
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          autoplayDisableOnInteraction: false,
          slidesPerView: '1.1',
          coverflowEffect: {
            rotate: 50,
            stretch: 20,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
          loop: true,
          autoplay: true
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .hotlist-container{height:100%;box-sizing: border-box;}
  .banner-swiper-container{height:150px;}
  // // 公用标题
  // .public-title{
  //   padding:14px 0 16px;
  //   text-align:center;
  //   &::before,&::after{
  //     content:'';
  //     width:18%;
  //     height:1px;
  //     background-color:#DBDBDB;
  //     display: inline-block;
  //     vertical-align:middle;
  //     margin-right:10px;
  //   }
  //   &::before{margin-right:10px;}
  //   &::after{margin-left:10px;}
  //   .zrcs-icon{
  //     width:70px;
  //     height:20px;
  //     background:url('../../assets/img/zrcs.png') 0% 0% / 100% 100% no-repeat;
  //     display: inline-block;
  //     vertical-align: middle;
  //   }
  //   .yzmxls-icon{
  //     width:108px;
  //     height:20px;
  //     background:url('../../assets/img/yzmxls.png') 0% 0% / 100% 100% no-repeat;
  //     display: inline-block;
  //     vertical-align: middle;
  //   }
  // }
  // 快速提问
  .quickQuest{
    height:45px;
    display: flex;
    padding:0 10px;
    align-items:center;
    justify-content:space-between;
    p{
      font-size:14px;
      color:#333333;
      span{color:#4dbd0a;}
    }
    .quickBtn{
      width:90px;
      line-height: 30px;
      text-align: center;
      background-color:#4dbd0a;
      color:#ffffff;
      border-radius:35px;
      vertical-align:top;
    }
  }
  // menu模块
  .menu-nav-container{
    background-color:#ffffff;
    margin-bottom:15px;
    .menu-nav-wrap{
      .menu-nav-ul{
        padding:0px 0px 14px;
        box-sizing:border-box;
        display: flex;
        flex-wrap:wrap;
        .menu-nav-li{
          width:25%;
          height:70px;
          font-size:0;
          margin-top:14px;
          text-align: center;
          img{
            width:56px;
            height:70px;
          }
          &:nth-child(4n){
            margin-right:0;
          }
        }
      }
    }
  }
  // 最热测算
  .hot-test-container{
    background-color:#ffffff;
    padding:0 15px;
    margin-bottom:15px;
    .hot-test-wrap{
      .hot-test-box-public{
        display: flex;
        justify-content:space-between;
        padding-left:28px;
        background:url('../../assets/img/yce.png') 0% center / 20px 20px no-repeat;
        .hot-test-wrap-title{
          color: #333333;
          font-weight: bold;
          font-size:16px;
        }
        .hot-test-wrap-more{color:#666666;font-size:14px;}
      }
      .hot-test-wrap-ul{
        padding:15px 0 20px;
        .hot-test-wrap-li{
          padding-left:28px;
          margin-top:10px;
          background:url('../../assets/img/liIcon.png') 0% center / 18px 18px no-repeat;
          &:nth-child(1){margin-top:0;}
        }
      }
    }
    
  }
  // 一周明星老师
  .week-star-container{
    background-color:#ffffff;
    position: relative;
    margin-bottom:15px;
    .week-star-icon{
      width:26px;
      height:38px;
      background:url('../../assets/img/weekStar.png') 0% 0% /100% 100% no-repeat;
      position: absolute;
      z-index: 2;
      right:15px;
      top:20px;
    }
    .week-star-wrap{
      .week-star-ul{
        padding:0 0 15px 15px;
        .week-star-li{
          display: flex;
          margin-bottom:10px;
          &:nth-last-child(1){margin-bottom:0;}
          .week-star-type{
            width: 35px;
            height:127px;
            background:url('../../assets/img/week_icon.png') 0% 0% /100% 100% no-repeat;
            flex-shrink: 0;
            position:relative;
            margin-right:10px;
            .week-star-txt{
              font-size:15px;
              color:#333333;
              position: absolute;
              width:16px;
              text-align: center;
              line-height:1.1;
              left:50%;
              top:50%;
              transform: translate(-50%,-50%);
            }
          }
          .week-swiper-container{
            flex:1;
            overflow: hidden;
            .week-wrapper{
              display: flex;
              .week-slide{
                .week-star-box{
                    display: flex;
                    flex-direction:column;
                    width:82px;
                    margin-right:10px;
                    .week-star-box-img{
                      font-size:0;
                      position: relative;
                      img{width:82px;height:100px;border: 1px solid #ebebeb;}
                      .month-icon{
                        position: absolute;
                        width:15px;
                        height:71px;
                        background:url('../../assets/img/month_icon.png') 0% 0% /100% 100% no-repeat;
                        left:5px;top:5px;
                      }
                    }
                    .week-star-name{
                      width:100%;
                      font-size:12px;
                      line-height:22px;
                      text-align: center;
                      background:url('../../assets/img/name_icon.png') 0% 0% / 100% 100% no-repeat;
                      margin-top:4px;
                    }
                  }
              }
            }
           
          }
        }
      }
    }
  }

</style>
