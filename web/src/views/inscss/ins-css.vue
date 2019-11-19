<template>
    <div class="inscss ">
        
        <h1 class="w-100">INTERESTING CSS</h1>
        <div class="gudu"></div>
        <div v-for="(item,i) in list" :key="i">
            <h3 class="mb-3">{{item.title}}</h3>
            
        <div class="mb-3" v-html="item.desc"></div>
         <mavon-editor  :toolbarsFlag="false"  :editable="false" v-model="item.contents"/>
    </div></div>
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
        list:[]}
    },
    async created(){
        const res =await this.$http.get('/css')
        this.list=res.data
        //window.console.log(res.data)
    }
}
</script>