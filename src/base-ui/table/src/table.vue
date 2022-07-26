<template>
  <div class="lq-table">
    <div class="header">
      <slot name="hedaer">
        <div class="title">{{title}}</div>
        <div class="handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border @selection-change="selectionChange" v-bind="childrenProps">
      <el-table-column v-if="showSlectColumn" type="selection" align="center" width="60"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80"></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{scope.row[item.prop]}}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :total="totalCount"
          :page-sizes="[10,20,30,40]"
          layout="total,sizes,prev,pager,next,jumper"
        ></el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '表格数据'
  },
  showSlectColumn: {
    type: Boolean,
    default: true
  },
  showIndexColumn: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  totalCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  listData: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  childrenProps: {
    type: Object,
    default: ()=>({})
  },
  page: {
    type: Object,
    default: () => ({
      currentPage: 0,
      pageCount: 10
    })
  }
})
const emit = defineEmits(['selectionChange', 'update:page'])

function selectionChange(value: any) {
  if (props.showSlectColumn) {
    emit('selectionChange', value)
  }
}

function handleCurrentChange(currentPage: Number) {
  emit('update:page', { ...props.page, currentPage })
}

function handleSizeChange(pageSize: Number) {
  emit('update:page', { ...props.page, pageSize })
}
</script>

<style  lang="scss" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
