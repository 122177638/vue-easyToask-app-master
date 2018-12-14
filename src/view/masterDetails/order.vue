<template>
  <div class="order-container">
    <div class="order-wrapper">
      <div class="order-detail">
        <h2 class="order-title">订单详情</h2>
        <div class="order-master">
          <div class="order-master-img"><img src="http://img.ggwan.com/yd/userPic/201806/4c295728756b7f42.jpg" alt=""></div>
          <div class="order-master-msg">
            <h3>个人问题</h3>
            <p>李奎均-手机号运势分析</p>
          </div>
        </div>
        <div class="order-box">
          <div class="order-item">
            <div class="order-item-name">订单编号</div>
            <div class="order-item-cont">YIQW154338912700500060</div>
          </div>
          <div class="order-item">
            <div class="order-item-name">下单时间</div>
            <div class="order-item-cont">2018-11-28 15:12:07</div>
          </div>
        </div>
      </div>
      <div class="order-discount">
        <div class="order-box">
          <div class="order-item">
            <div class="order-item-name">订单编号</div>
            <div class="order-item-cont">YIQW154338912700500060</div>
          </div>
          <div class="order-item">
            <div class="order-item-name">下单时间</div>
            <div class="order-item-cont">2018-11-28 15:12:07</div>
          </div>
        </div>
        <div class="order-item order-money">
          <div class="order-item-name">共需支付</div>
          <div class="order-item-cont">￥889</div>
        </div>
      </div>
    </div>
    <div class="order-footer"><span>马上咨询</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .order-container{
    width:100%;
    height:100%;
    padding-bottom:50px;
    box-sizing:border-box;
    position: relative;
    .order-wrapper{
      .order-detail{
        padding:0 15px;
        background-color:#ffffff;
        .order-title{
          height:45px;
          line-height:45px;
          font-weight:bold;
          font-size:16px;
        }
        .order-master{
          padding:15px 0;
          display:flex;
          align-items:center;
          border-top:1px solid #ebebeb;
          border-bottom:1px solid #ebebeb;
          .order-master-img{
            margin-right:10px;
            img{width:40px;height:40px;vertical-align: middle;border-radius:50%;}
          }
          .order-master-msg{
            h3{font-size:15px;color:#333333;}
            p{font-size:14px;color:#757575;margin-top:5px;}
          }
        }
      }
      .order-box{padding-bottom:12px;}
      .order-discount{margin-top:10px;padding:0 15px;background-color:#ffffff;}
      .order-item{
        padding-top:12px;
        display: flex;
        justify-content:space-between;
        align-items:center;
        font-size:14px;
        color:#333333;
      }
      .order-money{
        padding:15px 0;
        font-size:16px;
        border-top:1px solid #e6e6e6;
      }
    }
    .order-footer{
      position:absolute;
      width:100%;
      bottom:0;
      left:0;
      right:0;
      span{
        height:50px;
        line-height:50px;
        background-color:#e04e3e;
        color:#ffffff;
        font-size:16px;
        display:block;
        text-align: center;
      }
    }
  }
</style>
