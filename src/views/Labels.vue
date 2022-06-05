<template>
  <div>
    <Layout>
      <ul class="tags">
        <li><span>衣</span><Icon name="right"></Icon></li>
        <li><span>食</span><Icon name="right"></Icon></li>
        <li><span>住</span><Icon name="right"></Icon></li>
        <li><span>行</span><Icon name="right"></Icon></li>
      </ul>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Labels",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.tags{
    background-color: white;
    font-size:16px;
    padding-left: 16px;
    list-style:none;
    
    >li{
        display:inline;
        min-height: 44px;
        display: flex;  
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
        
        svg{
            font-size: 24px;
            color: #666;
            margin-right:16px;
        }
    }
}

.createTag{
    background-color: #eee4e4;
    border-radius: 4px;
    border:none;
    height:40px;
//  这个就是上面的父元素
   &-wrapper{
       text-align:center;
       padding:16px;
       margin-top:44-16px;

    }
}
</style>
