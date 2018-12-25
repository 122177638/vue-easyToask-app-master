<template>
  <div class="step-container">
    <div class="step-wrapper">
      <div class="step-title">请选择为谁提问？<span class="userAdd" @click="addUser()">添加新档案</span></div>
      <scroll class="step-content">
        <ul class="userMsg-list">
          <li 
            :class="['userMsg-item',{'on':index == checkActive}]" 
            v-for="(item,index) in userData" 
            :key="index"
            @touchstart="startCount(index)"
            @touchmove="countMove($event)"
            @touchend="checkoutUser(index,$event)">
            <!-- <span class="userMsg-default" v-show="index == checkActive"></span> -->
            <div class="userMsg-name">{{sliceName(item.userName)}}</div>
            <div class="userMsg-content">
              <div class="userMsg-c-top">
                <span class="userMsg-nickName">{{item.userName}}</span>
                <span class="userMsg-sex">{{item.gender == 1?'男':'女'}}</span>
              </div>
              <div class="userMsg-c-bottom">
                <p>出生日期： {{item.dateName}}</p>
                <p>出生地点： {{item.addressVal}}</p>
              </div>
            </div>
            <div class="userMsg-set" @click="setUser(item,index)">修改</div>
          </li>
        </ul>
      </scroll>
    </div>
    <actionsheet v-model="sheetShow" :menus="menus" @on-click-menu-delete="deleteUser()" show-cancel></actionsheet>
    <inputUser v-model="showDialog" @formSubmit="getFromValue" :formData="userItem"></inputUser>
  </div>
</template>

<script>
import { Actionsheet } from 'vux';
import inputUser from '../../components/inputUser/inputUser';
export default {
  components: {
    Actionsheet,
    inputUser
  },
  data () {
    return {
      checkActive: 0,
      userData: [],
      userItem: null,
      touchLoop: null,
      sheetShow: false,
      showDialog: false,
      menus: {
        delete: '<span style="color:red">删除</span>'
      },
      delUserIndex: null
    }
  },
  mounted () {

  },
  methods: {
    startCount (idx) {
      this.touchLoop = setTimeout(() => {
        this.sheetShow = true;
        this.delUserIndex = idx; // 保存删除对象
      }, 500)
    },
    clearCount () {
      clearTimeout(this.touchLoop);
      this.touchLoop = null;
    },
    countMove (e) {
      this.clearCount(e);
    },
    checkoutUser (index, e) {
      this.clearCount(e)
      if (!this.sheetShow && e.target.className !== 'userMsg-set') {
        this.checkActive = index;
      }
    },
    deleteUser () {
      if (this.delUserIndex !== null) {
        this.userData.splice(this.delUserIndex, 1);
        this.delUserIndex = null;
      }
    },
    addUser () {
      this.userItem = null;
      this.showDialog = true;
    },
    setUser (item, index) {
      item.setIndex = index;
      this.userItem = item;
      this.showDialog = true;
    },
    getFromValue (val) {
      if (val.setIndex !== undefined) {
        this.userData[val.setIndex] = val;
        delete this.userData[val.setIndex].setIndex;
      } else {
        this.userData.push(val);
      }
    },
    sliceName (name) {
      return name.slice(0, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .step-container{width:100%;height:100%;overflow: hidden;}
  .step-wrapper{background-color:#ffffff;height:100%;display:flex;flex-direction:column;}
  .step-content{flex:1;}
  .step-title{
    font-size:15px;
    color:#333333;
    padding:12px 0;
    text-align: center;
    position: relative;
    .userAdd{
      position:absolute;
      font-size:13px;
      color:rgb(10, 144, 233);
      right:20px;
      top:50%;
      transform:translateY(-50%);
    }
  }
  .userMsg-list{
    padding:10px;
    .userMsg-item{
      display:flex;
      align-items:center;
      padding:10px;
      margin-bottom: 10px;
      border:2px solid #b8b8b8;
      position: relative;
      &.on{
        border:2px solid #f85943;
        .userMsg-name{
          background-color:#f85943;
        }
      }
      .userMsg-default{
        position: absolute;
        width:32px;
        height:32px;
        text-align:center;
        border-radius:5px;
        background:url('../../assets/img/check-ac.png') 0% 0% /100% 100% no-repeat;
        color: #ffffff;
        top:15px;
        right:20%;
      }
      .userMsg-name{
        width:32px;
        height:32px;
        line-height:32px;
        text-align:center;
        border-radius:50%;
        background-color:rgba(0,0,0,0.3);
        color:#ffffff;
        font-size:17px;
        margin-right:10px;
      }
      .userMsg-content{
        display: flex;
        flex-direction:column;
        flex:1;
        overflow: hidden;
        color:#333333;
        .userMsg-c-top{
          .userMsg-nickName{font-size:15px;}
          .userMsg-sex{font-size:15px;margin-left:12px;}
        }
        .userMsg-c-bottom{
          font-size:13px;
          margin-top:3px;
        }
      }
      .userMsg-set{
        color:#969696;padding:5px 10px;border-left:1px solid #dbdada;
      }
    }
  }
</style>
