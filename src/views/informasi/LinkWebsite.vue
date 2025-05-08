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

    // Ambil data link website dari Vuex getter
    const linkWebsites = computed(() => store.getters.getLinkWebsites);

    // Data untuk sidebar
    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    return {
      stats,
      linkWebsites,
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
        <h2 class="text-3xl font-bold text-blue-900 mb-6">Link Web</h2>

        <!-- Kategori Link Web -->
        <div class="ms-12 text-blue-900 text-lg mb-6">
          | <a href="#" class="hover:underline">Pemerintah</a> |
          <a href="#" class="hover:underline">Organisasi</a> |
          <a href="#" class="hover:underline">Tutorial</a> |
          <a href="#" class="hover:underline">Project</a> |
          <a href="#" class="hover:underline">Sekolah</a> |
          <a href="#" class="hover:underline">Umum</a> |
          <a href="#" class="hover:underline">Universitas</a> |
        </div>

        <!-- Daftar Link Website -->
        <div class="space-y-4">
          <div
            v-for="(link, index) in linkWebsites"
            :key="index"
            class="flex items-center gap-4 bg-gray-100 p-4 rounded shadow-sm hover:shadow-md"
          >
            <!-- Ikon Website -->
            <img src="/web.png" alt="Web Icon" class="w-20 h-20" />
            <!-- Detail Website -->
            <div>
              <p class="font-bold text-black">{{ link.title }}</p>
              <a
                :href="link.url"
                target="_blank"
                class="text-blue-600 hover:underline text-sm"
                >{{ link.url }}</a
              >
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-sm text-center text-gray-600">
          <p>
            Bergabung lah bersama kami,<br />
            Kirim alamat website anda ke email :
            <a
              href="mailto:info@sman1kedungreja.sch.id"
              class="text-blue-900 hover:underline"
              >info@sman1kedungreja.sch.id</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>