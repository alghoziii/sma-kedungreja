<script>
import { computed } from "vue";
import { useStore } from "vuex"; // Pastikan useStore diimpor
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore(); // Inisialisasi store Vuex

    // Ambil data berita dari Vuex store
    const berita = computed(() => store.getters.getBerita);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      berita, // Pastikan berita dikembalikan di return
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar -->
      <Sidebar :stats="stats" />

      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-900 mb-6">Berita</h1>

        <!-- Daftar Berita -->
        <div class="space-y-4">
          <div
            v-for="(item, index) in berita"
            :key="index"
            class="flex items-center gap-4 bg-gray-100 p-4 rounded shadow-sm"
          >
            <!-- Ikon Berita -->
            <img
              :src="item.icon"
              alt="Berita Icon"
              class="w-60 h-40 object-cover rounded"
            />

            <!-- Informasi Berita -->
            <div>
              <h3 class="text-lg font-semibold text-black">{{ item.title }}</h3>
              <p class="text-sm text-gray-700">{{ item.description }}</p>
              <p class="text-sm text-gray-500">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>