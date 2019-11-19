import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './style.scss'
import mymenu from './components/mymenu'
import topmenu from './components/topmenu'
import http from './http'
Vue.prototype.$http = http
Vue.config.productionTip = false
import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    // markdown
    Vue.use(mavonEditor)
//左菜单
Vue.component('mymenu',mymenu)
//上菜单
Vue.component('topmenu',topmenu)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
