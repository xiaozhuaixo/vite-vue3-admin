import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css/normalize.css'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import store from './store'

import router from './router'


import {
    setUpIcon
} from "./plugin";

const app = createApp(App)


//配置插件
function setPlugin(){
    setUpIcon(app)
}



app.use(ElementPlus)
    .use(store)
    .use(router)
await router.isReady()
app.mount('#app')

setPlugin()
