<template>
  <div class="app-container">
    <el-form :model="form" :rules="validateRules" ref="form" label-width="150px" class="pt-3">
      <el-form-item prop="name" :label="$t('form.name')">
        <el-input type="text" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="email" :label="$t('form.email')">
        <el-input type="text" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item :label="$t('form.changePassword')">
        <el-switch v-model="editPassword" @change="reValidate()"></el-switch>
      </el-form-item>
      <el-form-item prop="password" :label="$t('form.password')" v-show="editPassword">
        <el-input class="password-input" name="password" :type="showPwd ? 'text' : 'password'" @keyup.enter.native="onSubmit" v-model="form.password" />
        <span class="show-pwd" @click="showPwd = !showPwd">
          <i class="fa" :class="[showPwd ? 'fa-eye-slash' : 'fa-eye']"></i>
        </span>
      </el-form-item>
      <el-form-item prop="passwordConfirmation" :label="$t('form.passwordConfirmation')" v-show="editPassword">
        <el-input class="password-input" name="passwordConfirmation" :type="showPwdConfirm ? 'text' : 'password'" @keyup.enter.native="onSubmit" v-model="form.passwordConfirmation" />
        <span class="show-pwd" @click="showPwdConfirm = !showPwdConfirm">
          <i class="fa" :class="[showPwdConfirm ? 'fa-eye-slash' : 'fa-eye']"></i>
        </span>
      </el-form-item>
      <el-form-item class="pt-2">
        <el-button type="primary" @click="onSubmit" :loading="loading"> {{ $t('form.save') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Validate from "@/utils/validator";

export default {
  computed: {
    ...mapGetters(["name", "username", "email"])
  },
  data() {
    const validateName = (rule, value, callback) => {
      if (!Validate.name(value)) {
        callback(new Error(this.$t("form.error.invalidName")));
      } else {
        callback();
      }
    };
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
      if (!Validate.registerPassword(value) && this.editPassword) {
        callback(new Error(this.$t("form.rule.password")));
      } else {
        callback();
      }
      this.$refs.form.validateField("passwordConfirmation");
    };
    const validatePasswordConfirmation = (rule, value, callback) => {
      if (this.form.password != value && this.editPassword) {
        callback(new Error(this.$t("form.error.invalidPasswordConfirmation")));
      } else {
        callback();
      }
    };

    return {
      editPassword: false,
      form: {
        username: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      validateRules: {
        name: [{ required: true, trigger: "blur", validator: validateName }],
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
    reValidate() {
      if (this.editPassword) return;
      this.form.password = null;
      this.form.passwordConfirmation = null;
      this.$refs.form.validate(valid => {});
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          if (!this.form.started_at || !this.form.ended_at) {
            this.$message({
              type: "error",
              message: this.$t("notification.missingSchedule")
            });
          }
          return false;
        }

        let submitForm = this.form;
        if (!this.editPassword) {
          submitForm = {
            name: this.form.name,
            username: this.form.username,
            email: this.form.email
          };
        }

        this.loading = true;
        this.$store
          .dispatch("UpdateUserByUsername", submitForm)
          .then(project => {
            this.loading = false;
            this.$message({
              message: this.$t("notification.updateSuccessful"),
              type: "success"
            });
          })
          .catch(() => {
            this.$message({
              message: this.$t("notification.requestFailed"),
              type: "error"
            });
            this.loading = false;
          });
      });
    }
  },
  created() {
    this.form.email = this.email;
    this.form.name = this.name;
    this.form.username = this.username;
  }
};
</script>

<style lang="scss" scoped>
.show-pwd {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 40px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  padding: 0 15px;
}
</style>

<style lang="scss">
.password-input input {
  padding-right: 3rem !important;
}
</style>
