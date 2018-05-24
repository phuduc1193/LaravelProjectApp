<template>
  <el-select
    v-model="returnValues"
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
  data() {
    return {
      options: [],
      returnValues: [],
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
        this.options = response;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    remoteMethod(keyword) {
      if (keyword !== "") {
        this.loading = true;
        clearTimeout(this.timeout);
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
        }, 200);
      } else {
        this.options = [];
      }
    },
    addTag(event) {}
  }
};
</script>

<style lang="scss">
.el-select {
  width: 100%;
}
</style>
