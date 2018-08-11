<template>
    <section>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card>
                    <div slot="header">
                        <i class="iconfont icon-xiaoxi1"></i>
                        <span>系统通知</span>
                        <el-button class="pull-right" type="text">查看更多>></el-button>
                    </div>
                    <el-table stripe :show-header="false" :data="notices">
                        <el-table-column type="index" width="50">
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <el-tag type="success" size="mini">{{ scope.row.sender }}</el-tag>
                                <span>{{ scope.row.title }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column width="100">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import MessageService from "@/services/message.service";

export default {
    data() {
        let loading = false;
        let notices = [];
        let that = this;
        that.loading = true;

        MessageService.getAll().then(function(res) {
            that.loading = false;
            let response = res.data;
            if (response && response.code === "200") {
                that.notices = response.data;
            } else {
                this.$notify({
                    title: "系统提示",
                    message: "获取通知列表失败",
                    type: "warning",
                    position: "bottom-right"
                });
            }
        });
        return { loading, notices };
    }
};
</script>
