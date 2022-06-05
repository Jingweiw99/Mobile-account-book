<template>
    <layout >
        编辑标签<span class="emoji">🥺🧐</span>
    </layout>
</template>

<script lang="ts">
import Tags from "@/components/Tags.vue";
import { Vue, Component } from "vue-property-decorator";
import model2 from "@/models/tagListModel";
@Component
export default class EditLabel extends Vue {
    created(){
        const id = this.$route.params.id;
        model2.fetch();
        const tags = model2.data;
        const tag =tags.filter(t=>t.id===id)[0];
        if(tag){
            console.log(tag);
        }else{
            this.$router.replace('/404')
        }

    }   
};
</script>

<style lang="scss" scoped>
.emoji{
    font-size: 35px;
}
</style>
