<template>
  <div class="div_ipt">
      <input type="checkbox" @click="checkAll" class="all_ch" ref="ipt" :checked="doneFn">
      <input class="ipt" type="text" v-model="ipt" @keydown.enter="addTodo" placeholder="What needs to be done?">  <!-- 添加选项框 -->
  </div>
</template>

<script>
import {nanoid} from 'nanoid' // 引入随机id
import {mapGetters} from 'vuex'
export default {
    name:'Header',
    data(){
        return {
            ipt:''
        }
    },
    methods:{
        addTodo(){  // 添加todo
            // 判断为空
            if(this.ipt.trim() == '') return alert('请输入内容')
            // 包装TODO
            let todoObj = {title:this.ipt,done:false,id:nanoid()}
            // 调用vuex储存
            this.$store.commit('ADDTODO',todoObj)
            // 清空input
            this.ipt = ''
        },
        checkAll(e){  // 全选 or 不全选
            this.$store.commit('ALL',e.target.checked)
        }
    },
    computed:{
        ...mapGetters(['todos']),
        doneFn(){
            return this.aba === this.todos.length && this.todos.length!==0
        },
        aba(){
            return this.todos.filter(item=>item.done).length
        }
    }
}
</script>

<style scoped>
.div_ipt {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    background: #fff;
    margin-bottom: 5px;
    position: relative;
}
.ipt{
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    background: #fff;
}
.all_ch{
    position: absolute;
    top:19px;
    left:23px;
}

/* checked样式 */
.all_ch {
  width: 13px;
  height: 25px;
  background-color: #fff;
  line-height: 22px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.1);
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  transform: rotate(90deg);
}
input[type='checkbox']:checked {
  color: gray;
  background: white;
}
input[type='checkbox']:after {
  content: '❯';
}
</style>