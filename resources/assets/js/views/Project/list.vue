<template>
  <div class="app-container">
    <el-row>
      <el-button circle>
        <i class="fa fa-filter" aria-hidden="true"></i>
      </el-button>
      <router-link to="/projects/create">
        <el-button type="primary" icon="el-icon-plus" circle></el-button>
      </router-link>
    </el-row>
    <tree-table :data="data" :columns="columns"></tree-table>
  </div>
</template>

<script>
import TreeTable from "@/components/TreeTable";
import ProjectService from "./project.service";

export default {
  components: { TreeTable },
  data() {
    return {
      columns: [
        {
          text: "project",
          value: "name",
          routerLink: "/projects/view/:id"
        },
        {
          text: "meta",
          value: "tag",
          width: 120
        },
        {
          text: "assignedTo",
          value: "assignees"
        },
        {
          text: "status",
          value: "status.name",
          width: 150
        },
        {
          text: "deadline",
          value: "ended_at",
          width: 200
        }
      ],
      data: []
    };
  },
  beforeRouteEnter(to, from, next) {
    ProjectService.all().then(data => {
      next(vm => (vm.data = data));
    });
  }
};
</script>
