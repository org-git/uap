<template>
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            <i class="iconfont icon-xiaoxi"></i>
            {{ $t('message') }}
            <el-badge :value="messages.length" :max="99" />
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="msg in messages" :key="msg.id" :item="msg" :index="msg.id" divided @click.native="showMsg(msg)">
                {{ msg.title }}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>

import MessageService from "@/services/message.service";

export default {
    data() {
        let that = this;
        let messages = [];
        MessageService.getAll().then(function(res) {
            let response = res.data;
            if (response && response.code === "200") {
                that.messages = response.data;
            } else {
                this.$notify({
                    title: "系统提示",
                    message: "获取消息列表失败",
                    type: "warning",
                    position: "bottom-right"
                });
            }
        });
        return { messages };
    },
    methods: {
        showMsg(msg) {
            this.$notify({
                title: msg.title || '系统提示',
                message: msg.text,
                type: 'info',
                position: 'bottom-right'
            });
        }
    }
};
</script>

