(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238661"],{fee1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{fixed:"",prop:"name",label:"菜单名"}}),n("el-table-column",{attrs:{fixed:"",prop:"_id",label:"菜单列表名"}}),n("el-table-column",{attrs:{fixed:"",prop:"index",label:"索引名"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleClick(e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.clear(e.row._id)}}},[t._v("删除")])]}}])})],1)},r=[],c=(n("d3b7"),n("96cf"),{props:{id:{}},methods:{handleClick:function(t){this.$router.push("/pushmenu/".concat(t))},clear:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(e.$http.delete("/del/".concat(t)));case 2:n=a.sent,200===n.status&&(e.$router.go(0),e.$message({type:"success",message:"删除成功!"}));case 4:case"end":return a.stop()}}))}))},fetch:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("/".concat(this.id)));case 2:t=e.sent,this.tableData=t.data,window.console.log(this.tableData);case 5:case"end":return e.stop()}}),null,this)}},data:function(){return{tableData:[]}},created:function(){this.fetch()}}),l=c,s=n("2877"),i=Object(s["a"])(l,a,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d238661.2267894e.js.map