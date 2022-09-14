<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout-vue',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
<script>
export default {
  name: 'layout-vue',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
