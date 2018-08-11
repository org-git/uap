<template>
  <el-container style="min-height: 600px;">
    <el-header>
      <u-header></u-header>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu router unique-opened :default-active="$route.path" v-loading="loading" :collapse="isCollapse">
          <nav-item v-for="item in menus" :item="item" :key="item.path" :index="item.path">
          </nav-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <u-footer></u-footer>
    </el-footer>
  </el-container>
</template>

<script>
import MenuService from "@/services/menu.service";

export default {
    data() {
        let loading = true;
        let menus = [];
        let that = this;
        MenuService.getAll().then(function(res) {
            that.loading = false;
            let response = res.data;
            if (response && response.code === "200") {
                that.menus = response.data;
            } else {
                this.$notify({
                    title: "系统提示",
                    message: "获取菜单失败",
                    type: "warning",
                    position: "bottom-right"
                });
            }
        });

        return { loading, isCollapse: false, menus };
    }
};
</script>
