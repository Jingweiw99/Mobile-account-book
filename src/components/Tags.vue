<template>
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
</template>

<script lang="ts">
export default {
    name: 'Tags',
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  .current {
    display: flex;
    flex-wrap: wrap;

    li {
      background-color: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 14px;
      margin-right: 12px;
      margin: 4px;
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
</style>
