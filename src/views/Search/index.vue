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
      <div
        class="sugg-item"
        v-for="item in associateList"
        :key="item"
        @click="toResult(item)"
      >
        <span v-html="hightLight(item)"></span>
      </div>
    </div>

    <!-- 搜索历史区 -->
    <div class="history" v-show="associateList.length === 0">
      <van-tag
        class="tag"
        plain
        type="primary"
        v-for="item in historyList"
        :key="item"
        @click="toResult(item)"
      >
        {{ item }}
      </van-tag>
    </div>
  </div>
</template>

<script>
import { suggestionAPI } from '@/api'
import _ from 'lodash'
export default {
  name: 'search-index',
  data () {
    return {
      keyword: '', // 关键字
      associateList: [], // 联想框数据
      historyList: JSON.parse(localStorage.getItem('ceshiHistory')) || []
    }
  },

  methods: {

    searchValue: _.debounce(async function () { // 防抖
      if (this.keyword === '') return
      const res = await suggestionAPI(this.keyword)
      // console.log(res)
      this.associateList = res.data.options
    }, 400),
    hightLight (item) { // 高亮
      const reg = new RegExp(this.keyword, 'ig')
      return item?.replace(reg, keys => {
        return `<span style="color:skyblue">${keys}</span>`
      })
    },
    toResult (item) {
      if (!this.historyList.includes(item)) {
        this.historyList.push(item)
        localStorage.setItem('ceshiHistory', JSON.stringify(this.historyList))
      }

      this.$router.push({
        path: '/result',
        query: {
          q: item
        }
      })
    }
    // toDetail (id) {
    //   this.$router.push({
    //     path: '/result',
    //     query: {
    //       q: id
    //     }
    //   })
    // }
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
.history {
  margin-left: 17px;
}
.tag {
  margin-right: 10px;
}
</style>
