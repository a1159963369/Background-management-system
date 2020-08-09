<template>
  <div class="about" style="line-height:10px">
    <div>111111</div>
    <div style="line-height:10px" v-for="obj in array" :key="obj.id">
      {{obj.name}}
      <el-button @click="btnDel(obj)">删</el-button>
    </div>
   <router-view></router-view>

  </div>
</template>
<script>
export default {
  name: "about",
  props: ["array"],
  data() {
    return {};
  },
  methods: {
    btnDel(obj) {
      this.$emit("delid");
    },
  },
};
</script>