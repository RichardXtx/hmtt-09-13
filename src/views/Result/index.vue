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

    <!-- 上拉刷新 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <!-- 结果 -->
      <ArticleListItem
        :item="item"
        v-for="item in resultList"
        :key="item.art_id"
        @click.native="details(item.art_id)"
      />
    </van-list>
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
      page: 1,
      loading: false,
      finished: false
    }
  },
  components: { ArticleListItem },
  created () {
    this.searchResult()
  },
  methods: {
    async searchResult () { // 获取结果，并渲染
      const res = await searchResultAPI({ page: this.page, q: this.$route.query.q })
      // console.log(res)
      this.resultList = res.data.results
    },
    async onLoad () {
      // console.log(1)
      this.page++
      const res = await searchResultAPI({ page: this.page, q: this.$route.query.q })
      console.log(res)
      this.resultList = [...this.resultList, ...res.data.results]
      this.loading = false
      if (res.data.results.length === 0) {
        this.finished = true
      }
    },
    details (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-result-container {
  padding-top: 46px;
}
</style>
