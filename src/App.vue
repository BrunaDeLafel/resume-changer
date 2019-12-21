<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  //在create函数中设置rem适配
  created(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/3200+ 'px';
    window.onresize = function() {
      document.documentElement.style.fontSize = document.documentElement.clientWidth/3200 + 'px';
    };
    console.log(document.documentElement.style.fontSize);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color: #ececec
}
</style>
