<template>
  <section class="putquest-container">
    <tabTG :tabList="questTypeTab" :tabActive="questTypeOn" @switchTab="switchType"></tabTG>
    <div class="sort-tabbar">
      <ul class="sort-tabbar-ul">
        <li :class="['sort-tabbar-li',{'on':questSortOn==index}]" 
            v-for="(item,index) in questSortTab" 
            :key="index"
            @click="switchSort(item,index)">
          <span>{{item.name}}</span>
          <span :class="['san_icon',item.sort == -1?'':item.sort == 1?'Max':'Min']"></span>
        </li>
      </ul>
    </div>
    <scroll class="putquest-content" 
            :data="questListData" ref="scroll"
            :pullDownRefresh="{threshold:50,stop:50,txt:'刷新成功'}"
            :pullUpLoad="{threshold:50,txt:{more:'下拉加载更多',noMore:'暂无更多数据'}}"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp">
        <ul class="putquest-ul">
          <!-- 提问 -->
          <li class="putquest-li putquest-start" v-if="questListData">
            <div class="putquest-start-top">
              <h2 class="quick-quest">快速提问</h2>
              <p class="quick-wen">不知道选哪个老师好？</p>
              <div class="quick-wen-btn">点击试试！</div>
            </div>
            <div class="quick-cost-box">
              <p><small>￥</small><strong>38</strong></p>
              <p>已回答6万+次</p>
            </div>
            <div class="quick-tabs">
              <span>感情</span>
              <span>流年运势</span>
              <span>感情</span>
            </div>
          </li>
          <template v-if="questListData">
            <li class="putquest-li" v-for="item in questListData" :key="item.cid" @click="navToQuestDetail()">
              <div class="putquest-li-score">{{item.score}}</div>
              <div class="putquest-li-info">
                <h3 class="li-info-name">{{item.name}}</h3>
                <i class="li-info-hr"></i>
                <p class="li-info-post">{{item.postTxt}}</p>
                <div class="li-info-avatar"><img :src="item.headImg" alt=""></div>
              </div>
              <div class="li-info-cost">
                <p class="answer-money">￥<span>{{item.money}}</span></p>
                <p class="answer-num">已答{{item.answerNum}}次</p>
              </div>
              <div class="li-info-tabs">
                <span v-for="subItem in item.tabs" :key="subItem">{{subItem}}</span>
              </div>
            </li>
          </template>
        </ul>
    </scroll>
  </section>
</template>

<script>
import tabTG from '../../components/tabTG/tabTG';
export default {
  name: 'Putquest',
  components: {
    tabTG
  },
  data () {
    return {
      questTypeTab: ['情感', '事业', '风水', '财运', '其他'],
      questTypeOn: 0, 
      tabActiveLeft: null,
      questSortTab: [{name: '综合', sort: -1}, {name: '评分', sort: 1}, {name: '已答数', sort: 1}], // -1隐藏 0小到大 1大到小
      questSortOn: 0,
      questListData: [],
      loadpromt: '',
      page: 0
    }
  },
  mounted () {
    this.questData();
  },
  activated () {
    // console.log('keep-alive')
  },
  methods: {
    questData () {
      this.$http.post('/putquest/index', {name: 'anles'}, {NOINTERCEPT: true}).then((response) => {
        if (response.data.ERROR_OK) {
          this.questListData = this.questListData.concat(response.data.articles);
        } else {
          this.loadpromt = '暂无更多数据';
        }
        console.log(response)
      })
    },
    // 初始化数据
    // 类型切换
    switchType (idx) {
      if (this.questTypeOn !== idx) {
        this.questTypeOn = idx;
      }
    },
    // 排序切换
    switchSort (item, idx) {
      // 正选反选
      if (this.questSortOn === idx) {
        switch (item.sort) {
          case 0:
            item.sort = 1;
            break;
          case 1:
            item.sort = 0;
            break;
          default:
            item.sort = -1;
            break;
        }
      } else {
        this.questSortOn = idx;
      }
    },
    navToQuestDetail () {
      this.$router.push('/MasterDetails')
    },
    onPullingDown () {
			// 模拟更新数据
			console.log('pulling down and load data')
			setTimeout(() => {
				if (this._isDestroyed) {
					return
				}
				if (Math.random() > 0.5) {
					// 如果有新数据
					this.questData();
				} else {
					// 如果没有新数据
					this.$refs.scroll.forceUpdate()
				}
			}, 2000)
		},
		onPullingUp () {
			// 更新数据
			console.log('pulling up and load data')
			setTimeout(() => {
				if (this._isDestroyed) {
					return
				}
				if (Math.random() > 0.5) {
					// 如果有新数据
					this.questData();
				} else {
					// 如果没有新数据
					this.$refs.scroll.forceUpdate()
				}
			}, 1500)
		},
		clickItem (e, w) {
			console.log(e, w)
		}
  }
}
</script>

<style lang="scss" scoped>
  .putquest-container{height:100%;display: flex;flex-direction:column;}

  .sort-tabbar{
    background-color:#ffffff;
    border-bottom:1px solid #dddddd;
    .sort-tabbar-ul{
      display: flex;
    }
    .sort-tabbar-li{
      flex:1;
      height:40px;
      line-height: 40px;
      text-align: center;
      font-size:13px;
      color:#333333;
      &.on{
        color:#e04e3e;
        .san_icon{
          &.Max{
            visibility:initial;
            margin-top:10px;
            transform: rotate(180deg)
          }
          &.Min{
            visibility:initial;
          }
        }

      }
      span{
        display: inline-block;
        vertical-align:middle;
      }
      .san_icon{
        border:5px solid transparent;
        border-bottom-color:red;
        margin-left:2px;
        margin-bottom:3px;
        border-radius: 2px;
        visibility: hidden;
      }
    }
  }
  .putquest-content{
    flex: 1;
    overflow:hidden;
    -webkit-overflow-scrolling:touch;
    .putquest-ul{
      padding:15px;
      display: flex;
      justify-content: space-between;
      flex-wrap:wrap;
      .putquest-li{
        width:48.5%;
        height:205px;
        background-color:#ffffff;
        box-sizing:border-box;
        margin-top:15px;
        padding:10px;
        box-shadow:0 0 10px rgb(218, 210, 210);
        &:nth-child(1){margin-top:0}
        &:nth-child(2){margin-top:0}
        &.putquest-start{
          padding:0px;
          .putquest-start-top{
            background-color:#f4644e;
            padding:10px 0;
            text-align: center;
            color:#ffffff;
            .quick-quest{
              font-size:18px;
              line-height: 18px;
              padding-top:10px;
              &:before{
                content: '';
                width:18.5px;
                height:18.5px;
                display:inline-block;
                background:url('../../assets/img/putquest.png') 0% 0% /100% 100% no-repeat;
                vertical-align:top;
                margin-right:5px;
              }
            }
            .quick-wen{
              font-size:13px;
              padding-top:8px;
            }
            .quick-wen-btn{
              font-size:12px;
              width:115px;
              height:28px;
              line-height: 28px;
              background-color:#ffffff;
              border-radius:20px;
              color:#e04e3e;
              display: inline-block;
              margin-top:20px;
            }
          }
          .quick-cost-box{
            display:flex;
            justify-content:space-between;
            align-items: center;
            padding:15px 10px 5px;
            p{
              font-size:13px;
              color: #999;
              small{color:#333333;}
              strong{color:#333333;font-size:18px;}
            }
          }
          .quick-tabs{
            padding:5px;
            font-size:0;
            span{
              font-size:12px;
              color: #e04e3e;
              border:1px solid #e04e3e;
              padding:1px 4px;
              display: inline-block;
              margin-right:5px;
              &:nth-last-child(1){margin-right:0;}
            }
          }
        }
        .putquest-li-score{
          color: rgba(224, 78, 62, 0.4);
          text-align:right;
          font-size:20px;
        }
        .putquest-li-info{
          padding:10px 0;
          overflow: hidden;
          border-bottom:1px solid #eaeaea;
          .li-info-name{
            font-size:17px;
            float:left;
            width:18px;
            line-height:1;
          }
          .li-info-hr{
            width:1px;
            background-color:#eaeaea;
            height:67px;
            display: inline-block;
            float:left;
            margin:0 10px;
          }
          .li-info-post{
            width:30px;
            height:73px;
            font-size:12px;
            color:#555555;
            line-height: 1.2;
            float: left;
            writing-mode: vertical-lr;
          }
          .li-info-avatar{
            img{
              width:70px;
              height:70px;
              float:right;
            }
          }
        }
        .li-info-cost{
          display: flex;
          align-items:center;
          justify-content:space-between;
          padding-top:12px;
          padding-bottom:8px;
          .answer-money{
            font-size:12px;
            color:#333333;
            span{font-size:18px;}
          }
          .answer-num{
            font-size: 0.26rem;
            color: #999;
          }
        }
        .li-info-tabs{
          font-size:0;
          span{
            font-size:12px;
            color: #e04e3e;
            border:1px solid #e04e3e;
            padding:1px 4px;
            display: inline-block;
            margin-right:5px;
            &:nth-last-child(1){margin-right:0;}
          }
        }
      }
    }
  }
  
</style>
