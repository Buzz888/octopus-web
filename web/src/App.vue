<template>
  <div id="app">
    <div class="header bg-black color-white py-2 px-5 flex ai-center jc-sb">
      <i v-if="flag3"
        @click="$store.commit('flag1')"
        :class="this.$store.state.flag1?'top':'bottom'"
        class="small iconfont icon-left mr-1"
      ></i>
      <i v-if="!flag3"
        @click="$router.go(-1)"
        class="small iconfont icon-left mr-1"
      ></i>
      <i @click="$store.commit('flag');" class="myicon iconfont icon-xianyouyu"></i>
      <div class="p-2 d-flex"></div>
      <ul class="headertitle" v-for="(item,i) in top" :key="i">
        <router-link
        
          class="weight size-2"
          :to="item.router"
          tag="li"
        >{{item.name}}</router-link>
      </ul>
      <i class="iconfont icon-github ml-5 my-3"></i>
    </div>
    <div></div>
    <div id="nav"></div>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tabbar :top="top" class="tabbar"></tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      top: [
        { name: "OUR WEBSITE", router: "/" },
        { name: "VIDEO", router: "/live" },
        { name: "INTERESTING CSS", router: "/inscss" },
        { name: "DAILY NOTE", router: "/daynote" },
        { name: "ALGORITHM", router: "/call" }
      ],
      flag: 0,
      flag3:false,
    };
  },
  watch: {
    $route() {
      if(this.$route.path=="/"||this.$route.path==`/list/${this.$route.params.id}`){
       this.flag3 = true
      }else{
        this.flag3 = false
      }
    }
  }
};
</script>
<style scoped>
.iconfont {
  font-size: 2rem;
}
.header {
  top: 0;
  position: sticky;
  z-index: 100000;
}
.header :hover {
  color: #ed2945;
  cursor: pointer;
}
</style>


