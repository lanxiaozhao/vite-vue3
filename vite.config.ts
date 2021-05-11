/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2021-05-09 09:39:32
 * @LastEditors: zhaopan
 * @LastEditTime: 2021-05-11 10:36:53
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', 'vue']
  },
  base: '/',
  server: {
    port: 4000,
    open: true,
    cors: true, // 允许跨域
    proxy: {}
  }
})
