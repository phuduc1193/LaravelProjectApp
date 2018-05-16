<template>
  <div class="app-container">
    <el-row>
      <el-button round @click="toList">{{ $t('backToList') }}</el-button>
    </el-row>
    <el-form ref="form" :model="form" :rules="rules" label-width="200px" class="pt-5">
      <el-form-item :label="$t('form.projectName')">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('form.estimatedDuration')">
        <el-col :span="5" :xs="12">
          <el-input-number controls-position="right" v-model="form.duration" :min="0" :max="Infinity">
          </el-input-number>
        </el-col>
        <el-col :span="5" :xs="12">
          ({{$t('unit.hours')}}) 
        </el-col>
        <el-col :span="14" :xs="24" class="pt-md-0 pt-3">
          <el-date-picker v-model="durationDate" type="datetimerange" :start-placeholder="$t('form.startDate')" :end-placeholder="$t('form.endDate')">
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item :label="$t('form.description')">
        <el-input type="textarea" v-model="form.description" rows="4"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ProjectService from "./project.service";

export default {
  data() {
    return {
      durationDate: "",
      form: {
        name: "",
        duration: 1,
        started_at: "",
        ended_at: "",
        description: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        description: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    toList() {
      this.$router.push("/projects/list");
    },
    onSubmit() {
      if (this.durationDate.length === 2) {
        this.form.started_at = this.durationDate[0].toISOString();
        this.form.ended_at = this.durationDate[1].toISOString();
      }

      this.$refs.form.validate(valid => {
        if (valid) {
          ProjectService.create(this.form)
            .then(project => {
              this.$router.push({ path: "/projects/show/" + project.id });
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input-number {
  width: 97%;
}

.el-date-editor--datetimerange.el-input__inner {
  width: 100%;
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
