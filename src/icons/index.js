import SvgIcon from '@/components/SvgIcon'
import * as Icons from '@element-plus/icons-vue'
export function setUpIcon(app){
    app.component('svg-icon', SvgIcon)
    Object.keys(Icons).forEach(key => app.component(key, Icons[key]))
}

