import Layout from '@/layout'


const icon = {
    path: '/icons',
    name: 'Icons',
    component: Layout,
    meta: {
        icon: 'icon',
        title: 'Icons',
    },
    children: [
        {
            path: 'elIcon',
            component: () => import('@/views/pageIcon/elIcon/Index'),
            meta: {icon: '', title: 'ElIcon'},
            name: 'ElIcon'
        },
        {
            path: 'svgIcon',
            name: 'SvfIcon',
            component: () => import('@/views/pageIcon/svgIcon/Index'),
            meta: {icon: '' ,title: 'SvgIcon'},
        }
    ]
}

export default icon
