<template>
  <section class="consultation-container">
    <scroll class="consultation-wrapper"
      :data="chatData" ref="scroll"
      :pullUpLoad="{threshold:50,txt:{more:'下拉加载更多',noMore:'暂无更多数据'}}"
      @pullingUp="onPullingUp">
      <h2 class="consultation-header">售前咨询</h2>
      <div class="consultation-content">
        <swipeout class="consultation-list">
          <swipeout-item 
            :threshold=".5" 
            underlay-color="#cccccc" 
            :auto-close-on-button-click="false"
            @on-close="menuClose()"
            @on-open="menuOpen()"
            v-for="(item,index) in chatData" 
            ref="swipeoutItem"
            :key="index">
            <div slot="right-menu">
              <swipeout-button @click.native="onButtonClick('delete',index)" :width="90" background-color="#D23934">{{deleteTxt}}</swipeout-button>
            </div>
            <div slot="content"  @click="naviToChat()">
              <div class="consultation-item">
                <div class="headImg"><img :src="item.img" alt=""></div>
                <div class="item-info">
                  <div class="item-info-top">
                    <h4 class="nickName">{{item.name}}</h4>
                    <div class="item-time">{{item.time}}</div>
                  </div>
                  <p class="item-context ellipsis">{{item.content}}</p>
                </div>
              </div>
            </div>
          </swipeout-item>
        </swipeout>
      </div>
    </scroll>
  </section>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
export default {
  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  data () {
    return {
      deleteTxt: '删除',
      butWidth: 80,
      disableClick: false,
      chatData: [
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'},
        {img: 'http://img.ggwan.com/yd/userPic/201805/5f98b6dfa2d30524.jpg', name: 'anles', content: '流弊的人生不需要解释流弊的人生不需要解释流弊的人生不需要解释', time: '10分钟前'}
      ]
    }
  },
  methods: {
    onButtonClick (menuItem, index) {
      if (menuItem === 'delete') {
        if (this.deleteTxt === '确定删除') {
          this.$refs.swipeoutItem[index].close();
          this.deleteTxt = '删除';
          this.disableClick = false;
        } else {
          this.deleteTxt = '确定删除';
        }
      }
    },
    menuOpen () {
      this.disableClick = true;
    },
    menuClose () {
      this.deleteTxt = '删除';
      this.disableClick = false;
    },
    naviToChat () {
      if (this.disableClick) {
        this.disableClick = false;
      } else {
        // 点击事件
        this.$router.push('/Chat');
        console.log('跳转chat页面')
      }
    },
    onPullingUp () {
			// 更新数据
			console.log('pulling up and load data')
			setTimeout(() => {
				if (this._isDestroyed) {
					return false;
				}
				if (Math.random() > 0.5) {
					// 如果有新数据
					console.log(123)
				} else {
					// 如果没有新数据
					this.$refs.scroll.forceUpdate()
				}
			}, 1500)
		}
  }
}
</script>

<style lang="scss" scoped>
  .consultation-container{width:100%;height:100%;}
  .consultation-wrapper{
    .consultation-header{padding:10px;font-size:15px;color:#888888;}
    .consultation-list{
      background-color:#ffffff;
      border-top:1px solid #eaeaea;
      .consultation-item{
        padding:10px;
        border-bottom:1px solid #eaeaea;
        display:flex;
        align-items:center;
        background-color:#ffffff;
        .headImg{
          margin-right:10px;
          img{
            width:55px;
            height:55px;
            vertical-align:middle;
            display:block;
            border-radius: 50%;
          }
        }
        .item-info{
          flex:1;
          width:100%;
          overflow:hidden;
          .item-info-top{
            display: flex;
            align-items:center;
            justify-content:space-between;
            .nickName{font-size:15px;color:#333333;}
            .item-time{font-size:12px;color:#999999;}
          }
          .item-context{font-size:12px;color:#757575;margin-top:10px;padding-right:10px;box-sizing:border-box;}
        }
      }
    }
    
  }
</style>
