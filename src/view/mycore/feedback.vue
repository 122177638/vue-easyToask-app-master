<template>
  <section class="feedback-container">
    <div class="feedback-wrapper">
      <h3 class="feedback-title">反馈内容</h3>
      <group>
        <x-textarea placeholder="在这里输入你的反馈" name="feedbackContent" :max="200" v-model="feedContent"></x-textarea>
      </group>
        <h3 class="feedback-title2">联系方式</h3>
       <group>
        <x-input placeholder="请输入邮箱" v-model="email"></x-input>
      </group>
      <div class="feedback-submit" @click="feedbackSubimt()"><span class="feedback-submit-txt">保存修改</span></div>
    </div>
  </section>
</template>

<script>
import { XTextarea, Group, XInput } from 'vux'
export default {
  components: {
    XTextarea,
    Group,
    XInput
  },
  data () {
    return {
      feedContent: '',
      email: ''
    }
  },
  methods: {
    feedbackSubimt () {
      if (this.feedContent && this.email) {
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .feedback-container{width:100%;height:100%;}
  .feedback-wrapper{
    padding:15px;
  }
  .feedback-title{font-size:14px;color:#333333;}
  .feedback-title2{font-size:14px;color:#333333;margin-top:15px;}
  .feedback-submit{
    margin-top:20px;
    width:100%;
    height:45px;
    line-height:45px;
    padding:3px;
    border:1px solid #f0403a;
    box-sizing:border-box;
    .feedback-submit-txt{
      width:100%;
      height:100%;
      text-align: center;
      line-height: 37px;
      font-size:16px;
      display: block;
      background-color:#f0403a;
      color:#ffffff;
    }
  }
</style>
