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

    // Ambil data video dari store
    const videos = computed(() => store.getters.getVideos);

    const goToVideoDetail = (id) => {
      router.push(`video_detail/${id}`);
    };

    return {
      stats,
      videos,
      goToVideoDetail,
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
        <h1 class="text-3xl font-bold text-blue-900 mb-6">Galleri Video</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="video in videos"
            :key="video.id"
            class="text-center cursor-pointer"
            @click="goToVideoDetail(video.id)"
          >
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-50 object-cover rounded-md"
            />
            <h3 class="text-lg font-semibold text-gray-900 mt-2">
              {{ video.title }}
            </h3>
            <p class="text-sm text-gray-600">{{ video.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>