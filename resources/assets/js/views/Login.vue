<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="title-container">
        <h3 class="title">{{$t('form.loginTitle')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-form-item prop="username">
        <i class="svg-container fa fa-user"></i>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" :placeholder="$t('form.username')" />
      </el-form-item>
      <el-form-item prop="password">
        <i class="svg-container fa fa-unlock-alt"></i>
        <el-input name="password" :type="showPwd ? 'text' : 'password'" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" :placeholder="$t('form.password')" />
        <span class="show-pwd" @click="showPwd = !showPwd">
           <i class="fa" :class="[showPwd ? 'fa-eye-slash' : 'fa-eye']"></i>
        </span>
      </el-form-item>
      <el-row class="pt-3">
        <el-col :span="12" class="pr-2">
          <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">{{$t('form.login')}}</el-button>
        </el-col>
        <el-col :span="12" class="pl-2">
          <el-button type="primary" @click.native.prevent="register">{{$t('form.register')}}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Validate from '@/utils/validator'
import LangSelect from '@/components/LangSelect'

export default {
  components: { LangSelect },
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!Validate.username(value)) {
        callback(new Error(this.$t('form.error.invalidUsername')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!Validate.password(value)) {
        callback(new Error(this.$t('form.error.invalidPassword')))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      showPwd: false,
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px darken($bg, 2%) inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: darken($bg, 2%);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 13px;
    line-height: 47px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .el-button {
    width: 100%;
  }
}
</style>
