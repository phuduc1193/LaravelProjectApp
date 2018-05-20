<template>
  <el-table :data="formatData" :row-style="showRow" v-bind="$attrs" :empty-text="$t('noRecord')">
    <el-table-column v-if="columns.length===0" width="150">
      <template slot-scope="scope">
        <span v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(0,scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-arrow-right"></i>
          <i v-else class="el-icon-arrow-down"></i>
        </span>
        {{scope.$index}}
      </template>
    </el-table-column>
    <el-table-column v-else v-for="(column, index) in columns" :key="column.value" :label="$t('tableHeader.'+column.text)" :width="column.width">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index, scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="fa fa-angle-right"></i>
          <i v-else class="fa fa-angle-down"></i>
        </span>
        <span v-if="!column.routerLink">
          <span v-if="!column.isStatus">{{ getValue(column.value, scope.row) }}</span>
          <span v-else>
            <status :value="getValue(column.value, scope.row)"></status>
          </span>
        </span>
        <router-link class="link" :to="getLink(column.routerLink, scope.row)" v-else>
          {{ getValue(column.value, scope.row) }}
        </router-link>
      </template>
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>
import treeToArray from "./eval";
import Status from "@/components/Status";
export default {
  name: "TreeTable",
  components: { Status },
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formatData: function() {
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      const func = this.evalFunc || treeToArray;
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll];
      return func.apply(null, args);
    }
  },
  methods: {
    showRow: function(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;"
        : "display:none;";
    },
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    },
    getValue(targetString, record) {
      if (targetString.includes(".")) {
        const newTargetString = targetString.substring(
          targetString.indexOf(".") + 1
        );
        return this.getValue(
          newTargetString,
          record[targetString.split(".")[0]]
        );
      }
      return record[targetString];
    },
    getLink(routerLinkString, record) {
      if (routerLinkString.includes(":")) {
        const routerLinkTarget = routerLinkString.substring(
          routerLinkString.indexOf(":") + 1
        );
        return routerLinkString.split(":")[0] + record[routerLinkTarget];
      }
      return routerLinkString;
    }
  }
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 18px;

.link {
  $link-color: #409eff;
  color: $link-color;

  &:hover {
    color: lighten($link-color, 10%);
  }
}

.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: "";
  }
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
