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

    // Ambil data peta situs dari Vuex getter
    const petaSitus = computed(() => store.getters.getPetaSitus);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      petaSitus,
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
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Peta Situs Utama</h2>

        <!-- Peta Situs -->
        <div class="space-y-6 m-2">
          <div v-for="(category, index) in petaSitus" :key="index">
            <!-- Kategori -->
            <h3 class="text-lg font-semibold text-black">
              {{ category.category }}
            </h3>
            <!-- Daftar Item -->
            <ol class="list-decimal list-inside text-gray-700 ms-4">
              <li v-for="(item, idx) in category.items" :key="idx">
                <a
                  :href="item.link"
                  class="text-blue-900 hover:underline"
                  target="_blank"
                  >{{ item.title }}</a
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>