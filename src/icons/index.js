import SvgIcon from '@/components/SvgIcon'
export function setUpIcon(app){
    app.component('svg-icon', SvgIcon)
    const modulesFiles = import.meta.globEager('./svg/*.svg')
    let modules = {}
    for(const file in modulesFiles){
        modules[file.replace(/(\.\/svg\/|\.svg)/g, '')] = modulesFiles[file].default
    }

}

