<template>
  <div class="evaluateList-container">
    <scroll>
      <evaluate :data="evaluateData"></evaluate>
    </scroll>
  </div>
</template>

<script>
import evaluate from '../../components/evaluate/evaluate'
export default {
  components: {
    evaluate
  },
  data () {
    return {
      evaluateData: []
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
