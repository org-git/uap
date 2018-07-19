<template>
    <section class="section-login">
        <div class="login">
            <div class="login-main">
                <div class="login-top">
                    <img src="../../assets/images/login/head-img.png" alt="" />
                    <h1>Login
                        <span class="anc-color"> to your account</span>
                    </h1>
                    <h2>Login with</h2>
                    <ul>
                        <li>
                            <a class="fa" href="#"></a>
                        </li>
                        <li>
                            <a class="tw" href="#"></a>
                        </li>
                        <li>
                            <a class="g" href="#"></a>
                        </li>
                    </ul>
                    <h3> or</h3>
                    <input type="text" :placeholder="$t('home.login.username')" v-model="username" required="">
                    <input type="password" :placeholder="$t('home.login.password')" v-model="password" required="">
                    <div class="login-bottom">
                        <div class="login-check"></div>
                        <div class="login-para"></div>
                        <div class="clear"> </div>
                    </div>
                    <button type="submit" v-on:click='login'>{{ $t('home.login.title') }}</button>
                </div>
            </div>
        </div>
        <div class="copyright">
            <u-footer></u-footer>
        </div>
    </section>
</template>

<style scoped>
@import url("../../assets/css/login.css");
</style>

<script>
import UserService from "@/services/user.service";

export default {
    data() {
        return {
            username: "test",
            password: "123456"
        };
    },
    methods: {
        login() {
            let data = { username: this.username, password: this.password };
            var response = UserService.login(data);
            if(response && response.code == '200') {
                this.$layer.msg('登录成功', { icon: 5 });
                this.$router.replace('/');
            } else {
                this.$layer.msg(response.message || '登录失败', { icon: 7 });
            }
        }
    }
};
</script>
