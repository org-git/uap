<template>
    <el-row>
        <el-col :span="18" :offset="3">
            <el-card>
                <el-steps :active="1" align-center>
                    <el-step title="填写用户信息"></el-step>
                </el-steps>
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label">
                            <i class="iconfont icon-register"></i>&nbsp;用户注册</span>

                        <el-form ref="frm" :model="user" :rules="rules" status-icon size="small" label-position="right" label-width="100px">
                            <el-form-item prop="username" label="用户名">
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-input v-model="user.username" placeholder="username" />
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item prop="password" label="密码">
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="password" />
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item prop="confirmpassword" label="确认密码">
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-input type="password" v-model="user.confirmpassword" auto-complete="off" placeholder="confirmpassword" />
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item prop="agree" label="">
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-checkbox v-model="user.agree">同意使用协议</el-checkbox>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submit('frm')">注册</el-button>
                                <el-button @click="reset('frm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        var that = this;
        var validpassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.user.confirmpassword !== "") {
                    that.$refs.frm.validateField("confirmpassword");
                }
                callback();
            }
        };
        var validconfirmpassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.user.password) {
                callback(new Error("两次输入密码不一致！"));
            } else {
                callback();
            }
        };
        return {
            user: {
                username: "",
                password: "",
                confirmpassword: "",
                agree: false
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
                    {
                        min: 4,
                        max: 20,
                        message: "长度在4-20个字符",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        validator: validpassword,
                        trigger: "blur"
                    }
                ],
                confirmpassword: [
                    {
                        required: true,
                        validator: validconfirmpassword,
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        submit(frm) {
            let that = this;
            that.$refs[frm].validate(valid => {
                if (valid) {
                    if (!that.user.agree) {
                        that.$notify({
                            title: "系统提示",
                            message: "请勾选同意协议，才能继续注册！",
                            type: "warning",
                            position: "bottom-right"
                        });
                        return false;
                    }
                    that.$notify({
                        title: "系统提示",
                        message: "注册成功！",
                        type: "success",
                        position: "bottom-right"
                    });
                    return true;
                } else {
                    return false;
                }
            });
        },
        reset(frm) {
            this.$refs[frm].resetFields();
        }
    }
};
</script>
