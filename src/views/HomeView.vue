<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Sidebar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const modules = [Autoplay, Navigation, Pagination];

    // Access Vuex store data
    const berita = computed(() => store.getters.getBerita);
    const schoolInfo = computed(() => store.getters.getSchoolInfo);
    const photoGallery = computed(() => store.getters.getPhotos);
    const videoGallery = computed(() => store.getters.getVideos);
    const stats = computed(() => store.getters.getStats); // jika Sidebar pakai props stats

    // Swiper instances
    const photoSwiper = ref(null);
    const videoSwiper = ref(null);

    const setPhotoSwiper = (swiperInstance) => {
      photoSwiper.value = swiperInstance;
    };
    const setVideoSwiper = (swiperInstance) => {
      videoSwiper.value = swiperInstance;
    };

    const nextPhotoSlide = () => {
      if (photoSwiper.value) {
        photoSwiper.value.slideNext();
      }
    };
    const prevPhotoSlide = () => {
      if (photoSwiper.value) {
        photoSwiper.value.slidePrev();
      }
    };

    const nextVideoSlide = () => {
      if (videoSwiper.value) {
        videoSwiper.value.slideNext();
      }
    };
    const prevVideoSlide = () => {
      if (videoSwiper.value) {
        videoSwiper.value.slidePrev();
      }
    };

    const getYouTubeId = (url) => {
      const regExp =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    };

    const goToDetail = (index) => {
      router.push({ name: "berita_detail", params: { index } });
    };

    return {
      modules,
      schoolInfo,
      berita,
      photoGallery,
      videoGallery,
      stats,
      photoSwiper,
      videoSwiper,
      setPhotoSwiper,
      setVideoSwiper,
      nextPhotoSlide,
      prevPhotoSlide,
      nextVideoSlide,
      prevVideoSlide,
      getYouTubeId,
      goToDetail,
    };
  },
};
</script>


<template>
  <div>
    <!-- Background Image -->
    <div>
      <img src="/bg.png" alt="Background Image" />
    </div>

    <!-- Welcome Section -->
    <div
      class="mx-auto px-6 py-24 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md"
    >
      <div class="md:w-1/2 mb-8 md:mb-0 ms-12">
        <h4 class="text-4 md:text-2xl font-bold text-blue-900 mb-2">
          Selamat Datang di Website
        </h4>
        <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          SMA Negeri 1 Kedungreja
        </h2>
        <p class="text-lg text-gray-700 mb-1">{{ schoolInfo.address }}</p>
        <p class="text-lg text-gray-700">{{ schoolInfo.email }}</p>
      </div>

      <div class="md:w-1/2 flex justify-center">
        <div class="p-4 rounded-lg">
          <img src="/logo.png" alt="Logo Sekolah" class="w-64 h-auto" />
        </div>
      </div>
    </div>

    <!-- News Section -->
    <div class="mx-auto px-6 py-24 bg-dark-900 rounded-lg shadow-md">
      <h1 class="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
        Berita Terbaru
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in berita.slice(0, 4)"
          :key="index"
          class="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
          @click="goToDetail(index)"
        >
          <img
            :src="item.icon"
            alt="Thumbnail Berita"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-blue-800 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{ item.date }}</span>
              <button class="text-blue-600 hover:text-blue-800 font-medium">
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <router-link
          to="/informasi/berita"
          class="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Lihat Berita Lainnya
        </router-link>
      </div>
    </div>

    <!-- Sidebar and Content -->
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Sidebar -->
        <Sidebar :stats="stats" />

        <div class="w-full md:w-3/4">
          <!-- Search Bar -->
          <div class="mb-6 flex justify-center">
            <div class="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Cari"
                class="w-full border-2 border-cyan-500 rounded-lg py-2 px-6 focus:outline-none"
              />
              <button
                class="fa fa-search absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-500"
              ></button>
            </div>
          </div>

          <!-- Articles -->
          <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-3xl font-bold text-cyan-500">Artikel Terbaru</h2>
            </div>

            <div class="bg-gray-100 p-4 rounded-lg mb-2">
              <div class="flex items-center space-x-4">
                <img
                  src="/public/artikel 1.jpg"
                  alt="Perpustakaan Digital"
                  class="w-24 h-20 object-cover rounded-md border-2 border-gray-300 bg-gray-200"
                />
                <div>
                  <h3 class="font-bold">Perpustakaan Digital</h3>
                  <p class="text-sm">Perpustakaan Digital</p>
                </div>
              </div>
            </div>
            <!-- Additional Articles -->
            <div class="bg-gray-100 p-4 rounded-lg mb-2">
              <div class="flex items-center space-x-4">
                <img
                  src="/public/artikel2.jpg"
                  alt="LMS SMAN 1 Kedungreja"
                  class="w-24 h-20 object-cover rounded-md border-2 border-gray-300 bg-gray-200"
                />
                <div>
                  <h3 class="font-bold">LMS SMAN 1 Kedungreja</h3>
                  <p class="text-sm">LMS SMAN 1 Kedungreja</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-100 p-4 rounded-lg mb-2">
              <div class="flex items-center space-x-4">
                <img
                  src="/public/artikel3.png"
                  alt="Web Biologi"
                  class="w-24 h-20 object-cover rounded-md border-2 border-gray-300 bg-gray-200"
                />
                <div>
                  <h3 class="font-bold">Web Biologi SMAN 1 Kedungreja</h3>
                  <a
                    href="https://sites.google.com/guru.sma.belajar.id/biologisman1kdr"
                    class="text-sm"
                  >
                    https://sites.google.com/guru.sma.belajar.id/biologisman1kdr
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-8 md:mb-12">
            <h2
              class="text-2xl md:text-3xl font-bold text-cyan-500 mb-3 md:mb-4 text-center md:text-left"
            >
              Galeri Video Terbaru
            </h2>
            <div class="bg-gray-100 p-3 md:p-6 rounded-lg">
              <div
                class="flex items-center justify-center gap-2 md:gap-6 max-w-4xl mx-auto"
              >
                <button
                  @click="prevVideoSlide"
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-10"
                >
                  <i class="fas fa-caret-left text-xl md:text-2xl"></i>
                </button>

                <swiper
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="10"
                  :pagination="{ clickable: true }"
                  class="w-full mt-4 relative pb-9"
                  @swiper="setVideoSwiper"
                >
                  <swiper-slide v-for="video in videoGallery" :key="video.id">
                    <div class="flex flex-col items-center mt-2 md:mt-1">
                      <div
                        class="w-full max-w-sm md:max-w-3xl h-64 md:h-96 lg:h-[450px] border border-gray-800 rounded-lg overflow-hidden mb-2 md:mb-4"
                      >
                        <iframe
                          class="w-full h-full object-cover rounded-md border border-gray-300 bg-gray-200"
                          :src="`https://www.youtube.com/embed/${getYouTubeId(
                            video.videoUrl
                          )}`"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <h3
                        class="text-lg md:text-xl font-bold text-center text-gray-800 px-2"
                      >
                        {{ video.title }}
                      </h3>
                    </div>
                  </swiper-slide>
                </swiper>

                <button
                  @click="nextVideoSlide"
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-10"
                >
                  <i class="fas fa-caret-right text-xl md:text-2xl"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Galeri Foto Terbaru -->
          <div class="mb-8 md:mb-12">
            <h2
              class="text-2xl md:text-3xl font-bold text-cyan-500 mb-3 md:mb-4 text-center md:text-left"
            >
              Galeri Foto Terbaru
            </h2>
            <div class="bg-gray-100 p-3 md:p-6 rounded-lg">
              <div
                class="flex items-center justify-center gap-2 md:gap-4 max-w-4xl mx-auto"
              >
                <button
                  @click="prevPhotoSlide"
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-10"
                >
                  <i class="fas fa-caret-right text-xl md:text-2xl"></i>
                </button>

                <swiper
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="10"
                  :loop="true"
                  :autoplay="{ delay: 3000 }"
                  :pagination="{ clickable: true }"
                  class="w-full mt-4 relative pb-8"
                  @swiper="setPhotoSwiper"
                >
                  <swiper-slide v-for="photo in photoGallery" :key="photo.id">
                    <div class="flex flex-col items-center mt-4 md:mt-1">
                      <div
                        class="w-full max-w-sm md:max-w-3xl h-64 md:h-96 lg:h-[450px] border border-gray-800 rounded-lg overflow-hidden mb-2 md:mb-4"
                      >
                        <img
                          :src="photo.src"
                          :alt="photo.title"
                          class="w-full h-full object-cover rounded-md border border-gray-300 bg-gray-200"
                        />
                      </div>
                      <h3
                        class="text-lg md:text-xl font-bold text-center text-gray-800 px-2"
                      >
                        {{ photo.title }}
                      </h3>
                    </div>
                  </swiper-slide>
                </swiper>

                <button
                  @click="nextPhotoSlide"
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-10"
                >
                  <i class="fas fa-caret-right text-xl md:text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            <!-- Info Sekolah -->
            <div
              class="bg-white rounded-lg shadow-md p-4 border-2 border-cyan-100"
            >
              <h3 class="text-lg font-bold text-cyan-500 flex justify-between">
                Info Sekolah
                <router-link
                  to="/informasi/info_sekolah"
                  class="text-sm text-cyan-500 hover:underline"
                >
                  Selengkapnya >>
                </router-link>
              </h3>
              <ul class="mt-2 space-y-1 text-sm">
                <li>> PERPUSTAKAAN DIGITAL</li>
                <li>> MARS SMAN 1 KEDUNGREJA</li>
                <li>> Gambar Sarpras SMAN 1 Kedungreja</li>
                <li>> E-Raport</li>
                <li>> LMS SMAN 1 KEDUNGREJA</li>
              </ul>
            </div>

            <!-- Materi Ajar Terbaru -->
            <div
              class="bg-white rounded-lg shadow-md p-4 border-2 border-cyan-100"
            >
              <h3 class="text-lg font-bold text-cyan-500 flex justify-between">
                Materi Ajar Terbaru
                <router-link
                  to="guru/materi_ajar"
                  class="text-sm text-cyan-500 hover:underline"
                >
                  Selengkapnya >>
                </router-link>
              </h3>
              <ul class="mt-2 space-y-1 text-sm">
                <li>> Buku Elektronik Untuk Metode Pembelajaran</li>
                <li>> Sistem Reproduksi</li>
                <li>> Persamaan Kuadrat</li>
                <li>> Karakteristik Banjir Rob dan Strategi Adaptasi</li>
                <li>> Atmosfer Terhadap Dinamika Kehidupan</li>
              </ul>
            </div>

            <!-- Silabus -->
            <div
              class="bg-white rounded-lg shadow-md p-4 border-2 border-cyan-100"
            >
              <h3 class="text-lg font-bold text-cyan-500 flex justify-between">
                Silabus
                <router-link
                  to="guru/silabus"
                  class="text-sm text-cyan-500 hover:underline"
                >
                  Selengkapnya >>
                </router-link>
              </h3>
              <ul class="mt-2 space-y-1 text-sm">
                <li>> B. Inggris - a</li>
                <li>> Biologi - XI</li>
                <li>> Biologi - XII</li>
              </ul>
            </div>

            <!-- Materi Uji Terbaru -->
            <div
              class="bg-white rounded-lg shadow-md p-4 border-2 border-cyan-100"
            >
              <h3 class="text-lg font-bold text-cyan-500 flex justify-between">
                Materi Uji Terbaru
                <router-link
                  to="guru/materi_uji"
                  class="text-sm text-cyan-500 hover:underline"
                >
                  Selengkapnya >>
                </router-link>
              </h3>
              <ul class="mt-2 space-y-1 text-sm">
                <li>> Kumpulan Tugas</li>
                <li>> Latihan TOUN 2020</li>
                <li>> Bahasa Indonesia Kelas XII</li>
                <li>> Soal Latihan 1</li>
                <li>> Soal Ulangan Umum 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>