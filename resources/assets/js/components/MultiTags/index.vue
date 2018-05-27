<template>
  <el-select
    v-model="data"
    multiple
    filterable
    allow-create
    remote
    default-first-option
    :placeholder="$t('form.enterKeyword')"
    :remote-method="remoteMethod"
    :loading="loading"
    @change="addTag($event)">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "multi-tags",
  props: ["value"],
  data() {
    return {
      popular: [],
      options: [],
      data: this.value || [],
      loading: false,
      timeout: null
    };
  },
  mounted() {
    this.loading = true;
    this.$store
      .dispatch("GetPopularTags")
      .then(response => {
        this.loading = false;
        this.popular = response;
        this.options = this.popular;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    remoteMethod(keyword) {
      clearTimeout(this.timeout);
      if (keyword !== "") {
        this.loading = true;
        this.timeout = setTimeout(() => {
          this.$store
            .dispatch("SearchTagsByKeyword", keyword)
            .then(response => {
              this.loading = false;
              if (response && response.length > 0) this.options = response;
              else {
                this.options = [];
              }
            })
            .catch(() => {
              this.loading = false;
            });
        }, 250);
      } else {
        this.options = this.popular;
      }
    },
    addTag(data) {
      this.$emit("input", data);
    }
  }
};
</script>

<style lang="scss">
.el-select {
  width: 100%;
}
</style>
