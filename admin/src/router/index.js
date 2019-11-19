import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'/table/:id',component:()=>import('../views/table'),props:true},
      {path:'/pushmenu',component:()=>import('../views/pushmenu')},
      {path:'/pushmenu/:id',component:()=>import('../views/pushmenu'),props:true},
      {path:'/pushlist/:id',component:()=>import('../views/pushlist'),props:true},
      {path:'/seelist/:id',component:()=>import('../views/seelist'),props:true},
      {path:'/pushcss',component:()=>import('../views/css/pushcss')},
      {path:'/listcss',component:()=>import('../views/css/listcss')},
      {path:'/pushcss/:id',component:()=>import('../views/css/pushcss'),props:true},
      //日记
      {path:'/pushday',component:()=>import('../views/day/daypush')},
      {path:'/listday',component:()=>import('../views/day/daylist')},
      {path:'/pushday/:id',component:()=>import('../views/day/daypush'),props:true},
      //算法
      {path:'/pushalgorithm',component:()=>import('../views/suanfa/pushsuanfa')},
      {path:'/listalgorithm',component:()=>import('../views/suanfa/listsuanfa')},
      {path:'/pushalgorithm/:id',component:()=>import('../views/suanfa/pushsuanfa'),props:true}
      

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
