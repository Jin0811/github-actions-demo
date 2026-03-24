import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 生产环境使用仓库名，开发环境使用根路径
  base: process.env.NODE_ENV === "production" ? "/github-actions-demo/" : "/",
});
