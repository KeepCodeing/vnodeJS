<template>
  <el-card>
    <TabMenu />
    <ContentList type="job" />
  </el-card>
</template>

<script>
  import ContentList from "../ContentList";
  import TabMenu from "../TabMenu";
  export default {
    name: "Job",
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
