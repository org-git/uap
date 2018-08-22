<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <el-card>
                <img :src="user.avatar" alt="avactar" />
            </el-card>
        </el-col>
        <el-col :span="16" :offset="2">
            <el-tabs>
                <el-tab-pane>
                    <span slot="label">
                        <i class="iconfont icon-profile"></i>&nbsp;基础信息
                    </span>
                    <el-form label-position="right" label-width="100px" :model="user" size="mini">
                        <el-form-item label="用 户 名">
                            {{ user.username }}
                        </el-form-item>
                        <el-form-item label="性　　别">
                            {{ getSexName(user.sex) }}
                        </el-form-item>
                        <el-form-item label="姓　　名">
                            {{ user.realname }}
                        </el-form-item>
                        <el-form-item label="出生日期">
                            {{ user.birthday }}
                        </el-form-item>
                        <el-form-item label="手　　机">
                            {{ user.mobile }}
                        </el-form-item>
                        <el-form-item label="邮箱地址">
                            {{ user.email }}
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label">
                        <i class="iconfont icon-vip-www"></i>&nbsp;网站统计
                    </span>
                    网站统计
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>

<script>
import uenum from "@/kits/enum";

export default {
    data () {
        let user = this.$store.getters.user;
        user.avatar = require("@/assets/images/logo.png");
        return {
            user
        };
    },
    methods: {
        /**
         * 获取性别名称
         */
        getSexName (sex) {
            let name = "";
            uenum.sex.forEach(ele => {
                if (ele.value === sex) {
                    name = ele.text;
                }
            });
            return name;
        }
    }
};
</script>
