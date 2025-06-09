<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const slides = computed(() => store.getters.getSlides);
    const berita = computed(() => store.getters.getBerita || []);
    const sambutan = computed(() => store.getters.getSambutan);
    const artikel = computed(() => store.getters.getArtikel || []);
    const galeriCarousel = computed(() => store.getters.getGaleriCarousel);

    const activeIndex = ref(0);
    let slideInterval = null;
    const galeriIndex = ref(0);

    const galeriCarouselView = computed(() => {
      if (!galeriCarousel.value.length) return [];
      const arr = [];
      for (let i = 0; i < 4; i++) {
        arr.push(
          galeriCarousel.value[
            (galeriIndex.value + i) % galeriCarousel.value.length
          ]
        );
      }
      return arr;
    });

    function prevGaleri() {
      galeriIndex.value =
        (galeriIndex.value - 1 + galeriCarousel.value.length) %
        galeriCarousel.value.length;
    }
    function nextGaleri() {
      galeriIndex.value = (galeriIndex.value + 1) % galeriCarousel.value.length;
    }

    function goToArtikelDetail(slug) {
      router.push({ name: "artikel_detail", params: { slug } });
    }

    function nextSlide() {
      if (!slides.value.length) return;
      activeIndex.value = (activeIndex.value + 1) % slides.value.length;
    }
    function prevSlide() {
      if (!slides.value.length) return;
      activeIndex.value =
        (activeIndex.value - 1 + slides.value.length) % slides.value.length;
    }
    function goToSlide(idx) {
      if (!slides.value.length) return;
      activeIndex.value = idx;
    }
    function goToDetail(index) {
      router.push({ name: "berita_detail", params: { index } });
    }

    onMounted(() => {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 3000);
    });
    onUnmounted(() => {
      clearInterval(slideInterval);
    });

    return {
      slides,
      berita,
      sambutan,
      activeIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      goToDetail,
      artikel,
      galeriCarouselView,
      prevGaleri,
      nextGaleri,
      goToArtikelDetail,
    };
  },
};
</script>


<template>
  <div>
    <div v-if="slides.length" class="relative w-screen h-screen">
      <div class="relative w-full h-full">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="absolute inset-0 transition-opacity duration-700 "
          :class="activeIndex === i ? 'opacity-100' : 'opacity-0'"
        >
          <img
            :src="slide.image"
            class="absolute block w-full h-full object-cover object-center top-0 left-0"
            alt="Slide"
          />
          <!-- Overlay text: hanya pada slide aktif -->
          <div
            v-if="activeIndex === i"
            class="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            <p
              class="text-lg md:text-xl font-medium text-white text-center drop-shadow mb-1"
            >
              Selamat Datang di Website
            </p>
            <h1
              class="text-3xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg"
            >
              SMA NEGERI 1 KEDUNGREJA
            </h1>
          </div>
        </div>
        <!-- Slider controls (left) -->
        <button
          type="button"
          class="absolute top-1/2 left-8 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white/95 text-blue-800 transition shadow-lg"
          @click="prevSlide"
          aria-label="Previous"
        >
          <i class="fa fa-chevron-left w-6 h-4"></i>
        </button>
        <!-- Slider controls (right) -->
        <button
          type="button"
          class="absolute top-1/2 right-8 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white/95 text-blue-800 transition shadow-lg"
          @click="nextSlide"
          aria-label="Next"
        >
          <i class="fa fa-chevron-right w-6 h-4"></i>
        </button>
        <!-- Slider indicators -->
        <div
          class="absolute z-20 flex -translate-x-1/2 bottom-8 left-1/2 space-x-2"
        >
          <button
            v-for="(slide, i) in slides"
            :key="i"
            type="button"
            class="w-4 h-4 rounded-full transition border border-white"
            :class="activeIndex === i ? 'bg-blue-500' : 'bg-white/50'"
            @click="goToSlide(i)"
          ></button>
        </div>
      </div>
    </div>

    <!-- Welcome Section -->
    <div
      class="mx-auto px-6 py-24 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md"
    >
      <div class="md:w-1/2 mb-8 md:mb-0 ms-12">
        <h4 class="text-4 md:text-2xl font-bold text-blue-800 mb-2">
          Sambutan Kepala Sekolah
        </h4>
        <div
          v-html="sambutan.content"
          class="prose max-w-none text-gray-700"
        ></div>
      </div>

      <div class="md:w-1/2 flex justify-center">
        <div
          class="p-4 rounded-xl bg-white shadow-lg ring-blue-300 hover:ring-4 hover:scale-105 transition-all duration-300"
        >
          <img
            src="/guru/guru5.jpg"
            alt="Foto Kepala Sekolah"
            class="w-44 h-65 object-cover object-top rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>

    <!-- News Section -->
    <div class="mx-auto px-6 py-24 bg-blue-800 shadow-md">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-white">
          Berita Terbaru
        </h1>
        <router-link
          to="/informasi/berita"
          class="text-white px-6 py-2font-semibold hover:text-slate-300"
        >
          Lihat Berita Lainnya
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in berita.slice(0, 4)"
          :key="index"
          class="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer flex flex-col"
          @click="goToDetail(index)"
        >
          <img
            :src="item.icon"
            alt="Thumbnail Berita"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="flex flex-col flex-1 p-6">
            <h3 class="text-base md:text-lg font-bold text-blue-800 mb-1">
              {{ item.title }}
            </h3>
            <span class="text-sm text-gray-500 mb-4">{{ item.date }}</span>
            <p class="text-gray-700 mb-6 flex-1">{{ item.description }}</p>
            <button
              class="border border-blue-800 rounded-lg py-2 font-semibold text-blue-800 bg-white hover:bg-blue-800 hover:text-white transition-colors"
              @click.stop="goToDetail(index)"
            >
              Lihat Berita
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Artikel Section -->
    <div class="mx-auto px-6 py-24">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl md:text-3xl font-bold">Artikel Terbaru</h1>
        <router-link
          to="/galeri/galeri_foto"
          class="px-6 py-2 font-semibold hover:text-blue-800"
        >
          Lihat Semua Artikel
        </router-link>
      </div>
      <div class="space-y-3">
        <div
          v-for="(item, index) in artikel.slice(0, 5)"
          :key="index"
          class="bg-white border rounded-lg px-5 py-3 shadow-sm hover:shadow transition cursor-pointer"
          @click="goToArtikelDetail(item.slug)"
        >
          <div class="font-bold text-gray-900">{{ item.title }}</div>
          <div class="text-sm text-gray-500 mt-1">{{ item.date }}</div>
          <div class="text-gray-700 mt-2">{{ item.description }}</div>
          <!-- Tambahkan ini -->
        </div>
      </div>
    </div>

    <!-- gallery Section -->
    <div class="mx-auto px-6 py-24">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl md:text-3xl font-bold">Galeri SMAN 1 Kedungreja</h1>
        <router-link
          to="/galeri/galeri_foto"
          class="px-6 py-2 font-semibold hover:text-blue-800"
        >
          Lihat Galeri Lainnya
        </router-link>
      </div>
      <div class="relative">
        <button
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-black rounded-full p-3 shadow transition"
          @click="prevGaleri"
          aria-label="Sebelumnya"
        >
          <i class="fa fa-chevron-left text-xl text-white"></i>
        </button>
        <div class="flex overflow-hidden gap-4 mx-12">
          <div
            v-for="(item, i) in galeriCarouselView"
            :key="i"
            class="min-w-[420px] max-w-xs flex-1 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
          >
            <div
              class="w-full aspect-[8/7] bg-gray-100 flex items-center justify-center overflow-hidden"
            >
              <img
                :src="item.image"
                :alt="item.caption"
                class="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div class="p-3 font-semibold text-center text-gray-700">
              {{ item.caption }}
            </div>
          </div>
        </div>
        <button
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-black rounded-full p-3 shadow transition"
          @click="nextGaleri"
          aria-label="Selanjutnya"
        >
          <i class="fa fa-chevron-right text-xl text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>