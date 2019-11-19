<template>
<el-row class="tac">
  <el-col :span="5">
    <mymenu></mymenu>
  </el-col>
  <el-col  :span="19">
    <topmenu></topmenu>
    <router-view></router-view>
  </el-col>
</el-row>

  
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }
  }
</script>
