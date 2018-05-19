<template>
  <div v-if="!isLoading">
    <el-row class="app-container">
      <h4><small><i>{{ $t('form.projectName') }}</i>:</small> {{ data.name }}</h4>

      <div class="description pt-4">
        <p><i>{{ $t('form.description') }}</i>:</p>
        <p> {{ data.description }} </p>
      </div>
     
      <p class="pt-3">
        <el-col :md="8" :sm="8" :xs="24">
          <i>{{ $t('form.progress') }}</i>: {{ data.percentage }}%
        </el-col>
        <el-col :md="8" :sm="16" :xs="24" class="pt-3 pt-md-0">
          <i>{{ $t('form.estimatedDuration') }}</i>: {{ data.duration + ' (' + $t('unit.hours') + ')' }}
        </el-col>
        <el-col :md="8" :sm="24" :xs="24" class="pt-3 pt-lg-0">
          <i>{{ $t('form.schedule') }}</i>: {{ data.started_at }} - {{ data.ended_at }}
        </el-col>
      </p>
    </el-row>
    <el-row class="bottom-page">
      <router-link to="/projects/list">
        <el-button round>{{ $t('backToList') }}</el-button>
      </router-link>
    </el-row>
  </div>
</template>

<script>
import ProjectService from "./project.service";

export default {
  data() {
    return {
      isLoading: true,
      data: {}
    };
  },
  methods: {},
  beforeCreate() {
    ProjectService.show(this.$route.params.id).then(data => {
      this.data = data;
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.description {
  min-height: 45vh;
}

.bottom-page {
  position: absolute;
  bottom: 20px;
  padding: 0 20px;
}
</style>
