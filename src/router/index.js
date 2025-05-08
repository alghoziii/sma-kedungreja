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
import KondisiSiswa from '@/views/profile/KondisiSiswa.vue'
import KomiteSekolah from '@/views/profile/KomiteSekolah.vue'
import Prestasi from '@/views/profile/Prestasi.vue'
import DirektoriGuru from '@/views/guru/DirektoriGuru.vue'
import GuruView from '@/views/GuruView.vue'
import DirektoriGuruDetail from '@/views/guru/DirektoriGuruDetail.vue'
import Silabus from '@/views/guru/Silabus.vue'
import MateriAjar from '@/views/guru/MateriAjar.vue'
import MateriUji from '@/views/guru/MateriUji.vue'
import Kalender from '@/views/guru/Kalender.vue'
import SiswaView from '@/views/SiswaView.vue'
import DirektoriSiswa from '@/views/siswa/DirektoriSiswa.vue'
import DirektoriSiswaDetail from '@/views/siswa/DirektoriSiswaDetail.vue'
import PrestasiSiswa from '@/views/siswa/PrestasiSiswa.vue'
import Informasi from '@/views/Informasi.vue'
import InfoSekolah from '@/views/informasi/InfoSekolah.vue'
import DaftarBlog from '@/views/informasi/DaftarBlog.vue'
import LinkWebsite from '@/views/informasi/LinkWebsite.vue'
import PetaSitus from '@/views/informasi/PetaSitus.vue'
import KontakSekolah from '@/views/informasi/KontakSekolah.vue'
import Agenda from '@/views/informasi/Agenda.vue'
import Berita from '@/views/informasi/Berita.vue'
import Artikel from '@/views/informasi/Artikel.vue'
import BukuTamu from '@/views/informasi/BukuTamu.vue'
import BukuTamuList from '@/views/informasi/BukuTamuList.vue'
import Galeri from '@/views/Galeri.vue'
import GaleriVideo from '@/views/galleri/GaleriVideo.vue'
import GaleriFoto from '@/views/galleri/GaleriFoto.vue'
import GaleriVideoDetail from '@/views/galleri/GaleriVideoDetail.vue'
import GaleriFotoDetail from '@/views/galleri/GaleriFotoDetail.vue'

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
                    {
                        path: "kondisi_siswa",
                        name: "kondisi_siswa",
                        component: KondisiSiswa
                    },
                    {
                        path: "komite_sekolah",
                        name: "komite_sekolah",
                        component: KomiteSekolah
                    },
                    {
                        path: "prestasi",
                        name: "prestasi",
                        component: Prestasi
                    },

                ]
            },
            {
                path: '/guru',
                name: 'guru',
                component: GuruView,
                children: [
                    {
                        path: 'direktori_guru',
                        name: 'direktori_guru',
                        component: DirektoriGuru
                    },
                    {
                        path: 'direktori_guru_detail/:id',
                        name: 'direktori_guru_detail',
                        component: DirektoriGuruDetail,
                        props: true,

                    },
                    {
                        path: 'silabus',
                        name: 'silabus',
                        component: Silabus,
                    },
                    {
                        path: 'materi_ajar',
                        name: 'materi_ajar',
                        component: MateriAjar,
                    },
                    {
                        path: 'materi_uji',
                        name: 'materi_uji',
                        component: MateriUji,
                    },
                    {
                        path: 'kalender',
                        name: 'kalender',
                        component: Kalender,
                    },

                ]
            },
            {
                path: '/siswa',
                name: 'siswa',
                component: SiswaView,
                children: [
                    {
                        path: 'direktori_siswa',
                        name: 'direktori_siswa',
                        component: DirektoriSiswa
                    },
                    {
                        path: 'direktori_siswa_detail/:id',
                        name: 'direktori_siswa_detail',
                        component: DirektoriSiswaDetail,
                        props: true,
                    },
                    {
                        path: 'prestasi_siswa',
                        name: 'prestasi_siswa',
                        component: PrestasiSiswa,
                    },

                ]
            },
            {
                path: '/informasi',
                name: 'informasi',
                component: Informasi,
                children: [
                    {
                        path: 'info_sekolah',
                        name: 'info_sekolah',
                        component: InfoSekolah
                    },
                    {
                        path: 'daftar_blog',
                        name: 'daftar_blog',
                        component: DaftarBlog,
                    },
                    {
                        path: 'link_webiste',
                        name: 'link_webiste',
                        component: LinkWebsite,
                    },
                    {
                        path: 'peta_situs',
                        name: 'peta_situs',
                        component: PetaSitus,
                    },
                    {
                        path: 'kontak_sekolah',
                        name: 'kontak_sekolah',
                        component: KontakSekolah,
                    },
                    {
                        path: 'agenda',
                        name: 'agenda',
                        component: Agenda,
                    },
                    {
                        path: 'berita',
                        name: 'berita',
                        component: Berita,
                    },
                    {
                        path: 'artikel',
                        name: 'artikel',
                        component: Artikel,
                    },
                    {
                        path: 'buku_tamu',
                        name: 'buku_tamu',
                        component: BukuTamu,
                    },
                    {
                        path: 'buku_tamu_list',
                        name: 'buku_tamu_list',
                        component: BukuTamuList,
                    },

                ]
            },
            {
                path: '/galeri',
                name: 'galeri',
                component: Galeri,
                children: [
                    {
                        path: 'galeri_video',
                        name: 'galeri_video',
                        component: GaleriVideo
                    },
                    {
                        path: 'video_detail/:id',
                        name: 'video_detail',
                        component: GaleriVideoDetail
                    },
                    {
                        path: 'galeri_foto',
                        name: 'galeri_foto',
                        component: GaleriFoto,
                    },
                    {
                        path: 'galeri_foto_detail/:id',
                        name: 'galeri_foto_detail',
                        component: GaleriFotoDetail,
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