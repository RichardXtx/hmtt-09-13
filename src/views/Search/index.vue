<template>
  <div>
    <!-- 搜索区域 -->
    <van-search placeholder="请输入搜索关键词" shape="round" />
    <!-- 搜索联想区域 -->
    <div class="sugg-list">
      <div class="sugg-item">搜索建议</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-index'
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
</style>
