<template>
    <el-menu router unique-opened mode="horizontal" :default-active="$route.path">
        <nav-item v-for="(item, index) in menus" :item="item" :navIndex="String(index)" :key="index">
        </nav-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        let menus = [];
        if (this.$store.getters.authenticated) {
            menus.push({
                name: this.$store.getters.user.name,
                child: [
                    {
                        path: "/profile",
                        name: "个人资料",
                        icon: "iconfont icon-profile"
                    }
                ]
            });
            menus.push({
                path: "/loginout",
                name: "注销",
                icon: "iconfont icon-exit"
            });
        } else {
            menus.push({
                path: "/login",
                name: "登录",
                icon: "iconfont icon-denglu"
            });
            menus.push({
                path: "/register",
                name: "注册",
                icon: "iconfont icon-register"
            });
        }
        menus.push({
            path: "/language",
            name: this.$t("language"),
            icon: "iconfont icon-yuyan",
            child: [
                { name: "中文", icon: "iconfont icon-zhongwen" },
                { name: "English", icon: "iconfont icon-yingyuzuowensousuo" }
            ]
        });
        return {
            menus
        };
    }
};
</script>
