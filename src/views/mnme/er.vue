<template>
  <div class="juzhong">
    <el-table :data="tableData"  border style="width: 50%;margin-left:25%;">
      <el-table-column prop="id" label="学号" width="180" height="100px"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" height="100px"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180" height="100px"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currePage"
      :page-sizes="[3, 5, 7]"
      :page-size="sizePage"
      layout="total, sizes, prev, pager, next, jumper"
      :total.sync="dataLength"
      :background="true"
    ></el-pagination>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  created() {
    this.getData();
  },
  data() {
    return {
      tableData: null,
      currePage: 1,
      sizePage: 5,
      serah: "",
      dataLength: 0,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currePage = val;
      this.getData();
    },
    handleSizeChange(val) {
      this.sizePage = val;
      this.getData();
    },
    getData() {
      this.$http
        .post("/api", {
          currePage: this.currePage,
          sizePage: this.sizePage,
          serah: this.serah,
        })
        .then((val) => {
          this.dataLength = val.data.length;
          this.tableData = val.data.data;
          // this.tableData = val.data.filter((val) => {
          //     return val.state == 0;
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>