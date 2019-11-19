<template>
  <div class=" number flex column px-2 jc-center ai-center">
     
    <div class="round my-2"><i class="h-100 pendingicon ai-center flex jc-center tip iconfont icon-liulanliang"></i></div>
    <div class="size-1  color-hui3">{{num}}</div>
    <div class="round my-2"><i class="h-100 ai-center flex jc-center tip iconfont icon-dianzanshu"></i></div>
    <div class="size-1  color-hui3" >70W</div>
    <div @click="black" class="round my-2"><i class="h-100 ai-center flex jc-center tip iconfont icon-huidaodingbu
"></i></div>
    <div class="size-1  color-hui3">Back</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
          num:0,
          
        }
    },
    methods:{
        black(e){
         if (e.pageY > 800) {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 20);
      }
        }
    },
    created(){
      setInterval(() => {
        this.num+=1
      }, 500);
    }
}
</script>
<style scoped>
.round{
    width: 40px;
    height: 40px;
    background: #222;
    border-radius:50%; 
}
.number{
background: #f5f5f5;
height: 90vh;
}
.tip{
    color: white;
    font-size: 1.8rem;
    
}
.round :hover{
    color: #ed2945;
   transform: rotate(180deg);
   transition: 1s ease all;
}
.pendingicon{
    animation: spin 1s linear infinite;
}
</style>