<template>
  <el-card>
    <TabMenu />
    <ContentList type="good" />
  </el-card>

</template>

<script>
  import ContentList from "../ContentList";
  import TabMenu from "../TabMenu";

  export default {
    name: "Good",
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
