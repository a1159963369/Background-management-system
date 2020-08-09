<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple" style="background-color:white;">
          <div id="test" style="width:100%; height:300px;"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" style="background-color:white;">
          <div id="test1" style="width:100%; height:300px;"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" style="background-color:white;">
          <div id="test2" style="width:100%; height:300px;">1</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:30px;">
      <el-col :span="12">
        <div class="grid-content bg-purple" style="background-color:white;height:300px;">
          <ul
            class="infinite-list"
            v-infinite-scroll="load"
            style="overflow:auto;height:300px; display:flex;flex-direction: column;"
          >
            <li
              v-for="i in array"
              class="infinite-list-item"
              style="height:30px;line-height:30px;border-bottom:1px solid rgb(200,200,200); display:flex;flex-direction: row;
  justify-content: space-between; padding-left: 30px;padding-right: 30px;margin-top:10px; padding-bottom: 10px"
            >
              {{ i.name }}
              <el-button type="info" plain size="mini" @click="btnSave(i.id)">删除按钮</el-button>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="background-color:white;">1</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="background-color:white;">1</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import options from "./../../echarts";
export default {
  mixins: [options],
  created() {
    this.$data.optionline.series[0].type = "bar";
    this.$data.optionline1.series[0].type = "line";
    this.$data.optionline2.series[0].type = "pie";
  },
  data() {
    return {
      count: 0,
      array: [
        { id: 1, name: "张三" },
        { id: 2, name: "里斯" },
        { id: 3, name: "网二" },
        { id: 4, name: "码字" },
        { id: 5, name: "朝气" },
        { id: 6, name: "玩吧" },
        { id: 7, name: "蛙类" },
        { id: 8, name: "蛙类" },
        { id: 9, name: "蛙类" },
        { id: 10, name: "蛙类" },
        { id: 11, name: "码字" },
        { id: 12, name: "朝气" },
        { id: 13, name: "玩吧" },
        { id: 14, name: "码字" },
        { id: 15, name: "朝气" },
        { id: 16, name: "玩吧" },
      ],
    };
  },
  methods: {
    load() {
      if (this.count < this.array.length) {
        this.count += 2;
      }
    },
    btnSave(id) {
        console.log(id)
      this.array.forEach((v, i) => {
        if (v.id == id) {
          this.array.splice(i, 1);
        }
      });
    },
  },
};
</script>
<style lang="stylus" scoped></style>