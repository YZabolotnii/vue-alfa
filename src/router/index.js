import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/netbox-2',
      name: 'netbox-2',
      component: () => import('../views/Netbox-2.vue'),
    },
  ],
})

export default router
