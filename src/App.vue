<template>
  <div id="app">
    <router-view></router-view>
     
  </div>
</template>
<script>
</script>
<style>
  /* @import "../static/css/main.css";
  @import "../static/css/color-dark.css"; */

  /*深色主题*/
  /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
 
  #app {
    width: 100%;
    height: 100%;
    min-width: 1460px;
    margin: 0 auto;
    text-align: center;
  }

  #container {
    position: relative;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .clearFloat {
    clear: both;
  }
  .el-tabs__item{
      min-width: 150px;
  }
.el-tabs__item:hover {
    color: #000000;
    cursor: pointer;
}
.el-tabs__item.is-active {
    color: #ffffff;
    
      background: #337ab7;
}
</style>
