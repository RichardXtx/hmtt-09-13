import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入所有用到的vant组件
import { vantPlugin } from '@/plugins'

import 'amfe-flexible'
Vue.use(vantPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
