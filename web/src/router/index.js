import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const list = () => import('../views/ourweb/list.vue')
const index = () => import('../views/ourweb/index.vue')
const inscss = () => import('../views/inscss/ins-css.vue')
const daynote = () => import('../views/dailynote/daynote.vue')
const notelist = () => import('../views/dailynote/note.vue')
const live = () => import('../views/live/live.vue')
const call = () => import('../views/call/call.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      { path: '/', component: index },
      { path: '/list/:id', component: list, props: true }
    ]
  },
  {
    path: '/inscss',
    component: inscss,
  },
  {
    path: '/daynote',
    component: daynote,
  },
  {
    path: '/notelist/:id',
    component: notelist,
    props:true
  },
  {
    path: '/live',
    component: live,
  },
  {
    path: '/call',
    component: call,
  }
]

const router = new VueRouter({
  routes
})

export default router
