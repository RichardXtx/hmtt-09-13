<template>
  <!-- 搜索结果页-头部导航 -->
  <div class="search-result-container">
    <!-- 点击实现后退效果 -->
    <van-nav-bar
      title="搜索结果"
      left-arrow
      @click-left="$router.go(-1)"
      fixed
    />

    <!-- 结果 -->
    <ArticleListItem
      :item="item"
      v-for="item in resultList"
      :key="item.art_id"
    />
  </div>
</template>

<script>
import { searchResultAPI } from '@/api'
import ArticleListItem from '@/views/Home/components/article-list-item.vue'
export default {
  name: 'SearchResult',
  data () {
    return {
      resultList: [], // 结果列表
      page: 1
    }
  },
  components: { ArticleListItem },
  created () {
    this.searchResult()
  },
  methods: {
    async searchResult () {
      const res = await searchResultAPI({ page: this.page, q: this.$route.query.q })
      console.log(res)
      this.resultList = res.data.results
    }
  }
}
</script>

<style lang="less" scoped>
.search-result-container {
  padding-top: 46px;
}
</style>
