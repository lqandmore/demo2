

<template>
  <div class="nav-header">
    <div class="fold" @click="foldClick">
      <el-icon v-if="isCollapse">
        <Expand />
      </el-icon>
      <el-icon v-else>
        <Fold />
      </el-icon>
    </div>

    <div class="userAvator">
      <el-icon :size="30">
        <UserFilled />
      </el-icon>
      <span class="name">{{name}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const emit = defineEmits(['changeCollapse'])
const prop = defineProps({
  isCollapse: Boolean
})
const store = useStore()
const name = computed(
  () => store.state.name
  // JSON.parse(JSON.stringify(store.state.login.userMenus))
)

function foldClick() {
  emit('changeCollapse', !prop.isCollapse)
}
</script>

<style scoped >
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fold {
  font-size: 30px;
}

.userAvator {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.name {
  margin-left: 10px;
  vertical-align: middle;
  font-size: 20px;
}
</style>
