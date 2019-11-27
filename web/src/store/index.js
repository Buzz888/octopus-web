import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag:true,
    flag1:false,
    flag2:true
  },
  mutations: {
    flag (state) {
      state.flag=!state.flag
    },
    flag2(state){
      state.flag2=false;
    },
    flag3(state){
      state.flag2=true;
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
