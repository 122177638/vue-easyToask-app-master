<template>
  <div class="nav-tabbar">
    <ul class="nav-tabbar-ul" ref="tabbarNode">
      <li 
        :class="['nav-tabbar-li',{'on':tabActive==index}]" 
        v-for="(item,index) in tabList" 
        @click="switchType(index)"
        :key="index">
        {{isBadge || isBadge == 0?item+'('+isBadge+')':item}}
      </li>
    </ul>
    <div class="nav-active" :style="'transform:translate('+tabActiveLeft+'px)'"></div>
  </div>
</template>

<script>
export default {
  props: {
    tabList: Array,
    tabActive: Number,
    isBadge: Number
  },
  data () {
    return {
      tabActiveLeft: 0
    }
  },
  mounted () {
    this.tabbarNode = this.$refs.tabbarNode;
    this.comtabActive()
  },
  watch: {
    // 监听type切换
    tabActive () {
      this.comtabActive()
    }
  },
  methods: {
    switchType (idx) {
      this.$emit('switchTab', idx)
    },
    // 计算三角位置
    comtabActive () {
      let event = this.tabbarNode.children[this.tabActive];
      let activeNode = event.parentNode.nextElementSibling.offsetWidth / 2; // 获取选中三角宽度取半
      this.tabActiveLeft = event.offsetLeft + event.clientWidth / 2 - activeNode; // 计算三角位置
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-tabbar{
    background-color:#ffffff;
    border-bottom:1px solid #e04e3e;
    position: relative;
    .nav-tabbar-ul{
      display: flex;
      .nav-tabbar-li{
        flex:1;
        height:45px;
        text-align: center;
        line-height: 45px;
        color:#757575;
        font-size:15px;
        &.on{
          color:#e04e3e;
        }
      }
    }
    .nav-active{
      transition: all 0.3s ease-out;
      border:8px solid transparent;
      position: absolute;
      border-bottom-color:#e04e3e;
      bottom:0;
    }
  }
</style>
