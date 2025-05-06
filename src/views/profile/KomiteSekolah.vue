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

    // Ambil data komite sekolah dari Vuex getter
    const komiteSekolah = computed(() => store.getters.getKomiteSekolah);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      komiteSekolah,
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
          {{ komiteSekolah.title }}
        </h2>
        <!-- Tabel Data Komite Sekolah -->
        <table class="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th class="border border-gray-400 px-4 py-2 text-left">No</th>
              <th class="border border-gray-400 px-4 py-2 text-left">Nama</th>
              <th class="border border-gray-400 px-4 py-2 text-left">
                Jabatan Dalam Dinas
              </th>
              <th class="border border-gray-400 px-4 py-2 text-left">
                Jabatan Dalam Pengurus
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in komiteSekolah.data"
              :key="index"
              class="hover:bg-gray-100"
            >
              <td class="border border-gray-400 px-4 py-2">{{ item.no }}</td>
              <td class="border border-gray-400 px-4 py-2">{{ item.nama }}</td>
              <td class="border border-gray-400 px-4 py-2">
                {{ item.jabatanDinas }}
              </td>
              <td class="border border-gray-400 px-4 py-2">
                {{ item.jabatanPengurus }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
