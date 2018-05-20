<template>
  <div class="app-container">
    <el-form :model="form" :rules="validateRules" ref="form" label-width="150px" class="pt-3">
      <el-form-item prop="name" :label="$t('form.projectName')">
        <el-input type="text" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('form.estimatedDuration')">
        <el-col :span="5" :xs="12">
          <el-input-number controls-position="right" v-model="form.duration" :min="0" :max="Infinity">
          </el-input-number>
        </el-col>
        <el-col :span="5" :xs="12">
          ({{$t('unit.hours')}}) 
        </el-col>
        <el-col :span="14" :xs="24" class="d-sm-block d-none pt-3 pt-md-0">
          <el-date-picker v-model="durationDate" type="datetimerange" :start-placeholder="$t('form.startDate')" :end-placeholder="$t('form.endDate')" @change="changeScheduleRange">
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item prop="started_at" :label="$t('form.startDate')" class="d-sm-none">
        <el-date-picker v-model="form.started_at" type="datetime" :placeholder="$t('form.startDate')" @change="changeSchedule(0)">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="ended_at" :label="$t('form.endDate')" class="d-sm-none">
        <el-date-picker v-model="form.ended_at" type="datetime" :placeholder="$t('form.endDate')" @change="changeSchedule(1)">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="description" :label="$t('form.description')">
        <el-input type="textarea" v-model="form.description" rows="8"></el-input>
      </el-form-item>
      <el-form-item class="pt-2">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <el-row class="bottom-page">
      <router-link to="/projects/list">
        <el-button round>{{ $t('backToList') }}</el-button>
      </router-link>
    </el-row>
  </div>
</template>

<script>
import Validate from "@/utils/validator";
import ProjectService from "./project.service";

export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (!Validate.text(value)) {
        callback(new Error(this.$t("form.error.invalidName")));
      } else {
        callback();
      }
    };
    const validateDescription = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("form.error.invalidDescription")));
      } else {
        callback();
      }
    };
    const validateDate = (rule, value, callback) => {
      if (!Validate.date(value)) {
        callback(new Error(this.$t("form.error.invalidDateFormat")));
      } else {
        callback();
      }
    };

    return {
      durationDate: "",
      form: {
        name: "",
        duration: 1,
        started_at: "",
        ended_at: "",
        description: ""
      },
      validateRules: {
        name: [{ required: true, trigger: "blur", validator: validateName }],
        description: [
          { required: true, trigger: "blur", validator: validateDescription }
        ],
        started_at: [
          { required: true, trigger: "blur", validator: validateDate }
        ],
        ended_at: [{ required: true, trigger: "blur", validator: validateDate }]
      }
    };
  },
  methods: {
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

        ProjectService.create(this.form)
          .then(response => {
            const project = response.data;
            this.$router.push({ path: "/projects/view/" + project.id });
          })
          .catch(() => {});
      });
    },
    changeScheduleRange() {
      if (this.durationDate && this.durationDate.length === 2) {
        this.form.started_at = this.durationDate[0];
        this.form.ended_at = this.durationDate[1];
      } else {
        this.form.started_at = "";
        this.form.ended_at = "";
      }
    },
    changeSchedule(choice) {
      choice = parseInt(choice);
      if (choice === 0) {
        this.durationDate[choice] = this.form.started_at;
      } else {
        this.durationDate[choice] = this.form.ended_at;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-page {
  position: absolute;
  bottom: 20px;
}

.el-input-number {
  width: 97%;
}

.el-date-editor {
  &.el-input {
    width: 100%;
  }

  &.el-input__inner {
    width: 100%;
  }
}

.el-textarea__inner {
  height: 400px;
}

@media only screen and (max-width: 768px) {
  .el-input-number {
    width: 90%;
  }
}
</style>
