<template>
  <div class="home">
    <div class="flex jc-sb">
      <transition name="slide-fade">
        <mymenu v-show="this.$store.state.flag" class="mymenu" :list="list"></mymenu>
      </transition>
      <transition name="slide-fade">
        <smallmenu v-show="this.$store.state.flag1" class="smallmenu" :list="list"></smallmenu>
      </transition>
      <transition name="bounce" mode="out-in">
        <router-view ></router-view>
      </transition>
      <number class="num"></number>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/menulist");
      this.list = res.data;
    }
  },
  created() {
    this.fetch();
  },
  watch: {
    $route(to, from) {
      // window.console.log(to,from)
      if (to !== from) {
        this.$store.commit('flag1')
      }
    }
  }
};
</script>
<style scoped>

</style>
