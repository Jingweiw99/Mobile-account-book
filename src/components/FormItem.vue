<template>
  <div>
    <label class="formItem">
      <span class="name">标签名：</span>
      <input type="text" :value="value" 
      @input="onValueChanged($event.target.value)"
      :placeholder="placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class FormItem extends Vue {
  @Prop({default:''}) readonly value!:string;
 
  @Prop() placeholder?: string;
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  display: block;
  background-color: white;
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
</style>
