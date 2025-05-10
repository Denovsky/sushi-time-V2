import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/User/Home.vue')
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: () => import('@/views/User/Catalog.vue')
        },
        {
            path: '/announcement',
            name: 'Announcement',
            component: () => import('@/views/User/Announcements.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/User/About.vue')
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('@/views/User/Cart.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('@/views/Admin/Login.vue')
        }
    ]
})

export default router