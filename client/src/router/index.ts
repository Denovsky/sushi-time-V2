import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/UserPanel/UserPanel.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('@/views/AdminPanel/AdminPanelLogin.vue')
        }
    ]
})

export default router