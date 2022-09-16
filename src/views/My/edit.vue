<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.push('/my')"
      fixed
    />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image
            round
            class="avatar"
            :src="profile.photo"
            @click="uploadImg"
          />
          <input
            type="file"
            name=""
            id=""
            v-show="false"
            @change="changeImg"
            ref="uploadFile"
          />
        </template>
      </van-cell>
      <van-cell title="名称" :value="profile.name" is-link />
      <van-cell title="生日" :value="profile.birthday" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { getUserPorfileAPI, uploadImagesAPI } from '@/api'
import { Toast } from 'vant'
export default {
  name: 'UserEdit',
  data () {
    return {
      profile: {}
    }
  },
  created () {
    this.getUserPorfile()
  },
  methods: {
    async getUserPorfile () { // 获取个人简介
      const res = await getUserPorfileAPI()
      this.profile = res.data
      // console.log(res)
    },
    uploadImg () { // 触发 input
      this.$refs.uploadFile.click()
    },
    async changeImg (e) { // 图片改变事件
      // console.log(e)
      const file = e.target.files[0]
      // console.log(file)
      const formData = new FormData()
      formData.append('photo', file)
      const res = await uploadImagesAPI(formData)
      // console.log(res)
      this.profile.photo = res.data.photo
      Toast.success('更换头像完成!')
    }
  }
}
</script>

<style lang="less" scoped>
.user-edit-container {
  padding-top: 46px;
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>
