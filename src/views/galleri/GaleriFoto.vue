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

    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    // Ambil data album dari store
    const albums = computed(() => store.getters.getAlbums);

    const goToAlbumDetail = (id) => {
      router.push({ name: "galeri_foto_detail", params: { id } });
    };

    return {
      stats,
      albums,
      goToAlbumDetail,
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
        <h1 class="text-3xl font-bold text-blue-900 mb-6">Galeri Foto</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="album in albums"
            :key="album.id"
            class="text-center cursor-pointer border border-blue-900 rounded-md p-4 hover:shadow-lg"
            @click="goToAlbumDetail(album.id)"
          >
            <div class="h-40 flex items-center justify-center rounded-md">
              <img
                :src="album.photos[0]"
                alt="Album Thumbnail"
                class="object-cover h-full w-48 rounded-md"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mt-4">
              {{ album.title }}
            </h3>
            <p class="text-sm text-gray-600">{{ album.photoCount }} Foto</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>