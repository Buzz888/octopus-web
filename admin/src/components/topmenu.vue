<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  router>
  <el-menu-item index="/pushmenu">创建菜单</el-menu-item>
   <el-menu-item index="/table/listmenu">菜单列表</el-menu-item>
    <el-menu-item index="/pushcss">创建ins-css</el-menu-item>
     <el-menu-item index="/listcss">css列表</el-menu-item>
     <el-menu-item index="/pushday">创建日记</el-menu-item>
     <el-menu-item index="/listday">日记列表</el-menu-item>
     <el-menu-item index="/pushalgorithm">创建算法</el-menu-item>
     <el-menu-item index="/listalgorithm">算法列表</el-menu-item>
     <el-menu-item index="/">页面数据</el-menu-item>
</el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }
  }
</script>