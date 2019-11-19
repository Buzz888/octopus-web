<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="_id" label="id"></el-table-column>
    <el-table-column fixed prop="title" label="名称"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="clear(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:{
      id:{}
    },
    methods: {
      handleClick(id) {

       this.$router.push(`/pushcss/${id}`)
      },
       clear(id){
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
         const res = await this.$http.delete(`/css/del/${id}`)
         if(res.status===200){
           this.fetch()
           this.$message({
            type: 'success',
            message: '删除成功!'
          });
         } 
        })
        

      },
      async fetch(){
        let res =await this.$http.get('/css')
        this.tableData = res.data
        //window.console.log(this.tableData)
      }
    },

    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.fetch()

    }
  }
</script>