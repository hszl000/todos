<template>
  <div class="footer"  v-show="this.length.length">
      <p><span>{{aaa | filFn}}</span></p>
      <div>
          <span @click="allTodosFn" :style="{'border':num == 1?'1px solid #ead7d7':''}">All</span>
          <span  @click="doneFn" :style="{'border':num == 2?'1px solid #ead7d7':''}">Active</span>
          <span @click="unDoneFn" :style="{'border':num == 3?'1px solid #ead7d7':''}">Completed</span>
      </div>
      <div>
          <p  @click="okFn" v-show="aaa !== this.length.length" style="text-align:right;">Clear completed</p>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Footer',
    data(){
        return {
            todos:[],
        }
    },
    mounted(){
        this.todos = this.$store.getters.todos
    },
    computed:{
        ...mapGetters({length:'todos',num:'num'}),
        aaa(){
            return this.length.filter(item=>!item.done).length
        }
    },
    methods:{
        // 全部
        allTodosFn(){
            this.$store.commit('NUM',1)
        },
        // 已完成
        doneFn(){
            this.$store.commit('NUM',2)
        },
        // 未完成
        unDoneFn(){
            this.$store.commit('NUM',3)
        },
        // 清除已完成
        okFn(){
            this.$store.commit('CLEAR')
        }
        
    },
    filters:{
        filFn(val){
            if(val <=1){
                return val+ 'item left'
            } else{
                return val+'items left'
            }
        }
    }
}
</script>

<style>
.footer{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 10px;
    font-family: 楷体;
}
.footer span{
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
}
.footer>p,div{
    flex: 1;
}
</style>