<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem filed-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
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
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.find((t) => t.id === id);
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
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
    padding-right:17px;
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
