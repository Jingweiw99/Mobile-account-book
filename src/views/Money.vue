<template>
  <div>
    <Layout class-prefix="layout">
      
     

     
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>

 <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
       <div>
        <label class="notes">
          <span class="name">备注：</span>
          <input type="text" />
        </label>
      </div>

      <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        
      </div>

    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
// .layout-wrapper{
  
// }
.layout-content{
  display:flex;
  flex-direction:column-reverse;
}
</style>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow:1;
  display:flex;
  flex-direction:column-reverse;
  .current {
    display: flex;
    flex-wrap:wrap;
    
    li {
      background-color: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 14px;
      margin-right: 12px;
      margin:4px;
    }
  }
  .new {
    padding-top: 16px;
    button {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 3px;
    }
  }
}
.notes {
  display: block;
  background-color: #f5f5f5;
  font-style: 14px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
.numberPad {
  
  .output {
    @extend %innerShadow !optional;
    font-size: 36px;
    //编程字体，等宽字体
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    
    
  }
  .buttons {
    button {
      width: 25%;
      height: 7.9vh;
      float: left;
      background-color: transparent;
      border: none;
      &.ok {
        height: 7.9 * 2vh;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background-color: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background-color: darken($bg, 8%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background-color: darken($bg, 12%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background-color: darken($bg, 16%);
      }
      &:nth-child(14) {
        background-color: darken($bg, 20%);
      }
      &:nth-child(12) {
        background-color: darken($bg, 24%);
      }
    }
  }
}
</style>
