<template>
  <el-header height="50px">
    <div class="header_container">
      <div class="logo">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
      </div>
      <div class="menu">
        <el-menu
          active-text-color="#cccccc"
          mode="horizontal"
          background-color="#444"
          text-color="#cccccc"
          router>
          <el-menu-item
            v-for="item in $store.state.header_store.menu_list"
            :key="item.id"
            :index="item.path">{{item.name}}</el-menu-item>
        </el-menu>
      </div>
    </div>
  </el-header>
</template>

<script>
  import {GET_MENU_LIST} from "../../../store/type";

  export default {
    name: "Header",
    created() {
      this.$store.dispatch(GET_MENU_LIST);
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }
  .header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #444;
  }
  .logo {
    width: 120px;
    margin-left: 100px;
  }
  .menu {
    height: 100%;
    margin-right: 100px;
  }
  .el-menu {
    height: 100%;
    margin: 0;

  }
  .el-menu-item {
    height: 100% !important;
    border: none !important;
    line-height: 50px !important;
  }
  .el-menu-item:hover {
    color: white !important;
    background-color: #444444 !important;
  }
</style>
