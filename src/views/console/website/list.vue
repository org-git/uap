<template>
    <section>
        <el-row>
            <el-form :inline="true" :model="search" size="mini">
                <el-form-item label="网站名称">
                    <el-input v-model="search.name" placeholder="网站名称"></el-input>
                </el-form-item>
                <el-form-item label="网站状态">
                    <el-select v-model="search.status" placeholder="请选择">
                        <el-option v-for="st in status" :key="st.value" :label="st.text" :value="st.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSearch">查询</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-table border stripe :data="rows" v-loading="loading" :default-sort="{prop: 'name', order: 'ascending'}">
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column header-align="center" label="名称" sortable>
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="bottom-start" width="300">
                        <p>{{ scope.row.summary }}</p>
                        <div slot="reference" class="name-wrapper">
                            <a @href="scope.row.url">
                                <span>{{ scope.row.name }}</span>
                            </a>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column header-align="center" label="地址">
                <template slot-scope="scope">
                    <a @href="scope.row.url">
                        <span>{{ scope.row.url }}</span>
                    </a>
                </template>
            </el-table-column>
            <el-table-column header-align="center" label="创建时间" sortable>
                <template slot-scope="scope">
                    <span>{{ scope.row.created }}</span>
                </template>
            </el-table-column>
            <el-table-column header-align="center" label="状态">
                <template slot-scope="scope">
                    <span>{{ getStatusName(scope.row.status) }}</span>
                </template>
            </el-table-column>
            <el-table-column header-align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="button" size="mini" @click="onEdit(scope.row)" title="编辑">
                        <i class="iconfont icon-icon07"></i>&nbsp;编辑
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <u-pagination :rows="rows" :total="total"></u-pagination>
    </section>
</template>

<script>
import WebsiteService from "@/services/website.service";
import uenum from "@/kits/enum";

export default {
    data () {
        let loading = false;
        let status = [{ value: 0, text: "全部" }];
        uenum.websitestatus.forEach(ele => {
            status.push(ele);
        });
        let search = {
            name: "",
            status: 0
        };
        let total = 0;
        let rows = [];

        return { loading, status, search, total, rows };
    },
    created: function () {
        this.onSearch();
    },
    methods: {
        /**
         * 获取网站状态名称
         */
        getStatusName (status) {
            let name = "";
            uenum.websitestatus.forEach(ele => {
                if (ele.value === status) {
                    name = ele.text;
                }
            });
            return name;
        },
        /**
         * 查询
         */
        onSearch () {
            let that = this;
            that.loading = true;

            WebsiteService.getAll(that.search).then(function (res) {
                that.loading = false;
                let response = res.data;
                if (response && response.code === "200") {
                    that.total = response.data.total || 0;
                    that.rows = response.data.rows || [];
                } else {
                    that.$notify({
                        title: "系统提示",
                        message: "获取网站列表失败",
                        type: "warning",
                        position: "bottom-right"
                    });
                }
            });
        },
        /**
         * 编辑
         */
        onEdit (website) {
            this.$router.push({
                path: "/console/website/edit",
                query: {
                    id: website.id
                }
            });
        }
    }
};
</script>
