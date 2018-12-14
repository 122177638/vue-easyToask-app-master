<template>
  <section class="secret-container">
    <scroll class="secret-wrapper">
      <section class="secret-banner-container">
        <div class="swiper-container secret-swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" style="background:url('http://img.ggwan.com/yd/userPic/201808/c803096fb0f38f48.jpg') 0% 0% / 100% 100% no-repeat"></div>
              <div class="swiper-slide" style="background:url('http://img.ggwan.com/yd/userPic/201808/e4503d4286dff2b2.jpg') 0% 0% / 100% 100% no-repeat"></div>
              <div class="swiper-slide" style="background:url('http://img.ggwan.com/yd/userPic/201808/f5fb9a7ba2235bcd.jpg') 0% 0% / 100% 100% no-repeat"></div>
          </div>
        </div>
      </section>
      <section class="secret-server-container">
        <h3 class="public-title"><span class="zrcs-icon"></span></h3>
        <div class="secret-server-content">
          <ul class="secret-server-list">
            <li class="secret-server-item">
              <div class="item-top">
                <img src="http://img.ggwan.com/yd/userPic/201805/bbf1828424539dbd.jpg" alt="">
                <span class="item-top-type"></span>
              </div>
              <div class="item-bottom">
                <div class="item-b-left">
                  <h4 class="ellipsis">八字催旺桃花，让你桃花朵朵开</h4>
                  <p><span>￥28</span>&nbsp;&nbsp;&nbsp;已有456479测试</p>
                </div>
                <div class="item-b-right">马上测算</div>
              </div>
            </li>
            <li class="secret-server-item">
              <div class="item-top">
                <img src="http://img.ggwan.com/yd/userPic/201805/bbf1828424539dbd.jpg" alt="">
                <span class="item-top-type"></span>
              </div>
              <div class="item-bottom">
                <div class="item-b-left">
                  <h4 class="ellipsis">八字催旺桃花，让你桃花朵朵开</h4>
                  <p><span>￥28</span>&nbsp;&nbsp;&nbsp;已有456479测试</p>
                </div>
                <div class="item-b-right">马上测算</div>
              </div>
            </li>
            <li class="secret-server-item">
              <div class="item-top">
                <img src="http://img.ggwan.com/yd/userPic/201805/bbf1828424539dbd.jpg" alt="">
                <span class="item-top-type"></span>
              </div>
              <div class="item-bottom">
                <div class="item-b-left">
                  <h4 class="ellipsis">八字催旺桃花，让你桃花朵朵开</h4>
                  <p><span>￥28</span>&nbsp;&nbsp;&nbsp;已有456479测试</p>
                </div>
                <div class="item-b-right">马上测算</div>
              </div>
            </li>
            <li class="secret-server-item">
              <div class="item-top">
                <img src="http://img.ggwan.com/yd/userPic/201805/bbf1828424539dbd.jpg" alt="">
                <span class="item-top-type"></span>
              </div>
              <div class="item-bottom">
                <div class="item-b-left">
                  <h4 class="ellipsis">八字催旺桃花，让你桃花朵朵开</h4>
                  <p><span>￥28</span>&nbsp;&nbsp;&nbsp;已有456479测试</p>
                </div>
                <div class="item-b-right">马上测算</div>
              </div>
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
  mounted () {
    this.plugins();
  },
  methods: {
    plugins () {
      this.$nextTick(() => {
        new Swiper('.secret-swiper-container', { // eslint-disable-line
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
        });
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .secret-container{
    height:100%;
    overflow: hidden;
  }
  .secret-swiper-container{
   height:200px;
   margin-top:10px;
   .swiper-slide{border-radius:10px;}
  }
  .secret-server-container{
    .secret-server-content{
      .secret-server-list{
        overflow: hidden;
        .secret-server-item{
          margin:0 15px 15px;
          background-color:#ffffff;
          border-radius: 5px;
          overflow: hidden;
          box-shadow:0 0 10px #999999;
          .item-top{
            width:100%;
            height:94px;
            position:relative;
            img{width:100%;vertical-align:middle;}
            .item-top-type{
              position:absolute;
              width:67.5px;
              height:24px;
              background:url('../../assets/img/newServer.png') 0% 0% / 100% 100% no-repeat;
              top:10px;
            }
          }
          .item-bottom{
            display:flex;
            padding:15px;
            box-sizing:border-box;
            align-items:center;
            .item-b-left{
              flex:1;
              overflow: hidden;
              h4{
                font-size:16px;
                color:#333333;
              }
              p{
                margin-top:5px;
                font-size:12px;
                color:#9d9d9d;
                span{
                  color:#E04E3E;
                  font-size:18px;
                }
              }
            }
            .item-b-right{
              width:82px;
              height:25px;
              background:url('../../assets/img/btnBg.png') 0% 0% /100% 100% no-repeat;
              text-align: center;
              line-height:25px;
              font-size:15px;
              color:#E04E3E;
            }
          }
        }
      }
    }
  }
</style>
