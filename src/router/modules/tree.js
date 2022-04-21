import Layout from '@/layout'


const tree = {
    path: '/tree',
    name: 'Tree',
    component: Layout,
    meta: {
        icon: 'el-mic',
        title: 'Tree',
    },
    children: [
        {
            path: 'defaultTree',
            component: () => import('@/views/tree/default/Index'),
            meta: {icon: 'el-aim', title: '默认树'},
            name: 'DefaultTree'
        },
        {
            path: 'diyTree',
            name: 'DiyTree',
            component: () => import('@/views/tree/diyTree/Index'),
            meta: {icon: '' ,title: '自定义树'},
        },
        {
            path: 'searchTree',
            name: 'SearchTree',
            component: () => import('@/views/tree/searchTree/Index'),
            meta: {icon: '' ,title: '搜索树'},
        },
        {
            path: 'treeFolder',
            name: 'TreeFolder',
            component: () => import('@/views/tree/treeFolder/Index'),
            meta: {icon: 'el-folder' ,title: 'folder'},
        }
    ]
}

export default tree
