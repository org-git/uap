<template>
  <nav>
    <el-menu router unique-opened  mode="horizontal" :default-active="$route.path" @select="selectMenu">
      <nav-item v-for="(item, index) in menus" :item="item" :navIndex="String(index)" :key="index">
      </nav-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  // props: ['menus'],
  data() {
    var menus = [{path:'/', name:'首页', icon: 'iconfont icon-wdsy'}, {path:'/console', name:'控制台', icon: 'iconfont icon-kongzhitai-', child: [{name:'选项'}]}];
    return {
      menus
    };
  },
    computed: {
        /**
         * 首次进入页面时展开当前页面所属的菜单
         */
        onActive() {
            return this.$router.path;
        }
    },
    methods: {
        selectMenu(index, indexPath) {
            let openedMenus = this.$refs.navbar.openedMenus;
            let openMenuList;
            // 如果点击的是二级菜单，则获取其后已经打开的菜单
            if (indexPath.length > 1) {
                let parentPath = indexPath[indexPath.length - 2];
                openMenuList = openedMenus.slice(
                    openedMenus.indexOf(parentPath) + 1
                );
            } else {
                openMenuList = openedMenus;
            }
            openMenu = openMenu.reverse();
            openMenu.forEach(ele => {
                this.$refs.navbar.closeMenu(ele);
            });
        }
    }
};
</script>
