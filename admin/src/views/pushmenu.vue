<template>
  <el-row class="mt-max ml-max">
    <el-col :span="8">
      <el-form label-position="top" :model="formLabelAlign">
        <el-form-item label="菜单名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="添加菜单名">
          <el-input v-model="formLabelAlign.pushname"></el-input>
        </el-form-item>
        <el-form-item label="菜单列表名">
          <el-input v-model="formLabelAlign.listname"></el-input>
        </el-form-item>
        <el-form-item label="索引名">
          <el-input v-model="formLabelAlign.index"></el-input>
        </el-form-item>
        <el-button @click="pushmenu" type="success" plain>提交</el-button>
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
    id: {}
  },
  created() {
    window.console.log(this.id)
    this.fetch()},
  methods: {
    async fetch() {
      if (this.id) {
        const res = await this.$http.get(`/listmenu/${this.id}`);
        
        this.formLabelAlign = res.data;
         window.console.log(this.formLabelAlign)
      }
    },
    async pushmenu() {
      if(this.id){
         const res = await this.$http.put(`/pushmenu/${this.id}`,this.formLabelAlign)
         if (res.status === 200) {
        this.$router.push("/table/listmenu");
        this.$message({
          message: "修改成功",
          type: "success"
        });
      }
      }else{
      const res = await this.$http.post("/pushmenu", this.formLabelAlign);
      if (res.status === 200) {
        this.$router.push("/table/listmenu");
        this.$message({
          message: "提交成功",
          type: "success"
        });
      }}
    },
    clear() {
      this.formLabelAlign = {
        name: "",
        pushname: "",
        listname: "",
        index: ""
      };
    }
  },
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        pushname: "",
        listname: "",
        index: ""
      },
      activities: [
        {
          content: "创建菜单",
          timestamp: "NO:1"
        },
        {
          content: "菜单添加内容",
          timestamp: "NO:2"
        },
        {
          content: "成功",
          timestamp: "NO:3"
        }
      ]
    };
  }
};
</script>