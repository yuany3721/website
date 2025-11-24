import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/views/HelloWorld/HelloWorld.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('@/views/NoteView.vue'),
    },
    {
      path: '/tools',
      name: 'cost',
      component: () => import('@/views/Tools/ToolsView.vue'),
    },
  ],
})

export default router
