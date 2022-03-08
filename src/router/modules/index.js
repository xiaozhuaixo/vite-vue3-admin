const modulesFiles = import.meta.globEager('./*.js')
let routers = []
for(const file in modulesFiles){
    routers.push(modulesFiles[file].default)
        //[file.replace(/(\.\/|\.js)/g, '')] = modulesFiles[file].default
}

export default routers
