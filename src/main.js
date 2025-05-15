import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import messages from './lang'

Vue.use(ElementUI)
Vue.use(VueI18n)

Vue.config.productionTip = false

// 国际化配置
const i18n = new VueI18n({
  locale: 'zh',
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
