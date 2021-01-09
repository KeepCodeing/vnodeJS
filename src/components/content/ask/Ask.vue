<template>
  <el-card>
    <TabMenu />
    <ContentList type="ask" />
  </el-card>
</template>

<script>
  import ContentList from "../ContentList";
  import TabMenu from "../TabMenu";
  export default {
    name: "Ask",
    components: {
      TabMenu,
      ContentList
    },
    created() {
      ContentList.props = ['type'];
    }
  }
</script>

<style scoped>

</style>
