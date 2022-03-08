import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
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
      vue(),
      vueJsx(),
      viteSvgIcons({
        iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
        symbol: 'icon-[dir]-[name]'
      })
  ],
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.json']
  },
})
