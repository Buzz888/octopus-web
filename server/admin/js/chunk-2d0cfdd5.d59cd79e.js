(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfdd5"],{6610:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{fixed:"",prop:"_id",label:"id"}}),n("el-table-column",{attrs:{fixed:"",prop:"title",label:"名称"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleClick(e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.clear(e.row._id)}}},[t._v("删除")])]}}])})],1)},r=[],c=(n("d3b7"),n("96cf"),{props:{id:{}},methods:{handleClick:function(t){this.$router.push("/pushday/".concat(t))},clear:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(e.$http.delete("/day/del/".concat(t)));case 2:n=a.sent,200===n.status&&(e.fetch(),e.$message({type:"success",message:"删除成功!"}));case 4:case"end":return a.stop()}}))}))},fetch:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("/day"));case 2:t=e.sent,this.tableData=t.data;case 4:case"end":return e.stop()}}),null,this)}},data:function(){return{tableData:[]}},created:function(){this.fetch()}}),s=c,l=n("2877"),i=Object(l["a"])(s,a,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0cfdd5.d59cd79e.js.map