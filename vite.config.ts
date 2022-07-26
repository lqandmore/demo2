import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 4000,
    proxy: {
      // api proxy
      '/api': {
        target: 'http://152.136.185.210:4000/', //
        changeOrigin: true,
        rewrite: (path) => path.replace(/`^\/api`/, '')
      }
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'typings', replacement: path.resolve(__dirname, 'typings') },
      {
        find: 'static',
        replacement: path.resolve(__dirname, 'public/static')
      }
    ]
  },
  plugins: [vue()]
})
