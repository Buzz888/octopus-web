<template>
  <div class="csslsit">
    <div class="mb-max">标题</div>
    <el-input class="mb-max" type="text" v-model="daylist.title"></el-input>
    <div class="mb-max">时间:</div>
    <el-input class="mb-max" type="textarea" v-model="daylist.desc"></el-input>
    <div class="mb-max">代码笔记:</div>
    <mavon-editor class="mb-max" v-model="daylist.contents" />
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
      daylist: {
        title: "",
        desc: new Date(),
        content: ""
      }
    };
  },
  methods: {
    clear() {
      this.daylist = {
        title: "",
        desc: new Date(),
        content: ""
      };
    },
    async pushlist() {
      if (this.id) {
        const res = await this.$http.put(`/day/push/${this.id}`, this.daylist);
        if (res.status==200) {
          this.$router.push("/listday");
          this.$message({
            message: "创建成功",
            type: "success"
          });
        }
      } else {
        const res = await this.$http.post("/day/push", this.daylist);
        if (res.status==200) {
          this.$router.push("/listday");
          this.$message({
            message: "创建成功",
            type: "success"
          });
        }
      }
    },
    async fetch() {
      let res = await this.$http.get(`/day/${this.id}`);
      this.daylist = res.data;
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
