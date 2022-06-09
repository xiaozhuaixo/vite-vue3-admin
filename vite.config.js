import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { resolve } from "path";
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import legacy from '@vitejs/plugin-legacy'
import importToCDN from 'vite-plugin-cdn-import'

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
      }),
      PkgConfig(),
      OptimizationPersist(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      importToCDN({
        modules: [
          {
            name:'vue',
            var:'Vue',
            path:'https://unpkg.com/browse/vue@3.2.25/dist/vue.global.prod.js'
          },
          {
            name:'vuex',
            var:'Vuex',
            path:'https://unpkg.com/browse/vuex@4.0.2/dist/vuex.global.prod.js'
          },
          {
            name:'vue-router',
            var:'VueRouter',
            path:'https://unpkg.com/browse/vue-router@4.0.12/dist/vue-router.global.prod.js'
          },
          {
            name: 'element-plus',
            var: 'ElementPlus',
            path: `https://unpkg.com/element-plus`,
            css: 'https://unpkg.com/element-plus/dist/index.css',
          },
        ]
      })
  ],
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.json']
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ],
    },
  },
  build: {
    target: 'es2020',
  }
})
