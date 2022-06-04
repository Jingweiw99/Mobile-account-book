<template>
  <div class="tags">
    <div class="new">
      <button @click="newTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" 
  :class="{selected:selectedTags.indexOf(tag)>=0}"
      @click="toggle(tag)">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;

  selectedTags: string[] = [];
  toggle(tag:string){
    //找到tag的第一个索引
    const index = this.selectedTags.indexOf(tag);
    if(index>=0){
      this.selectedTags.splice(index,1);
    }else{
      this.selectedTags.push(tag);
    }
    
  }
  newTag(){
    const name = window.prompt('请输入标签名')
    if(name == ''){
      window.alert('标签名不能为空')
    }else{
      if(this.dataSource){
        this.dataSource.push(name!);
      }
    }
  }
}
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
      $bg:#d9d9d9;
      background-color: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 14px;
      margin-right: 12px;
      margin: 4px;
      &.selected{
        background:_darken($bg,50%);
        color:white;
      }
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
