<template>
  <div>
    <!-- Background Image -->
    <div>
      <img src="/bg.png" class="" />
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
    <div
      class="mx-auto px-6 py-24 flex flex-col md:flex-row items-start bg-dark-900 rounded-lg shadow-md"
    >
      <div class="w-full mb-8 md:mb-0">
        <h1 class="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Berita Terbaru
        </h1>

        <div class="flex flex-wrap md:flex-nowrap gap-6">
          <NewsCard
            v-for="item in newsItems.slice(0, 4)"
            :key="item.id"
            :news="item"
            class="w-full md:w-1/4"
          />
        </div>

        <div class="mt-8 text-center">
          <button
            class="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Lihat Berita Lainnya
          </button>
        </div>
      </div>
    </div>

    <!-- Sidebar and Content -->
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Sidebar -->
        <Sidebar :stats="stats" />

        <!-- Right Content -->
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
                    class="text-xs"
                  >
                    https://sites.google.com/guru.sma.belajar.id/biologisman1kdr
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Video Gallery -->
          <div class="mb-12">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-3xl font-bold text-cyan-500">
                Galeri Video Terbaru
              </h2>
            </div>

            <div class="bg-gray-100 p-6 rounded-lg">
              <div
                class="flex items-center justify-center gap-4 max-w-4xl mx-auto"
              >
                <button
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex-shrink-0"
                >
                  <i class="fas fa-chevron-left text-2xl"></i>
                </button>

                <div class="flex-grow max-w-2xl">
                  <div
                    class="border-2 border-gray-800 rounded-lg overflow-hidden aspect-video mb-4"
                  >
                    <iframe
                      class="w-full h-full"
                      src="https://www.youtube.com/embed/1La4QzGeaaQ"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <h3 class="text-xl font-bold text-center mt-4 text-gray-800">
                    Uji Coba SPMB PROV Jateng
                  </h3>
                </div>

                <button
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex-shrink-0"
                >
                  <i class="fas fa-chevron-right text-2xl"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Galeri Video Terbaru Section -->
          <div class="mb-12">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-3xl font-bold text-cyan-500">
                Galeri Foto Terbaru
              </h2>
            </div>

            <div class="bg-gray-100 p-6 rounded-lg">
              <!-- Video Container with Navigation -->
              <div
                class="flex items-center justify-center gap-4 max-w-4xl mx-auto"
              >
                <!-- Left Navigation Arrow -->
                <button
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex-shrink-0"
                >
                  <i class="fas fa-chevron-left text-2xl"></i>
                </button>

                <!-- Video Content Container -->
                <div class="flex-grow max-w-2xl">
                  <!-- Video Frame -->
                  <div
                    class="border-2 border-gray-800 rounded-lg overflow-hidden aspect-video mb-4"
                  >
                    <img
                      src="/public/artikel 1.jpg"
                      alt="Perpustakaan Digital"
                      class="w-full h-full object-cover rounded-md border-2 border-gray-300 bg-gray-200"
                    />
                  </div>

                  <!-- Video Title -->
                  <h3 class="text-xl font-bold text-center mt-4 text-gray-800">
                    Uji Coba SPMB PROV Jateng
                  </h3>
                </div>

                <!-- Right Navigation Arrow -->
                <button
                  class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex-shrink-0"
                >
                  <i class="fas fa-chevron-right text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewsCard from "@/components/NewsCard.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    NewsCard,
    Sidebar,
  },
  computed: {
    ...mapGetters(["getSchoolInfo", "getNews"]),
    schoolInfo() {
      return this.getSchoolInfo;
    },
    newsItems() {
      return this.getNews;
    },
  },
};
</script>