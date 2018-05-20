<template>
  <el-tag :type="getType()">{{ value }}</el-tag>
</template>

<script>
export default {
  name: "status",
  props: ["value"],
  methods: {
    getType() {
      let type = "";
      switch (this.value) {
        case "In Progress":
          type = "";
          break;
        case "Done":
          type = "success";
          break;
        default:
          type = "info";
          break;
      }

      return type;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-tag {
  border-radius: 25px;
}
</style>
