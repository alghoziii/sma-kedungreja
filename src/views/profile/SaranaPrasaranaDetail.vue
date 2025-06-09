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

    // Ambil data dari Vuex

    const saranaPrasarana = computed(() => store.getters.getProfileContent.saranaPrasaranaContent.sarana_prasarana);
    const dataPtkPd = computed(() => store.getters.getProfileContent.saranaPrasaranaContent.data_ptk_pd);
    const dataSarpras = computed(() => store.getters.getProfileContent.saranaPrasaranaContent.data_sarpras);
    const dataRombel = computed(() => store.getters.getProfileContent.saranaPrasaranaContent.data_rombel);
    const daftarRuang = computed(() => store.getters.getProfileContent.saranaPrasaranaContent.daftar_ruang);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      saranaPrasarana,
      dataPtkPd,
      dataSarpras,
      dataRombel,
      daftarRuang,
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
        <!-- Sarana & Prasarana -->
        <h2 class="text-3xl font-bold text-blue-900 mb-6">
          Sarana & Prasarana
        </h2>
        <div class="space-y-4">
          <div
            v-for="(value, key) in saranaPrasarana"
            :key="key"
            class="flex justify-between pb-2"
          >
            <span class="font-medium text-gray-800 w-1/3">{{ key }}</span>
            <span class="text-gray-700 w-2/3">: {{ value }}</span>
          </div>
        </div>

        <!-- Data PTK dan PD -->
        <h2 class="text-3xl font-bold text-blue-900 mt-12 mb-6">
          Data PTK dan PD
        </h2>
        <table
          class="table-auto w-full border-collapse border border-gray-400 mb-4"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-400 p-2">Uraian</th>
              <th class="border border-gray-400 p-2">Laki-laki</th>
              <th class="border border-gray-400 p-2">Perempuan</th>
              <th class="border border-gray-400 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataPtkPd" :key="item.uraian">
              <td class="border border-gray-400 p-2">{{ item.uraian }}</td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.laki_laki }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.perempuan }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.total }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Data Sarpras -->
        <h2 class="text-3xl font-bold text-blue-900 mt-12 mb-6">
          Data Sarpras
        </h2>
        <table
          class="table-auto w-full border-collapse border border-gray-400 mb-4"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-400 p-2">Uraian</th>
              <th class="border border-gray-400 p-2">Ruang Kelas</th>
              <th class="border border-gray-400 p-2">Ruang Lab</th>
              <th class="border border-gray-400 p-2">Ruang Perpus</th>
              <th class="border border-gray-400 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataSarpras" :key="item.uraian">
              <td class="border border-gray-400 p-2">{{ item.uraian }}</td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.ruang_kelas }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.ruang_lab }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.ruang_perpus }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.total }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Data Rombel -->
        <h2 class="text-3xl font-bold text-blue-900 mt-12 mb-6">Data Rombel</h2>
        <p class="text-gray-700 mb-4">
          SMA NEGERI 1 KEDUNGREJA memiliki jumlah rombel sebanyak 19, dengan
          uraian sebagai berikut:
        </p>
        <table
          class="table-auto w-full border-collapse border border-gray-400 mb-4"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-400 p-2">Uraian</th>
              <th class="border border-gray-400 p-2">Kelas 10</th>
              <th class="border border-gray-400 p-2">Kelas 11</th>
              <th class="border border-gray-400 p-2">Kelas 12</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataRombel" :key="item.uraian">
              <td class="border border-gray-400 p-2">{{ item.uraian }}</td>
              <td class="border border-gray-400 p-2 text-center">
                L: {{ item.kelas_10.laki_laki }}, P:
                {{ item.kelas_10.perempuan }}, Tot: {{ item.kelas_10.total }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                L: {{ item.kelas_11.laki_laki }}, P:
                {{ item.kelas_11.perempuan }}, Tot: {{ item.kelas_11.total }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                L: {{ item.kelas_12.laki_laki }}, P:
                {{ item.kelas_12.perempuan }}, Tot: {{ item.kelas_12.total }}
              </td>
            </tr>
          </tbody>
        </table>

        <h2 class="text-3xl font-bold text-blue-900 mt-12 mb-6">
          Daftar Ruang
        </h2>
        <table class="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-400 p-2">No</th>
              <th class="border border-gray-400 p-2">Ruang Kelas</th>
              <th class="border border-gray-400 p-2">JML</th>
              <th class="border border-gray-400 p-2">Luas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in daftarRuang" :key="item.no">
              <td class="border border-gray-400 p-2 text-center">
                {{ item.no }}
              </td>
              <td class="border border-gray-400 p-2">{{ item.nama }}</td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.jumlah }}
              </td>
              <td class="border border-gray-400 p-2 text-center">
                {{ item.luas }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

