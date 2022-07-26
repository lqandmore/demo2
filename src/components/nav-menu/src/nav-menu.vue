<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="../../../assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#B7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id+''">
            <template #title>
              <i class="item-icon" v-if="item.icon" :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleItemClick(subItem)">
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{subItem.name}}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id+''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
defineProps({
  collapse: Boolean
})
const store = useStore()

const userMenus = store.state.login.userMenus

const router = useRouter()
const route = useRoute
// const menu = pathMapToMenu(menus,route.path)

function handleItemClick (subItem : any) {

}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #0c2135;
}
.img {
  margin: 0 15px;

  width: 20px;
  height: 30px;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: #b7bdc3;
}
.item-icon {
  width: 16px;
  height: 16px;
}
</style>
