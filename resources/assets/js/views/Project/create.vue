<template>
  <div class="app-container">
    <el-form :model="form" :rules="validateRules" ref="form" label-width="150px" class="pt-3" status-icon>
      <el-form-item prop="name" :label="$t('form.projectName')">
        <el-input type="text" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="tags" :label="$t('form.metaTags')">
        <el-col :span="8">
          <multi-tags v-model="form.tags"></multi-tags>
        </el-col>
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
          <el-date-picker v-model="durationDate" type="daterange" :start-placeholder="$t('form.startDate')" :end-placeholder="$t('form.endDate')" @change="changeScheduleRange">
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item prop="started_at" :label="$t('form.startDate')" class="d-sm-none">
        <el-date-picker v-model="form.started_at" type="date" :placeholder="$t('form.startDate')" @change="changeSchedule(0)">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="ended_at" :label="$t('form.endDate')" class="d-sm-none">
        <el-date-picker v-model="form.ended_at" type="date" :placeholder="$t('form.endDate')" @change="changeSchedule(1)">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="description" :label="$t('form.description')">
        <el-input type="textarea" v-model="form.description" rows="8"></el-input>
      </el-form-item>
      <el-form-item class="pt-2">
        <el-button type="primary" @click="onSubmit" :loading="loading"> {{ $t('form.create') }}</el-button>
        <el-button @click="clearForm">{{ $t('form.clear') }}</el-button>
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
import cloneDeep from "lodash.clonedeep";
import MultiTags from "@/components/MultiTags";

const initForm = {
  name: "",
  duration: 1,
  started_at: "",
  ended_at: "",
  description: "",
  tags: []
};

export default {
  components: { MultiTags },
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
      form: cloneDeep(initForm),
      validateRules: {
        name: [
          {
            required: true,
            trigger: ["blur", "change"],
            validator: validateName
          }
        ],
        description: [
          {
            required: true,
            trigger: ["blur", "change"],
            validator: validateDescription
          }
        ],
        started_at: [
          {
            required: true,
            trigger: ["blur", "change"],
            validator: validateDate
          }
        ],
        ended_at: [
          {
            required: true,
            trigger: ["blur", "change"],
            validator: validateDate
          }
        ]
      },
      loading: false
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

        this.loading = true;
        this.$store
          .dispatch("CreateProject", this.form)
          .then(project => {
            this.loading = false;
            this.$router.push({ path: "/projects/view/" + project.id });
          })
          .catch(() => {
            this.loading = false;
          });
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
    },
    clearForm() {
      this.durationDate = "";
      this.form = cloneDeep(initForm);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.bottom-page {
  position: fixed;
  bottom: 20px;
}

.el-input-number {
  width: 95%;
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
