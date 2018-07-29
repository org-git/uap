<template>
    <!-- 如果当前item中有子节点 -->
    <el-submenu v-if="item.child && item.child.length" :index="index">
        <!-- 创建菜单分组 -->
        <template slot="title">
            <i v-if="item.icon && item.icon.length" :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
        </template>
        <!-- 递归调用自身，直到subItem不含有子节点 -->
        <nav-item v-for="(subitem, i) in item.child" :key="index+'-'+i" :navIndex="index+'-'+i" :item="subitem">
        </nav-item>
    </el-submenu>

    <!-- 如果当前item不含有子节点 -->
    <el-menu-item v-else :index="item.path">
        <i v-if="item.icon && item.icon.length" :class="item.icon"></i>
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<script>
export default {
    // 递归组件必须有name
    name: "navItem",
    props: ["item", "index"]
};
</script>
