<template>
  <div class="csslsit">
    <div class="mb-max">标题</div>
    <el-input class="mb-max" type="text" v-model="alorithmlist.title"></el-input>
    <div class="mb-max">样式代码:</div>
    <el-input class="mb-max" type="textarea" v-model="alorithmlist.desc"></el-input>
    <div class="mb-max">代码笔记:</div>
    <mavon-editor class="mb-max" v-model="alorithmlist.contents" />
    <el-button @click="pushlist" type="success" plain>提交</el-button>
    <el-button @click="clear" type="warning" plain>清除</el-button>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      alorithmlist: {
        title: "",
        desc: "",
        content: ""
      }
    };
  },
  methods: {
    clear() {
      this.alorithmlist = {
        title: "",
        desc: "",
        content: ""
      };
    },
    async pushlist() {
      if (this.id) {
        const res = await this.$http.put(`/alorithm/push/${this.id}`, this.alorithmlist);
        if (res.status==200) {
          this.$router.push("/listalgorithm");
          this.$message({
            message: "创建成功",
            type: "success"
          });
        }
      } else {
        const res = await this.$http.post("/alorithm/push", this.alorithmlist);
        if (res.status==200) {
          this.$router.push("/listalgorithm");
          this.$message({
            message: "创建成功",
            type: "success"
          });
        }
      }
    },
    async fetch() {
      let res = await this.$http.get(`/alorithm/${this.id}`);
      this.alorithmlist = res.data;
      //window.console.log(this.tableData)
    }
  },
  created() {
    if (this.id) {
      this.fetch();
    }
  }
};
</script>
<style scoped>
.csslsit {
  width: 80%;
  margin: 20px auto;
}
</style>
