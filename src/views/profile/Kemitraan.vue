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

    // Ambil data kemitraan dari Vuex getter
    const kemitraan = computed(() => store.getters.getKemitraan);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      kemitraan,
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
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Kemitraan</h2>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-black mb-4">
            Jenjang Kerjasama Dalam Kemitraan
          </h3>
          <p class="text-gray-700 mb-4">{{ kemitraan.deskripsi }}</p>
          <ol class="list-decimal list-inside text-gray-800 space-y-2 m-8">
            <li v-for="(item, index) in kemitraan.jenjang" :key="index">
              <span class="font-semibold">{{ item.judul }}</span>
              {{ item.deskripsi }}
            </li>
          </ol>
        </div>

        <div>
          <h3 class="text-2xl font-semibold text-blue-800 mb-4">
            Implementasi Kemitraan Dalam Pembangunan
          </h3>
          <p class="text-gray-700 mb-4">{{ kemitraan.header }}</p>
          <ul class="list-disc list-inside text-gray-800 space-y-2 m-8">
            <li v-for="(item, index) in kemitraan.implementasi" :key="index">
              <span class="font-semibold">{{ item.judul }}</span>
              {{ item.deskripsi }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



