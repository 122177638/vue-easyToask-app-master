<template>
  <div class="chat-footer">
      <div class="chat-footer-box">
        <div class="chat-footer-type">
          <img src="./btn_text.png" v-if="!chatValue" alt="">
          <img src="./emoji.png" @click="$emit('emoji',$event)" v-else alt="">
        </div>
        <div class="chat-key-box">
          <textarea 
            class="chat-footer-import" 
            ref="textscroll"
            rows="1"
            v-model="chatValue"
            :style="'height:'+textareaHeight"
            @focus="$emit('focus',$event)"
            @blur="$emit('blur',$event)">
          </textarea>
        </div>
        <div class="chat-footer-emoji" v-show="!chatValue">
          <img src="./emoji.png" alt="" @click="$emit('emoji',$event)">
        </div>
        <div class="chat-footer-file" v-show="!chatValue">
          <label for="files"><img src="./file.png" alt=""></label>
          <input type="file" id="files" @change="$emit('file',$event)" name="file" accept="image/*" multiple="multiple">
        </div>
        <div class="chat-footer-enter" v-show="chatValue" @click="$emit('enter',$event)">发送</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: String,
    default: ''
  },
  data () {
    return {
      textareaHeight: 'auto' // 默认auto,使用rows来表示高度
    }
  },
  computed: {
    chatValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  mounted () {
    this.textscroll = this.$refs.textscroll;
    this.$overscroll(this.textscroll)
  },
  watch: {
    chatValue () {
      this.getChatValue();
    }
  },
  methods: {
    getChatValue () {
      this.textareaHeight = 'auto';
      this.$nextTick(() => {
        let scrollHeight = this.textscroll.scrollHeight;
        this.textareaHeight = scrollHeight + 'px';
        this.textscroll.scrollTop = scrollHeight;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat-footer{
    .chat-footer-box{
      background-color:#f2f2f2;
      border-top:1px solid #eaeaea;
      display:flex;
      align-items:flex-end;
      box-sizing: border-box;
      padding:6px 10px;
      .chat-footer-type{
        margin-bottom:6px;
        img{width:24px;height:24px;vertical-align: middle;}
      }
      .chat-footer-emoji{
        margin-bottom:6px;
        margin-right:10px;
        img{width:24px;height:24px;vertical-align: middle;}
      }
      .chat-key-box{
        width: 100%;
        flex:1;
        margin:0 10px;
        font-size:0;
        background-color:#ffffff;
        border:1px solid #e4e4e4;
        border-radius:6px;
        overflow: hidden;
      }
      .chat-footer-import{
          width: 100%;
          box-sizing:border-box;
          padding:8px 6px;
          border:none;
          font-size:15px;
          color:#333333;
          outline:none; 
          max-height: 100px;
          line-height: 1.2;
          word-wrap: break-word;
          word-break: break-all;
      }
      .chat-footer-file{
        label{display: inline-block;}
        margin-bottom:6px;
        img{width:24px;height:24px;vertical-align:middle;}
        #files{display:none;}
      }
      .chat-footer-enter{
        width:58px;
        height:32px;
        line-height: 32px;
        text-align:center;
        background-color:#0d8a56;
        color:#ffffff;
        border-radius:5px;
      }
    }
  }
</style>
