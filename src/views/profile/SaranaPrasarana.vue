<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import SaranaPrasarana from "@/components/SaranaPrasaranaItem.vue";


const mainText = ref("SARANA PRASARANA");
const subText = ref("SMA NEGERI 1 KEDUNGREJA");

const store = useStore();
onMounted(() => {
  store.dispatch("fetchFacilities");
});
const saranaPrasaranaItem = computed(() => store.getters.getProfileContent.saranaPrasaranaItem);
</script>

<template>
  <div class="relative w-full h-[600px] overflow-hidden">
    <img src="/bg2.jpg" alt="Background" class="w-full h-full object-cover" />
    <div
      class="absolute inset-0 flex items-center justify-center text-center text-white"
    >
      <div class="transform translate-x-40">
        <h1 class="text-5xl font-bold">{{ mainText }}</h1>
        <h2 class="text-4xl font-medium mt-2">{{ subText }}</h2>
      </div>
    </div>
  </div>

  <section class="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
    <SaranaPrasarana
      v-for="(item, index) in saranaPrasaranaItem"
      :key="index"
      :title="item.title"
      :description="item.description"
      :image="item.image"
      :reverse="index % 2 === 1"
    />

    <div class="text-center mt-10">
      <Router-link
        to="/profil/sarana_prasarana/detail"
        class="px-4 py-2 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded transition"
      >
        Lihat Selengkapnya
      </Router-link>
    </div>
  </section>
</template>
