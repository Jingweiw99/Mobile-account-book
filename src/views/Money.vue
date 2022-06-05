<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad
        @update:value="onUpdateAmount"
        @submit="saveRecord"
      ></NumberPad>
      <!-- <Types :value="record.type" @update:value="onUpdateType"></Types>等价于下面的 -->
      <Types :value.sync="record.type"></Types>
      <Notes @update:value="onUpdateNotes"></Notes>
      <Tags :data-source.sync="tags" @update:value="onupdateTags"></Tags>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/NumberPad.vue";
import Types from "@/components/Types.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
import model from "@/model";


const recordList = model.fetch();
@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: RecordItem[] = recordList;
  record: RecordItem= {
tags: [], notes: "", type: "+", amount: 0,createdAt:new Date
};

  onupdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  // onUpdateType(value: string) {
  //   this.record.type=value;
  // }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    // 深拷贝
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
    
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
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
