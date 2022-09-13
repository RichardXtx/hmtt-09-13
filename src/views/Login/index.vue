<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="黑马头条-登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'login-vue',
  data () {
    return {
      form: {
        username: 'yyyy',
        password: '333'
      }
    }
  },
  methods: {
    onSubmit (form) {
      console.log('表单提交了', form)
    }
  }
}
</script>

<style>
</style>
