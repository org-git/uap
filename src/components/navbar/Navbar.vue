<template>
    <el-menu router unique-opened :mode="mode" ref="navbar" :default-active="$route.path" @select="selectMenu">
        <nav-item v-for="item in menus" :item="item" :key="item.path" :index="item.path">
        </nav-item>
    </el-menu>
</template>

<script>
export default {
    props: ["mode"],
    data() {
        var menus = [
            {
                id: "1",
                path: "/",
                name: this.$t("home.index.title"),
                icon: "iconfont icon-wdsy"
            },
            {
                id: "2",
                path: "/console/dashboard",
                name: this.$t("console.title"),
                icon: "iconfont icon-kongzhitai-"
            }
        ];
        return {
            menus
        };
    },
    computed: {
        /**
         * 首次进入页面时展开当前页面所属的菜单
         */
        onActive() {
            return this.$route.path;
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
            // openMenu = openMenuList.reverse();
            openMenuList.reverse().forEach(ele => {
                this.$refs.navbar.closeMenu(ele);
            });
        }
    }
};
</script>
