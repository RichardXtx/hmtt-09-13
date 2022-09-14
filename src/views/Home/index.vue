<template>
  <div>
    <van-tabs v-model="active" color="#1989fa">
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name"
        ><article-list :channelId="item.id"
      /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getchGetchannels } from '@/api'
import ArticleList from './components/article-list.vue'
export default {
  name: 'home-index',
  data () {
    return {
      active: 0,
      channelList: []
    }
  },
  components: { ArticleList },
  methods: {
    async getchGetchannel () {
      const res = await getchGetchannels()
      // console.log(res)
      this.channelList = res.data.channels
    }
  },
  created () {
    this.getchGetchannel()
  }
}
</script>

<style lang="less" scoped>
// /deep/ .van-tabs__line {
//   background-color: #1989fa !important;
// }
</style>
