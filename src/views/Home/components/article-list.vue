<template>
  <div class="article-list">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 上拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <!-- 文章列表 -->
        <article-list-item
          v-for="item in articleList"
          :key="item.art_id"
          :item="item"
          @click.native="particulars(item.art_id)"
        />
      </van-list>
    </van-pull-refresh>
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
      articleList: [],
      loading: false,
      finished: false,
      pre_timestamp: +new Date(),
      isLoading: false
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
    async getArticlesList () { // 获取文章列表
      const res = await articlesListAPI(
        {
          channelId: this.channelId,
          timestamp: this.pre_timestamp
        }
      )
      // console.log(res)
      this.pre_timestamp = res.data.pre_timestamp
      this.articleList = res.data.results
    },
    async onLoad () { // 上拉刷新函数
      // console.log('开始加载')
      const res = await articlesListAPI(
        {
          channelId: this.channelId,
          timestamp: this.pre_timestamp
        }
      )

      // 老数据加上新数据，赋值给 articleList 数组
      this.articleList = [...this.articleList, ...res.data.results]

      // 更新时间戳，为下一次上拉做准备
      this.pre_timestamp = res.data.pre_timestamp

      // 更新完刷新的数据后，将 loading 改为 false，继续执行下次刷新
      this.loading = false

      // 如果全部数据都没了，就将 finished 改为 true
      if (!this.pre_timestamp) {
        this.finished = true
      }
    },
    async onRefresh () { // 下拉刷新
      // console.log('下拉刷新了')
      this.pre_timestamp = +new Date()
      await articlesListAPI(
        {
          channelId: this.channelId,
          timestamp: this.pre_timestamp
        }
      )
      this.isLoading = false
    },
    particulars (id) { // 跳转到详情
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  },
  components: {
    ArticleListItem
  }

}
</script>

<style scoped lang="less">
.article-list {
  position: fixed;
  width: 100%;
  top: 42px;
  bottom: 52px;
  overflow: scroll;
}
</style>
