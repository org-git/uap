<template>
    <el-menu router unique-opened mode="horizontal" trigger="click" :default-active="$route.path">
        <nav-item v-for="(item, index) in menus" :item="item" :key="index">
        </nav-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        let menus = [];
        if (this.$store.getters.authenticated) {
            menus.push({
                id: '11',
                name: this.$store.getters.user.name,
                icon: 'iconfont icon-yonghuming',
                child: [
                    {
                        id: '111',
                        path: "profile",
                        name: "个人资料",
                        icon: "iconfont icon-profile"
                    }
                ]
            });
            menus.push({
                id: '12',
                path: "loginout",
                name: this.$t('logout.abbr'),
                icon: "iconfont icon-exit"
            });
        } else {
            menus.push({
                id: '21',
                path: "login",
                name: this.$t('login.abbr'),
                icon: "iconfont icon-denglu"
            });
            menus.push({
                id: '22',
                path: "register",
                name: this.$t('register.abbr'),
                icon: "iconfont icon-register"
            });
        }
        return {
            menus
        };
    }
};
</script>
