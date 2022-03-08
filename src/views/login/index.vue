<template>
        <div class="login-main-view" style="overflow: hidden">
            <div class="ky-logo"></div>
            <div class="login-main-content">
                <div class="grid-content login-index hidden-sm-and-down" style="text-align: center; flex: 1">
                    <h1 class="index-word">
                        Vite
                        <br />Vue3
                    </h1>
                    <p class="lead-mktg">
                        ElementPlus
                        <br />Template
                    </p>
                </div>
                <div class="w-100 mb-45 hidden-sm-and-up">
                    <div class="index-word-sm">Vite Vue3 Element-Plus</div>
                    <div class="lead-mktg">Vite Vue3 Element-Plus</div>
                </div>
                <div class="grid-content login-index login-main">
                    <div class="login-box">
                        <el-card class="login-card">
                            <el-form class="login-form" label-position="top" label-width="80px">
                                <el-form-item>
                                    <slot slot="label">
                                        <span style="font-size: 16px;font-weight: normal;color: #303133">Username</span>
                                    </slot>
                                    <el-input v-model="workNum" @keyup.enter.native="login" />
                                    username:Anything
                                </el-form-item>
                                <el-form-item>
                                    <span style="font-size: 16px;font-weight: normal;color: #303133">Password</span>
                                    <el-input type="password" v-model="password" @keyup.enter.native="login" />
                                    password:Anything
                                </el-form-item>
                                <el-form-item style="text-align: center;">
                                    <el-button type="success" class="login-btn" @click="login">login</el-button>
                                </el-form-item>
                                <el-form-item style="text-align: right;margin-top: 15px">
                                    <span style="color: #909399">
                                      <!--<el-button type="text" size="mini">forget password？</el-button>-->
                                    </span>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
  import {setToken} from "@/utils/auth";

  export default {
        name: 'login',
        data() {
            return {
                workNum: '',
                password: '',
            }
        },
        mounted(){
            const self = this;
        },
        methods: {
            login() {
                let self = this;
                if(self.workNum == ''){
                  self.$message({
                    type: 'error',
                    message: 'Please fill in your account number.'
                  })
                  return;
                }
                if(self.password == ''){
                  self.$message({
                    type: 'error',
                    message: 'Please fill in your password'
                  })
                  return;
                }
                self.$store.dispatch('user/login', 'Token')
                self.$router.push({name: 'Dashboard'})
            },
            getQueryString(name) {
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                let reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
                let r = window.location.search.substr(1).match(reg);
                let q = window.location.pathname.substr(1).match(reg_rewrite);
                if(r != null){
                    return unescape(r[2]);
                }else if(q != null){
                    return unescape(q[2]);
                }else{
                    return null;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login-main-view {
        color: rgba(255, 255, 255, 0.6);
        background: #2b3137 url("@/assets/login_images/simple-codelines.svg") center 10%;
        background-size: cover;
        height: 100vh;
        text-align: left;
        display: flex;
    }

    .login-main-content {
        display: flex;
        flex: 1;
        width: 0;
        align-items: center;
        justify-content: space-between;
    }

    .login-index {
        height: 65vh;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .login-main{
        margin-right: 15vw;
    }

    .index-word {
        padding-top: 5%;
        padding-left: 25%;
        text-align: left;
        font-size: 64px !important;
        font-family: InterUI, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
        "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
        font-weight: 500;
        line-height: 1 !important;
        color: #fff !important;
    }
    .index-word-sm{
        font-size: 24px !important;
        font-family: InterUI, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
        "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
        font-weight: 500;
        line-height: 1 !important;
        color: #fff !important;
        text-align: center;
    }

    .lead-mktg {
        padding-left: 25%;
        text-align: left;
        font-size: 21px !important;
        font-weight: normal !important;
        font-family: InterUI, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
        "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
    }

    .login-box {
        padding-top: 4%;
    }

    .login-card {
        height: 400px;
        width: 378px;
    }

    .login-form {
        margin-top: 10%;
    }

    .login-btn {
        margin-top: 10%;
        font-size: 16px !important;
        width: 100%;
        height: 48px;
    }

    .ky-logo {
        height: 75px;
        width: 75px;
        margin-top: 5px;
        margin-left: 30px;
        background: url("@/assets/logo.png") no-repeat center 0;
        background-size: cover;
        outline: none;
    }
    .w-100{
        width: 100%;
    }
    .mb-45{
        margin-bottom: 45px;
    }
    @media screen and (max-width:768px) {
        .login-main-view{
            flex-direction: column;
        }
        .login-main-content{
            width: auto;
            justify-content: center;
            flex-direction: column;
        }
        .login-main{
            margin-right: 0;
        }
        .lead-mktg{
            padding-left: 0;
            text-align: center;
        }
        .login-card{
            width: 320px;
        }
    }
</style>
