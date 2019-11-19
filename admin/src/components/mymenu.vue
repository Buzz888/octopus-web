<template>
    <el-menu
      default-active="2"
      class="h-100 el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      >
      <el-submenu :index="item.index" v-for="item in list" :key="item._id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index='`/pushlist/${item._id}`'>{{item.pushname}}</el-menu-item>
          <el-menu-item :index='`/seelist/${item._id}`'>{{item.listname}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>
<script>
  export default {
    methods: {
      async fetch(){
        const res = await this.$http.get('/listmenu');
        this.list = res.data;
        //window.console.log(res);

      }
    },
    data(){
      return{
        list:[]
      }
    },
    created(){
      this.fetch()
    },
    watch: {
    '$route' (to) {
      if(to.path=='/table/listmenu'){
        this.fetch()
      }
    }
    }
  }
</script>
<style scoped>
.el-menu{
  overflow: auto;
}
.el-submenu .el-menu-item{
    min-width: 0;
}
</style>
