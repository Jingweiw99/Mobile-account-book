<template>
  <Layout>
    <div class="wrapper-content">
      <Tags />
      <div class="notes">
        <FormItem
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/NumberPad.vue";
import FormItem from "@/components/FormItem.vue";
import Tags from "@/components/Tags.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
@Component({
  components: { Tabs, Tags, FormItem, NumberPad },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss" scoped>
.wrapper-content {
   
  display: flex;
  flex-direction: column;
  .tags{
    padding-top:233px;
  }
}
.notes {
  padding: 16px, 0;
}
</style>