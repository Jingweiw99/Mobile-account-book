<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad></NumberPad>
      <Types></Types>
      <Notes></Notes>
      <Tags :data-source="tags"></Tags>
    </Layout>
  </div>
</template>

<script>
import NumberPad from "@/components/NumberPad.vue";
import Types from "@/components/Types.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";
export default{
  name: "Money",
  data() {
    return {
      tags:['衣','食','住','行']
    };
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
