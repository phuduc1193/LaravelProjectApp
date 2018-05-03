<template>
  <el-button round :class="componentClass" @click="openMessage">{{$t('form.reportProblem')}}</el-button>
</template>

<script>
import axios from "axios";

export default {
  name: "report-problem",
  props: ["propClass"],
  data: function() {
    return {
      componentClass: this.propClass
    };
  },
  methods: {
    openMessage() {
      this.$prompt(
        this.$t("form.reportDescription"),
        this.$t("form.reportProblem"),
        {
          confirmButtonText: this.$t("form.ok"),
          cancelButtonText: this.$t("form.cancel")
        }
      )
        .then(input => {
          const data = {
            route: this.$router.currentRoute.fullPath,
            previousRoute: this.$store.getters.previousRoute,
            description: input.value
          };
          axios
            .post("/feedbacks", data)
            .then(() => {
              this.$message({
                type: "success",
                message: this.$t("notification.reportSuccess")
              });
              this.$emit("file-report", "success");
            })
            .catch(() => {
              this.$message({
                type: "error",
                message: this.$t("notification.error")
              });
              this.$emit("file-report", "error");
            });
        })
        .catch(() => {});
    }
  }
};
</script>