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
            { id: 3, title: "Sarana Prasarana", route: "/profil/sarana_prasarana" },
            { id: 4, title: "Struktur Organisasi", route: "/profil/struktur_organisasi" },
            { id: 5, title: "Kepala Sekola", route: "/profil/kepala_sekolah" },
            { id: 6, title: "Kemitraan", route: "/profil/kemitraan" },
            { id: 7, title: "Program Kerja", route: "/profil/program_kerja" },
            { id: 8, title: "Kondisi Siswa", route: "/profil/kondisi_siswa" },
            { id: 8, title: "Komite Sekolah", route: "/profil/komite_sekolah" },
            { id: 8, title: "Prestasi", route: "/profil/prestasi" },
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

        profileContent: {
            visiMisi: {
                title1: "Visi Kami",
                title2: "Misi Kami",
                image: "/logo.png",
                visi: `
                    <strong> “Prestasi Unggul Bermartabat“</strong>
                `,
                misi: [
                    "Menumbuhkan sikap percaya diri, santun, dan agamis",
                    "Meningkatkan kegiatan belajar mengajar yang efektif",
                    "Meningkatkan kualitas kegiatan ekstrakurikuler.",
                    "Meningkatkan sarana prasarana yang memadahi",

                ]
            },
            sejarah: {
                title: "Sejarah Singkat",
                image: "/logo.png",
                content: `
                    <p>SMA Negeri 1 Kedungreja berdiri Tahun 1996 yang merupakan filial SMA</p>
                    <p>Negeri 1 Sidareja yang bertempat di SD Tambaksari 01 sambil menunggu</p>
                    <p>pembangunan Gedung Baru. Pada tahun 1997 Gedung sudah selesai dan</p>
                    <p>pindah menempati Gedung baru. Urutan Kepala sekolah :</p>
                `,
                list: [
                    "Drs. Tuslam",
                    "Drs. Alip Suwarno",
                    "Drs. Rachman Widodo",
                    "Drs. Alip Suwarno",
                    "Drs. Muryanto",
                    "Supriyanto, S.Pd., M.M. Pd.",
                    "Sumarsono, S.Pd., M.Pd.",
                    "Drs. Kusworo"
                ]
            },



            strukturOrganisasi: {
                title: "Struktur Organisasi",
                content: `
                        <p > Kepala Sekolah: Drs.Ahmad Supriyadi</p >
                        <p>Wakil Kepala Sekolah Bidang Kurikulum: Ibu Siti Aminah, M.Pd</p>
                        <p>Wakil Kepala Sekolah Bidang Kesiswaan: Bapak Joko Santoso, M.Pd</p>
                    `
            }
        },
        facilities: [
            {
                title: "Ruang Kelas",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: false
            },

            {
                title: "Laboratorium Kimia",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: true
            },
            {
                title: "Laboratorium Bahasa",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: false
            },
            {
                title: "Laboratorium Bahasa",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: false
            },
            {
                title: "Laboratorium Bahasa",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: false
            },
            {
                title: "Laboratorium Bahasa",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: false
            },
            {
                title: "Laboratorium Bahasa",
                description: `
                    <p>Saat ini, SMA Negeri 1 Kedungreja memiliki 20 </p>
                    <p>ruang teori/kelas. yang digunakan untuk kegiatan</p>
                    <p>belajar mengajar</p>`,
                image: "/artikel 1.jpg",
                reverse: false
            },
        ],
        sarana_prasarana: {
            NPSN: "20300733",
            Status: "Negeri",
            "Bentuk Pendidikan": "SMA",
            "Status Kepemilikan": "Pemerintah Daerah",
            "SK Pendirian Sekolah": "13a/0/1998",
            "Tanggal SK Pendirian": "1998-01-29",
            "SK Izin Operasional": "13a/O/1998",
            "Tanggal SK Izin Operasional": "1998-01-29",
            "Kebutuhan Khusus Dilayani": "K - Kesulitan Belajar",
            "Nama Bank": "BRI",
            "Cabang KCP/Unit": "6790 Unit Tambaksari Majenang",
            "Rekening Atas Nama": "SMA NEGERI 1 KEDUNGREJA",
            "Luas Tanah Milik": "15420",
            "Luas Tanah Bukan Milik": "0",
            "Status BOS": "Bersedia Menerima",
            "Waktu Penyelenggaraan": "Pagi",
            "Sertifikasi ISO": "Belum Bersertifikat",
            "Sumber Listrik": "PLN",
            "Daya Listrik": "9000",
            "Akses Internet": "Ada",
            "Internet Service Provider": "Telkom",
        },
        data_ptk_pd: [
            { uraian: "Guru", laki_laki: 22, perempuan: 13, total: 35 },
            { uraian: "Jumlah PTK (Guru & Pegawai)", laki_laki: 3, perempuan: 2, total: 5 },
            { uraian: "Pegawai", laki_laki: 25, perempuan: 15, total: 40 },
            { uraian: "Peserta Didik", laki_laki: 157, perempuan: 450, total: 607 },
        ],
        data_sarpras: [
            { uraian: "Jumlah", ruang_kelas: 19, ruang_lab: 6, ruang_perpus: 1, total: 26 },
        ],
        data_rombel: [
            {
                uraian: "Jumlah",
                kelas_10: { laki_laki: 68, perempuan: 153, total: 221 },
                kelas_11: { laki_laki: 39, perempuan: 144, total: 183 },
                kelas_12: { laki_laki: 50, perempuan: 153, total: 203 },
            },
        ],
        daftar_ruang: [
            { no: 1, nama: "Ruang Teori/Kelas", jumlah: 20, luas: 936 },
            { no: 2, nama: "Laboratorium IPA", jumlah: 1, luas: 120 },
            { no: 3, nama: "Laboratorium Kimia", jumlah: 1, luas: 120 },
            { no: 4, nama: "Laboratorium Fisika", jumlah: "", luas: "" },
            { no: 5, nama: "Laboratorium Biologi", jumlah: "", luas: "" },
            { no: 6, nama: "Laboratorium Bahasa", jumlah: 1, luas: 60 },
            { no: 7, nama: "Laboratorium IPS", jumlah: "", luas: "" },
            { no: 8, nama: "Laboratorium Komputer", jumlah: 1, luas: 60 },
            { no: 9, nama: "Laboratorium Multimedia", jumlah: "", luas: "" },
            { no: 10, nama: "Ruang Perpustakaan", jumlah: 1, luas: 120 },
            { no: 11, nama: "Ruang Keterampilan", jumlah: "", luas: "" },
            { no: 12, nama: "Ruang Serba Guna", jumlah: "", luas: "" },
            { no: 13, nama: "Ruang UKS", jumlah: 1, luas: 9 },
            { no: 14, nama: "Ruang Praktik Kerja", jumlah: "", luas: "" },
            { no: 15, nama: "Bengkel", jumlah: "", luas: "" },
            { no: 16, nama: "Ruang Diesel", jumlah: "", luas: "" },
            { no: 17, nama: "Ruang Pameran", jumlah: "", luas: "" },
            { no: 18, nama: "Ruang Gambar", jumlah: "", luas: "" },
            { no: 19, nama: "Koperasi/Toko", jumlah: 1, luas: 8 },
            { no: 20, nama: "Ruang BP/BK", jumlah: 1, luas: 8 },
            { no: 21, nama: "Ruang Kepala Sekolah", jumlah: 1, luas: 26 },
            { no: 22, nama: "Ruang Guru", jumlah: 1, luas: 64 },
            { no: 23, nama: "Ruang TU", jumlah: 1, luas: 36 },
            { no: 24, nama: "Ruang OSIS", jumlah: 1, luas: 8 },
            { no: 25, nama: "Kamar Mandi/WC Guru", jumlah: 1, luas: 8 },
            { no: 26, nama: "Kamar Mandi/WC Siswa", jumlah: 8, luas: 24 },
            { no: 27, nama: "Gudang", jumlah: 2, luas: 94 },
            { no: 28, nama: "Ruang Ibadah", jumlah: 1, luas: 72 },
            { no: 29, nama: "Rumah Dinas Kepala Sekolah", jumlah: "", luas: "" },
            { no: 30, nama: "Rumah Dinas Guru", jumlah: "", luas: "" },
            { no: 31, nama: "Ruang Penjaga Sekolah", jumlah: "", luas: "" },
            { no: 32, nama: "Sanggar MGMP", jumlah: "", luas: "" },
            { no: 33, nama: "Sanggar PKG", jumlah: "", luas: "" },
            { no: 34, nama: "Asrama Siswa", jumlah: "", luas: "" },
            { no: 35, nama: "Unit Produksi", jumlah: "", luas: "" },
            { no: 36, nama: "Ruang Multimedia", jumlah: "", luas: "" },
            { no: 37, nama: "Ruang Pusat Belajar Guru/Olahraga", jumlah: "", luas: "" },
        ],
        kepala_sekolah: {
            NUPTK: "4734747648200002",
            NO_KTP: "3301010204690003",
            NAMA: "AKHMAD BASIR",
            GELAR_DEPAN: "Drs.",
            GELAR_BLKNG: "",
            TEMPAT_LAHIR: "CILACAP",
            TGL_LAHIR: "2 APRIL 1969",
            JENIS_KELAMIN: "LAKI-LAKI",
            RT_RUMAH: "RT 1",
            RW_RUMAH: "RW 3",
            DESA_KELURAHAN_RUMAH: "Tambaksari",
            KECAMATAN_RUMAH: "Kedungreja",
            KABUPATEN_KOTA_RUMAH: "KABUPATEN CILACAP",
            PROVINSI_RUMAH: "PROVINSI JAWA TENGAH",
            KODE_POS_RUMAH: "53263",
            AGAMA: "ISLAM",
            STATUS_KAWIN: "KAWIN",
            NO_HP_PRIBADI: "+62 813-2809-4979",
            EMAIL_PRIBADI: "",
            NAMA_IBU_KANDUNG: "",
            PENDIDIKAN_TERAKHIR: "",
            TGL_LULUS_PENDIDIKAN_TERAKHIR: "",
            JURUSAN_PENDIDIKAN_TERAKHIR: "",
            LEMBAGA_PENDIDIKAN_TERAKHIR: "",
            TGL_LULUS_PENDIDIKAN_S1_DIV: "",
            JURUSAN_PENDIDIKAN_S1_DIV: "",
        },

        kemitraan: {
            deskripsi:
                "Kemitraan dalam operasionalnya merupakan sebuah kerjasama antara orang atau kelompok orang yang berkomitmen untuk berbagi tanggung jawab untuk mencapai satu tujuan bersama—pendidikan yang bermutu bagi semua, terutama bagi golongan masyarakat miskin. Dalam kerjasama tersebut terdapat berbagai jenjang:",
            header: "Kemitraan dalam pembangunan diimplementasikan dengan menggunakan prinsip PACTS",
            jenjang: [
                {
                    judul: "Jaringan (networking):",
                    deskripsi:
                        "Berbagi informasi yang dapat membantu mitra untuk bekerja lebih baik.",
                },
                {
                    judul: "Koordinasi (coordination):",
                    deskripsi:
                        "Berbagi informasi, melakukan penyesuaian agar dapat mengakomodasi yang lain supaya tidak saling konflik.",
                },
                {
                    judul: "Kooperasi (cooperation):",
                    deskripsi:
                        "Berbagi informasi, melakukan penyesuaian agar dapat mengakomodasi yang lain dan secara nyata ada beberapa aspek pekerjaan yang menjadi tanggung jawab masing-masing.",
                },
                {
                    judul: "Kolaborasi (collaboration):",
                    deskripsi:
                        "Berbagi informasi, melakukan penyesuaian agar dapat mengakomodasi yang lain, beberapa aspek dari pekerjaan menjadi tanggung jawab masing-masing sesuai bidang keahlian dan akhirnya berbagi hasil bersama.",
                },
            ],

            implementasi: [

                {

                    judul: "Partisipasi/Participation:",
                    deskripsi:
                        "Semua pihak memiliki kesempatan yang sama untuk menyatakan pendapat, memutuskan hal-hal yang menyangkut nasibnya dan bertanggung jawab atas semua keputusan yang telah disepakati bersama.",
                },
                {
                    judul: "Akseptasi/Acceptable:",
                    deskripsi:
                        "Saling menerima dengan apa adanya dalam kesetaraan. Masing-masing memiliki fungsinya sendiri-sendiri.",
                },
                {
                    judul: "Komunikasi/Communication:",
                    deskripsi:
                        "Masing-masing pihak harus mau dan mampu mengkomunikasikan dirinya serta rencana kerjanya sehingga dapat dikoordinasikan dan disinergikan.",
                },
                {
                    judul: "Percaya/Trust:",
                    deskripsi:
                        "Saling mempercayai dan dapat dipercaya untuk membina kerjasama. Di sini transparansi menjadi tuntutan dan tidak bisa ditawar.",
                },
                {
                    judul: "Berbagi/Share:",
                    deskripsi:
                        "Semua yang terlibat dalam kemitraan harus mampu membagikan diri dan miliknya (waktu, 'harta', dan kemampuan) untuk mencapai tujuan bersama.",
                },
            ],
        },

        programKerja: {
            title: "Program Kerja",
            content:
                "Pada Tahun Pelajaran 2015/2016, SMA Negeri 1 Kedungreja menetapkan tujuan sekolah untuk 4 (empat) tahun ke depan, yaitu:",
            list: [
                "Memberi arahan dan landasan kerja semua personal sekolah.",
                "Memberi dorongan kepada semua warga sekolah untuk pelaksanaan kerja yang lebih baik dalam rangka peningkatan profesionalisme.",
                "Menunjang Kurikulum Tingkat satuan Poendidikan (KTSP) untuk mencapai tujuan pendidikan nasional, khususnya tujuan SMA.",
                "Menetapkan kegiatan – kegiatan yang paling relevan dengan tujuan yang ditetapkan.",
                "Menjadi tolak ukur keberhasilan pelaksanaan program.",
            ],
            image: "/logo.png",
        },
    },


    getters: {
        getProgramKerja: (state) => state.programKerja,
        getKemitraan: (state) => state.kemitraan,
        getKepalaSekolah: (state) => state.kepala_sekolah,
        getDaftarRuang: (state) => state.daftar_ruang,
        getSaranaPrasarana: (state) => state.sarana_prasarana,
        getDataPtkPd: (state) => state.data_ptk_pd,
        getDataSarpras: (state) => state.data_sarpras,
        getDataRombel: (state) => state.data_rombel,
        getFacilitiesContent: (state) => state.facilities,
        getProfileContent: (state) => state.profileContent,
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