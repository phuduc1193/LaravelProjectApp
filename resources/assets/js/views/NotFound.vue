<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>404</h1>
      <h2>{{$t('message.pageNotExists')}}</h2>
      <p class="pt-3">{{$t('message.returnHomeOrReport')}}</p>
      <router-link to="/">
        <el-button round class="mr-2">{{$t('form.returnHome')}}</el-button>
      </router-link>
      <report-problem-component class="ml-0 ml-md-2 mt-2" @file-report="toHomepage">
      </report-problem-component>
    </el-col>
  </el-row>
</template>

<script>
import ReportProblemComponent from "@/components/ReportProblem";
import store from "@/core/store";
import router from "@/core/router";

export default {
  name: "pagenotfound",
  components: { ReportProblemComponent },
  methods: {
    toHomepage() {
      setTimeout(() => {
        this.$router.push("/");
      }, 2000);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
h1 {
  font-size: 7em;
}
</style>
