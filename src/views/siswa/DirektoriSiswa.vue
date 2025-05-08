<script>
import Sidebar from "@/components/Sidebar.vue";
import CardFoto from "@/components/CardFoto.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Sidebar,
    CardFoto,
  },
  setup() {
    const store = useStore();
    const currentPage = ref(1);
    const itemsPerPage = 16;
    const searchQuery = ref("");
    const selectedCategory = ref("IPA");

    // Ambil data direktori dari Vuex getter
    const direktoriSiswa = computed(() => store.getters.getDirektoriSiswa);

    const filteredDirektori = computed(() => {
      const filtered = direktoriSiswa.value.filter(
        (item) =>
          item.category === selectedCategory.value &&
          item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
      const start = (currentPage.value - 1) * itemsPerPage;
      return filtered.slice(start, start + itemsPerPage);
    });

    const totalPages = computed(() =>
      Math.ceil(
        direktoriSiswa.value.filter(
          (item) =>
            item.category === selectedCategory.value &&
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        ).length / itemsPerPage
      )
    );

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    return {
      currentPage,
      itemsPerPage,
      searchQuery,
      selectedCategory,
      filteredDirektori,
      totalPages,
      prevPage,
      nextPage,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar - hidden on mobile -->
      <Sidebar class="hidden md:block" />

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Direktori Siswa</h2>

        <!-- Pencarian dan Dropdown - stacked on mobile -->
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
        >
          <select
            class="w-full sm:w-auto border border-gray-300 rounded px-4 py-2"
            v-model="selectedCategory"
          >
            <option value="IPA">IPA</option>
            <option value="IPS">IPS</option>
          </select>
          <div
            class="flex items-center border border-gray-300 rounded w-full sm:w-auto"
          >
            <input
              type="text"
              :placeholder="'Cari Siswa ' + selectedCategory"
              class="w-full px-4 py-2 focus:outline-none"
              v-model="searchQuery"
            />
            <button class="px-4 text-black">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- Grid Card - responsive columns -->
        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <CardFoto
            v-for="(item, index) in filteredDirektori"
            :key="index"
            :image="item.image"
            :name="item.name"
            :details="item.details"
            :to="{
              name: 'direktori_siswa_detail',
              params: { id: item.id },
            }"
          />
        </div>

        <!-- Pagination - responsive -->
        <div class="flex flex-wrap justify-center mt-6 gap-2">
          <button
            class="px-3 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 disabled:bg-gray-300"
            @click="prevPage"
            :disabled="currentPage === 1"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            v-for="page in paginationRange"
            :key="page"
            class="px-3 py-2 border border-gray-300 rounded"
            :class="currentPage === page ? 'bg-sky-500 text-white' : ''"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          <button
            class="px-3 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 disabled:bg-gray-300"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>