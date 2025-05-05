import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LoginView from '@/views/LoginView.vue'
import VisiMisiView from '@/views/profile/VisiMisiView.vue'
import Sejarah from '@/views/profile/Sejarah.vue'
import SaranaPrasarana from '@/views/profile/SaranaPrasarana.vue'
import SaranaPrasaranaDetail from '@/views/profile/SaranaPrasaranaDetail.vue'
import Struktur_Organisasi from '@/views/profile/Struktur_Organisasi.vue'
import KepalaSekolah from '@/views/profile/KepalaSekolah.vue'
import Kemitraan from '@/views/profile/Kemitraan.vue'
import ProgramKerja from '@/views/profile/ProgramKerja.vue'

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
                    },
                    {
                        path: "sejarah",
                        name: "sejarah",
                        component: Sejarah
                    },
                    {
                        path: "sarana_prasarana",
                        name: "sarana_rasarana",
                        component: SaranaPrasarana
                    },
                    {
                        path: "Sarana_Prasarana/detail",
                        name: "Sarana_Prasarana_detail",
                        component: SaranaPrasaranaDetail
                    },
                    {
                        path: "struktur_Organisasi",
                        name: "struktur_Organisasi",
                        component: Struktur_Organisasi
                    },
                    {
                        path: "kepala_sekolah",
                        name: "kepala_sekolah",
                        component: KepalaSekolah
                    },
                    {
                        path: "kemitraan",
                        name: "kemitraan",
                        component: Kemitraan
                    },
                    {
                        path: "program_kerja",
                        name: "program_kerja",
                        component: ProgramKerja
                    },

                ]
            },

            { path: '/login', name: 'login', component: LoginView },

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router