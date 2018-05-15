<template>
  <div class="app-container">
    <el-row>
      <el-button circle>
        <i class="fa fa-filter" aria-hidden="true"></i>
      </el-button>
      <el-button type="primary" icon="el-icon-plus" circle @click="toCreate"></el-button>
    </el-row>
    <tree-table :data="data" :columns="columns"></tree-table>
  </div>
</template>

<script>
import TreeTable from "@/components/TreeTable";

export default {
  components: { TreeTable },
  data() {
    return {
      columns: [
        {
          text: "project",
          value: "name"
        },
        {
          text: "meta",
          value: "tag",
          width: 70
        },
        {
          text: "assignedTo",
          value: "assignees"
        },
        {
          text: "status",
          value: "status",
          width: 100
        },
        {
          text: "deadline",
          value: "ended_at",
          width: 150
        }
      ],
      data: []
    };
  },
  methods: {
    toCreate() {
      this.$router.push("/projects/create");
    }
  }
};
</script>
