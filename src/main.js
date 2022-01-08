import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/css/common.css'
import './utils/global'
// 引入字体文件
import './assets/iconf/font.css'
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)

Vue.config.productionTip = false

new Vue({
  vuetify: window.Vuetify,
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
