import { createStore } from 'vuex'

export default createStore({
    state: {
        schoolInfo: {
            name: 'SMA Negeri 1 Kedungreja',
            address: 'Jl. Raya Tambaksari Tp 212 Kedungreja Cilacap',
            email: 'info@sman1kedungreja.sch.id',
            phone: '09860540758'
        },
        staff: [
            {
                id: 1,
                name: "Mas Anis",
                role: "Kepala Sekolah",
                photo: "/guru/guru1.jpeg",
            },
            {
                id: 2,
                name: "Ibu Susi",
                role: "Wakil Kepala Sekolah",
                photo: "/guru/guru2.jpeg",
            },
            {
                id: 3,
                name: "Pak Budi",
                role: "Guru Matematika",
                photo: "/guru/guru3.jpg",
            },
            {
                id: 4,
                name: "Bu Rina",
                role: "Guru Bahasa Inggris",
                photo: "/guru/guru4.jpeg",
            },
        ],
        banners: [

            {
                id: 1,
                src: "/banner2.jpg",
                alt: "Banner 1",
            },
            {
                id: 2,
                src: "/banner2.png",
                alt: "Banner 2",
            },
            {
                id: 3,
                src: "/banner3.jpeg",
                alt: "Banner 3",
            },
        ],
        photos: [
            { id: 1, title: "Ruangan", src: "/gallery/ruangan.jpg" },
            { id: 2, title: "Upacara Bendera", src: "/artikel2.jpg" },
            { id: 3, title: "Lomba Sekolah", src: "/gallery/lomba.jpg" },
            { id: 4, title: "Pramuka", src: "/gallery/pramuka.jpg" },
            { id: 5, title: "Hari Guru", src: "/gallery/ucapan.jpg" },
            { id: 6, title: "Paskibraka", src: "/gallery/paskibra.jpg" },
        ],
        profileMenu: [
            { id: 1, title: "Visi Misi", route: "/profil/visi-misi" },
            { id: 2, title: "Sejarah", route: "/profil/sejarah" },
            { id: 3, title: "Sarana Prasarana", route: "/profil/sarana_prasarana" },
            { id: 4, title: "Struktur Organisasi", route: "/profil/struktur_organisasi" },
            { id: 5, title: "Kepala Sekola", route: "/profil/kepala_sekolah" },
            { id: 7, title: "Program Kerja", route: "/profil/program_kerja" },

        ],
        guruMenu: [
            { id: 1, title: "Direktori Guru", route: "/guru/direktori_guru" },
            { id: 2, title: "Kalender Akademik", route: "/guru/kalender" },
        ],
        siswaMenu: [
            { id: 1, title: "Direktor Siswa", route: "/siswa/direktori_siswa" },
            { id: 2, title: "Ekstrakulikuler", route: "/siswa/ekstrakulikuler" },
            { id: 3, title: "Osis", route: "/siswa/osis" },
            { id: 4, title: "Direktori Alumi", route: "/siswa/direktori_alumi" },
        ],
        informasiMenu: [

            { id: 2, title: "Kontak Sekolah", route: "/informasi/kontak_sekolah" },
            { id: 3, title: "Agenda", route: "/informasi/agenda" },
            { id: 4, title: "Berita", route: "/informasi/berita" },
            { id: 5, title: "Prestasi", route: "/informasi/prestasi" },

        ],
        galeriMenu: [
            { id: 1, title: "Galeri Video", route: "/galeri/galeri_video" },
            { id: 2, title: "Galeri Foto", route: "/galeri/galeri_foto" },
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


        direktoriGuru: [
            {
                id: "1",
                category: "Guru",
                name: "Drs. AHMAD BASIR",
                details: "19690402 199802 1 001",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "2",
                category: "Guru",
                name: "SUMIRAH, S.P., M.Pd.",
                details: "19710802 200801 2 012",
                image: "/guru/guru2.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "3",
                category: "Guru",
                name: "SUPARMIN, S.Pd.",
                details: "19670407 199702 2 001",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "4",
                category: "Guru",
                name: "TASIMIN, S.Pd.",
                details: "19680914",
                image: "/guru/guru4.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "5",
                category: "Guru",
                name: "Dedi Idayanto, S.Kom.",
                details: "19771229 200701 1 001",
                image: "/guru/guru5.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "6",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru6.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "7",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru7.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "8",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru8.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "9",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru9.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "10",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru10.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "11",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "12",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "13",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "14",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "15",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "16",
                category: "Guru",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },

        ],
        kalender: {
            title: "Kalender Akademik",
            image: "/logo.png",
        },
        direktoriSiswa: [
            {
                id: "1",
                category: "IPA",
                name: "Drs. AHMAD BASIR",
                details: "19690402 199802 1 001",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "2",
                category: "IPA",
                name: "SUMIRAH, S.P., M.Pd.",
                details: "19710802 200801 2 012",
                image: "/guru/guru2.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "3",
                category: "IPA",
                name: "SUPARMIN, S.Pd.",
                details: "19670407 199702 2 001",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "4",
                category: "IPA",
                name: "TASIMIN, S.Pd.",
                details: "19680914",
                image: "/guru/guru4.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "5",
                category: "IPA",
                name: "Dedi Idayanto, S.Kom.",
                details: "19771229 200701 1 001",
                image: "/guru/guru5.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "6",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru6.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "7",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru7.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "8",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru8.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "9",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru9.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "10",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru10.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "11",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "12",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "13",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru3.jpg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "14",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "15",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },
            {
                id: "16",
                category: "IPA",
                name: "Budi Prabowo, S.Pd.",
                details: "19781219 200401 1 002",
                image: "/guru/guru1.jpeg",
                nuptk: "4734747642800002",
                gender: "Laki-laki",
                birthPlace: "Cilacap",
                birthDate: "04-02-1969",
                rank: "Pembina Tingkat I / IV.b",
                address: "Desa Tambaksari Kec. Kedungreja",
            },

        ],
        Informasi: {
            agenda: [
                {
                    title: "Study Tour",
                    description: "Study tour untuk Kelas XI Tujuan Bandung",
                    date: "18-04-2019 s/d 20-04-2019",
                    icon: "/tour.png",
                    month: "April",
                    year: 2019,
                },
                {
                    title: "UNBK",
                    description: "Kegiatan Ujian Nasional Berbasis Komputer untuk Kelas XII",
                    date: "01-04-2019 s/d 08-04-2019",
                    icon: "/materi.png",
                    month: "April",
                    year: 2019,
                },
            ],
            berita: [
                {
                    title: "Lomba Bapak Ibu",
                    description: "Lomba Bapak Ibu Ulang SMAN 1 Kedungreja",
                    date: "08/16/2022",
                    icon: "/news1.png",
                    content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Lomba Bapak Ibu diadakan untuk memeriahkan hari kemerdekaan RI ke-77 di SMAN 1 Kedungreja.
                      Kegiatan ini meliputi lomba makan krupuk dan pertandingan voli antar guru dan staf sekolah.
                      Suasana sangat meriah dengan partisipasi dan semangat dari semua peserta.
                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                    Selasa, 16 Agustus 2022, para guru dan staf mengenakan seragam olahraga merah dan hitam, dengan semangat tinggi mengikuti setiap rangkaian kegiatan. Terlihat tawa dan sorakan memenuhi halaman sekolah saat peserta berusaha keras menghabiskan krupuk yang tergantung dan bertanding voli dengan semangat sportif. Kegiatan ini menjadi momen kebersamaan yang mempererat tali silaturahmi antar civitas sekolah sekaligus memperingati Hari Kemerdekaan Republik Indonesia dengan penuh sukacita.
                    </p>
                     
                     <p style="text-align: justify">
                    Panitia lomba pun memberikan hadiah simbolis berupa bingkisan kecil kepada para pemenang sebagai bentuk penghargaan. Momen ini ditutup dengan sesi foto bersama yang diiringi senyum puas dari seluruh peserta. Harapannya, kegiatan semacam ini dapat terus dilaksanakan setiap tahunnya sebagai bagian dari tradisi sekolah dalam memperingati hari-hari besar nasional.
                    </p>
                   
                    
                  `,
                },
                {
                    title: "Lomba Pakaean Daur Ulang",
                    description: "Lomba Pakaean Daur Ulang SMAN 1 Kedungreja",
                    date: "08/16/2022",
                    icon: "/berita/berita2.jpg",
                    content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      Lomba pakaian daur ulang di SMAN 1 Kedungreja diselenggarakan sebagai bagian dari kampanye kesadaran lingkungan dan peningkatan kreativitas siswa. Kegiatan ini bertujuan untuk menanamkan nilai kepedulian terhadap sampah dan pentingnya pemanfaatan kembali barang bekas menjadi sesuatu yang bernilai guna. Para siswa diajak untuk berpikir kritis dan inovatif dalam mengubah limbah menjadi karya seni dalam bentuk busana.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Sebelum hari pelaksanaan, siswa diberi waktu untuk merancang dan membuat pakaian dari berbagai bahan bekas seperti plastik, kertas koran, kardus, hingga kantong kresek. Proses ini melibatkan kerja sama tim antar kelas serta bimbingan dari guru pendamping. Seluruh rancangan dikerjakan dengan penuh antusiasme dan ide-ide unik yang mencerminkan karakter serta pesan moral dari tiap kelompok.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Pada hari lomba, para peserta tampil percaya diri dalam parade busana daur ulang yang diselenggarakan di lapangan sekolah. Tiap siswa berjalan di "catwalk" sederhana yang telah disiapkan, sambil memperagakan pakaian hasil kreasi mereka. Sorak sorai dari siswa lainnya turut memeriahkan acara, menciptakan suasana kompetitif namun tetap menyenangkan. Dewan juri menilai dari aspek kreativitas, ketepatan tema, dan presentasi.
                    </p>
                    <p style="text-align: justify; margin-bottom: 16px;">
                    Melalui kegiatan ini, siswa tidak hanya belajar tentang pentingnya menjaga lingkungan, tetapi juga tentang nilai kerja keras, kolaborasi, dan keberanian tampil di depan umum. Harapannya, lomba ini dapat menjadi inspirasi bagi siswa untuk terus peduli terhadap isu lingkungan sekaligus mengasah kemampuan berpikir kreatif dalam menghadapi tantangan global masa depan.
                    </p>
                  `,
                },
                {
                    title: "Lomba Seni",
                    description: "Dalam rangka peringatan HUT RI ke-77 SMAN 1 Kedungreja mengadakan lomba Seni",
                    date: "08/16/2022",
                    icon: "/news3.jpg",
                    content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                      SMAN 1 Kedungreja mengadakan lomba seni yang meliputi tari, musik, dan drama sebagai wadah ekspresi dan unjuk bakat bagi para siswa. Kegiatan ini menjadi ajang penting dalam menggali potensi seni yang dimiliki oleh siswa, sekaligus mempererat rasa cinta terhadap budaya Indonesia. Lomba ini juga bertujuan untuk meningkatkan kepercayaan diri siswa melalui penampilan di hadapan publik.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Setiap kelas atau perwakilan kelompok menampilkan pertunjukan seni yang telah mereka persiapkan dengan serius. Dalam lomba tari, siswa membawakan berbagai tarian tradisional dari daerah-daerah di Indonesia dengan kostum dan gerakan yang memukau. Untuk kategori musik, siswa menyanyikan lagu daerah maupun lagu modern dengan iringan alat musik, baik akustik maupun digital.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Sementara itu, penampilan drama menghadirkan cerita-cerita yang sarat nilai moral dan sosial, yang dikemas dalam alur yang menghibur dan penuh pesan. Para siswa menunjukkan kemampuan akting, penguasaan dialog, dan kerjasama tim yang luar biasa. Penampilan mereka disambut antusias oleh penonton yang terdiri dari siswa, guru, dan staf sekolah.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Kegiatan lomba seni ini tidak hanya menjadi sarana hiburan, tetapi juga mendorong pengembangan karakter siswa, khususnya dalam hal apresiasi seni, kedisiplinan, dan kerja sama. Diharapkan melalui acara seperti ini, bakat-bakat terpendam di bidang seni dapat terus diasah dan berkembang, serta memberikan semangat baru bagi siswa untuk terus berkarya secara positif.
                    </p>
                  `,
                },
                {
                    title: "Karnaval SMAN 1 Kedungreja",
                    description: "Dalam rangka memperingati HUT RI Ke-77 SMAN 1 Kedungreja mengadakan karnaval pembangunan",
                    date: "08/15/2022",
                    icon: "/berita/berita1.jpg",
                    content: `
                    <p style="text-align: justify; margin-bottom: 16px;">
                     SMAN 1 Kedungreja turut memeriahkan HUT RI ke-77 dengan menyelenggarakan Karnaval Pembangunan yang meriah dan penuh makna. Kegiatan ini menjadi bentuk partisipasi aktif sekolah dalam memperingati hari kemerdekaan sekaligus menyampaikan pesan penting mengenai pembangunan nasional. Karnaval ini tidak hanya menjadi hiburan, tetapi juga sarana edukasi bagi masyarakat sekitar.
                     </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Karnaval pembangunan diikuti oleh seluruh siswa, guru, dan staf dengan antusiasme yang tinggi. Setiap rombongan mengenakan kostum bertema kemerdekaan dan pembangunan, serta membawa miniatur hasil karya siswa seperti replika gedung, jembatan, hingga alat transportasi sebagai simbol kemajuan bangsa. Seluruh peserta berkeliling desa-desa sekitar sekolah dengan semangat dan keceriaan.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Masyarakat sekitar menyambut karnaval dengan antusias, berdiri di pinggir jalan untuk menyaksikan parade yang penuh warna dan kreativitas. Selain itu, karnaval ini menjadi ajang mempererat hubungan antara sekolah dan warga sekitar, menciptakan suasana kebersamaan dan semangat gotong royong. Berbagai pertunjukan juga ditampilkan di titik-titik tertentu sebagai bagian dari rangkaian acara.
                    </p>

                    <p style="text-align: justify; margin-bottom: 16px;">
                    Melalui Karnaval Pembangunan ini, SMAN 1 Kedungreja berharap dapat menanamkan nilai cinta tanah air, kepedulian terhadap pembangunan, serta membentuk karakter siswa yang kreatif dan peduli terhadap lingkungan sekitar. Kegiatan ini menjadi simbol semangat kemerdekaan yang tidak hanya dirayakan, tetapi juga dihayati melalui aksi nyata yang mendidik dan membangun.
                    </p>
                  `,
                },


            ],
            prestasi: {
                title: "Prestasi",
                content:
                    "SMA Negeri 1 Kedungreja Tahun 2016 meraih prestasi:",
                list: [
                    "Juara 1 OSN Matematika Tingkat Kabupaten Cilacap",
                    "Juara 1 OSN Ekonomi Tingkat Kabupaten Cilacap",
                    "Juara umum Lomba Lintas Alam Tingkat Kabupaten Cilacap",
                    "Juara 3 Karate Tingkat Kabupaten Cilacap",
                    "Juara 2 Membuat Seni Batik Tingkat Kabupaten Cilacap.",
                ],
                image: "/logo.png",
            },

        },

        videos: [
            {
                id: 1,
                title: "Selamat Hari Guru 2017 SMANKER Jaya",
                date: "07-03-2025",
                thumbnail: "/video4.png",
                videoUrl: "https://www.youtube.com/watch?v=OaNdJqPCegA&t=1s",
            },
            {
                id: 2,
                title: "Upacara Peringatan Hari Guru",
                date: "27-11-2023",
                thumbnail: "/video1.png",
                videoUrl: "https://www.youtube.com/embed/jFvncZ6YKGs",
            },
            {
                id: 3,
                title: "Sarpras SMAN 1 Kedungreja ",
                date: "05-09-2023",
                thumbnail: "/video2.png",
                videoUrl: "https://youtu.be/kcIL1iR1FL4",
            },
            {
                id: 4,
                title: "Profil SMAN 1 KEDUNGREJA",
                date: "15-12-2022",
                thumbnail: "/video3.png",
                videoUrl: "https://youtu.be/M3My0S9h__U",
            },

        ],
        albums: [
            {
                id: 1,
                title: "Galeri 2022",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 2,
                title: "Twibbon",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 3,
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 4,
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 8,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg", "/news1.png", "/news2.jpg", "/news3.jpg"],
            },

        ]

    },
    mutations: {
        addBukuTamu(state, tamu) {
            state.Informasi.bukuTamu.push(tamu);
        },
    },


    getters: {
        getPhotos: (state) => state.photos,
        getStaff: (state) => state.staff,
        getBanners: (state) => state.banners,
        getAlbums: (state) => state.albums,
        getAlbumById: (state) => (id) => state.albums.find((album) => album.id === id),
        getVideos: (state) => state.videos,
        getVideoById: (state) => (id) => state.videos.find((video) => video.id === id),
        getBukuTamu: (state) => state.Informasi.bukuTamu,
        getArtikel: (state) => state.Informasi.artikel,
        getBerita: (state) => state.Informasi.berita,
        getAgenda: (state) => state.Informasi.agenda,
        getPrestasi: (state) => state.Informasi.prestasi,
        getPetaSitus: (state) => state.Informasi.petaSitus,
        getLinkWebsites: (state) => state.Informasi.linkWebsites,
        getDaftarBlog: (state) => state.Informasi.daftar_blog,
        getInformasiSekolah: (state) => state.Informasi,
        getSiswaById: (state) => (id) => {
            return state.direktoriSiswa.find((siswa) => siswa.id === id);
        },
        getDirektoriSiswa: (state) => state.direktoriSiswa,
        getKalender: (state) => state.kalender,

        getDirektoriGuru: (state) => state.direktoriGuru,
        getGuruById: (state) => (id) => {
            return state.direktoriGuru.find((guru) => guru.id === id);
        },
        getDirektoriGuru: (state) => state.direktoriGuru,
        getKondisiSiswa: (state) => state.kondisiSiswa,
        getProgramKerja: (state) => state.programKerja,
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
        getinformasi: state => state.profileMenu,
        getProfileMenu: (state) => state.profileMenu,
        getGuruMenu: (state) => state.guruMenu,
        getSiswaMenu: (state) => state.siswaMenu,
        getInformasiMenu: (state) => state.informasiMenu,
        getGaleriMenu: (state) => state.galeriMenu,
    },
});