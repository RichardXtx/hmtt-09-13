<template>
  <div>
    <!-- 搜索区域 -->
    <van-search
      placeholder="请输入搜索关键词"
      @input="searchValue"
      shape="round"
      v-model="keyword"
    />
    <!-- 搜索联想区域 -->
    <div class="sugg-list">
      <div class="sugg-item" v-for="item in associateList" :key="item">
        <span v-html="hightLight(item)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { suggestionAPI } from '@/api'
export default {
  name: 'search-index',
  data () {
    return {
      keyword: '', // 关键字
      associateList: []
    }
  },

  methods: {
    async searchValue () { // input 框事件
      if (this.keyword === '') return
      const res = await suggestionAPI(this.keyword)
      // console.log(res)
      this.associateList = res.data.options
    },
    hightLight (item) { // 高亮
      const reg = new RegExp(this.keyword, 'ig')
      return item?.replace(reg, keys => {
        return `<span style="color:skyblue">${keys}</span>`
      })
    }
  }
}
</script>

<style scoped lang="less">
/*搜索建议列表样式 */
.sugg-list {
  .sugg-item {
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
    font-size: 14px;
    line-height: 50px;
    // 实现省略号的三行代码
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
