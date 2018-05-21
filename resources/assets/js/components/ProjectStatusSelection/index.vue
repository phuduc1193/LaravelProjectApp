<template>
  <el-select v-model="value" :placeholder="$t('form.select')" @change="$emit('input', value)">
    <el-option v-for="item in projectStatus" :key="item.id" :label="getLabel(item.name)" :value="item.id">
    </el-option>
  </el-select>
</template>

<script>
import { mapGetters } from "vuex";
import camelCase from "lodash/camelCase";

export default {
  name: "project-status-selection",
  props: ["status"],
  computed: {
    ...mapGetters(["projectStatus"])
  },
  data: function() {
    return {
      value: this.status
    };
  },
  methods: {
    getLabel(name) {
      return this.$t("status." + camelCase(name));
    }
  }
};
</script>