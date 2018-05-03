<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <i class='international-icon fa fa-globe'/>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="vn" :disabled="language==='vn'">Tiếng Việt</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: this.$t('notification.switchLanguageSuccess'),
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>


