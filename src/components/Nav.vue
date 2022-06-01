<template>
  <div class="nav">
    <router-link to="/money"><Icon name="money"></Icon>记账</router-link>
    
    <router-link to="/labels"><Icon name="label"></Icon>标签</router-link>
    
    <router-link to="/statistics"> <icon name="statistics"></icon>统计 </router-link>
  </div>
</template>

<script lang="ts">
//使用全部导入已经封装到Icon组件


export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>
