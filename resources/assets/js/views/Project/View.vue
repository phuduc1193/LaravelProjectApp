<template>
  <div v-if="!isLoading">
    <el-row class="app-container">
      <el-col class="col-12 col-sm-8 col-md-9">
        <h4><small><i>{{ $t('form.projectName') }}</i>:</small> {{ data.name }}</h4>

        <div class="description pt-4">
          <p><i>{{ $t('form.description') }}</i>:</p>
          <div><pre> {{ data.description }} </pre></div>
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
      </el-col>
      <el-col class="col-12 col-sm-4 col-md-3">
        <router-link :to="'/projects/edit/' + data.id" class="top-page">
          <el-button round><i class="fa fa-pencil"></i></el-button>
        </router-link>
        <project-revision :data="data.revision_history" :users="data.users" class="pt-0 pt-sm-5">
        </project-revision>
      </el-col>
    </el-row>
    <el-row class="bottom-page">
      <router-link to="/projects/list">
        <el-button round>{{ $t('backToList') }}</el-button>
      </router-link>
    </el-row>
  </div>
</template>

<script>
import store from "@/core/store";
import ProjectRevision from "./components/Revision";
import Status from "@/components/Status";

export default {
  components: { Status, ProjectRevision },
  data() {
    return {
      isLoading: true,
      data: {}
    };
  },
  beforeCreate() {
    const project = store.getters.project;
    if (!project || project.id != this.$route.params.id) {
      store.dispatch("GetProjectById", this.$route.params.id).then(data => {
        this.data = data;
        this.isLoading = false;
      });
    }
  },
  beforeMount() {
    const project = store.getters.project;
    if (project && project.id == this.$route.params.id) {
      this.data = project;
      this.isLoading = false;
    }
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
  right: 20px;
  z-index: 10;
}
</style>
