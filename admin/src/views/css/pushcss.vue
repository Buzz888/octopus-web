<template>
  <div class="csslsit">
    <div class="mb-max">标题</div>
    <el-input class="mb-max" type="text" v-model="csslist.title"></el-input>
    <div class="mb-max">样式代码:</div>
    <el-input class="mb-max" type="textarea" v-model="csslist.desc"></el-input>
    <div class="mb-max">代码笔记:</div>
    <mavon-editor class="mb-max" v-model="csslist.contents" />
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
      csslist: {
        title: "",
        desc: "",
        content: ""
      }
    };
  },
  methods: {
    clear() {
      this.csslist = {
        title: "",
        desc: "",
        content: ""
      };
    },
    async pushlist() {
      if (this.id) {
        const res = await this.$http.put(`/css/push/${this.id}`, this.csslist);
        if (res.status==200) {
          this.$router.push("/listcss");
          this.$message({
            message: "创建成功",
            type: "success"
          });
        }
      } else {
        const res = await this.$http.post("/css/push", this.csslist);
        if (res.status==200) {
          this.$router.push("/listcss");
          this.$message({
            message: "创建成功",
            type: "success"
          });
        }
      }
    },
    async fetch() {
      let res = await this.$http.get(`/css/${this.id}`);
      this.csslist = res.data;
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
