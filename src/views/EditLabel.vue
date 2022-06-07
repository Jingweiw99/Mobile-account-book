<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" 
      @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        :value="tag.name"
        @update:value="update"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button
      @click="remove"
      >删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import FormItem from "@/components/FormItem.vue";
import Button from "@/components/Button.vue";

@Component({
  components: { FormItem, Button },
})
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = { id: "", name: "" };
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.find((t) => t.id === id);
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }

  update(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }

  remove(){
    if (this.tag) {
      tagListModel.remove(this.tag.id);
    }
  }

  goBack(){
    console.log('back')
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 18px;
    padding-right: 17px;
  }
  .leftIcon {
    width: 24px;
    height: 16px;
  }
  .rightIcon {
    line-height: 16px;
  }
}

.form-wrapper {
  margin-top: 8px;
}

.button-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
