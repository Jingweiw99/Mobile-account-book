<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad
        @update:value="onUpdateAmount"
        @submit="saveRecord"
      ></NumberPad>
      <!-- <Types :value="record.type" @update:value="onUpdateType"></Types>等价于下面的 -->
      <Types :value.sync="record.type"></Types>

      <FormItem
        field-name="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      ></FormItem>

      <Tags :data-source.sync="tags" @update:value="onupdateTags"></Tags>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/NumberPad.vue";
import Types from "@/components/Types.vue";
import FormItem from "@/components/FormItem.vue";
import Tags from "@/components/Tags.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  tags = window.tagList;
  recordList = window.recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "+",
    amount: 0,
    createdAt: new Date(),
  };

  onupdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
 
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    window.createRecord(this.record);
  }
}
</script>



<style lang="scss">
// .layout-wrapper{

// }
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>


<style lang="scss" scoped>
</style>
