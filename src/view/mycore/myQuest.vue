<template>
  <section class="myQuest-container">
    <div class="myQuest-wrapper">
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
      tabList: ['闪测问题', '普通问题', '个人问题', '新人体验'],
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
  .myQuest-container{
    width:100%;
    height:100%;
  }
</style>
