<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>404</h1>
      <h2>{{$t('errorMessage.pageNotExists')}}</h2>
      <p class="pt-3 pb-2">{{$t('errorMessage.returnHomeOrReport')}}</p>
      <router-link to="/">
        <el-button round class="mr-2">{{$t('form.returnHome')}}</el-button>
      </router-link>
      <report-problem-component class="ml-2" @file-report="toHomepage"></report-problem-component>
    </el-col>
  </el-row>
</template>

<script>
import ReportProblemComponent from "@/components/ReportProblem";

export default {
  name: "pagenotfound",
  components: { ReportProblemComponent },
  methods: {
    toHomepage(response) {
      console.log(response);
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
