<template>
  <div>
    <img src="/bg.png" class="w-full h-auto object-contain" />
  </div>

  <!-- Hero Section -->
  <div
    class="mx-auto px-6 py-24 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md"
  >
    <!-- Teks Sambutan -->
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

    <!-- Logo -->
    <div class="md:w-1/2 flex justify-center">
      <div class="bg-white p-4 rounded-lg shadow-lg">
        <img src="/logo.png" alt="Logo Sekolah" class="w-64 h-auto" />
      </div>
    </div>
  </div>

  <div
    class="mx-auto px-6 py-24 flex flex-col md:flex-row items-start bg-dark-900 rounded-lg shadow-md"
  >
    <div class="w-full mb-8 md:mb-0 ms-12">
      <h1 class="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
        Berita Terbaru
      </h1>

      <!-- Flex Container Berita -->
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

  <!-- Main Content with Sidebar Layout -->
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Left Sidebar -->
      <div class="w-full md:w-1/4">
        <!-- School Info Box -->
        <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <div class="flex flex-col items-center text-center">
            <img src="/logo.png" alt="Logo Sekolah" class="w-32 h-auto mb-4" />
            <h2 class="font-bold text-lg uppercase">SEKOLAH MENENGAH ATAS</h2>
            <h2 class="font-bold text-lg uppercase">NEGERI 1 KEDUNGREJA</h2>
            <p class="text-sm mt-2">NPSN: 20300733</p>
            <p class="text-sm mt-1">
              Jalan Raya Tambaksari Tp 212 Kedungreja Cilacap
            </p>
            <p class="text-sm">info@sman1kedungreja.sch.id</p>
            <p class="text-sm">02805260258</p>
          </div>
        </div>

        <!-- <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <h3 class="font-bold mb-2">Banner</h3>
          <div
            class="border border-gray-300 h-16 flex items-center justify-center"
          >
           
          </div>
        </div> -->

        <!-- Jejak Pendapat -->
        <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <h3 class="font-bold mb-2">Jejak Pendapat</h3>
          <div class="bg-gray-100 p-3 rounded">
            <p class="text-sm mb-2">
              Bagaimana pendapat anda mengenai web sekolah kami?
            </p>
            <div class="space-y-1">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="sangat-bagus"
                  name="pendapat"
                  class="mr-2"
                />
                <label for="sangat-bagus" class="text-sm">Sangat Bagus</label>
              </div>
              <div class="flex items-center">
                <input type="radio" id="bagus" name="pendapat" class="mr-2" />
                <label for="bagus" class="text-sm">Bagus</label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="kurang-bagus"
                  name="pendapat"
                  class="mr-2"
                />
                <label for="kurang-bagus" class="text-sm">Kurang Bagus</label>
              </div>
            </div>
            <div class="mt-2 flex space-x-2">
              <button class="bg-cyan-500 text-white px-2 py-1 text-xs rounded">
                Pilih
              </button>
              <button class="bg-cyan-500 text-white px-2 py-1 text-xs rounded">
                Lihat
              </button>
            </div>
          </div>
        </div>

        <!-- Statistik -->
        <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <h3 class="font-bold mb-2">Statistik</h3>
          <div class="bg-gray-100 p-3 rounded">
            <table class="w-full text-sm">
              <tbody>
                <tr>
                  <td class="py-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    Total Hits
                  </td>
                  <td class="py-1 text-right w-4">:</td>
                  <td class="py-1 text-right w-1/5">424626</td>
                </tr>
                <tr>
                  <td class="py-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                      />
                    </svg>
                    Pengunjung
                  </td>
                  <td class="py-1 text-right w-6">:</td>
                  <td class="py-1 text-right">145889</td>
                </tr>
                <tr>
                  <td class="py-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Hari ini
                  </td>
                  <td class="py-1 text-right w-6">:</td>
                  <td class="py-1 text-right">57</td>
                </tr>
                <tr>
                  <td class="py-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Hits hari ini
                  </td>
                  <td class="py-1 text-right w-6">:</td>
                  <td class="py-1 text-right">132</td>
                </tr>
                <tr>
                  <td class="py-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Member Online
                  </td>
                  <td class="py-1 text-right w-6">:</td>
                  <td class="py-1 text-right">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Status Member -->
        <!-- <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <h3 class="font-bold mb-2">Status Member</h3>
          <div class="flex items-start">
            <div class="w-16 h-16 bg-gray-200 mr-2"></div>
            <div>
              <p class="font-bold">TARWAN (Admin)</p>
              <p class="text-xs">2020-03-16 23:32:59</p>
              <p class="text-xs italic">Smarker Jaya...</p>
            </div>
          </div>
        </div> -->

        <!-- Agenda (Calendar) -->

        <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <h3 class="font-bold mb-2">Agenda</h3>
          <div class="flex justify-center">
            <div style="width: fit-content">
              <VueDatePicker
                v-model="date"
                inline
                auto-apply
                :enable-time-picker="true"
                :format="'dd-MM-yyyy'"
                :locale="'id'"
                :week-start="1"
                :min-date="minDate"
                :max-date="maxDate"
                :disabled-dates="disabledDates"
                @update:model-value="handleDateChange"
              />
            </div>
          </div>
        </div>

        <!-- Staff Profile -->
        <div
          class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
        >
          <h3 class="font-bold mb-3 text-center">Photo Staff</h3>

          <div class="flex items-center justify-center mb-4">
            <!-- Left arrow button -->
            <button
              class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-2 rounded-full shadow-lg transition-all m-4"
            >
              <i class="fas fa-chevron-left"></i>
            </button>

            <!-- Staff photo -->
            <div class="w-40 h-44 overflow-hidden border border-gray-900">
              <img
                src="/public/kepala.jpg"
                alt="Staff Photo"
                class="w-full h-full object-cover rounded-md"
              />
            </div>

            <!-- Right arrow button -->

            <button
              class="bg-blue-900 hover:bg-white text-white hover:text-gray-800 p-2 rounded-full shadow-lg transition-all m-4"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <div class="text-center">
            <div class="border-t border-gray-200 pt-3">
              <p class="font-bold text-cyan-600">Kepala Sekola</p>
              <p class="text-sm text-gray-700">Mas Anis</p>
            </div>
          </div>
        </div>
      </div>

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

        <!-- Artikel Terbaru Section -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-bold text-cyan-500">Artikel Terbaru</h2>
          </div>

          <!-- Perpustakaan Digital -->
          <div class="bg-gray-100 p-4 rounded-lg mb-2">
            <div class="flex items-center space-x-4">
              <!-- Gambar -->
              <img
                src="/public/artikel 1.jpg"
                alt="Perpustakaan Digital"
                class="w-24 h-20 object-cover rounded-md border-2 border-gray-300 bg-gray-200"
              />
              <!-- Teks -->
              <div>
                <h3 class="font-bold">Perpustakaan Digital</h3>
                <p class="text-sm">Perpustakaan Digital</p>
              </div>
            </div>
          </div>
          <!-- Perpustakaan Digital -->
          <div class="bg-gray-100 p-4 rounded-lg mb-2">
            <div class="flex items-center space-x-4">
              <!-- Gambar -->
              <img
                src="/public/artikel2.jpg"
                alt="Perpustakaan Digital"
                class="w-24 h-20 object-cover rounded-md border-2 border-gray-300 bg-gray-200"
              />
              <!-- Teks -->
              <div>
                <h3 class="font-bold">LMS SMAN 1 Kedungreja</h3>
                <p class="text-sm">LMS SMAN 1 Kedungreja</p>
              </div>
            </div>
          </div>

          <!-- Webnya Biologi -->
          <div class="bg-gray-100 p-4 rounded-lg mb-2">
            <div class="flex items-center space-x-4">
              <!-- Gambar -->
              <img
                src="/public/artikel3.png"
                alt="Perpustakaan Digital"
                class="w-24 h-20 object-cover rounded-md border-2 border-gray-300 bg-gray-200"
              />
              <!-- Teks -->
              <div>
                <h3 class="font-bold">Webnya Biologi SMAN 1 Kedungreja</h3>
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

        <!-- Galeri Video Terbaru Section -->
        <div class="mb-12">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-bold text-cyan-500">
              Galeri Video Terbaru
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
                  <iframe
                    class="w-full h-full"
                    src="https://www.youtube.com/embed/1La4QzGeaaQ"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
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
</template>

<script>
import { mapGetters } from "vuex";
import NewsCard from "@/components/NewsCard.vue";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    NewsCard,
    VueDatePicker,
  },
  data() {
    return {
      stats: {
        hariIni: 57,
        hitsHariIni: 132,
        memberOnline: 2,
      },
      date: ref(new Date()),
      minDate: ref(new Date(2023, 0, 1)),
      maxDate: ref(new Date(2025, 11, 31)),
      disabledDates: ref([new Date(2024, 0, 1), new Date()]),
    };
  },
  methods: {
    handleDateChange(selectedDate) {
      console.log("Tanggal dipilih:", selectedDate);
    },
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