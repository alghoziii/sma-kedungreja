import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NewsView from '@/views/NewsView.vue'
import LoginView from '@/views/LoginView.vue'
import AboutView from '@/views/AboutView.vue'
import VisiMisiView from '@/views/VisiMisiView.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/profil',
                name: 'profile',
                component: ProfileView,
                children: [
                    {
                        path: 'visi-misi',
                        name: 'visi-misi',
                        component: VisiMisiView
                    }
                ]
            },
            { path: '/berita', name: 'news', component: NewsView },
            { path: '/login', name: 'login', component: LoginView },
            { path: '/tentang', name: 'about', component: AboutView }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router