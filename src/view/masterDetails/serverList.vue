<template>
  <section class="consultation-container">
    <div class="server-type-wrap">
      <ul class="server-type-list" ref="tabbarNode">
        <li :class="['server-type-item',{'on':serverType==0}]" @click="switchServer(0)">
          <div class="item-content">
            <div class="item-title">
              <div class="select"></div>
              <h4 class="server-name">普通服务</h4>
            </div>
            <ul class="item-sub-ul">
              <li class="item-sub-li">含2次追问</li>
              <li class="item-sub-li">一事一测</li>
              <li class="item-sub-li">方便快捷</li>
            </ul>
          </div>
        </li>
        <li :class="['server-type-item',{'on':serverType==1}]" @click="switchServer(1)">
          <div class="item-content">
            <div class="item-title">
              <div class="select"></div>
              <h4 class="server-name">高级服务</h4>
            </div>
            <ul class="item-sub-ul">
              <li class="item-sub-li">专属48小时咨询时间</li>
              <li class="item-sub-li">与老师1对1实时沟通</li>
              <li class="item-sub-li">个性化定制解决方案</li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="server-type-active" :style="'transform:translate('+ActiveLeft+'px)'"></div>
      <div class="quest-promt" v-show="serverType==1"><span @click="$emit('questShow', true)">什么是高级服务？</span></div>
    </div>  
    <div class="server-item-content">
      <div class="server-list-wrap" v-show="serverType==0">此版块暂不开放</div>
      <div class="server-list-wrap" v-show="serverType==1">
        <div class="server-check-title">选择服务</div>
        <scroll class="server-check-wrap" :stopPropagation="true">
          <ul class="server-list">
            <li 
              :class="['server-item',{'on':serverItem == index}]" 
              v-for="(item,index) in serverData" 
              :key="index"
              @click="switchSerItem(index)">
              <div class="item-left">
                <h4 class="item-name">{{item.name}}</h4>
                <div class="item-content">
                  {{item.content}}
                </div>
              </div>
              <div class="item-right"></div>
            </li>
          </ul>
        </scroll>
      </div>
      <div class="quest-pay-container">
        <h3 class="quest-pay-title">支付方式</h3>
        <div class="quest-pay-content">
          <ul class="quest-pay-list">
            <li :class="['quest-pay-item',{'on': payType == 0}]" @click="payType = 0">
              <div class="quest-pay-logo wx"></div>
              <div class="quest-pay-name">微信支付</div>
              <div class="quest-pay-select on"></div>
            </li>
            <li :class="['quest-pay-item',{'on': payType == 1}]" @click="payType = 1">
              <div class="quest-pay-logo zfb"></div>
              <div class="quest-pay-name">支付宝支付</div>
              <div class="quest-pay-select"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  props: {
    questPromtShow: Boolean
  },
  data () {
    return {
      ActiveLeft: 0,
      serverType: 1,
      serverItem: 0,
      serverData: [
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'},
        {name: '婚姻情感', content: '预知个人情感、婚姻运势，助你在爱情中如鱼得水，为美满婚姻奠定基础。'}
      ],
      serverShow: false,
      serverHeight: 200,
      payType: 0 // 0 微信 1 支付宝
      
    }
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
    switchServer (idx) {
      this.serverType = idx;
    },
    switchSerItem (idx) {
      this.serverItem = idx;
    },
    // 计算三角位置
    comtabActive () {
      let event = this.$refs.tabbarNode.children[this.serverType];
      let activeNode = event.parentNode.nextElementSibling.offsetWidth / 2; // 获取选中三角宽度取半
      this.ActiveLeft = event.offsetLeft + event.clientWidth / 2 - activeNode; // 计算三角位置
    }
  }
}
</script>

<style lang="scss" scoped>
  .consultation-container{
    background-color:#ffffff;
    padding:15px;
    
    .server-type-wrap{
      padding-bottom:15px;
      border-bottom:1px solid rgba(224, 78, 62, 0.7);
      box-sizing:border-box;
      position: relative;
      .server-type-list{
        display: flex;
        justify-content: center;
        .server-type-item{
          width:165px;
          height:100px;
          border:1px solid rgba(117, 117, 117, 0.24);
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          .item-title{
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.8;
            .server-name{
              font-size:16px;
              font-weight:bold;
            }
            .select{
              width:13px;
              height:13px;
              border:1px solid #757575;
              border-radius:2px;
              margin-right:10px;
              box-sizing:border-box;
            }
          }
          .item-sub-ul{
            .item-sub-li{
              font-size:12px;
              text-align: center;
              list-style: disc inside;
              line-height: 1.5;
            }
          }
          &.on{
            color:#f85943;
            background-color:#fbe6e4;
            border:none;
            .select{
              border:none;
              background:url('../../assets/img/selcted.png') 0% 0% /100% 100% no-repeat;
            }
          }
        }
      }
      .quest-promt{
        margin-top:10px;
        font-size:14px;
        color:#1cba4c;
        text-align: center;
        text-decoration: underline;
      }
      .server-type-active{
        width:14.5px;
        height:9px;
        background:url('../../assets/img/top.png') 0% 0% /100% 100% no-repeat;
        position:absolute;
        bottom:-1px;
        transition:  all 0.3s ease-out;
      }
    }
    .server-list-wrap{
      .server-check-wrap{
        height:300px;
      }
      .server-check-title{
        margin-top:20px;
        width:100%;
        height:50px;
        line-height: 50px;
        text-align:center;
        background-color:#f85943;
        font-size:18px;
        color:#ffffff;
      }
      .server-list{
       
        transition: all 0.3s;
        .server-item{
          display: flex;
          justify-content: space-between;
          align-items:center;
          border-bottom:1px solid #eaeaea;
          padding:15px;
          .item-left{
            flex:1;
            .item-name{
              color: #f85943;
              font-size:16px;
              font-weight:bold;
            }
            .item-content{
              margin-top:8px;
              font-size:14px;
              color:#333333;
            }
          }
          .item-right{
            width:13px;
            height:13px;
            border:1px solid #757575;
            border-radius:2px;
            box-sizing:border-box;
            margin-left:50px;
          }
          &.on{
            background-color:#fffbfa;
            .item-right{
              border:none;
              background:url('../../assets/img/selcted.png') 0% 0% /100% 100% no-repeat;
            }
          }
        }
      }
      .server_more{
        width:100%;
        height: 43px;
        background:url('../../assets/img/down_more.png') center center / 19px 12px no-repeat;
        &.up{
          background:url('../../assets/img/up_more.png') center center / 19px 12px no-repeat;
        }
      }
      
    }
  }

  // 支付盒子
  .quest-pay-container{
    overflow: hidden;
    .quest-pay-title{
      margin:10px 0;
      font-size:14px;
      color:#757575;
      padding-left:20px;
      background:url('../../assets/img/money.png') 0% center / 16px 16px no-repeat;
    }
    .quest-pay-content{
      .quest-pay-list{
        border:1px solid #eaeaea;
        .quest-pay-item{
          padding:12px;
          border-bottom:1px solid #eaeaea;
          display: flex;
          align-items: center;
          .quest-pay-logo{
            width:23px;height:23px;
            margin-right:10px;
            &.wx{
              background:url('../../assets/img/wx_pay.png') 0% 0% /100% 100% no-repeat;
            }
            &.zfb{
              background:url('../../assets/img/zfb_pay.png') 0% 0% /100% 100% no-repeat;
            }
          }
          .quest-pay-name{flex:1;font-size:14px;color:#333333;}
          .quest-pay-select{
            width:13px;
            height:13px;
            box-sizing:border-box;
            border:1px solid #757575;
            border-radius:2px;
            margin-right:15px;
          }
          &.on{
            .quest-pay-select{
              border:none;
              background:url('../../assets/img/selcted.png') 0% 0% / 100% 100% no-repeat;
            } 
          }
        }
      }
    }
  }
</style>
