<template>
  <el-select v-model="value" :placeholder="$t('form.select')" v-if="!isLoading"
  @change="$emit('input', value)">
    <el-option v-for="item in options" :key="item.id" :label="getLabel(item.name)" :value="item.id">
    </el-option>
  </el-select>
</template>

<script>
import axios from "axios";
import camelCase from "lodash/camelCase";

export default {
  name: "project-status-selection",
  props: ["status"],
  data: function() {
    return {
      options: [],
      value: this.status,
      isLoading: true
    };
  },
  methods: {
    getLabel(name) {
      return this.$t("status." + camelCase(name));
    }
  },
  created() {
    axios.get("/status/project").then(response => {
      this.options = response.data;
      this.isLoading = false;
    });
  }
};
</script>