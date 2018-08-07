<template>
  <section>
    <div class="error_content">
      <div class="error_left">
        <span class="sp_con">赶紧修，大家等着呢。</span>
      </div>
      <div class="error_right">
        <div class="error_detail">
          <p class="error_p_title">哎呦~ 服务器居然累倒了!</p>
          <p class="error_p_con">●别急，工程师正在紧急处理，马上就好。</p>
          <p class="error_p_con">●您可致电010-*****转8169,***通知***开发人员!</p>
          <p class="error_p_con">●***的进步需要您的反馈,感谢您对***的使用,请您耐心等待!</p>
        </div>
        <div class="btn_error">
          <a class="btn_back1" href="/">返回首页</a>
          <a class="btn_back2" href="javascript:;" v-on:click="back()">返回上一页</a>
        </div>
      </div>
    </div>
    <u-footer></u-footer>
  </section>
</template>

<style type="text/css">
.error_content {
    margin: 5% auto;
    width: 1000px;
    height: 480px;
    border: 1px solid #cccccc;
}
.error_left {
    margin: 120px 0 0 50px;
    width: 330px;
    height: 345px;
    background: url(../../assets/images/timg.png) no-repeat;
    background-size: 100%;
    float: left;
}
.error_right {
    width: 450px;
    /* height: 590px; */
    float: left;
}
.error_detail {
    margin: 180px 0 0 120px;
    width: 400px;
    height: auto;
}
.error_detail .error_p_title {
    font-size: 28px;
    color: #eb8531;
}
.error_detail .error_p_con {
    font-size: 14px;
    margin-top: 10px;
    line-height: 20px;
}
.sp_con {
    margin-left: 128px;
    color: #1a4ec0;
    margin-top: 39px;
    position: absolute;
    font-size: 18px;
}
.btn_error {
    margin: 80px 0 0 160px;
}
.btn_error a {
    padding: 5px;
    border: 1px solid #cccccc;
}
.btn_back1 {
    background: dodgerblue;
    color: #ffffff;
}
.btn_back2 {
    margin-left: 25px;
    background: #cccccc;
}

.btn {
    width: 40px;
    height: 38px;
    cursor: pointer;
    color: #ff813b;
    float: right;
    margin-top: 1px;
    border-left: solid 1px #ff813b;
    font-size: 20px;
    background: no-repeat;
}
</style>

<script>
export default {
    methods: {
        /**
         * 返回上一页
         */
        back() {
            this.$router.go(-1);
        }
    }
};
</script>
