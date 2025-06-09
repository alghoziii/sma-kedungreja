<script>
import Sidebar from "@/components/Sidebar.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();

    // Ambil data kepala sekolah dari Vuex getter
    const kepalaSekolahDetail = computed(() => store.getters.getProfileContent.kepala_sekolah);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      kepalaSekolahDetail,
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
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Kepala Sekolah</h2>

        <!-- Gambar Kepala Sekolah -->
        <div class="flex justify-center mb-6">
          <img
            src="/kepala.jpg"
            alt="Foto Kepala Sekolah"
            class="w-48 h-64 object-cover border border-gray-300 rounded-md"
          />
        </div>

        <!-- Tabel Data Kepala Sekolah -->
        <table class="table-auto w-full border-collapse border border-gray-400">
          <tbody>
            <tr v-for="(value, key, index) in kepalaSekolahDetail" :key="index">
              <td class="border border-gray-400 p-2 font-medium text-center">
                {{ index + 1 }}
              </td>
              <td class="border border-gray-400 p-2 font-medium">
                {{ key }}
              </td>
              <td class="border border-gray-400 p-2">
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

