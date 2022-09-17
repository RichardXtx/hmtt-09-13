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
      <van-cell title="名称" @click="name" :value="profile.name" is-link />
      <van-cell
        title="生日"
        @click="chooseDate"
        :value="profile.birthday"
        is-link
      />
    </van-cell-group>

    <!-- 名字弹框 -->
    <van-dialog
      v-model="show"
      title="修改名称"
      @confirm="confirmUpdateName"
      show-cancel-button
    >
      <van-field
        v-model.trim="userName"
        input-align="center"
        placeholder="请输入名称"
        ref="checkName"
      />
    </van-dialog>

    <!-- 日期 -->
    <van-popup v-model="dateShow" position="bottom" :style="{ height: '48%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script>
// changeUserAPI
import { getUserPorfileAPI, uploadImagesAPI, changeUserAPI } from '@/api'
import { Toast } from 'vant'
import dayjs from 'dayjs'
export default {
  name: 'UserEdit',
  data () {
    return {
      profile: {},
      show: false,
      dateShow: false,
      userName: '',
      currentDate: new Date()
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
    },
    async name () { // 点击名字出弹框
      this.show = true
      // 回显数据
      this.userName = this.profile.name
      this.$nextTick(_ => {
        this.$refs.checkName.focus()
      })
    },
    async confirmUpdateName () {
      this.profile.name = this.userName
      await changeUserAPI({ name: this.userName })
    },
    chooseDate () { // 点击时间出现时间选择
      this.dateShow = true
      this.currentDate = new Date(this.profile.birthday)
    },
    onCancel () { // 时间框取消
      this.dateShow = false
    },
    async onConfirm () { // 时间框确定
      const formatTime = dayjs(this.currentDate).format('YYYY-MM-DD')
      const res = await changeUserAPI({
        birthday: formatTime
      })
      console.log(res)
      this.profile.birthday = formatTime
      this.dateShow = false
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
