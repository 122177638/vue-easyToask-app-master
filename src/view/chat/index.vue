<template>
  <div class="chat-container">
    <div class="chat-header">
      <div class="chat-header-box">
        <div class="chat-reply">
          <span class="chat-reply-num">0</span>
        </div>
        <div class="chat-state-box">
          <h2 class="chat-name">李易峰</h2>
          <p class="chat-state">老师暂不在线，请留言</p>
        </div>
        <div class="chat-master-home">老师主页</div>
      </div>
    </div>
    <div :class="['chat-wrapper', {'faceActive': faceShow}, {'faceActiveed':chatFaceShow}, {'txActive':txFaceShow}]">
      <scroll class="chat-content" 
        :data="chatData"
        :isAutoBottom.sync="isAutoBottom"
        :isInitBottom="true"
        :listenBeforeScroll="true" 
        @beforeScrollStart="hiddenEmoji"
        
        ref="scrollNode">
        <div class="chat-content-wrapper">
          <ul class="chat-list">
            <li class="chat-item" v-for="(item,index) in chatData" :key="index">
              <div class="chat-time-box"><span class="chat-time">2018年11月29日 15:27</span></div>
              <div :class="['chat-item-content',{'reply':item.uid !== uid}]">
                <div class="chat-item-headImg"><img :src="item.headImg" alt=""></div>
                <div class="chat-item-txt" v-if="item.content"><p v-html="chatValueHtml(item.content)"></p></div>
                <div class="chat-item-img" v-if="item.fileImg"><img previewerImg :src="item.fileImg" alt=""></div>
              </div>
            </li>
            <!-- <li class="chat-item">
              <div class="chat-time-box"><span class="chat-time">2018年11月29日 15:27</span></div>
              <div class="chat-item-content">
                <div class="chat-item-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
                <div class="chat-item-img"><img previewerImg src="https://yd.ggwan.com/image/yqw/44a7037018b783-1920x1080.jpg" alt=""></div>
              </div>
            </li>
            <li class="chat-item">
              <div class="chat-time-box"><span class="chat-time">2018年11月29日 15:27</span></div>
              <div class="chat-item-content reply">
                <div class="chat-item-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
                <div class="chat-item-txt"><p>加我的奇偶我觉得我就都我到家我低价位偶就我都叫哦我哦就</p></div>
              </div>
            </li>
            <li class="chat-item">
              <div class="chat-time-box"><span class="chat-time">2018年11月29日 15:27</span></div>
              <div class="chat-item-content reply">
                <div class="chat-item-headImg"><img src="https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg" alt=""></div>
                <div class="chat-item-img"><img previewerImg src="https://yd.ggwan.com/image/yqw/d195a09f3d5d4c-1619x1080.jpg" alt=""></div>
              </div>
            </li> -->
          </ul>
        </div>
      </scroll>
      <inputBox 
        v-model="chatValue"
        @focus="chatFocus" 
        @blur="chatBlur" 
        @emoji="chatEmoji"
        @file="chatFile"
        @enter="chatEnter"></inputBox>
      <face :faceShow="faceShow" @checkFace="checkFace"></face>
    </div>
  </div>
</template>

<script>
import Face from '../../components/face/face.vue';
import faceArray from '../../components/face/face.js'
import InputBox from '../../components/inputBox/inputBox';
export default {
  components: {
    Face,
    InputBox
  },
  data () {
    return {
      chatValue: '',
      chatFaceShow: false,
      txFaceShow: false,
      faceShow: false,
      isAutoBottom: false,
      chatData: [],
      uid: 1
    }
  },
  computed: {

  },
  created () {
    this.isTxBrowser = this.getBrowser(); // 获取浏览器类型
  },
  mounted () {
    this.scrollNode = this.$refs.scrollNode;
    this.getChatData()
  },
  methods: {
    getChatData () {
      this.$http.post('/chat').then((response) => {
        this.chatData = response.data.articles;
      })
    },
    hiddenEmoji () {
      if (this.faceShow) this.faceShow = false;
    },
    chatEmoji () {
      this.faceShow = !this.faceShow;
    },
    chatFocus () {
      // 判断是否是tx浏览器，解决输入框下陷问题
      if (this.isTxBrowser && !this.faceShow) {
        this.$nextTick(() => {
          this.txFaceShow = true;
        })
      }
      // 解决输入框和表情包同时动画产生的下陷问题
      if (this.faceShow) {
        this.faceShow = false;
        this.$nextTick(() => {
          this.chatFaceShow = true;
        })
      }
    },
    chatBlur () {
      // 判断是否是tx浏览器，解决输入框下陷问题
      if (this.isTxBrowser && !this.faceShow) {
        this.$nextTick(() => {
          this.txFaceShow = false;
        })
      }
      // 解决输入框和表情包同时动画产生的下陷问题
      if (!this.faceShow) {
        this.$nextTick(() => {
          this.chatFaceShow = false;
        })
      }
    },
    chatFile (e) {
      console.log(e)
    },
    checkFace (item) {
      this.chatValue += `[${item.name}]`
    },
    chatEnter () {
      this.chatData.push({
        uid: 2,
        content: this.chatValue,
        headImg: 'https://resourcesyd.linghit.com/yd/yd-cdn/yqw-wxapp-icon/default_avatar.jpg',
        fileImg: ''
      })
      this.isAutoBottom = true;
      this.chatValue = '';
      this.faceShow = false;
    },
    getBrowser () {
      var ua = navigator.userAgent.toLowerCase();
      var isTxBrowser = null;
      if (ua.match(/MicroMessenger/i) == 'micromessenger') { // eslint-disable-line
        isTxBrowser = 'weixin'
      } else if (ua.indexOf(' qq') > -1 && ua.indexOf('mqqbrowser') < 0) {
        isTxBrowser = 'QQInstalled'
      } else if (ua.indexOf('mqqbrowser') > -1 && ua.indexOf(' qq') < 0) {
        isTxBrowser = 'QQ'
      }
      return isTxBrowser;
    },
    chatValueHtml (strVal) {
      let reg = /\[([\u4e00-\u9fa5-_-]+)\]/g;
      let newStr = strVal.replace(reg, function ($1, $2) {
        let imgPath;
        faceArray.map((item) => {
          if (item.name === $2) {
            imgPath = `<img src="${item.path}" style="width:0.36rem;height:0.36rem;vertical-align:top" class="emoji" alt="">`;
          }
        })
        return imgPath;
      })  
      return newStr;
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat-container{width:100%;height:100%;}
  // .emoji{width:18px;height:18px;vertical-align: middle;}
  .chat-wrapper{width:100%;height:100%;display: flex;flex-direction:column;transform: translateY(0);transition: all 0.3s;}
  .chat-wrapper.faceActive{transform: translateY(-167px);}
  .chat-wrapper.faceActiveed{transform: translateY(-58px);}
  .chat-wrapper.txActive{transform: translateY(-20px);}
  .chat-header{
    position: absolute;
    left:0;top:0;
    width:100%;
    z-index:3;
    .chat-header-box{
      display:flex;
      height: 55px;
      background-color:#ffffff;
      border-bottom:1px solid #eaeaea;  
      align-items: center;
      padding:0 60px;
      position: relative;
      .chat-reply{
        width:23px;height:23px;
        background:url('../../assets/img/chat.png') 0% 0% /100% 100% no-repeat;
        position: absolute;
        left:15px;
        top:50%;
        margin-top:-11.5px;
        .chat-reply-num{
          width:19px;
          height:19px;
          line-height:19px;
          text-align:center;
          background-color:#eb4f39;
          border-radius:50%;
          color:#ffffff;
          font-size:12px;
          position: absolute;
          right:-9.5px;
          top:-10px; 
        }
      }
      .chat-state-box{
        flex:1;
        width:100%;
        overflow:hidden;
        text-align:center;
        .chat-name{font-size:16px;color:#333333;}
        .chat-state{font-size:12px;color:#999999;margin-top:4px;}
      }
      .chat-master-home{
        position: absolute;
        width:40px;
        height:40px;
        box-sizing:border-box;
        font-size:12px;color:#ffffff;
        background-color:#e04e3e;
        border-radius: 50%;
        text-align: center;
        padding:6px 3px;
        line-height: 1.1;
        right:15px;
        top:50%;
        margin-top:-20px;
      }
    }
  }
  .chat-content{
    flex:1;
    margin-top:56px;
    .chat-content-wrapper{
      
    }
    .chat-list{
      .chat-item{
        padding:5px 10px;
        .chat-time-box{
          text-align:center;
          .chat-time{
            display: inline-block;
            padding:2px 5px;
            background-color:rgba(0,0,0,0.2);
            color:#ffffff;
            border-radius:6px;
            font-size:12px;
          }
        }
        .chat-item-content{
          display: flex;
          padding:15px 0;
          .chat-item-headImg{
            img{width:40px;height:40px;vertical-align:middle;}
          }
          .chat-item-txt{
            margin-left:10px;
            margin-right:50px;
            padding:10px;
            background-color:#ffffff;
            border-radius: 5px;
            border:1px solid #f2f2f2;
            font-size:0;
            display: flex;
            align-items: center;
            position:relative;
            &::before{
              content:'';
              border:10px solid transparent;
              border-right-color:#ffffff;
              position:absolute;
              display:inline-block;
              left:-15px;
              top:10px;
            }
            p{font-size:15px;color:#333333;word-break: break-all;word-wrap: break-word;line-height: 1.2;}
          }
          .chat-item-img{
            margin-left:10px;
            max-width: 167px;
            border-radius: 5px;
            overflow: hidden;
            font-size:0;
            border:1px solid #f2f2f2;
            img{width:100%;}
          }
          &.reply{
            flex-direction: row-reverse;
            .chat-item-txt{
              margin-left:50px;
              margin-right:10px;
              background-color:#9EEA6A;
              &::before{
                border:10px solid transparent;
                border-left-color:#9EEA6A;
                left:initial;
                right:-15px;
                top:10px;
              }
            }
            .chat-item-img{
              margin-left:0;
              margin-right:10px;
            }
          }
        }
      }
    }
  }
</style>
