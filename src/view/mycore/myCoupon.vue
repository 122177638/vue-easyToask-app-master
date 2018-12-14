<template>
  <section class="myCoupon-container">
    <div class="myCoupon-wrapper">
      <tabTG :tabList="tabList" :tabActive="tabActive" :isBadge="0" @switchTab="switchTab"></tabTG>
    </div>
  </section>
</template>

<script>
import tabTG from '../../components/tabTG/tabTG';
export default {
  components: {
    tabTG
  },
  data () {
    return {
      tabList: ['已使用', '已过期'],
      tabActive: 0
    }
  },
  methods: {
    switchTab (index) {
      this.tabActive = index;
    }
  }
}
</script>

<style lang="scss" scoped>
  .myCoupon-container{
    width:100%;
    height:100%;
  }
</style>
