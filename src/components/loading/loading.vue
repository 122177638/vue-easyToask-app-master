<template>
  <div class="loading-container" v-show="loadParams.loadShow">
    <div class="loading-bg" v-show="loadParams.hasBgShow"></div>
    <div class="loading-content">{{loadParams.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    loadParams: {
      title: String, 
      hasBgShow: [Number, Boolean], 
      loadShow: [Number, Boolean]
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading-container{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color:transparent;
    z-index:1000;
    .loading-bg{
      width:100%;
      height:100%;
      background-color:rgba(0,0,0,0.7);
      position: absolute;
      top:0;
      left:0;
    }
    .loading-content{
      width:88px;
      height:88px;
      position: absolute;
      left:50%;
      top:50%;
      margin-top:-44px;
      margin-left:-44px;
      text-align: center;
      line-height: 88px;
      animation: loading infinite 1s linear;
      font-size:16px;
      color:#e04e3e;
      @keyframes loading{
        @for $i from 1 through 12{
          $percent: (100% / 12) * $i;
          #{$percent} { background:url('./load_#{$i}.png') 0% 0% / 100% 100% no-repeat }
        }
      }
    }
    
  }

</style>
