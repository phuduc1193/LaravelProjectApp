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
import ProjectService from "./project.service";

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
  methods: {
    toCreate() {
      this.$router.push("/projects/create");
    }
  },
  created() {
    ProjectService.all()
      .then(data => {
        this.data = data;
      })
      .catch(() => {});
  }
};
</script>
