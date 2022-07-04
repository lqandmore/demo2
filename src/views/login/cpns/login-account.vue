<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" label-width="60">
      <el-form-item label="账号" prop="name" required>
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
    <div class="other-wise">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
const account = reactive({
  name: 'string',
  password: 'string'
})

const isKeepPassword = ref(true)

function loginAction() {
  console.log('111111')
}

defineExpose({
  loginAction
})
</script>

<style scoped>
.login-account {
  width: 100%;
  height: 130px;
  margin-top: 10px;
}

.other-wise {
  display: flex;
  justify-content: space-between;
}
</style>
