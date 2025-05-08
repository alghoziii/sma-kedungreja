<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    // Ambil ID album dari parameter rute
    const albumId = parseInt(route.params.id, 10);

    // Ambil data album dari store berdasarkan ID
    const album = computed(() => store.getters.getAlbumById(albumId));

    const goBack = () => {
      router.push({ name: "galeri_foto" });
    };

    return {
      stats,
      album,
      goBack,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar -->
      <Sidebar :stats="stats" />

      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-900 mb-6">{{ album?.title }}</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <img
            v-for="photo in album?.photos"
            :key="photo"
            :src="photo"
            alt="Photo"
            class="object-cover h-48 w-full rounded-md shadow-md"
          />
        </div>
        <div class="flex justify-center mt-6">
          <button
            @click="goBack"
            class="bg-blue-900 text-white px-4 py-2 rounded"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  </div>
</template>