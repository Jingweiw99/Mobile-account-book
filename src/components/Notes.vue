<template>
    <div>
        <label class="notes">
          <span class="name">备注：</span>
          <input type="text" />
        </label>
      </div>
</template>

<script lang="ts">
export default {
    name: 'Notes',
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  background-color: #f5f5f5;
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
