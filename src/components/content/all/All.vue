<template>
  <el-card>
    <TabMenu />
    <ContentList type="all" />
  </el-card>
</template>

<script>
  import ContentList from "../ContentList";
  import TabMenu from "../TabMenu";

  export default {
    name: "All",
    components: {
      TabMenu,
      ContentList,
    },
    created() {
      ContentList.props = ['type'];
    }
  }
</script>

<style scoped>

</style>
