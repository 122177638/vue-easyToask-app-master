<template>
  <div class="evaluate-content">
    <div class="evaluate-title">全部评价(100)</div>
    <ul class="evaluate-list">
      <li class="evaluate-item">
        <div class="evaluate-user-info">
          <div class="evaluate-user-info-l">
            <div class="evaluate-user-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
            <div class="evaluate-user-name">微***14</div>
          </div>
          <div class="evaluate-user-info-r"><rater v-model="star" active-color="red"  disabled :margin="0"></rater></div> 
        </div>
        <div class="evaluate-txt"><p>老师说的都还比较准</p></div>
      </li> 
      <li class="evaluate-item">
        <div class="evaluate-user-info">
          <div class="evaluate-user-info-l">
            <div class="evaluate-user-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
            <div class="evaluate-user-name">微***14</div>
          </div>
          <div class="evaluate-user-info-r"><rater v-model="star" active-color="red" disabled :margin="0"></rater></div> 
        </div>
        <div class="evaluate-txt"><p>老师说的都还比较准</p></div>
      </li> 
      <li class="evaluate-item">
        <div class="evaluate-user-info">
          <div class="evaluate-user-info-l">
            <div class="evaluate-user-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
            <div class="evaluate-user-name">微***14</div>
          </div>
          <div class="evaluate-user-info-r"><rater v-model="star" active-color="red"  disabled :margin="0"></rater></div> 
        </div>
        <div class="evaluate-txt"><p>老师说的都还比较准</p></div>
      </li> 
    </ul>
  </div>
</template>

<script>
import { Rater } from 'vux'
export default {
  data () {
    return {
      star: 3
    }
  },
  components: {
    Rater
  }
}
</script>

<style lang="scss" scoped>
  .evaluate-content{
    padding:0 15px 15px;
    background-color:#ffffff;
    .evaluate-title{
      width: 100%;
      height:40px;
      line-height: 40px;
      text-align: center;
      font-size:17px;
      color:#333333;
      &::before,&::after{
        content:'';
        height:1px;
        width:18%;
        background-color:#ebebeb;
        vertical-align: middle;
        display:inline-block;
      }
      &::before{margin-right:10px;}
      &::after{margin-left:10px;}
    }
    .evaluate-list{
      .evaluate-item{
        padding:15px 0;
        border-bottom:1px solid #eaeaea;
        &:nth-last-child(1){border-bottom:0;}
        .evaluate-user-info{
          display: flex;
          justify-content:space-between;
          align-items:center;
          .evaluate-user-info-l{
            flex:1;
            display: flex;
            align-items:center;
            width:100%;
            overflow: hidden;
            .evaluate-user-headImg{
              img{width:48px;height:48px;border-radius:50%;border:1px solid #dedede;}
            }
            .evaluate-user-name{
              flex:1;
              font-size:15px;
              color:#666666;
              margin:0 15px 0 10px;
              width:100%;
              white-space: nowrap;
              text-overflow:ellipsis;
              overflow: hidden;
            }
          }
          .evaluate-user-info-r{
            font-size:13px;
            color:#666666;
          }
        }
        .evaluate-txt{
          font-size:15px;
          color:#333333;
          margin-top:10px;
        }
      }
    }

  }
</style>
