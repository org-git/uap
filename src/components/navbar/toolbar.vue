<template>
    <el-dropdown trigger="hover">
        <span class="el-dropdown-link">
            <i class="iconfont icon-xiaoxi"></i>
            {{ $t('message') }}
        </span>
        <el-badge :value="messages.length" :max="99" />
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="msg in messages" :key="msg.id" :item="msg" :index="msg.id" divided @click.native="showMsg(msg)">
                {{ msg.text }}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    data() {
        let messages = [
            { id: "2b4fb61e-99e1-11e8-97eb-3c5282dad09b", text: "这是一条消息" }
        ];
        return { messages };
    },
    methods: {
        showMsg(msg) {
            this.$notify({
                title: "系统提示",
                message: msg.text,
                type: "info",
                position: "bottom-right"
            });
        }
    }
};
</script>

