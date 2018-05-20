<template>
  <div v-if="!isLoading">
    <el-row class="top-page">
      <router-link :to="'/projects/edit/' + data.id">
        <el-button round><i class="fa fa-pencil"></i></el-button>
      </router-link>
    </el-row>
    <el-row class="app-container">
      <h4><small><i>{{ $t('form.projectName') }}</i>:</small> {{ data.name }}</h4>

      <div class="description pt-4">
        <p><i>{{ $t('form.description') }}</i>:</p>
        <p> {{ data.description }} </p>
      </div>
     
      <p class="pt-3">
        <el-col :md="7" :sm="8" :xs="24">
          <i>{{ $t('form.progress') }}</i>: {{ data.percentage }}%
          <status :value="data.status.name"></status>
        </el-col>
        <el-col :md="7" :sm="16" :xs="24" class="pt-3 pt-md-0">
          <i>{{ $t('form.estimatedDuration') }}</i>: {{ data.duration + ' (' + $t('unit.hours') + ')' }}
        </el-col>
        <el-col :md="10" :sm="24" :xs="24" class="pt-3 pt-lg-0">
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
import Status from "@/components/Status";

export default {
  components: { Status },
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

.top-page {
  position: absolute;
  padding: 20px 0;
  right: 20px;
  z-index: 10;
}
</style>
