<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad></NumberPad>
      <types></types>
      <Notes></Notes>
      <Tags></Tags>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from "@/components/NumberPad.vue";
import Types from "@/components/Types.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";
export default{
  name: "Money",
  data() {
    return {};
  },
  methods: {},
  components: { NumberPad, Types,Notes,Tags},
};
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
