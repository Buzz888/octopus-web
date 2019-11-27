<template>
<div>
  <div v-if="flag">
    <div class="zegaiceng"></div>
    <pending></pending>
</div>
  <div class="inscss">
    <h1 class="w-100">ALGORITHM算法</h1>
    <div class="gudu"></div>
    <div v-for="(item,i) in list" :key="i">
      <h3>{{item.title}}</h3>
      <img class="img" :src="item.desc" alt />
      <mavon-editor defaultOpen="preview"   :subfield="false" :toolbarsFlag="false" :editable="false" v-model="item.contents" />
    </div>
  </div>
  </div>
</template>
<style scoped>
.inscss {
  margin: 10px auto;
  width: 90%;
}
.img{
    max-width: 300px;
}
</style>
<script>
export default {
  data() {
    return {
      list: "",
      flag:true
    };
  },
  async created() {
    const res = await this.$http.get("/call");
    this.list = res.data;
     setTimeout(() => {
            this.flag = false;
        }, 500);
  }
};
</script>