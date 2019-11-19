<template>
  <div class="flex w-100 tabbar bg-black">
    <div class="w-100 h-100 flex jc-sa ai-center">
      <i :class="flag1?'mytop':'bottom'" @click="topblack" class=" color-red iconfont icon-huidaodingbu"></i>
      <i @click="flag=!flag" class="color-white bigicon iconfont icon-xianyouyu"></i>
      <i class="color-red iconfont icon-liuyan"></i>
    </div>
    <transition name="slide1-fade" mode="out-in">
      <div class="caidanmenu py-5 bg-hui" v-show="flag">
        <ul class="flex column jc-sa h-100">
          <router-link
            class="libootom color-black size-4 weight"
            v-for="(item,i) in top"
            :key="i"
            :to="item.router"
          >{{item.name}}</router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    top: null
  },
  data() {
    return {
      flag: false,
      flag1:true

    };
  },
  methods:{
   topblack(e){
         if (e.pageY > 800) {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 20);
      }
        }

  },
  created() {
    //window.console.log(this.top);
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.flag = false;
      }
    },
  }
};
</script>
<style scoped>
.iconfont {
  font-size: 1.5rem;
}
.bigicon {
  font-size: 1.7rem;
}
.tabbar {
  height: 2.5rem;
}
rota {
  transform: rotate(-180deg);
}
.caidanmenu {
  bottom: 2.5rem;
  position: fixed;
  width: 100%;
  height: 85%;
}
.mytop {
  transform: rotate(-180deg);
}
.bottom {
  transform: rotate(0deg);
}
</style>