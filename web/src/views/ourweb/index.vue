<template>
  <div class="index h-100">
    <div class="bg">
      <div class="right flex column" @click="$router.push('/list/5dd6c388f2c7031f7f7a1493?index=0')">
      <i class="iconfont icon-huidaodingbu"/>
      <i class="iconfont icon-huidaodingbu"/>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.bg {
  position: relative;
  height: 90vh;
  margin: auto;
  width: 100%;
  background: url("../../../public/bz.jpg");
  background-size: cover;
  background-position: center 0;
}
.right{
  position:absolute;
  top:50%;
  right: 5%;
  transform: rotate(90deg);
  animation: go 2s linear infinite;
  cursor: pointer;
}
@keyframes go {
  0%{
    transform:rotate(90deg) translateY(10px);
    opacity: 1;
  }
  50%{
    transform:rotate(90deg) translateY(0px);
    opacity: 0.5;
  }
  100%{
  transform:rotate(90deg) translateY(-10px);
  opacity: 0;
  }
  
}
.iconfont{
  font-size: 3rem;
  color: white;
}
</style>