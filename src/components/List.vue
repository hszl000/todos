<template>
  <div>
      <ul>
          <li v-for="item in todosN" :key="item.id" class="li">
                <input type="checkbox" v-model="item.done" class="ipt">
                <p :style="{textDecoration:item.done?'line-through':'',opacity:item.done?0.3:1}" class="ppp">{{item.title}}</p>
                <span @click="remove(item.id)" class="sshanchu">x</span>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:"List",
    data(){
        return {
            todos:[],
            todosN:[]
        }
    },
    mounted(){
        this.todosN = this.todos = this.$store.getters.todos
    },
    computed:{
        ...mapGetters({num:'num',todos1:'todos'}),
    },
    methods:{
        remove(id){
            this.todos = this.todos.filter(item=>item.id !== id)
        }
    },
    watch:{
        num:{
            deep:true,
            handler(val){
                console.log(val)
                if(this.num == 1){
                    this.todosN = this.todos
                }else if(this.num == 2){
                    this.todosN = this.todos.filter(item=>item.done)
                }else if(this.num == 3){
                    this.todosN = this.todos.filter(item=>!item.done)
                }
            }
        },
        todos:{
            deep:true,
            handler(val){
                this.$store.commit('TODOS',val)
            }
        },
        todos1:{
            deep:true,
            handler(val){
                this.todosN = this.todos = val
            }
        }
    }
}
</script>

<style scoped>
.check{
    background: url(../assets/下载.svg);
    width: 40px;
    height: 40px;
}
.li{
    background: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid rgb(237, 237, 237);
    position: relative;
}
input{
    margin: 0px 20px 0px 0px;
}
.sshanchu{
    display: none;
    position: absolute;
    right:20px;
    padding: 20px;
    cursor: pointer;
}
.li:hover .sshanchu{
    display: block;
}


/* checked样式 */
.ipt {
  width: 25px;
  height: 25px;
  border: 1px solid gray;
  background-color: #fff;
  line-height: 22px;
  font-size: 16px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
}
input[type='checkbox']:checked {
  color: rgb(93, 194, 175);
  background: white;
  border: 1px solid rgb(93, 194, 175);
}
input[type='checkbox']:after {
  content: '✔';
}

.ppp{
    transition: opacity 500ms linear 0s;
}
</style>