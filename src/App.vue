<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import '~@/assets/style/helper.scss';



#app {
  line-height: 1.5;
  font-family:$font-hei;
  //下面两个是一般是苹果上面好看一点
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.clearfix::after{
  content:'';
  display:block;
  clear:both;
}
</style>
