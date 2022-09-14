<template>
  <div>
    <van-tabs v-model="active">
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name">{{
        item.name
      }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getchGetchannels } from '@/api'
export default {
  name: 'home-index',
  data () {
    return {
      active: 0,
      channelList: []
    }
  },
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
/deep/ .van-tabs__line {
  background-color: #1989fa !important;
}
</style>
