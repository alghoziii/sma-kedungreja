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
    const selectedCategory = ref("Guru");

    // Ambil data direktori dari Vuex getter
    const direktoriGuru = computed(() => store.getters.getDirektoriGuru);

    const filteredDirektori = computed(() => {
      const filtered = direktoriGuru.value.filter(
        (item) =>
          item.category === selectedCategory.value &&
          item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
      const start = (currentPage.value - 1) * itemsPerPage;
      return filtered.slice(start, start + itemsPerPage);
    });

    const totalPages = computed(() =>
      Math.ceil(
        direktoriGuru.value.filter(
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
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <h2 class="text-3xl font-bold text-blue-900 mb-6">
          Direktori Guru & TU
        </h2>

        <!-- Pencarian dan Dropdown -->
        <div class="flex items-center justify-between mb-4">
          <select
            class="border border-gray-300 rounded px-4 py-2"
            v-model="selectedCategory"
          >
            <option value="Guru">Guru</option>
            <option value="TU">TU</option>
          </select>
          <div class="flex items-center border border-gray-300 rounded">
            <input
              type="text"
              placeholder="Cari Nama"
              class="px-4 py-2 focus:outline-none"
              v-model="searchQuery"
            />
            <button class="px-4 text-black">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- Grid Card -->
        <div class="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          <CardFoto
            v-for="(item, index) in filteredDirektori"
            :key="index"
            :image="item.image"
            :name="item.name"
            :details="item.details"
            :to="{
              name: 'direktori_guru_detail',
              params: { id: item.id }, // Pastikan id dikirim
            }"
          />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-6 gap-2">
          <button
            class="px-3 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            @click="prevPage"
            :disabled="currentPage === 1"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            class="px-3 py-2 border border-gray-300 rounded"
            :class="currentPage === page ? 'bg-sky-500 text-white' : ''"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          <button
            class="px-3 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
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