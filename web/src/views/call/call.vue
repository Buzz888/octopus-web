<template>
  <div class="inscss">
    <h1 class="w-100">ALGORITHM算法</h1>
    <div class="gudu"></div>
    <div v-for="(item,i) in list" :key="i">
      <h3>{{item.title}}</h3>
      <img class="img" :src="item.desc" alt />
      <mavon-editor :toolbarsFlag="false" :editable="false" v-model="item.contents" />
    </div>
  </div>
</template>
<style scoped>
.inscss {
  margin: 10px auto;
  width: 90%;
}
.img{
    max-width: 500px;
}
</style>
<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  async created() {
    const res = await this.$http.get("/call");
    this.list = res.data;
  }
};
</script>