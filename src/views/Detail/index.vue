<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar
      fixed
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />

    <!-- 文章信息区域 -->
    <div class="article-container">
      <!-- 文章标题 -->
      <h1 class="art-title">{{ articleList.title }}</h1>

      <!-- 用户信息 -->
      <van-cell
        center
        :title="articleList.aut_name"
        :label="formatTime(articleList.pubdate)"
      >
        <template #icon>
          <img :src="articleList.aut_photo" alt="" class="avatar" />
        </template>
        <template #default>
          <div>
            <van-button
              type="info"
              v-if="articleList.is_followed"
              @click="allow"
              size="mini"
              >已关注</van-button
            >
            <van-button
              icon="plus"
              @click="allow"
              v-else
              type="info"
              size="mini"
              plain
              >关注</van-button
            >
          </div>
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 文章内容 -->
      <div class="art-content" v-html="articleList.content"></div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>

      <!-- 点赞 -->
      <div class="like-box">
        <van-button
          icon="good-job"
          type="danger"
          size="small"
          v-if="articleList.attitude === 1"
          @click="like"
          >已点赞</van-button
        >
        <van-button
          v-else
          icon="good-job-o"
          type="danger"
          plain
          size="small"
          @click="like"
          >点赞</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { articleDetailAPI, fetchAllowAPI, fetchUnAllowAPI, likeDetailAPI, unLikeDetaileAPI } from '@/api'
import { formatTimerApi } from '@/utils/time'
import { Toast } from 'vant'
export default {
  name: 'detail-index',
  data () {
    return {
      articleList: {}
    }
  },
  created () {
    this.getArticleDetail()
  },
  methods: {
    async getArticleDetail () { // 获取文章详情
      const id = this.$route.query.id
      const res = await articleDetailAPI(id)
      this.articleList = res.data
      // console.log(res)
    },
    formatTime: formatTimerApi,
    allow () { // 点击关注
      if (this.articleList.is_followed) {
        // 取关
        fetchUnAllowAPI(this.articleList.aut_id)
        Toast.success('取关成功!')
      } else {
        // 关注
        fetchAllowAPI(this.articleList.aut_id)
        Toast.success('关注成功!')
      }
      this.articleList.is_followed = !this.articleList.is_followed
    },
    like () {
      if (this.articleList.attitude === 1) {
        // 取消点赞
        unLikeDetaileAPI(this.articleList.art_id)
        this.articleList.attitude = -1
      } else if (this.articleList.attitude === -1) {
        // 点赞
        likeDetailAPI(this.articleList.art_id)
        this.articleList.attitude = 1
      }
    }
  }
}
</script>

<style scoped lang="less">
.article-container {
  padding: 10px;
  margin-top: 46px;
}
.art-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  overflow-x: scroll;
  word-break: break-all;
  /deep/ img {
    width: 100%;
  }
  /deep/ pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}

.van-cell {
  padding: 5px 0;
  &::after {
    display: none;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 5px;
  border: none;
}

.like-box {
  display: flex;
  justify-content: center;
}
</style>
