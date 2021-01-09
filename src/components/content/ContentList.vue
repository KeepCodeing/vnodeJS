<template>
  <div>
    <el-row v-for="item in $store.state.all_store.all_content" :key="item.id">
      <el-col :span="2" style="font-size: 13px;">{{item['author']['loginname']}}</el-col>
      <el-col :span="2"  style="font-size: 13px;">{{item['reply_count']}}/{{item['visit_count']}}</el-col>
      <el-col :span="1">{{item['tab'] === undefined ? '无' : item['tab']}}</el-col>
      <el-col :span="16"><span style="cursor: pointer;" @click="$router.push('/topic/' + item.id)">{{item['title']}}</span></el-col>
      <el-col :span="3"  style="font-size: 13px;">{{item['last_reply_at']}}</el-col>
    </el-row>
    <el-pagination
      :page-size="40"
      :pager-count="5"
      layout="prev, pager, next"
      :total="1000"
      @current-change="pageChange">
    </el-pagination>
  </div>
</template>

<script>
  import {GET_ALL_CONTENT} from "../../store/type";

  export default {
    name: "ContentList",
    methods: {
      pageChange(page) {
        this.$store.dispatch(GET_ALL_CONTENT, {page, type: this.type});
      }
    },
    created() {
      this.pageChange(1, this.type);
    }
  }
</script>

<style scoped>
  .el-row {
    margin: 5px;
  }
  .el-col {
    margin: 5px 0;
  }
</style>
