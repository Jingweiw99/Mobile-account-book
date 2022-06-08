<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import store from '@/store/index2'
  export default {
    data() {
      return {
        store: store
      }
    }
  }
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import '~@/assets/style/helper.scss';



body {
  line-height: 1.5;
  font-family:$font-hei;
  //下面两个是一般是苹果上面好看一点
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: #f5f5f5;
}
.clearfix::after{
  content:'';
  display:block;
  clear:both;
}

</style>
