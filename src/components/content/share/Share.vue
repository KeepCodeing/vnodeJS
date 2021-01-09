<template>
  <el-card>
    <TabMenu />
    <ContentList type="share" />
  </el-card>
</template>

<script>
  import ContentList from "../ContentList";
  import TabMenu from "../TabMenu";

  export default {
    name: "Share",
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
