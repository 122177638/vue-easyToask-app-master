<template>
  <div class="Emoji-container">
    <scroll class="Emoji-wrapper" 
      :readyScrollX="true" 
      :isScrollInit="isScrollInit" 
      :scrollX="true" 
      :listenScrollEnd="true"
      :snap="true"
      :isDots="true" 
      :momentum="false"
      :stopPropagation="true">
      <div class="Emoji-slider-group">
        <div class="Emoji-slider" v-for="(items,index) in faceData" :key="index">
          <div class="Emoji-box" v-for="(item,index) in items" :key="index">
            <img :src="item.path" @click="$emit('checkFace',item,$event)" class="Emoji-item" alt="">
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import faceArray from './face.js'
export default {
  props: {
    faceShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    faceShow (now) {
      if (now) {
        this.isScrollInit = true;
      }
    }
  },
  data () {
    return {
      faceData: [],
      isScrollInit: false
    }
  },
  created () {
    this.faceData = this.getFaceRowsArray(24, faceArray);
  },
  methods: {
    // 为face分组
    getFaceRowsArray (slideNum, totalArray) {
      let faceRowNum = slideNum;
      let minSpliceNum = 1;
      let spliceNum;
      let totalJson = {};
      let itemArray = [];
      totalArray.map((item, index, array) => {
        spliceNum = Math.ceil((index + 1) / faceRowNum);
        if (spliceNum > minSpliceNum) {
          itemArray = [];
          minSpliceNum = spliceNum;
        } else {
          totalJson['dot' + spliceNum] = itemArray;
        }
        itemArray.push(item)
      })
      let result = [];
      for (let k in totalJson) {
        result.push(totalJson[k])
      }
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
.Emoji-container{
  position: absolute;
  width:100%;
  left:0;right:0;
  bottom:-167px;
  .Emoji-wrapper{
    border-top:1px solid #eaeaea;
    box-sizing:border-box;
    .Emoji-slider-group{
      display: flex;
      .Emoji-slider{
        width: 100vw;
        flex-shrink: 0;
        display: flex;
        flex-wrap:wrap;
        box-sizing:border-box;
        padding:10px 20px 30px;
        .Emoji-box{
          width:calc(100% / 8);
          margin-top:10px;
          height:32px;
          text-align: center;
        }
        .Emoji-item{
          width:32px;
          height:32px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
