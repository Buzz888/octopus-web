<template>
  <div class="menu" style="width:250px; height:90vh;" v-bar>
    <div style="width:100%; height:100%;">
        <div class="inp"><input v-model="say"  type="text"></div>
        <div class="saytitle">
            <div class="mytitle bg-black color-white py-2 px-2 weight">OUR WEBSITE</div>
            <div v-for="item  in saytitle" :key="item.router" class=" flex jc-center wrap ">
                <div @click="$router.push(`/list/${item.router}?index=${item.index}`);saytitle=[];say=null" class="itemtitle w-100 size-2 weight py-2 text-center">{{item.fa}}{{item.name}}</div>
            </div>

        </div>
    
      <ul v-for="(item,j) in list" :key="j">
        <li>
          <div :class="j==cur?'active':''" class="flex ai-center text-center" @click="add(j)">
            <div class="title weight size-3">{{item.title}}</div>
            <i :class="j==cur?'up':'down'" class="iconfont ml-4 icon-left"></i>
          </div>
          <transition name="slide-fade" mode="out-in">
            <ul class="item weight size-2" v-show="j==cur">
              <router-link
                active-class="active"
                tag="li"
                class="pt-2 color-hui3"
                v-for="(item,i) in item.item"
                :key="i"
                :to="{path:`/list/${item.router}`,query:{index:j}}"
                @click="flag=i"
              >{{item.name}}</router-link>
            </ul>
          </transition>
        </li>
      </ul>
      <div class="button flex ai-center wrap">
        <button class="w-100 bg-red color-white weight">意见反馈</button>
        <button class="w-100 bg-hui">联系我</button>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.button {
  width: 60%;
  bottom: 3rem;
  margin:auto;
}
.button button {
  border-radius: 15px;
  border: none;
  height: 30px;
  margin-bottom: 1rem;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-80px);
  opacity: 0;
}

.menu {
  cursor: pointer;
  background: #f5f5f5;
}
.title:hover {
  color: #ed2945;
  cursor: pointer;
}

.name:hover {
  color: #ed2945;
  cursor: pointer;
}

.iconfont {
  font-size: 0.8rem;
  transition: all ease 0.5s;
}
.active {
  color: #ed2945;
}
.up {
  transform: rotate(-90deg);
}
.dow {
  transform: rotate(0);
}
.none {
  display: none;
}
.block {
  display: block;
}
.inp{
  margin:7% 5%;
}
.inp input{
    border: none;
   
    background: #f5f5f5;
    height: 30px;
    border-radius: 15px;
    background: #fff url(https://cn.vuejs.org/images/search.png) 8px 5px no-repeat;
    background-size: 20px;
    padding: 0 15px 0 30px;
}
.saytitle{
    
    margin:7% 5%;
    width: 70%;
    background: #fff;
}

.itemtitle:hover{
    background: #e3e3e3;
}
.itemtitle{
    border-left:5px solid #222; 
}
.mytitle{
    border-left:5px solid #ed2945; 
}
.mytitle:hover{
    color: #ed2945;
}
</style>
<script>
import Vue from "vue";
import EasyBar from "easy-bar";
Vue.use(EasyBar);
export default {
  props: ["list"],
  data() {
    return {
      cur: null,
      flag: null,
      say:null,
      saytitle:[]
    };
  },
  methods: {
    add(j) {
      this.flag = null;
      this.cur = j;
    }
  },
  created() {
      if(this.$route.query.index){
      this.j=this.$route.query.index
      this.cur = this.j}
  },
  watch:{
      $route(to,from){
          if(to!==from){
              if(this.$route.query.index){
      this.j=this.$route.query.index
      this.cur = this.j}
          }

      },
      say: function (val) { 
        if(val==[]){
            this.say=null
            this.saytitle=null
        }
        if(val){

          this.saytitle=[]
      this.list.forEach((element,index) => {
          element.item.filter(item=>{
             let reg = new RegExp(val)
              if(reg.test(item.name)){
                 this.saytitle.push({name:`:${item.name}`,index:index,router:item.router,fa:element.title})
              }
          })
          
      });
     if(this.saytitle==![]){
         this.saytitle.push({name:'没有找到相关内容...',router:'./'})
     }} 
    },
  }
};
</script>
