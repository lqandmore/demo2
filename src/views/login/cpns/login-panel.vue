<template>
  <div class="login-panel">
    <div>
      <!-- <img src="@/assets/img/123dw.jpg" alt="222" /> -->
      <span>Duia</span>
      <p>让学习，触手可及</p>
    </div>

    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <calendar />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <calendar />
            </el-icon>
            <span>验证手机登录</span>
          </span>
        </template>
        验证登录
      </el-tab-pane>
    </el-tabs>
    <div>
      <el-button type="primary" class="login-btn" @click="loginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import { ref } from 'vue'
const accountRef = ref<InstanceType<typeof LoginAccount>>()
function loginClick() {
  accountRef.value?.loginAction()
  console.log('点击了按钮')
}
</script>

<style scoped>
.login-panel {
  width: 300px;
  margin-bottom: 130px;
}

.login-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
