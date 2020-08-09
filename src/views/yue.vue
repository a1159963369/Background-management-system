<template>
  <div id="memuss" class="memuss">
    <el-container>
      <el-aside width="200px" style="height:100vh">
        <div class="menusilder" style="line-height: 60px;">
          <el-radio-group v-model="isCollapse" style>
            <el-switch
              style="display: block"
              v-model="isCollapse"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="缩小"
              inactive-text
            ></el-switch>

            <!-- <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>-->
          </el-radio-group>
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <template v-for="(menu,index) in menuArray">
              <el-submenu :index="menu.id" v-if="menu.subitem.length > 0" :key="index">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">{{menu.title}}</span>
                </template>

                <el-menu-item
                  @click="btnSub(subitem)"
                  index="1-1"
                  v-for="(subitem,index) in menu.subitem"
                  :key="index"
                >
                  <i :class="subitem.icon"></i>
                  {{subitem.title}}
                </el-menu-item>
              </el-submenu>

              <el-menu-item @click="btnSub(menu)" v-else :index="menu.id" :key="index">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.title}}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header style=" display: flex;
  flex-direction: row;">
          <el-tabs
            v-model="editableTabsValue"
            @tab-click="handleClick"
            type="card"
            editable
            @edit="handleTabsEdit"
          >
            <el-tab-pane
              :key="item.name"
              v-for="item in editableTabs"
              :label="item.title"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
        </el-header>
        <el-main>
          <div class="main">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer>
          <div></div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script>
// import menucaidan from '../components/menucaidan'

export default {
  created() {
    this.editableTabs = this.$store.state.menuTabs;
  },
  name: "memuss",

  data() {
    return {
      editableTabsValue: "2", //当前显示第几页
      editableTabs: [], //循环显示tabs页
      isCollapse: true,

      menuArray: [
        {
          id: "1",
          title: "统计图表",
          icon: "el-icon-ice-cream-round",
          subitem: [
            {
              id: "1",
              path: "/yue/yi",
              title: "图表1",
              icon: "el-icon-ice-cream-round",
            },
          ],
        },
        {
          id: "2",
          title: "分页",
          path: "/yue/er",
          icon: "el-icon-location",
          subitem: [],
        },

        {
          id: "3",
          title: "表格和购物车",
          icon: "el-icon-ice-cream-round",
          subitem: [
            {
              id: "1",
              path: "/yue/san",
              title: "表格",
              icon: "el-icon-ice-cream-round",
            },
            {
              id: "2",
              path: "/yue/si",
              title: "购物车",
              icon: "el-icon-ice-cream-round",
            },
            {
              id: "3",
              path: "/yue/wu",
              title: "父",
              icon: "el-icon-ice-cream-round",
            },
            {
              id: "4",
              title: "夫亲",
              path: "/yue/wu/liu",
              icon: "el-icon-location",
            },
            {
              id: "5",
              title: "多表图",
              path: "/yue/qi",
              icon: "el-icon-location",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    btnSub(obj) {
      console.log("obj", obj);
      this.$store.dispatch("addMenuTabs", { title: obj.title, name: obj.path });
      this.$router.push({ path: obj.path });
    },
    handleClick(tab) {
      this.$router.push({ path: tab.name });
    },
    handleTabsEdit(targetName, action) {
      this.$store.dispatch("delMenuTabs", {
        title: targetName,
        name: targetName,
      });
    },
  },
};
</script>
<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.memuss {
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  // justify-content: space-evenly;
  // justify-content: space-between;
 
  
  .menusilder {
    width: 200px;
  }
  .main {
    width: auto;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color: #d3dce6;

  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
