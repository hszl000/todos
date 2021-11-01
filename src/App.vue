<template>
  <div class="all">
    <h1 class="h1">todos</h1>
    <Header/>
    <List/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
  name:'App',
  components:{
    Header,List,Footer
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,body{
    background: #f5f5f5;
  }
  .all{
    max-width:560px;
    margin: 0 auto;
  }
  .h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
}
</style>