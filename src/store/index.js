import { createStore } from 'vuex'
import getters from './getters'


const modulesFiles = import.meta.globEager('./modules/*.js')
let modules = {}
for(const file in modulesFiles){
  modules[file.replace(/(\.\/modules\/|\.js)/g, '')] = modulesFiles[file].default
}



const store = createStore({
  modules,
  getters
})

export default store
