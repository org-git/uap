<template>
    <section>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>网站列表</span>
                        <el-button type="text">按钮</el-button>
                    </div>
                    <el-table border stripe :data="projects" @row-dblclick="visit">
                        <el-table-column type="index" label="序号" width="50"></el-table-column>
                        <el-table-column header-align="center" label="名称">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span>{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column header-align="center" label="地址">
                            <template slot-scope="scope">
                                <span>{{ scope.row.url }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "github",
                    url: "http://github.com"
                },
                {
                    name: "google",
                    url: "http://google.com.hk"
                }
            ]
        };
    },
    methods: {
        visit(row, event) {
            window.location.href = row.url;
        }
    }
};
</script>
