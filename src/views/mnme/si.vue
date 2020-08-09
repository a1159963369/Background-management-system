<template>
  <div class="gouwuche">
    <el-row>
      <el-col :span="2" v-for="(zjl,index) in array" :key="index">
        <el-card
          style="line-height: 15px;height:200px;display:flex;flex-direction:column;"
          :body-style="{ padding: '0px' }"
        >
          <img style="height:100px;" :src="zjl.img" class="image" />
          <div style="padding: 14px;">
            <span>专辑:{{zjl.name}}</span>
            <div class="bottom clearfix">
              <time class="time">价格:{{zjl.price}}元</time>
              <el-button type="text" class="button" @click="add(zjl.id)">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-table :data="tabledata" border show-summary style="width: 100%">
          <el-table-column prop="id" label="ID" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="price" sortable label="价格"></el-table-column>
          <el-table-column prop="count" sortable label="数量">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-minus" @click="btnjian(scope)"></el-button>
              {{scope.row.count}}
              <el-button type="primary" icon="el-icon-plus" @click="btnjia(scope)"></el-button>
            </template>
          </el-table-column>
          <el-table-column prop="zongjia" sortable label="总价"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "gouwuche",
  created() {
    this.array = this.$store.state.arrayData;
    this.tabledata = this.$store.state.GouwuChe;

    // this.array.forEach((v, i) => {

    //   this.zongjia[i] = v.count * v.price;
    // });

    // console.log(array);
  },
  data() {
    return {
      array: [],
      tabledata: [],
      // zongjia: [],
      currentDate: new Date(),
    };
  },
  methods: {
    add(id) {
      this.$store.dispatch("addgold", id);
    },
    btnjia(v) {
      let val = v.$index;
      this.$store.dispatch("jiafa", val);
      
    },
    btnjian(v) {
      let val = v.$index;
      this.$store.dispatch("jianfa", val);
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });
      return sums;
    },
  },
};
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 15px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 0px;
  
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 40px;
}
</style>