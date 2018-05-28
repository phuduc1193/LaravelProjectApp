<template>
  <span class="tags">
    {{ getListMetaTags() }}
  </span>
</template>

<script>
export default {
  name: "tags",
  props: ["value"],
  methods: {
    getListMetaTags() {
      const tags = _.chain(this.value)
        .map("name")
        .map(tag => {
          return "#" + tag.replace(/ /g, "");
        })
        .value();
      return tags.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  word-break: break-word !important;
}
</style>