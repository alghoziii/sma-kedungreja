<script>
import Sidebar from "@/components/Sidebar.vue";
import Materi from "@/components/Materi.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Sidebar,
    Materi,
  },
  setup() {
    const store = useStore();

    // Ambil data materi dari store
    const materiList = computed(() => store.getters.getMateriAjar);

    // State untuk dropdown kelas dan pencarian
    const selectedClass = ref("XII IPA I");
    const searchQuery = ref("");

    // Filter data materi berdasarkan pencarian
    const filteredMateri = computed(() => {
      return materiList.value.filter((materi) =>
        materi.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      selectedClass,
      searchQuery,
      filteredMateri,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar -->
      <Sidebar :stats="stats" />

      <!-- Konten Materi -->
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-600 mb-6">Materi Ajar</h1>

        <!-- Dropdown Kelas dan Pencarian -->
        <div class="flex items-center justify-between mb-4">
          <!-- Dropdown Kelas -->
          <div class="flex items-center gap-2">
            <label for="kelas" class="text-lg font-semibold text-black"
              >Kelas</label
            >
            <select
              id="kelas"
              v-model="selectedClass"
              class="border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring-sky-500 focus:border-sky-500"
            >
              <option value="XII IPA I">XII IPA I</option>
              <option value="XII IPA II">XII IPA II</option>
              <option value="XII IPS I">XII IPS I</option>
              <option value="XII IPS II">XII IPS II</option>
            </select>
          </div>

          <!-- Pencarian Mapel -->
          <div
            class="flex items-center border border-gray-300 rounded overflow-hidden"
          >
            <input
              type="text"
              placeholder="Cari Mapel"
              v-model="searchQuery"
              class="px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button class="px-4 text-black hover:text-sky-500">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- Komponen Materi -->
        <Materi :materiList="filteredMateri" />
      </div>
    </div>
  </div>
</template>