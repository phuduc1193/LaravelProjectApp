<template>
  <div class="register-container">
    <el-form class="register-form" autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm" label-position="left">
      <div class="title-container">
        <h3 class="title">{{$t('form.registerTitle')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-form-item prop="name">
        <i class="svg-container fa fa-id-card"></i>
        <el-input name="name" type="text" v-model="registerForm.name" autoComplete="on" :placeholder="$t('form.name')" />
      </el-form-item>
      <el-form-item prop="username">
        <i class="svg-container fa fa-user"></i>
        <el-input name="username" type="text" v-model="registerForm.username" autoComplete="on" :placeholder="$t('form.username')" />
      </el-form-item>
      <el-form-item prop="email">
        <i class="svg-container fa fa-at"></i>
        <el-input name="email" type="text" v-model="registerForm.email" autoComplete="on" :placeholder="$t('form.email')" />
      </el-form-item>
      <el-form-item prop="password">
        <i class="svg-container fa fa-unlock-alt"></i>
        <el-input name="password" :type="showPwd ? 'text' : 'password'" @keyup.enter.native="handleRegister" v-model="registerForm.password" autoComplete="on" :placeholder="$t('form.password')" />
        <span class="show-pwd" @click="showPwd = !showPwd">
           <i class="fa" :class="[showPwd ? 'fa-eye-slash' : 'fa-eye']"></i>
        </span>
      </el-form-item>
      <el-form-item prop="passwordConfirmation">
        <i class="svg-container fa fa-unlock-alt"></i>
        <el-input name="password" :type="showPwdConfirm ? 'text' : 'password'" @keyup.enter.native="handleRegister" v-model="registerForm.passwordConfirmation" autoComplete="on" :placeholder="$t('form.passwordConfirmation')" />
        <span class="show-pwd" @click="showPwdConfirm = !showPwdConfirm">
           <i class="fa" :class="[showPwdConfirm ? 'fa-eye-slash' : 'fa-eye']"></i>
        </span>
      </el-form-item>
      <el-row class="pt-3">
        <el-col :span="12" class="pr-2">
          <el-button type="primary" :loading="loading" @click.native.prevent="handleRegister">{{$t('form.register')}}</el-button>
        </el-col>
        <el-col :span="12" class="pl-2">
          <el-button type="primary" @click.native.prevent="login">{{$t('form.login')}}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Validate from "@/utils/validator";
import LangSelect from "@/components/LangSelect";

export default {
  components: { LangSelect },
  name: "register",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!Validate.username(value)) {
        callback(new Error(this.$t("form.error.invalidUsername")));
      } else {
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      if (!Validate.email(value)) {
        callback(new Error(this.$t("form.error.invalidEmail")));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!Validate.registerPassword(value)) {
        callback(new Error(this.$t("form.rule.password")));
      } else {
        callback();
      }
      this.$refs.registerForm.validateField("passwordConfirmation");
    };
    const validatePasswordConfirmation = (rule, value, callback) => {
      if (this.registerForm.password != value) {
        callback(new Error(this.$t("form.error.invalidPasswordConfirmation")));
      } else {
        callback();
      }
    };

    return {
      registerForm: {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      registerRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        email: [{ required: true, trigger: "blur", validator: validateEmail }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        passwordConfirmation: [
          {
            required: true,
            trigger: "blur",
            validator: validatePasswordConfirmation
          }
        ]
      },
      showPwd: false,
      showPwdConfirm: false,
      loading: false
    };
  },
  methods: {
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("RegisterUser", this.registerForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.register-container {
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
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.register-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .register-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 90px auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_register {
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
