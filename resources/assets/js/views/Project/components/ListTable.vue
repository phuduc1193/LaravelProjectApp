<template>
  <el-table
    :data="data"
    :default-sort = "{prop: 'ended_at', order: 'ascending'}"
    style="width: 100%">
    <el-table-column
      prop="name"
      sortable
      :label="$t('tableHeader.project')">
    </el-table-column>
    <el-table-column
      prop="tagsName"
      :label="$t('tableHeader.meta')"
      width="170">
      <template slot-scope="scope">
        <tags :value="scope.row.tags"></tags>
      </template>
    </el-table-column>
    <el-table-column
      prop="state"
      :label="$t('tableHeader.assignedTo')">
    </el-table-column>
    <el-table-column
      prop="city"
      sortable
      :label="$t('tableHeader.status')"
      width="150">
      <template slot-scope="scope">
        <status :value="scope.row.status.name"></status>
      </template>
    </el-table-column>
    <el-table-column
      prop="ended_at"
      sortable
      :label="$t('tableHeader.deadline')"
      :formatter="dateFormat"
      width="170">
    </el-table-column>
    <el-table-column
      fixed="right"
      :label="$t('tableHeader.operations')"
      width="120">
      <template slot-scope="scope">
        <router-link class="link" :to="'/projects/view/' + scope.row.id">
          <el-button type="text" size="small">{{ $t('page.detail') }}</el-button>
        </router-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Status from "@/components/Status";
import Tags from "@/components/Tags";

export default {
  name: "project-list-table",
  components: { Status, Tags },
  props: ["data"],
  methods: {
    dateFormat(row, column) {
      return this.$moment(row[column["property"]]).format("MM.DD.YYYY");
    }
  },
  data() {
    return {
      tableData4: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        },
        {
          date: "2016-05-08",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        },
        {
          date: "2016-05-06",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        },
        {
          date: "2016-05-07",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036"
        }
      ]
    };
  },
  created() {}
};
</script>