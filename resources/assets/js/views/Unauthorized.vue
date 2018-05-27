<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>401</h1>
      <h2>{{$t('message.unauthorized')}}</h2>
      <p class="pt-3 pb-2">{{$t('message.returnHome')}}</p>
      <router-link to="/">
        <el-button round class="mr-2">{{$t('form.returnHome')}}</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "unauthorized"
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
h1 {
  font-size: 7em;
}
</style>
