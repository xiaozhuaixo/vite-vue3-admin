import Layout from '@/layout'


const table = {
    path: '/aaaTable',
    name: 'Table',
    component: Layout,
    meta: {
        icon: 'chart',
        title: 'Table',
    },
    children: [
        {
            path: 'indexTable',
            component: () => import('@/views/table/Index'),
            meta: {icon: '', title: 'IndexTable'},
            name: 'IndexTable'
        },
        {
            path: 'smaleTable',
            name: 'SmaleTable',
            component: () => import('@/views/table/smaleTable/Index'),
            meta: {icon: '' ,title: 'smaleTable'},
        }
    ]
}

export default table
