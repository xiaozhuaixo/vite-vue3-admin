import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path";

// search path
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

//set alias
const alias = [
  {
    find: '@',
    replacement: pathResolve("src")
  },
  {
    find: '~',
    replacement: pathResolve("./")
  },
  {
    find: "@build",
    replacement: pathResolve("build")}
];


// https://vitejs.dev/config/
export default defineConfig({
  server:{
    https: false,
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8090/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  plugins: [
      vue(),vueJsx()
  ],
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.json']
  },
})
