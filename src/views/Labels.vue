<template>
  <div>
    <Layout>
      <ul class="tags" v-for="tag in tags" :key="tag.id">
        <li>
          <span>{{ tag.name }}</span>
          <Icon name="right"></Icon>
        </li>
      </ul>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import model2 from "@/models/tagListModel";

model2.fetch();
@Component
export default class Labels extends Vue {
  tags = model2.fetch();

  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = model2.create(name);
        if (message === "duplicated") {
        alert("标签已存在");
      } else if (message === "success") {
        alert("标签添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: white;
  font-size: 16px;
  padding-left: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background-color: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  //  这个就是上面的父元素
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
