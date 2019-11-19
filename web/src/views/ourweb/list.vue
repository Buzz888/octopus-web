<template>
  <div v-if="flag" class=" middle">
        <mavon-editor defaultOpen="preview" :subfield="false" :toolbarsFlag="false" :editable="false" v-model="list.contents"/> 
  </div>
</template>
<script>
export default {
  props: {
    id: {type:String}
  },
  methods: {
    preview(){},
    async fetch() {
      const res = await this.$http.get(`/list/${this.$route.params.id}`);
      this.list = res.data;
    }
  },
  data() {
    return {
      value:"hello world",
      list: "",
      flag:true
    };
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.fetch()
        this.flag=false;
        setTimeout(()=>{this.flag=true},0)
      }
    }
  },
  created() {
    this.fetch();
    //window.console.log(this.$route)
  }
};
</script>
<style scoped>

</style>