<template>
  <el-row class="mt-max ml-max">
    <el-col :span="14">
      <el-form label-position="top" :model="formLabelAlign">
        <el-form-item label="笔记名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="笔记标题">
          <div class="main">
          <el-input v-model="formLabelAlign.title"></el-input>
          </div>
        </el-form-item>
        <mavon-editor v-model="formLabelAlign.contents"/>
        
        <el-button @click="add" type="success" plain>提交</el-button>
        <el-button @click="clear" type="warning" plain>清除</el-button>
      </el-form>
    </el-col>
    <el-col :span="8">
      <div class="ml-max">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
          >{{activity.content}}</el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</template>
<script>

export default {
  
  props: {
    id: { type: String }
  },
  created() {
    if (this.$route.query) {
      this.fetch();
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/onelist/${this.$route.query.myid}`);
      this.formLabelAlign = res.data;
    },
    async add() {
      if (this.$route.query.myid) {
        const res = await this.$http.put(`/seechange/${this.$route.query.myid}`,
          this.formLabelAlign
        );
        if (res.status === 200) {
          this.$router.push(`/seelist/${this.id}`);
          this.$message({
            message: "修改成功",
            type: "success"
          });
        }
      } else {
        const res = await this.$http.post("/pushlist", this.formLabelAlign);
        if (res.status === 200) {
          this.$router.push(`/seelist/${this.id}`);
          this.$message({
            message: "提交成功",
            type: "success"
          });
        }
      }
    },
    content() {},
    clear() {
      this.formLabelAlign = {
        name: "",
        title: "",
        contents: "",
        index: "",
        fatherid: this.id
      };
    }
  },
  data() {
    return {
      contents: "",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        contents: "",
        title: "",
        fatherid: this.id
      },
      activities: [
        {
          content: "创建内容",
          timestamp: "NO:1"
        },
        {
          content: "添加笔记",
          timestamp: "NO:2"
        },
        {
          content: "渲染到页面",
          timestamp: "NO:3"
        }
      ]
    };
  }
};
</script>
<style scoped>
.main{
   width: 100%;
  height: 100%;
}
</style>