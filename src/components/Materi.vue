<script setup>
import { ref, computed } from "vue";

// Definisikan props
const props = defineProps({
  materiList: {
    type: Array,
    required: true,
  },
});

// State Pagination
const currentPage = ref(1);
const itemsPerPage = 10;

// Data materi berdasarkan halaman dan pencarian
const paginatedMateriList = computed(() =>
  props.materiList.slice(
    (currentPage.value - 1) * itemsPerPage,
    currentPage.value * itemsPerPage
  )
);

// Hitung jumlah halaman
const totalPages = computed(() =>
  Math.ceil(props.materiList.length / itemsPerPage)
);

// Fungsi Next dan Prev
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>


<template>
  <div class="space-y-4">
    <!-- Loop melalui list materi -->
    <!-- Loop melalui list materi -->
    <div
      v-for="(materi, index) in paginatedMateriList"
      :key="index"
      class="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
    >
      <div class="flex-shrink-0">
        <img src="/materi.png" alt="Materi Icon" class="h-20 w-30" />
      </div>
      <!-- Nama dan Link Materi -->
      <div class="flex flex-col">
        <span class="text-lg font-semibold text-gray-800">{{
          materi.name
        }}</span>
        <a
          :href="materi.link"
          target="_blank"
          class="text-blue-900 hover:underline"
        >
          {{ materi.name }}
        </a>
      </div>
    </div>

    <!-- Navigasi Halaman -->
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
</template>