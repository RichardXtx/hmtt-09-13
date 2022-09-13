import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

import 'amfe-flexible'

// 测试接口函数
import { fetchAllChannels } from '@/api/index'

fetchAllChannels().then(res => console.log(res))
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
