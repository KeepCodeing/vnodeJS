<template>
  <div>
    <el-card class="title_box">
      <el-row style="margin: 15px;">
        <el-col :span="1"><el-tag type="success">{{topic['tab']}}</el-tag></el-col>
        <el-col :span="23"><h2>{{topic['title']}}</h2></el-col>
      </el-row>
      <el-row style="margin: 15px; border-bottom: 1px solid gray">
        <el-col style="padding-bottom: 10px" :span="24"> 发布于 {{topic['create_at']}} 作者 {{topic['author'] != undefined ? topic['author']['loginname'] : ''}} {{topic['visit_count']}} 次浏览  来自 {{topic['tab']}}</el-col>
      </el-row>
      <el-row style="margin: 30px 15px">
        <el-col :span="24">
          <p>{{topic['content']}}</p>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row v-for="(item, idx) in topic['replies']" style="margin: 15px">
        <el-row>
          <el-col :span="2">{{item['author']['loginname']}}</el-col>
          <el-col :span="10">{{idx + 1}}楼 发布于{{item['create_at']}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            {{item['content']}}
          </el-col>
        </el-row>
      </el-row>
      <el-row v-if="!topic['replies'].length">
        <h2 style="text-align: center">没有回复</h2>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import {GET_TOPIC_CONTENT} from "../../../store/type";

  export default {
    name: "Topic",
    computed: {
      topic: function () {
        let topic_content = this.$store.state.topic_store.topic_content;
        if (topic_content === undefined) return {};
        return this.$store.state.topic_store.topic_content;
      }
    },
    created() {
      this.$store.dispatch(GET_TOPIC_CONTENT, {id: this.$route.params.id});
    }
  }
</script>

<style scoped>
  .title_box {
    margin-bottom: 25px;
  }
  .el-row {
    margin: 30px 15px;
  }
</style>
