<template>
  <section class="capitalFlow-container">
    <div class="capitalFlow-wrapper">
      <tabTG :tabList="tabList" :tabActive="tabActive" @switchTab="switchTab"></tabTG>
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
      tabList: ['收入', '支出', '结算'],
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
  .capitalFlow-container{
    width:100%;
    height:100%;
  }
</style>
