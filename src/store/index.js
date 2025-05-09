import Kalender from '@/views/guru/Kalender.vue';
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
            { id: 1, title: "Direktori Guru", route: "/guru/direktori_guru" },
            { id: 2, title: "Silabus", route: "/guru/silabus" },
            { id: 3, title: "Materi Ajar", route: "/guru/materi_ajar" },
            { id: 4, title: "Materi Uji", route: "/guru/materi_uji" },
            { id: 5, title: "Kalender Akademik", route: "/guru/kalender" },
        ],
        siswaMenu: [
            { id: 1, title: "Direktor Siswa", route: "/siswa/direktori_siswa" },
            { id: 2, title: "Prestasi Siswa", route: "/siswa/prestasi_siswa" },
            { id: 3, title: "Ekstrakulikuler", route: "/siswa/ekstrakulikuler" },
            { id: 4, title: "Osis", route: "/siswa/osis" },
            { id: 5, title: "Beasiswa", route: "/siswa/beasiswa" },
            { id: 5, title: "Direktori Alumi", route: "/siswa/direktori_alumi" },
        ],
        informasiMenu: [
            { id: 1, title: "Info Sekolah", route: "/informasi/info_sekolah" },
            { id: 2, title: "Daftar Blog", route: "/informasi/daftar_blog" },
            { id: 3, title: "Link", route: "/informasi/link_webiste" },
            { id: 4, title: "Peta Situs", route: "/informasi/peta_situs" },
            { id: 5, title: "Kontak Sekolah", route: "/informasi/kontak_sekolah" },
            { id: 6, title: "Agenda", route: "/informasi/agenda" },
            { id: 7, title: "Berita", route: "/informasi/berita" },
            { id: 8, title: "Artikel", route: "/informasi/artikel" },
            { id: 9, title: "Buku Tamu", route: "/informasi/buku_tamu" },
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
        kondisiSiswa: {
            title: "Kondisi Siswa",
            content: [
                "Kelas X : 7 kelas : 256 anak",
                "Kelas XI : 3 kelas IPA : 4 kelas IPS : 201 anak",
                "Kelas XII : 3 kelas IPA : 3 kelas IPS : 182 anak",
                "Jumlah : 639 anak",
            ],

        },
        komiteSekolah: {
            title: "Komite Sekolah",
            data: [
                {
                    no: 1,
                    nama: "RAJAN, S.Pd., S.S., M.Pd.",
                    jabatanDinas: "Kepala Sekolah",
                    jabatanPengurus: "Penanggung Jawab",
                },
                {
                    no: 2,
                    nama: "Dalyadi, S.Pd.",
                    jabatanDinas: "",
                    jabatanPengurus: "Ketua",
                },
            ],
        },
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
        silabus: {
            title: "Silabus",
            image: "/logo.png",
            description: [
                {
                    subject: "Pelajaran Biologi, kelas XII",
                    downloads: "1080 kali",
                    link: "[Download]",
                    updated: "16/03/2020 22:24:02",
                },
                {
                    subject: "Pelajaran Biologi, kelas XI",
                    downloads: "1090 kali",
                    link: "[Download]",
                    updated: "16/03/2020 22:23:00",
                },
            ],
            footer: "Pahami silabus",
        },
        materi_ajar: [
            { name: "Akuntansi", link: "#" },
            { name: "Bahasa Indonesia", link: "#" },
            { name: "Bahasa Inggris", link: "#" },
            { name: "Bimbingan dan Konseling", link: "#" },
            { name: "Biologi", link: "#" },
            { name: "Ekonomi", link: "#" },
            { name: "Fisika", link: "#" },
            { name: "Geografi", link: "#" },
            { name: "Kimia", link: "#" },
            { name: "Matematika Peminatan", link: "#" },
        ],
        materi_uji: [
            { name: "Pemrograman", link: "#" },
            { name: "Bahasa Indonesia", link: "#" },
            { name: "Bahasa Inggris", link: "#" },
            { name: "Bimbingan dan Konseling", link: "#" },
            { name: "Biologi", link: "#" },
            { name: "Ekonomi", link: "#" },
            { name: "Fisika", link: "#" },
            { name: "Geografi", link: "#" },
            { name: "Kimia", link: "#" },
            { name: "Matematika Peminatan", link: "#" },
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
            informasi_sekolah: {
                title: "Informasi Sekolah",
                image: "/logo.png",
                list: [
                    "Perpustakaan Digital",
                    "Mars SMAN 1 Kedungreja",
                    "Gambar Sarpas SMAN 1 Kedungreja",
                    "E-Raport",
                    "LMS SMAN 1 Kedungreja",
                    "LMS SMAN 1 Kedungreja.",
                    "Foto Kondisi SMAN 1 Kedungreja",
                ]
            },
            daftar_blog: {
                title: "Daftar Blog",
                data: [
                    {
                        no: 1,
                        nama: "Fatoni",
                        kelas: "2013",
                        ketua: "CAMAT",
                        hits: "1062",
                    },
                    {
                        no: 2,
                        nama: "Fatoni Sugar",
                        kelas: "2013",
                        ketua: "CAMAT",
                        hits: "1062",
                    },
                    {
                        no: 3,
                        nama: "Fatoni Sugar",
                        kelas: "2024",
                        ketua: "CAMAT",
                        hits: "1062",
                    },
                    {
                        no: 2,
                        nama: "Fatoni Sugar",
                        kelas: "2025",
                        ketua: "CAMAT",
                        hits: "1062",
                    },
                ],
            },
            linkWebsites: [
                {
                    title: "Website resmi Dinas Pendidikan Nasional",
                    url: "http://www.kemdiknas.go.id",
                },
                {
                    title: "Website resmi Kota Bandung",
                    url: "http://www.bandung.go.id",
                },
                {
                    title: "Website resmi Propinsi Jawa Barat",
                    url: "http://www.jabar.go.id",
                },
                {
                    title: "Website resmi Dikmenum",
                    url: "http://www.dikmenum.go.id",
                },
                {
                    title: "Sekolah Kita",
                    url: "http://sekolah.data.kemdikbud.go.id/index.php/chome/profil/B56...",
                },
            ],
            petaSitus: [
                {
                    category: "Profil",
                    items: [
                        { title: "Sejarah Singkat", link: "/profil/sejarah-singkat" },
                        { title: "Visi dan Misi", link: "/profil/visi-misi" },
                        { title: "Struktur Organisasi", link: "/profil/struktur-organisasi" },
                        { title: "Program Kerja", link: "/profil/program-kerja" },
                        { title: "Kemitraan", link: "/profil/kemitraan" },
                        { title: "Sarana & Prasarana", link: "/profil/sarana-prasarana" },
                        { title: "Kondisi Siswa", link: "/profil/kondisi-siswa" },
                        { title: "Kepala Sekolah", link: "/profil/kepala-sekolah" },
                        { title: "Prestasi", link: "/profil/prestasi" },
                        { title: "Komite Sekolah", link: "/profil/komite-sekolah" },
                        { title: "Kontak Sekolah", link: "/profil/kontak-sekolah" },
                    ],
                },
                {
                    category: "Guru",
                    items: [
                        { title: "Direktori Guru", link: "/guru/direktori" },
                        { title: "Silabus", link: "/guru/silabus" },
                        { title: "Materi Ajar", link: "/guru/materi-ajar" },
                        { title: "Materi Evaluasi", link: "/guru/materi-evaluasi" },
                        { title: "Kalender Akademik", link: "/guru/kalender-akademik" },
                    ],
                },
                {
                    category: "Siswa",
                    items: [
                        { title: "Direktori Siswa", link: "/siswa/direktori" },
                        { title: "Beasiswa", link: "/siswa/beasiswa" },
                        { title: "OSIS", link: "/siswa/osis" },
                        { title: "Ekstrakurikuler", link: "/siswa/ekstrakurikuler" },
                        { title: "Direktori Alumni", link: "/siswa/direktori-alumni" },
                        { title: "Info Alumni", link: "/siswa/info-alumni" },
                    ],
                },
                {
                    category: "Informasi",
                    items: [
                        { title: "Agenda", link: "/informasi/agenda" },
                        { title: "Artikel", link: "/informasi/artikel" },
                        { title: "Info", link: "/informasi/info" },
                        { title: "Berita", link: "/informasi/berita" },
                        { title: "Buku Tamu", link: "/informasi/buku-tamu" },
                        { title: "Daftar Blog", link: "/informasi/daftar-blog" },
                        { title: "Link", link: "/informasi/link" },
                        { title: "Peta Situs", link: "/informasi/peta-situs" },
                    ],
                },
                {
                    category: "Galeri",
                    items: [
                        { title: "Galeri Video", link: "/galeri/video" },
                        { title: "Galeri Foto", link: "/galeri/foto" },
                    ],
                },
                {
                    category: "Peta Situs Komunitas Sekolah (Member)",
                    items: [
                        { title: "Profil Member", link: "/member/profil" },
                        { title: "Data Kontak", link: "/member/kontak" },
                        { title: "Anggota", link: "/member/anggota" },
                        { title: "Pesan", link: "/member/pesan" },
                        { title: "Chat", link: "/member/chat" },
                        { title: "Opini", link: "/member/opini" },
                        { title: "Diskusi", link: "/member/diskusi" },
                        { title: "Info Alumni", link: "/member/info-alumni" },
                        { title: "Materi Ajar", link: "/member/materi-ajar" },
                    ],
                },
            ],
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
                    description: "Lomba makan krupuk dan volly",
                    date: "08/16/2022",
                    icon: "/tour.png",
                },
                {
                    title: "Lomba Pakaean Daur Ulang",
                    description: "Lomba Pakaean Daur Ulang SMAN 1 Kedungreja",
                    date: "08/16/2022",
                    icon: "/tour.png",
                },
                {
                    title: "Lomba Seni",
                    description: "Dalam rangka peringatan HUT RI ke-77 SMAN 1 Kedungreja mengadakan lomba Seni",
                    date: "08/16/2022",
                    icon: "/tour.png",
                },
                {
                    title: "Karnaval SMAN 1 Kedungreja",
                    description:
                        "Dalam rangka memperingati HUT RI Ke-77 SMAN 1 Kedungreja mengadakan karnaval pembangunan",
                    date: "08/15/2022",
                    icon: "/tour.png",
                },
                {
                    title: "JADWAL PPDB 2022",
                    description: "JADWAL PPDB SMAN 1 Kedungreja tahun 2022",
                    date: "06/18/2022",
                    icon: "/tour.png",
                },
                {
                    title: "PESERTA OSNK H1",
                    description: "PESERTA OSNK H1 SMAN 1 Kedungreja",
                    date: "05/24/2022",
                    icon: "/tour.png",
                },
                {
                    title: "BAGI TAKJIL SMAN 1 KEDUNGREJA 1443 H",
                    description:
                        "Kegiatan bagi-bagi takjil ke masyarakat sekitar SMAN 1 Kedungreja",
                    date: "04/27/2022",
                    icon: "/tour.png",
                },
                {
                    title: "LMS SMAN 1 KEDUNGREJA",
                    description:
                        "Sebagai peningkatan pembelajaran di era teknologi komputer dengan ini SMAN 1 kedungreja menggunakan Learning...",
                    date: "04/01/2022",
                    icon: "/tour.png",
                },
                {
                    title: "INFO PPDB",
                    description:
                        "Ayo kita bergabung di keluarga besar SMA Negeri 1 Kedungreja dengan datang ke SMAN 1 Kedungreja atau mengisi link ini...",
                    date: "04/01/2022",
                    icon: "/tour.png",
                },
            ],
            artikel: [
                {
                    title: "Perpustakaan Digital",
                    description: "PERPUSTAKAAN DIGITAL SMAN 1 KEDUNGREJA",
                    date: "08/16/2022",
                    icon: "/artikel 1.jpg",
                },
                {
                    title: "LMS SMAN 1 Kedungreja",
                    description: "https://lib.sman1kedungreja.sch.id/login/index.php ",
                    date: "08/16/2022",
                    icon: "/artikel2.jpg",
                },
                {
                    title: "Website Biologi SMAN 1 Kedungreja",
                    description: "https://sites.google.com/guru.sma.belajar.id/biologisman1kdr ",
                    date: "08/16/2022",
                    icon: "/artikel3.png",
                },

            ],
            bukuTamu: [],
        },

        videos: [
            {
                id: 1,
                title: "Uji Coba SPMB PROV Jateng",
                date: "07-03-2025",
                thumbnail: "/artikel3.png",
                videoUrl: "https://www.youtube.com/watch?v=da4Xw2Kr79w",
            },
            {
                id: 2,
                title: "Peringatan PGRI",
                date: "27-11-2023",
                thumbnail: "/artikel3.png",
                videoUrl: "https://www.youtube.com/watch?v=da4Xw2Kr79w&ab_channel=Hindia",
            },
            {
                id: 3,
                title: "SMAN 1 Kedungreja masa lampau",
                date: "05-09-2023",
                thumbnail: "/artikel3.png",
                videoUrl: "https://www.youtube.com/watch?v=da4Xw2Kr79w&ab_channel=Hindia",
            },
            {
                id: 4,
                title: "Kegiatan P5",
                date: "15-12-2022",
                thumbnail: "/artikel3.png",
                videoUrl: "https://www.youtube.com/watch?v=da4Xw2Kr79w&ab_channel=Hindia",
            },
            {
                id: 5,
                title: "Sarpras",
                date: "21-11-2022",
                thumbnail: "/artikel3.png",
                videoUrl: "https://www.youtube.com/watch?v=da4Xw2Kr79w&ab_channel=Hindia",
            },
            {
                id: 6,
                title: "Taman SMAN 1 Kedungreja",
                date: "21-06-2020",
                thumbnail: "/artikel3.png",
                videoUrl: "https://www.youtube.com/watch?v=da4Xw2Kr79w&ab_channel=Hindia",
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
            {
                id: 5,
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 6,
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 7,
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            {
                id: 8,
                title: "Semarak Peringatan HUT RI Ke-75",
                photoCount: 3,
                photos: ["/news1.png", "/news2.jpg", "/news3.jpg"],
            },
            // 
        ]

    },
    mutations: {
        addBukuTamu(state, tamu) {
            state.Informasi.bukuTamu.push(tamu);
        },
    },


    getters: {
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
        getPetaSitus: (state) => state.Informasi.petaSitus,
        getLinkWebsites: (state) => state.Informasi.linkWebsites,
        getDaftarBlog: (state) => state.Informasi.daftar_blog,
        getInformasiSekolah: (state) => state.Informasi,
        getSiswaById: (state) => (id) => {
            return state.direktoriSiswa.find((siswa) => siswa.id === id);
        },
        getDirektoriSiswa: (state) => state.direktoriSiswa,
        getKalender: (state) => state.kalender,
        getMateriUji: (state) => state.materi_uji,
        getMateriAjar: (state) => state.materi_ajar,
        getSilabus: (state) => state.silabus,
        getDirektoriGuru: (state) => state.direktoriGuru,
        getGuruById: (state) => (id) => {
            return state.direktoriGuru.find((guru) => guru.id === id);
        },
        getDirektoriGuru: (state) => state.direktoriGuru,
        getPrestasi: (state) => state.prestasi,
        getKomiteSekolah: (state) => state.komiteSekolah,
        getKondisiSiswa: (state) => state.kondisiSiswa,
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
        getinformasi: state => state.profileMenu,
        getProfileMenu: (state) => state.profileMenu,
        getGuruMenu: (state) => state.guruMenu,
        getSiswaMenu: (state) => state.siswaMenu,
        getInformasiMenu: (state) => state.informasiMenu,
        getGaleriMenu: (state) => state.galeriMenu,
    },
});