<template>
  <div class="home">
    <transition name="slide-fade" mode="out-in">
    <skeleton v-show="this.$store.state.flag2"></skeleton>
    </transition>
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
      setTimeout(()=>{this.$store.commit('flag2')},0)
      let list = res.data[0];
      let list1 = res.data[1];
      list.forEach(i => this.list.push({ title: i.name, _id: i._id }))
      this.list.forEach((item,index)=>{
        this.list[index].item=[]
        list1.forEach((item1)=>{
          if(item._id==item1.fatherid){
           this.list[index].item.push({ name: item1.title, router: item1._id })}
        })
      })
      
      
    }
  },
  beforeDestroy(){
  this.$store.commit('flag3')
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
