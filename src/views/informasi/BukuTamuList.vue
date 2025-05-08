<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const bukuTamu = computed(() => store.getters.getBukuTamu);

    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    const kembali = () => {
      router.push("buku_tamu");
    };

    return {
      stats,
      bukuTamu,
      kembali,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <Sidebar :stats="stats" />
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-900 mb-6">Buku Tamu</h1>
        <table class="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2">No</th>
              <th class="border border-gray-300 px-4 py-2">Pengirim</th>
              <th class="border border-gray-300 px-4 py-2">Komentar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tamu, index) in bukuTamu" :key="index">
              <td class="border border-gray-300 px-4 py-2 text-center">
                {{ index + 1 }}
              </td>
              <td class="border border-gray-300 px-4 py-2">{{ tamu.nama }}</td>
              <td class="border border-gray-300 px-4 py-2">
                {{ tamu.komentar }}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          @click="kembali"
          class="bg-blue-900 text-white px-4 py-2 rounded mt-6"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>