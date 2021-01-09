<template>
  <router-view />
</template>

<script>
  import {GET_TAB_LIST} from "../../store/type";
  import TabMenu from "./TabMenu";
  import ContentList from "./ContentList";

  export default {
    name: "ContentCard",
    components: {
      TabMenu,
      ContentList,
    },
    created() {
      this.$store.dispatch(GET_TAB_LIST);
    }
  }
</script>

<style scoped>
</style>
