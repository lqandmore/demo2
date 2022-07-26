<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '200px'" class="mian-aside">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <nav-header :isCollapse="isCollapse" @changeCollapse="changeCollapse"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import navMenu from '../../components/nav-menu/src/nav-menu.vue'
import navHeader from '../../components/nav-header/src/nav-header.vue'

const isCollapse = ref(false)
function changeCollapse(data: any) {
  console.log(data)

  isCollapse.value = !isCollapse.value
}
defineExpose({
  changeCollapse
})

// const emit = defineEmits(['changeCollapse'])
</script>

<style scoped>
.main-content {
  width: 100vw;
  height: 100vh;
}

.main-aside {
  background-color: #0c2135;
}
.main-header {
  width: 100%;
  height: 60px;
}
</style>
