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
    <project-list-table :data="data"></project-list-table>
  </div>
</template>

<script>
import ProjectListTable from "./components/ListTable";
import store from "@/core/store";

export default {
  components: { ProjectListTable },
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
          isStatus: true,
          width: 150
        },
        {
          text: "deadline",
          value: "ended_at",
          format: "date",
          width: 200
        }
      ],
      data: []
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("GetProjects").then(data => {
      next(vm => (vm.data = data));
    });
  }
};
</script>
