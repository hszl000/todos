import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
    num:1
  },
  mutations: {
    ADDTODO(state,val){  // 添加todo/Header
      state.todos.unshift(val)
    },
    NUM(state,val){  // 判断展示是否完成的标识/Footer
      state.num = val
    },
    TODOS(state,val){  // 
      state.todos = val
    },
    CLEAR(state){  // 清空所有已完成的todo/Footer
      let obj = state.todos
      state.todos = obj.filter(item=>!item.done)
    },
    ALL(state,val){  // 全选 or 全部选/Header
      let obj = state.todos
      state.todos = obj.map(item=>item.done = val)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    todos:(state,getters)=>{  // 获取所有的todos
      console.log(state,getters)
      return state.todos
    },
    num:(state)=>{  // 获取num标识
      return state.num
    }
	}
})
