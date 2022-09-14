<template>
  <div>
    <!-- 二级路由出口 -->
    <div class="main-container">
      <router-view></router-view>
    </div>

    <!-- tabbar -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
    </van-tabbar>
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

<style scoped lang="less">
.main-container {
  position: fixed;
  top: 0;
  bottom: 52px;
  width: 100%;
}
</style>
