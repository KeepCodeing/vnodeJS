<template>
  <el-menu
    mode="horizontal"
    background-color="#ffffff"
    router>
    <el-menu-item v-for="item in $store.state.home_store.tab_list"
                  :index="item.path"
                  :key="item.id">
        <span
          :style="{backgroundColor: $route.path === item.path ? '#80bd01' : '#ffffff',
          color: $route.path === item.path ? '#ffffff' : '#80bd01'}"
          style="padding: 6px; border-radius: 4px">{{item.name}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "TabMenu"
  }
</script>

<style scoped>
  .el-menu {
    border: none !important;
    margin-bottom: 20px;
  }
  .el-menu-item {
    border: none !important;
    line-height: 30px !important;
    height: 30px !important;
    padding: 5px !important;
  }
  .el-menu-item:hover {
    background-color: white !important;
  }
</style>
