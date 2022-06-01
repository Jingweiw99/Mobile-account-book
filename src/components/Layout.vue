<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
      <Nav></Nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Layout',
    
};
</script>

<style lang="css" scoped>
.nav-wrapper {
  
  display: flex;
  flex-direction: column;
  height:100vh
}
.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>
