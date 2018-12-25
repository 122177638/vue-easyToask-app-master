<template>
  <div class="step-container">
    <div class="step-wrapper">
      <div class="step-title">请选择咨询问题类型</div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      ]
    }
  },
  methods: {
    switchSerItem (idx) {
      this.serverItem = idx;
    }
  }
}
</script>
<style lang="scss" scoped>
  .step-container{width:100%;height:100%;overflow: hidden;}
  .step-title{
    font-size:15px;
    color:#333333;
    padding:12px 0;
    text-align: center;
  }
  .step-wrapper{
    display: flex;
    flex-direction:column;
    height:100%;
    background-color:#ffffff;
    .server-check-wrap{
      flex:1;
    }
    .server-list{
      transition: all 0.3s;
      .server-item{
        display: flex;
        justify-content: space-between;
        align-items:center;
        border-bottom:1px solid #eaeaea;
        padding:15px;
        &:nth-child(1){border-top:1px solid #eaeaea;}
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
  }
</style>
