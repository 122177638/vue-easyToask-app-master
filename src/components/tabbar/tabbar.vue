<template>
  <footer class="tabbar-container">
    <ul class="tabbar-list">
      <router-link
          to="/Hotlist" tag="li" 
          class="tabbar-item">
        <div class="tabbar-icon"></div>
        <h3 class="tabbar-name">热门榜</h3>
      </router-link>
      <router-link
          to="/Putquest" tag="li" 
          class="tabbar-item">
        <div class="tabbar-icon"></div>
        <h3 class="tabbar-name">提问</h3>
      </router-link>
      <router-link
          to="/Secret" tag="li" 
          class="tabbar-item">
        <div class="tabbar-icon"></div>
        <h3 class="tabbar-name">开运秘籍</h3>
      </router-link>
      <router-link
          to="/Mycore" tag="li" 
          class="tabbar-item">
        <div class="tabbar-icon"></div>
        <h3 class="tabbar-name">个人中心</h3>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
  $tabIconWidth: 32px;
  $tabIconHeight: 32px;
  .tabbar-container{
    border-top:1px solid #dddddd;
    overflow: hidden;
    background-color:#ffffff;
    position: relative;
    z-index: 99999;
    .tabbar-list{
      height:50px;
      display: flex;
      .tabbar-item{
        flex:1;
        display: flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        padding-top:5px;
        box-sizing:border-box;
        .tabbar-icon{
          width:$tabIconWidth;
          height:$tabIconHeight;
        }
        .tabbar-name{
          font-size:14px;
          color:#777777;
          line-height:1.6;
        }
        @for $i from 1 through 4{
          &:nth-child(#{$i}){
          .tabbar-icon{
              background:url('./tab_01.png') 0% 0% / 100% 100% no-repeat;
            }
          }
        }
      }
      // 选中的Tabbar
      .router-link-active{
        @for $i from 1 through 4{
          &:nth-child(#{$i}){
            .tabbar-icon{
              background:url('./tab_01_on.png') 0% 0% / 100% 100% no-repeat;
            }
          } 
        }
        .tabbar-name{
          color:#db4852;
        }
      }
    }
  }
  
</style>
