<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="黑马头条-登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.mobile"
        name="mobile"
        label="手机号"
        required
        placeholder="手机号"
        :rules="[
          {
            required: true,
            message: '请填写手机号',
            trigger: 'onChange',
            pattern: /^1[3456789]\d{9}$/,
          },
        ]"
      />
      <van-field
        v-model="form.code"
        type="password"
        name="code"
        label="验证码"
        required
        placeholder="验证码"
        :rules="[
          {
            required: true,
            message: '请填写验证码',
            trigger: 'onChange',
            pattern: /^\d{6}$/,
          },
        ]"
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
import { Toast } from 'vant'
export default {
  name: 'login-vue',
  data () {
    return {
      form: {
        mobile: '13811111111',
        code: '246810'
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.$store.dispatch('asyncToken', this.form)
        const redirect = this.$route.query.redirect
        if (redirect) {
          this.$router.push(redirect)
        } else {
          this.$router.push('/')
        }
        Toast.success('登录成功!')
      } catch (error) {
        // console.log('cuowu', error)
        // Toast.fail('别乱输入啊')
      }
    }
  }
}
</script>

<style>
</style>
