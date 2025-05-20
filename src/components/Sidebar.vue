<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, computed } from "vue";
import { useStore } from "vuex";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules"; // ✅ ini cara baru!

export default {
  components: {
    VueDatePicker,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();

    const staff = computed(() => store.getters.getStaff);
    const banners = computed(() => store.getters.getBanners);

    const swiperModules = [Autoplay, Navigation, Pagination];

    return {
      date: ref(new Date()),
      minDate: new Date(2023, 0, 1),
      maxDate: new Date(2025, 11, 31),
      disabledDates: [new Date(2024, 0, 1), new Date()],
      handleDateChange(selectedDate) {
        console.log("Tanggal dipilih:", selectedDate);
      },
      staff,
      banners,
      modules: [Autoplay, Navigation, Pagination],
      swiperModules,
    };
  },
};
</script>


<template>
  <div class="w-full md:w-1/4">
    <!-- School Info Box -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <div class="flex flex-col items-center text-center">
        <img src="/logo.png" alt="Logo Sekolah" class="w-32 h-auto mb-4" />
        <h2 class="font-bold text-lg uppercase">SEKOLAH MENENGAH ATAS</h2>
        <h2 class="font-bold text-lg uppercase">NEGERI 1 KEDUNGREJA</h2>
        <p class="text-sm mt-2">NPSN: 20300733</p>
        <p class="text-sm mt-1">
          Jalan Raya Tambaksari Tp 212 Kedungreja Cilacap
        </p>
        <p class="text-sm">info@sman1kedungreja.sch.id</p>
        <p class="text-sm">02805260258</p>
      </div>
    </div>

    <div
      class="bg-white rounded-lg shadow-md p-2 mb-4 border-2 border-cyan-100"
    >
      <h3 class="font-bold mb-2">Banner</h3>
      <swiper
        :modules="swiperModules"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        class="w-full"
      >
        <SwiperSlide v-for="banner in banners" :key="banner.id">
          <img
            :src="banner.src"
            :alt="banner.alt"
            class="w-full h-24 object-cover mt-4"
          />
        </SwiperSlide>
      </swiper>

      <!-- Staff Profile -->
      <swiper
        :modules="swiperModules"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 1000 }"
        class="w-full mb-8"
      >
      </swiper>
    </div>

    <!-- Jejak Pendapat -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <h3 class="font-bold mb-2">Jejak Pendapat</h3>
      <div class="bg-gray-100 p-3 rounded">
        <p class="text-sm mb-2">
          Bagaimana pendapat anda mengenai web sekolah kami?
        </p>
        <div class="space-y-1">
          <div class="flex items-center">
            <input
              type="radio"
              id="sangat-bagus"
              name="pendapat"
              class="mr-2"
            />
            <label for="sangat-bagus" class="text-sm">Sangat Bagus</label>
          </div>
          <div class="flex items-center">
            <input type="radio" id="bagus" name="pendapat" class="mr-2" />
            <label for="bagus" class="text-sm">Bagus</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="kurang-bagus"
              name="pendapat"
              class="mr-2"
            />
            <label for="kurang-bagus" class="text-sm">Kurang Bagus</label>
          </div>
        </div>
        <div class="mt-2 flex space-x-2">
          <button class="bg-cyan-500 text-white px-2 py-1 text-xs rounded">
            Pilih
          </button>
          <button class="bg-cyan-500 text-white px-2 py-1 text-xs rounded">
            Lihat
          </button>
        </div>
      </div>
    </div>

    <!-- Agenda (Calendar) -->
    <div class="bg-white rounded-xl shadow-lg border border-cyan-200 p-6 mb-8">
      <h3 class="text-lg font-semibold mb-4 border-b pb-2">Agenda Sekolah</h3>
      <div class="flex justify-center">
        <div class="rounded-lg overflow-hidden ring-1 ring-cyan-500 shadow-sm">
          <VueDatePicker
            v-model="date"
            inline
            auto-apply
            :enable-time-picker="false"
            :format="'dd-MM-yyyy'"
            :locale="'id'"
            :week-start="1"
            readonly
            disabled
            :hide-navigation="true"
            :month-picker="false"
            :year-picker="false"
            :partial-range="false"
            :prevent-min-max-navigation="true"
          />
        </div>
      </div>
    </div>

    <!-- Staff Profile -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <h3 class="text-lg font-semibold mb-4 border-b pb-2">Photo Staff</h3>

      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        :pagination="{ clickable: true }"
        class="w-full mb-6 relative pb-5"
      >
        <swiper-slide v-for="(person, index) in staff" :key="index">
          <div class="flex flex-col items-center">
            <div class="w-40 h-59 overflow-hidden">
              <img
                :src="person.photo"
                :alt="person.name"
                class="w-full h-full object-cover"
              />
            </div>
            <p class="font-bold text-cyan-600">{{ person.role }}</p>
            <p class="text-lg text-gray-700">{{ person.name }}</p>
          </div>
        </swiper-slide>
        <div
          class="flex justify-between absolute inset-x-0 top-1/3 transform -translate-y-1/4 px-5"
        >
          <button
            @click="swiperRef?.slidePrev()"
            class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            <span class="sr-only">Previous</span>
            <i class="fa fa-caret-left" aria-hidden="true"></i>
          </button>

          <button
            @click="swiperRef?.slideNext()"
            class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            <span class="sr-only">Next</span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </button>
        </div>
      </swiper>
    </div>
  </div>
</template>

