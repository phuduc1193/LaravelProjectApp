<template>
  <div v-if="!isLoading">
    <el-form class="app-container" :model="form" :rules="validateRules" ref="form" label-width="150px">
      <el-form-item prop="name" :label="$t('form.projectName')">
        <el-input type="text" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="status_id" :label="$t('form.progress')">
        <div class="row">
          <div class="col-12 col-sm-6">
            <project-status-selection :status="form.status_id" v-model="form.status_id">
            </project-status-selection>
          </div>
          <div class="col-12 col-sm-6 pt-3 pt-sm-0">
            <el-slider v-model="form.percentage" :format-tooltip="formatPercentage"></el-slider>
          </div>
        </div>
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
        <el-button type="primary" @click="onSubmit"> {{ $t('form.edit') }}</el-button>
        <el-button @click="clearForm">{{ $t('form.clear') }}</el-button>
      </el-form-item>
    </el-form>
    <el-row class="bottom-page">
      <router-link :to="'/projects/view/' + id">
        <el-button round>{{ $t('backToView') }}</el-button>
      </router-link>
    </el-row>
  </div>
</template>

<script>
import store from "@/core/store";
import ProjectStatusSelection from "@/components/ProjectStatusSelection";
import Validate from "@/utils/validator";
import ProjectService from "./project.service";
import cloneDeep from "lodash.clonedeep";
import moment from "moment";

const initForm = {
  name: "",
  duration: 1,
  started_at: "",
  ended_at: "",
  description: "",
  status_id: 0,
  percentage: 0
};

export default {
  components: { ProjectStatusSelection },
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
      isLoading: true,
      durationDate: "",
      id: 0,
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

        this.form.started_at = moment(this.form.started_at, "MM.DD.YYYY");
        this.form.ended_at = moment(this.form.ended_at, "MM.DD.YYYY");

        ProjectService.edit(this.id, this.form)
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
    },
    clearForm() {
      this.durationDate = "";
      this.form = cloneDeep(initForm);
    },
    formatPercentage(val) {
      return val + "%";
    }
  },
  beforeCreate() {
    const project = store.getters.project;
    if (!project || project.id != this.$route.params.id) {
      store.dispatch("GetProjectById", this.$route.params.id).then(data => {
        this.id = data.id;
        this.form = {
          name: data.name,
          duration: data.duration,
          started_at: data.started_at,
          ended_at: data.ended_at,
          description: data.description,
          status_id: data.status_id,
          percentage: data.percentage
        };
        this.durationDate = [this.form.started_at, this.form.ended_at];
        this.isLoading = false;
      });
    }
  },
  beforeMount() {
    const project = store.getters.project;
    if (project && project.id == this.$route.params.id) {
      this.id = project.id;
      this.form = {
        name: project.name,
        duration: project.duration,
        started_at: project.started_at,
        ended_at: project.ended_at,
        description: project.description,
        status_id: project.status_id,
        percentage: project.percentage
      };
      this.durationDate = [this.form.started_at, this.form.ended_at];
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-page {
  position: absolute;
  bottom: 20px;
  padding: 0 20px;
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

.el-slider {
  width: 98%;
}

@media only screen and (max-width: 768px) {
  .el-input-number {
    width: 90%;
  }
}
</style>
