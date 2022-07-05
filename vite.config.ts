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
    port: 5000,
    proxy: {
      // api proxy
      '/api': {
        target: 'xx.xx.xx.xx',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^/api`), '/api')
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
