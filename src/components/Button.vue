<template>
    <div>
        <button class="button" 
        @click="$emit('click',$event)"><slot></slot></button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Button extends Vue {
    
};
</script>

<style lang="scss" scoped>
.button {
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
