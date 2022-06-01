<template>
  <div class="nav-wrapper">
    <div class="content">
      money.vue
      <Nav></Nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: green;
  display: flex;
  flex-direction: column;
}
.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>
