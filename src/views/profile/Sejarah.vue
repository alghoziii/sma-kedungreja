<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const store = useStore();
const sejarah = computed(() => store.getters.getProfileContent.sejarah || {});
const kepalaSekolah = computed(() => sejarah.value.kepalaSekolah || []);
const modules = [Autoplay];
</script>

<template>
  <section class="bg-white py-10 px-4 sm:px-6 lg:px-12">
    <!-- Sejarah -->
    <div
      class="bg-[#083D77] text-white p-6 rounded-lg flex flex-col lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="lg:w-2/3">
        <h2 class="text-2xl font-bold mb-4">{{ sejarah.title }}</h2>
        <div v-html="sejarah.description"></div>
      </div>
      <div class="lg:w-1/3 mt-6 lg:mt-0 lg:pl-8 flex justify-center">
        <img
          v-if="sejarah.image"
          :src="sejarah.image"
          alt="Gedung Sekolah"
          class="rounded-lg object-cover w-full max-w-xs shadow"
        />
      </div>
    </div>

    <!-- Slider Kepala Sekolah -->
    <div class="mt-12" v-if="kepalaSekolah.length">
      <h1 class="text-xl font-bold text-[#083D77] mb-6">
        Urutan Kepala Sekolah
      </h1>

      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        class="pb-8"
      >
        <SwiperSlide
          v-for="(kepsek, index) in kepalaSekolah"
          :key="`kepala-${index}`"
        >
          <div class="flex flex-col items-center p-6 rounded-lg">
            <div class="w-full h-48 mb-4 flex items-center justify-center">
              <img
                v-if="kepsek.foto"
                :src="kepsek.foto"
                :alt="`Foto ${kepsek.name}`"
                class="w-48 h-74 object-cover border border-gray-300 rounded-md"
              />
            </div>

            <h4 class="font-bold text-[#083D77] text-lg text-center mt-8">
              {{ kepsek.name }}
            </h4>
            <p class="text-sm text-center text-gray-600 mb-2">
              {{ kepsek.nip }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
