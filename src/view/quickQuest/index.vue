<template>
  <section class="quickQuest-container">
    <div class="quickQuest-wrapper">
      <div class="quickQuest-header">
        <step v-model="step" background-color='#f5f5f5'>
          <step-item :title="item" v-for="item in stepData" :key="item"></step-item>
        </step>
      </div>
      <div class="quickQuest-content">
        <transition :name="transitionName">
          <!-- <keep-alive> -->
            <component :is="stepCom" :key="stepCom" ref="childrenNode"></component>
          <!-- </keep-alive> -->
        </transition>
      </div>
      <div class="quickQuest-footer">
        <div class="quickQuest-footer-box">
          <div class="quickQuest-prevBtn" @click="prevStep()" v-show="step">重新选择</div>
          <div class="quickQuest-nextBtn" @click="nextStep()">下一步</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import step01 from './step01.vue'
import step02 from './step02.vue'
import step03 from './step03.vue'
import { Step, StepItem } from 'vux'

export default {
  components: {
    Step,
    StepItem,
    step01,
    step02,
    step03
  },
  watch: {
    step (val, oldval) {
      this.transitionName = val > oldval ? 'slide-left' : 'slide-right';
      if (val < this.stepData.length) {
        this.stepCom = `step0${val += 1}`
      } else {
        // 跳转完成
        console.log('完成')
      }
    }
  },
  mounted () {

  },
  updated () {

  },
  data () {
    return {
      step: 0,
      stepCom: 'step01',
      stepData: ['服务类型', '咨询档案', '提交订单'],
      transitionName: '',
      server: null,
      check: null
    }
  },
  methods: {
    prevStep () {
      this.step--;
    },
    nextStep () {
      if (this.step < this.stepData.length) {
        this.step++;
        if (this.$refs.childrenNode.serverItem !== undefined) {
          this.server = this.$refs.childrenNode.serverItem;
        }
        if (this.$refs.childrenNode.checkActive !== undefined) {
          this.check = this.$refs.childrenNode.checkActive;
        }
        console.log(this.check, this.server)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .quickQuest-container{width:100%;height:100%;}
  .quickQuest-wrapper{height:100%;display: flex;flex-direction:column;}
  .quickQuest-header{
    padding:10px 15px;
  }
  .quickQuest-content{flex:1;overflow: hidden;}
  .quickQuest-footer{
    width:100%;
    position:relative;
    background-color:#f5f5f5;
    .quickQuest-footer-box{
      display: flex;
      padding:10px;
      justify-content:space-between;
    }
    .quickQuest-prevBtn{
      height:45px;
      line-height:45px;
      text-align:center;
      flex:1;
      font-size:16px;
      color:#ffffff;
      background-color:rgb(133, 136, 136);
      border-radius: 6px;
      margin-right:20px;
    }
    .quickQuest-nextBtn{
      height:45px;
      line-height:45px;
      text-align:center;
      flex:1;
      font-size:16px;
      color:#ffffff;
      background-color:#09BB07;
      border-radius: 6px;
    }
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 450ms;
    position: absolute;
    left:0;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
