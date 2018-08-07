<template>
    <section>
        <div class="line"></div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <el-row>
                            <el-col :span="16">
                                <i class="iconfont icon-vip-www"></i>
                                <span>网站列表</span>
                            </el-col>
                            <el-col :span="8" class="text-right">
                                <el-button icon="el-icon-search" size="mini" circle></el-button>
                                <el-button type="success" icon="el-icon-check" size="mini" circle></el-button>
                                <el-button type="warning" icon="el-icon-star-off" size="mini" circle></el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <el-table border stripe :data="projects"> <!-- @row-dblclick="visit"> -->
                        <el-table-column type="index" label="序号" width="50"></el-table-column>
                        <el-table-column header-align="center" label="名称">
                            <template slot-scope="scope">
                                <a @href="scope.row.url">
                                    <span>{{ scope.row.name }}</span>
                                </a>
                            </template>
                        </el-table-column>
                        <el-table-column header-align="center" label="地址">
                            <template slot-scope="scope">
                                <a @href="scope.row.url">
                                    <span>{{ scope.row.url }}</span>
                                </a>
                            </template>
                        </el-table-column>
                        <el-table-column header-align="center" label="操作">
                            <template slot-scope="scope">
                                <el-button type="button" size="mini" round @click="visit(scope.row)" title="访问">
                                    <i class="iconfont icon-fangwen"></i>
                                </el-button>
                                <el-button type="button" size="mini" round @click="share(scope.row)" title="访问">
                                    <i class="iconfont icon-share1"></i>
                                </el-button>
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
        console.log(this.$store.getters.language);
        console.log(this.$store.getters.app);
        console.log(this.$store.getters.user);
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
        },
        share(row, event) {
            this.$notify({
                title: "系统提示",
                message: "分享成功",
                type: "success",
                position: "bottom-right"
            });
        }
    }
};
</script>
