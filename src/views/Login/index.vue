<template>
  <div>
    <div id="non" style="background-color:rgb(45,58,75);width:100%;height:100vh;padding-top:100px;">
      <div style="width:30%;margin-left:35%;line-height: 60px;">
        <h2 style="text-align:center;font-weight: 800;color:white;">登录</h2>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
        <el-button @click="btnLogin" style="width:100%;">登录</el-button>
        <div style="display:flex;flex-direction: row;">
          <div style="width:50%; height:40px;line-height:30px; color:;white">
            <p style="color:white;">用户名:李杰</p>
            <p style="color:white;">密码:123456</p>
          </div>
          <el-button type="primary" style="width:50%; height:40px;margin-top:10px;">第三方登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsCookies from "js-cookies";
export default {
  created() {

  },
  data() {
    return {
      input: "",
      input2: "",
    };
  },
  methods: {
    btnLogin() {
      console.log("", this.input);
      console.log("", this.input2);
      if (this.input == "李杰") {
        if (this.input2 == "123456") {
          console.log("登陆成功");
          jsCookies.setItem("token", 123);
          this.$router.push({
            path: "/go",
          });
        
        }
      }
    },
  },
};
</script>
<style lang="stylus" scoped></style>