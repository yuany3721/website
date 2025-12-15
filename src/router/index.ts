import { createRouter, createWebHistory } from 'vue-router'
import HelloHome from '@/views/HelloWorld/HelloHome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloHome,
        },
        {
            path: '/note',
            name: 'note',
            component: () => import('@/views/NoteView.vue'),
        },
        {
            path: '/tools',
            name: 'tools',
            component: () => import('@/views/Tools/ToolsView.vue'),
        },
        {
            path: '/cost',
            name: 'cost',
            component: () => import('@/views/CostView.vue'),
        },
        {
            path: '/cv',
            name: 'cv',
            component: () => import('@/views/CurriculumVitaeView.vue'),
        },
    ],
})

export default router
