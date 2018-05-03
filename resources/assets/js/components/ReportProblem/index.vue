<template>
  <el-button round :class="componentClass" @click="openMessage">{{$t('form.reportProblem')}}</el-button>
</template>

<script>
export default {
  name: 'report-problem',
  props: ['propClass'],
  data: function() {
    return {
      componentClass: this.propClass
    }
  },
  methods: {
    openMessage() {
      this.$prompt(this.$t('form.reportDescription'), this.$t('form.reportProblem'), {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email'
      }).then(() => {
        this.$message({
          type: 'success',
          message: this.$t('notification.reportSuccess')
        })
        this.$emit('file-report', 'success')
      })
    }
  }
}
</script>