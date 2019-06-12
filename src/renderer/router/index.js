import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    name: '主页',
    children: [
      {
        path: '/',
        component: require('@/views/HomePage').default
      }
    ]
  },
  {
    path: '/second',
    component: Layout,
    name: '窗口',
    children: [
      {
        path: '/second',
        component: require('@/views/second').default
      }
    ]
  },
  {
    path: '/third',
    component: Layout,
    name: '进程通信',
    children: [
      {
        path: '/third',
        component: require('@/views/second').default
      }
    ]
  },
  {
    path: '/fourth',
    component: Layout,
    name: '弹窗',
    children: [
      {
        path: '/fourth',
        component: require('@/views/second').default
      }
    ]
  }
]

export default new Router({
  routes: constantRoutes
})
