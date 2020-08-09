<template>
  <div>
      <div  id="test" style="width:800px; height:500px;margin-left:20%;"></div>
      
    <router-view></router-view>
  </div>
</template>
<script>
import options from "./../../echarts";
export default {
  mixins: [options],
  created() {
    this.$data.optionline.series[0].type = "bar";
  },
  data() {
    return {};
  },
};
</script>