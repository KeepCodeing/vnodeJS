<template>
  <div id="app">
    <el-container style="height: 100%" direction="vertical">
      <Header />
      <el-main style="background-color: #e1e1e1;">
        <ContentCard />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from "./components/content/header/Header";
  import ContentCard from "./components/content/ContentCard";

  export default {
    name: 'app',
    components: {
      Header,
      ContentCard,
    },
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
