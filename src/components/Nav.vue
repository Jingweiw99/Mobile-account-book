<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected"
      ><Icon name="money"></Icon>记账</router-link
    >

    <router-link to="/labels" class="item" active-class="selected"
      ><Icon name="label"></Icon>标签</router-link
    >

    <router-link to="/statistics" class="item" active-class="selected">
      <icon name="statistics"></icon>统计
    </router-link>
  </nav>
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
@import '~@/assets/style/helper.scss' ;
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 15px;
  >.item {
    padding: 2px 0;
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
    
  }
// 需要写在外层
  .item.selected{
      color:$color-highlight;
  }
}
</style>
