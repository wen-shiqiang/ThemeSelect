import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import mkcert from "vite-plugin-mkcert";
// import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // basicSsl(),
    // VitePWA(),
    mkcert(), 
    vue()
  ],
  server: {
    // ...
    proxy: {
      // ...
    },
    host: '0.0.0.0',
    https: true, // 安装basicSsl后，这里可设置可不设置
 },
 base: "./", 
 build: {
  sourcemap: false,
  // 消除打包大小超过500kb警告
  chunkSizeWarningLimit: 4000,
  rollupOptions: {
    // input: {
    //   index: pathResolve("index.html")
    // },
    // 静态资源分类打包
    output: {
      chunkFileNames: "static/js/[name]-[hash].js",
      entryFileNames: "static/js/[name]-[hash].js",
      assetFileNames: "static/[ext]/[name]-[hash].[ext]"
    }
  }
},
})
