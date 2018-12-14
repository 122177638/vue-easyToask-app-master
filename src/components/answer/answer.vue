<template>
    <div class="answer-content">
      <div class="answer-title">全部回答(100)</div>
      <ul class="answer-list">
        <li class="answer-item">
          <div class="answer-user-info">
            <div class="answer-user-info-l">
              <div class="answer-user-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
              <div class="answer-user-name">微信用户111214514</div>
            </div>
            <div class="answer-user-info-r">听过999</div>
          </div>
          <div class="answer-user-quest">
            <p class="answer-user-quest-content">我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？</p>
            <ul class="answer-user-quest-imgList">
              <li class="answer-user-quest-img"><img src="https://yd.ggwan.com/image/yqw/99f8c18db51875-360x640_thumb.jpeg" alt=""></li>
              <li class="answer-user-quest-img"><img src="https://yd.ggwan.com/image/yqw/99f8c18db51875-360x640_thumb.jpeg" alt=""></li>
            </ul>
          </div>
          <div class="answer-user-time">11-25 16:06</div>
          <div class="master-answer-wrap">
            <div class="answer-user-info">
              <div class="answer-user-info-l">
                <div class="answer-user-headImg"><img src="http://img.ggwan.com/yd/userPic/201806/143222f059a1bb28.jpg" alt=""></div>
                <div class="answer-user-name">同乐</div>
              </div>
              <div class="answer-user-info-r">评分5.0</div>
            </div>
             <div class="answer-user-quest"><p class="answer-user-quest-content">我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？我与易阳（易秀慧）小姐《1993.03.12生》大概什么时候能够结婚呢？</p></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .answer-content{
    padding:0 15px 15px;
    background-color:#ffffff;
    .answer-title{
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
    .answer-list{
      .answer-item{
        padding:15px 12px;
        border:1px solid #ebebeb;
        margin-bottom:15px;
        box-shadow:0 0 5px #eaeaea;
        &:nth-last-child(1){margin-bottom:0;}
        .answer-user-info{
          display: flex;
          justify-content:space-between;
          align-items:center;
          .answer-user-info-l{
            flex:1;
            display: flex;
            align-items:center;
            width:100%;
            overflow: hidden;
            .answer-user-headImg{
              img{width:35px;height:35px;border-radius:50%;}
            }
            .answer-user-name{
              flex:1;
              font-size:17px;
              color:#666666;
              margin:0 15px 0 10px;
              width:100%;
              white-space: nowrap;
              text-overflow:ellipsis;
              overflow: hidden;
            }
          }
          .answer-user-info-r{
            font-size:13px;
            color:#666666;
          }
        }
        .answer-user-quest{
          margin:10px 0 15px;
          .answer-user-quest-content{
            text-align:justify;
            word-break: break-all;
            word-wrap:break-word;
            font-size:16px;
            color:#333333;
            line-height: 1.4;
          }
          .answer-user-quest-imgList{
            display: flex;
            margin-top:15px;
            .answer-user-quest-img{
              position: relative;
              width:75px;
              height:75px;
              border-radius: 5px;
              overflow: hidden;
              margin-right:5px;
              &:nth-last-child(1){margin-right:0;}
              img{
                position: absolute;
                width:100%;
                top:50%;
                transform:translateY(-50%);
              }
            }
          }
        }
        .answer-user-time{
          font-size:12px;
          color:#999;
        }
      }
    }
    .master-answer-wrap{
      margin-top:20px;
    }
  }
  
</style>
