import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/style.scss'
import '../public/fontsize/iconfont.css'
import '../public/fontsize3/iconfont.css'
import menu from './components/menu.vue'
import smallmenu from './components/smallmenu.vue'
import number from './components/number.vue'
import tabbar from './components/tabbar.vue'
import http from './http'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.component('mymenu', menu)
Vue.component('smallmenu', smallmenu)
Vue.component('number', number)
Vue.component('tabbar', tabbar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
