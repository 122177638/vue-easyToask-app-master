<template>
  <div class="answerList-container">
    <scroll>
      <answer :data="answerData"></answer>
    </scroll>
  </div>
</template>

<script>
import answer from '../../components/answer/answer'
export default {
  data () {
    return {
      answerData: [
        {id: 15, userName: '张大师'}
      ]
    }
  },
  components: {
    answer
  }
}
</script>

<style lang="scss" scoped>

</style>
