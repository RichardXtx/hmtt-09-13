<template>
  <div>
    <!-- 文章列表 -->
    <article-list-item
      v-for="item in articleList"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
// 引入文章列表
import ArticleListItem from './article-list-item.vue'
import { articlesListAPI } from '@/api'
export default {
  name: 'article-list',
  data () {
    return {
      articleList: []
    }
  },
  props: {
    channelId: {
      type: Number
    }
  },
  created () {
    this.getArticlesList()
  },
  methods: {
    async getArticlesList () {
      const res = await articlesListAPI(
        {
          channelId: this.channelId,
          timestamp: +new Date()
        }
      )
      console.log(res)
      this.articleList = res.data.results
    }
  },
  components: {
    ArticleListItem
  }

}
</script>

<style>
</style>
