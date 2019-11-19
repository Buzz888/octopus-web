<template>
  <div class="day">
    <h1 class="w-100 mb-5">DAILY NOTE:</h1>
    <div class="gudu"></div>
    <div class="flex jc-sa weight color-hui3">
      <div>日期</div>
      <div>标题</div>
      <div>操作</div>
    </div>
    <div class="gudu"></div>
    <div v-for="item in list" :key="item._id">
      <div class="flex ai-center size-2 jc-sa weight color-hui3">
        <div>{{item.desc.slice(0,10)}}</div>
        <div>{{item.title}}</div>
        <router-link class="btn bg-red color-white" tag="button" :to='`/notelist/${item._id}`'>查看内容</router-link>
      </div>
      <div class="gudu"></div>
    </div>
    
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:""
    }
  },
  async created(){
        const res =await this.$http.get('/day')
        this.list=res.data
        window.console.log(res.data)
    }
}
</script>
<style scoped>
.day {
  width: 90%;
  margin: auto;
}
.btn {
  border: none;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
}
</style>