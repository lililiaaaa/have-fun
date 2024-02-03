import { createWebHistory } from 'vue-router'

const routerOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/idc_management'
    },
    {
      path: '/idc_management',
      name: 'Idc管理',
      component: () => import('@/pages/IdcManagement/index.vue')
    },
    {
      path: '/edge_management',
      name: 'Edge管理',
      component: () => import('@/pages/EdgeManagement/index.vue')
    }
  ]
}

export default routerOptions