import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  return {
    outputDir: './build',
    resolve: {
      alias:{
        '@':path.resolve(__dirname,'./src')
      }
    },
    plugins: [vue()]
  }
})