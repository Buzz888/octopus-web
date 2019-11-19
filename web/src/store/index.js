import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag:true,
    flag1:false
  },
  mutations: {
    flag (state) {
      state.flag=!state.flag
    },
    flag1 (state) {
      state.flag1=!state.flag1
    }
  },
  actions: {
  },
  modules: {
  }
})
