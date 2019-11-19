<template>
  <div class="daylist flex jc-center column">
      <h1>{{list.title}}</h1>
      <div class="gudu"></div>
      <h3>{{list.desc}}</h3>
      <mavon-editor :subfield="false" defaultOpen="preview"  :toolbarsFlag="false"  :editable="false" v-model="list.contents"/>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  async created() {
    if (this.id) {
      const res = await this.$http.get(`/day/${this.id}`);
      this.list = res.data;
      window.console.log(this.list)
    }
  },
  data() {
    return {
      list: ""
    };
  }
};
</script>
<style scoped>
.daylist{
    width: 80%;
    margin: auto;
}
</style>