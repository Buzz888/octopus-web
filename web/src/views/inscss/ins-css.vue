<template>
<div class="w-100 h-100">
    <div class="w-100 h-100" v-if="flag">
    <div class="zegaiceng"></div>
    <pending></pending>
</div>
    <div class="inscss ">
        
        <h1 class="w-100">INTERESTING CSS</h1>
        <div class="gudu"></div>
        <div v-for="(item,i) in list" :key="i">
            <h3 class="mb-3">{{item.title}}</h3>
            
        <div class="mb-3" v-html="item.desc"></div>
         <mavon-editor defaultOpen="preview" :subfield="myflag"  :toolbarsFlag="false"  :editable="false" v-model="item.contents"/>
    </div></div>
</div>
</template>
<style scoped>
.inscss{
    margin:10px auto;
    width: 90%;

}
</style>
<script>
export default {
    data(){
        return{
        handbook:"",
        list:[],
        myflag:false,
        flag:true
        
        }
    },
    async created(){
        const res =await this.$http.get('/css');
        this.list=res.data;
        setTimeout(() => {
            this.flag = false;
        }, 500);
        
       
    },
}
</script>