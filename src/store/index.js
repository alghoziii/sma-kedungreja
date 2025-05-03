import { createStore } from 'vuex'

export default createStore({
    state: {
        schoolInfo: {
            name: 'SMA Negeri 1 Kedungreja',
            address: 'Jl. Raya Tambaksari Tp 212 Kedungreja Cilacap',
            email: 'info@sman1kedungreja.sch.id',
            phone: '09860540758'
        },
        news: [
            {
                id: 1,
                title: 'Lomba Bapak Ibu Guru',
                description: 'Lomba kreativitas untuk bapak ibu guru SMA Negeri 1 Kedungreja',
                date: '15 April 2025',
                image: '/news1.png'
            },
            {
                id: 2,
                title: 'Lomba Pakaian Daur Ulang',
                description: 'Ajang kreativitas siswa dengan memanfaatkan bahan daur ulang',
                date: '20 April 2025',
                image: '/news2.jpg'
            },
            {
                id: 3,
                title: 'Lomba Seni',
                description: 'Pentas seni dan budaya siswa SMA Negeri 1 Kedungreja',
                date: '25 April 2025',
                image: '/news3.jpg'
            },
            {
                id: 4,
                title: 'Lomba Seni',
                description: 'Pentas seni dan budaya siswa SMA Negeri 1 Kedungreja',
                date: '25 April 2025',
                image: '/news3.jpg'
            },
        ],
        profileMenu: [
            { id: 1, title: "Visi Misi", route: "/profil/visi-misi" },
            { id: 2, title: "Sejarah", route: "/profil/sejarah" },
            { id: 3, title: "Struktur Organisasi", route: "/profil/struktur" },
        ],
        guruMenu: [
            { id: 1, title: "Data Guru", route: "/guru/data" },
            { id: 2, title: "Statistik Guru", route: "/guru/statistik" },
        ],
        siswaMenu: [
            { id: 1, title: "Data Siswa", route: "/siswa/data" },
            { id: 2, title: "Prestasi", route: "/siswa/prestasi" },
        ],
        informasiMenu: [
            { id: 1, title: "Pengumuman", route: "/informasi/pengumuman" },
            { id: 2, title: "Agenda", route: "/informasi/agenda" },
        ],
        galeriMenu: [
            { id: 1, title: "Foto", route: "/galeri/foto" },
            { id: 2, title: "Video", route: "/galeri/video" },
        ],
    },
    getters: {
        getSchoolInfo: state => state.schoolInfo,
        getNews: state => state.news,
        getProfileMenu: state => state.profileMenu,
        getProfileMenu: (state) => state.profileMenu,
        getGuruMenu: (state) => state.guruMenu,
        getSiswaMenu: (state) => state.siswaMenu,
        getInformasiMenu: (state) => state.informasiMenu,
        getGaleriMenu: (state) => state.galeriMenu,
    },
});