<template>
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            <i :class="lang.icon"></i>
            {{ lang.name }}
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in langs" :key="item.lang" :item="item" :index="item.lang" @click.native="changeLang(item)">{{ item.name }}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    data() {
        let langs = [
            {
                id: "1",
                name: "中文",
                icon: "iconfont icon-zhongwen",
                lang: "zh"
            },
            {
                id: "2",
                name: "English",
                icon: "iconfont icon-yingyuzuowensousuo",
                lang: "en"
            }
        ];
        return {
            lang: langs[0],
            langs
        };
    },
    methods: {
        changeLang(item, event) {
            this.lang = item;
            this.$store.dispatch("setlang", item);
        }
    }
};
</script>
