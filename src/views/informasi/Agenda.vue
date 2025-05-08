<script>
import Sidebar from "@/components/Sidebar.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();

    // Ambil data agenda dari Vuex store
    const allAgendas = computed(() => store.getters.getAgenda);

    // Filter bulan dan tahun
    const selectedMonth = ref("April");
    const selectedYear = ref(2019);

    // Filter agenda berdasarkan bulan dan tahun
    const filteredAgenda = computed(() => {
      return allAgendas.value.filter(
        (agenda) =>
          agenda.month === selectedMonth.value &&
          agenda.year === parseInt(selectedYear.value)
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
      selectedMonth,
      selectedYear,
      filteredAgenda,
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
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Agenda</h2>

        <!-- Filter Bulan dan Tahun -->
        <div class="flex flex-col gap-4 mb-6">
          <!-- Pilihan Bulan -->
          <div class="flex items-center gap-4">
            <label for="bulan" class="text-sm font-medium text-gray-700">
              Bulan
            </label>
            <select
              id="bulan"
              v-model="selectedMonth"
              class="border-gray-300 rounded shadow-sm border-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-1"
            >
              <option value="April">April</option>
              <option value="Mei">Mei</option>
              <option value="Juni">Juni</option>
              <!-- Tambahkan bulan lainnya jika diperlukan -->
            </select>
          </div>

          <!-- Pilihan Tahun -->
          <div class="flex items-center gap-3">
            <label for="tahun" class="text-sm font-medium text-gray-700 mb-2">
              Tahun
            </label>
            <select
              id="tahun"
              v-model="selectedYear"
              class="border-gray-300 rounded shadow-sm border-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-1"
            >
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <!-- Tambahkan tahun lainnya jika diperlukan -->
            </select>
          </div>
        </div>

        <!-- Daftar Agenda -->
        <div class="space-y-4">
          <div
            v-for="(agenda, index) in filteredAgenda"
            :key="index"
            class="flex items-center gap-4 bg-gray-100 p-4 rounded shadow-sm"
          >
            <!-- Ikon Agenda -->
            <img :src="agenda.icon" alt="Agenda Icon" class="w-16 h-16" />

            <!-- Informasi Agenda -->
            <div>
              <h3 class="text-lg font-semibold text-black">
                {{ agenda.title }}
              </h3>
              <p class="text-sm text-gray-700">{{ agenda.description }}</p>
              <p class="text-sm text-gray-500">{{ agenda.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>