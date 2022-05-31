
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'


export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ['vue','vue-router'], dts: "src/auto-import.d.ts"
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/index.scss";'
      }
    }
  },
})
