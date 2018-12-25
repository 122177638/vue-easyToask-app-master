<template>
  <div class="dialog-container">
    <transition name="bgfade">
      <div class="dialog-bg" v-show="showDialog"></div>
    </transition>
    <transition name="fade">
      <div class="dialog-content" v-show="showDialog">
        <h3 class="dialog-title">请输入用户信息</h3>
        <div class="dialog-wrap">
          <ul class="form-list">
            <li class="form-item">
              <div class="form-point">您的姓名:</div>
              <div class="form-input">
                <input type="text" class="form-val" v-model="userName" placeholder="请输入姓名">
              </div>
            </li>
            <li class="form-item">
              <div class="form-point">您的性别:</div>
              <div class="form-radio">
                <label for="man" class="radio-item">
                  <span :class="['radio-choice', {'on':gender == 1}]"></span>
                  <span class="radio-name">男</span>
                  <input type="radio" id="man" v-model="gender" value="1">
                </label>
                <label for="woman" class="radio-item">
                  <span :class="['radio-choice', {'on':gender == 0}]"></span>
                  <span class="radio-name">女</span>
                  <input type="radio" id="woman" v-model="gender" value="0">
                </label>
              </div>
            </li>
            <li class="form-item">
              <div class="form-point">出生日期:</div>
              <div class="form-plugin">
                <div :class="['form-plugin-val',{'on':dateVal || dateInit}]" ref="dateNode" :data-date="dateInit">请选择出生日期</div>
              </div>
            </li>
            <li class="form-item">
              <div class="form-point">出生地点:</div>
              <div class="form-plugin">
                <div :class="['form-plugin-val',{'on':addressVal!='请选择出生地点'}]" @click="showAddress=true">{{addressVal}}</div>
                <x-address style="display:none;" :raw-value="true" title="title" @on-shadow-change="getAddressVal" v-model="address" :list="addressData" :show.sync="showAddress"></x-address>
              </div>
            </li>
          </ul>
          <div class="form-submit" @click="formSubmit()">提交</div>
        </div>
        <span class="dialog-close" @click="showDialog = false">x</span>
      </div>
    </transition>
  </div>
</template>

<script>
import { XAddress, ChinaAddressV4Data } from 'vux'
import Acalendar from '../../../static/js/YD_calendar.min.js'
export default {
  props: {
    value: Boolean,
    formData: Object
  },
  components: {
    XAddress
  },
  computed: {
    showDialog: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      userName: '',
      gender: 1,
      dateName: '',
      dateVal: '',
      address: ['北京市', '市辖区', '东城区'],
      addressData: ChinaAddressV4Data,
      addressVal: '请选择出生地点',
      showAddress: false,
      dateInit: ''
    }
  },
  watch: {
    showDialog (val) {
      if (val) this.getFormData();
    }
  },
  mounted () {
    this.dateNode = this.$refs.dateNode;
    this.PagePluginInit();
  },
  methods: {
    PagePluginInit () {
      let that = this;
      new Acalendar(this.dateNode, function($1, $2){ // eslint-disable-line
        that.dateName = $1;
        that.dateVal = $2;
      }) 
    },
    getAddressVal (ids, names) {
      this.addressVal = names.join(' ');
    },
    formDataInit () {
      this.dateInit = '';
      this.address = ['北京市', '市辖区', '东城区'];
      this.gender = 1;
      this.dateVal = '';
      this.dateName = '';
      this.userName = '';
      this.dateNode.innerHTML = '请选择出生日期';
    },
    formSubmit () {
      if (!this.userName) {
        this.$vux.toast.show({
          text: '请输入姓名',
          type: 'text',
          position: 'middle'
        })
        return false;
      } else if (!this.dateVal) {
        this.$vux.toast.show({
          text: '请选择出生日期',
          type: 'text',
          position: 'middle',
          width: '10em'
        })
        return false;
      }
      let result = {
        addressVal: this.addressVal, 
        gender: this.gender, 
        dateVal: this.dateVal, 
        dateName: this.dateName, 
        userName: this.userName
      }
      if (this.formData && this.formData.setIndex !== undefined) {
        result.setIndex = this.formData.setIndex;
      }
      this.showDialog = false;
      this.$emit('formSubmit', result);
    },
    getFormData () {
      if (this.formData) {
        this.userName = this.formData.userName;
        this.gender = this.formData.gender;
        this.address = this.formData.addressVal.split(' '); 
        let dateArr = this.formData.dateVal.split('-');
        let dateInitResult = dateArr[1] + '-' + dateArr[2] + '-' + dateArr[3] + '-' + (dateArr[4] / 2 + 1);
        this.dateInit = dateInitResult;
        this.dateNode.innerHTML = this.formData.dateName;
      } else {
        this.formDataInit();
      }
    }
  }
}
</script>
<style>
  @import url('../../../static/css/YD_calendar.min.css');
</style>

<style lang="scss" scoped>
  $formItemHeight: 45px;
  $formRadioColor: rgb(235, 37, 37);
  .dialog-container{
  }
  .dialog-bg{
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    left:0;right:0;top:0;bottom:0;z-index:22;
  }
  .dialog-close{
    font-size:20px;
    border-radius:50%; 
    width:20px;
    height:20px;
    line-height:20px;
    text-align:center;
    position: absolute;
    right:10px;
    top:10px;
  }
  .dialog-content{
    background-color:#ffffff;
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    width:88%;
    z-index:25;
    border-radius: 5px;
    overflow: hidden;
    .dialog-title{
      padding:10px 0;
      font-size:16px;
      color:#333333;
      text-align: center;
    }
    .form-list{
      padding:10px 15px;
      box-sizing: border-box;
      .form-item{
        display:flex;
        align-items:center;
        margin-bottom:10px;
        overflow: hidden;
        &:nth-last-child(1){margin-bottom:0;}
        .form-point{font-size:15px;color:#000000;padding-right:10px;height:$formItemHeight;line-height: $formItemHeight;}
        .form-input{
          flex:1;
          height:$formItemHeight;
          border:1px solid #eaeaea;
          .form-val{
            width:100%;
            height:100%;
            box-sizing:border-box;
            outline:none;
            padding-left:10px;
            font-size:15px;
          }
        }
        .form-plugin{
          flex:1;
          height:$formItemHeight;
          line-height: $formItemHeight;
          display: flex;
          align-items:center;
          border:1px solid #eaeaea;
          overflow: hidden;
          .form-plugin-val{
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
            width: 100%;
            text-align: left;
            padding-left:10px;
            box-sizing:border-box;
            font-size:15px;
            color:#757575;
            &.on{color:#333333;}
          }
        }
        .form-radio{
          flex:1;
          height:45px;
          align-items:center;
          display: flex;
          .radio-item{
            display: block;
            margin-right:20px;
            line-height: 45px;
            font-size:0;
            &:nth-last-child(1){margin-right:0;}
            .radio-name{color: #333333;font-size:15px;vertical-align: middle;margin-left:8px;}
            .radio-choice{
              width:14px;
              height:14px;
              display: inline-block;
              border:1px solid $formRadioColor;
              border-radius:50%;
              vertical-align: middle;
              position: relative;
              &.on::after{
                content:'';
                width:10px;
                height:10px;
                position:absolute;
                background-color:$formRadioColor;
                border-radius: 50%;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
              }
            }
          }
          input[type="radio"]{display: none;}
        }
      }
    }
    .form-submit{
      width:100%;
      height:45px;
      line-height:45px;
      text-align:center;
      background-color:#f85943;
      color:#ffffff;
      font-size:16px;
    }
  }
  .fade-enter{transform:translate(-50%,-50%) scale(1.2);opacity: 0;}
  .fade-enter-active,.fade-leave-active{transition: all .3s ease-in;will-change: transform;}
  .fade-enter-to,.fade-leave{transform:translate(-50%,-50%) scale(1);opacity: 1;}
  .fade-leave-to{transform:translate(-50%,-50%) scale(0.8);opacity: 0;}

  .bgfade-enter,.bgfade-leave-to{opacity: 0;}
  .bgfade-enter-active,.bgfade-leave-active{transition: opacity 0.4s ease-in;}
  .bgfade-enter-to,.bgfade-leave{opacity: 1;}
</style>
