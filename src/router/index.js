import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import Layout from '@/layout'
import routers  from './modules/index'

export let routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true,
    meta: {icon: '' , title: ''}
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
]


routes = routes.concat(routers)

const createRoute = () => createRouter({
  history: createWebHashHistory(),
  routes
})

const router = createRoute()

export function resetRouter(){
  const newRouter = createRoute();
  router.resolve = newRouter.resolve
}

export default router
