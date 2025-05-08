<script>
import Sidebar from "@/components/Sidebar.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();

    // Ambil data daftar blog dari Vuex getter
    const daftar_blog = computed(() => store.getters.getDaftarBlog);

    // State untuk filter status dan pencarian nama
    const selectedStatus = ref("Semua");
    const searchQuery = ref("");

    // Tentukan status (Alumni atau Anggota) untuk setiap item
    const blogWithStatus = computed(() => {
      const currentYear = new Date().getFullYear(); // Tahun sekarang
      return daftar_blog.value.data.map((item) => {
        const status =
          parseInt(item.kelas) < currentYear ? "Alumni" : "Anggota";
        return { ...item, status };
      });
    });

    // Filter data berdasarkan status dan pencarian
    const filteredBlog = computed(() => {
      return blogWithStatus.value.filter(
        (item) =>
          (selectedStatus.value === "Semua" ||
            item.status === selectedStatus.value) &&
          item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
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
      daftar_blog,
      selectedStatus,
      searchQuery,
      filteredBlog,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar -->
      <Sidebar :stats="stats" />

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <h2 class="text-3xl font-bold text-blue-900 mb-6">
          {{ daftar_blog.title }}
        </h2>

        <!-- Dropdown Pilih Status dan Pencarian -->
        <div class="flex items-center justify-between mb-4">
          <!-- Dropdown Pilih Status -->
          <div class="flex items-center gap-2">
            <label for="status" class="text-lg font-semibold text-black"
              >Pilih Status</label
            >
            <select
              id="status"
              v-model="selectedStatus"
              class="border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring-sky-500 focus:border-sky-500"
            >
              <option value="Semua">Semua</option>
              <option value="Alumni">Alumni</option>
              <option value="Anggota">Anggota</option>
            </select>
          </div>

          <!-- Pencarian Cari Nama -->
          <div
            class="flex items-center border border-gray-300 rounded overflow-hidden"
          >
            <input
              type="text"
              placeholder="Cari Nama"
              v-model="searchQuery"
              class="px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button class="px-4 text-black hover:text-sky-500">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- Tabel Data Komite Sekolah -->
        <table class="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th class="border border-gray-400 px-4 py-2 text-left">No</th>
              <th class="border border-gray-400 px-4 py-2 text-left">Nama</th>
              <th class="border border-gray-400 px-4 py-2 text-left">Kelas</th>
              <th class="border border-gray-400 px-4 py-2 text-left">Ketua</th>
              <th class="border border-gray-400 px-4 py-2 text-left">Hits</th>
              <th class="border border-gray-400 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in filteredBlog"
              :key="index"
              class="hover:bg-gray-100"
            >
              <td class="border border-gray-400 px-4 py-2">{{ item.no }}</td>
              <td class="border border-gray-400 px-4 py-2">{{ item.nama }}</td>
              <td class="border border-gray-400 px-4 py-2">{{ item.kelas }}</td>
              <td class="border border-gray-400 px-4 py-2">{{ item.ketua }}</td>
              <td class="border border-gray-400 px-4 py-2">{{ item.hits }}</td>
              <td class="border border-gray-400 px-4 py-2">
                {{ item.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>