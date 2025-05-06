<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Logo from "@/components/Logo.vue";

const store = useStore();

// Ambil data kondisi siswa dari Vuex getter
const kondisiSiswa = computed(() => store.getters.getKondisiSiswa);
</script>

<template>
  <section class="container mx-auto max-w-6xl px-4 py-8">
    <div class="flex flex-col md:flex-row items-start justify-between gap-8">
      <!-- Kiri: Konten Kondisi Siswa -->
      <div class="md:w-2/3 space-y-4 ">
        <h2 class="text-4xl font-bold text-black mt-6">{{ kondisiSiswa.title }}</h2>
        <ul class="list-none space-y-2 text-lg text-gray-800 ms-6">
          <li v-for="(item, index) in kondisiSiswa.content" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Kanan: Logo -->
      <div class="md:w-1/3 flex flex-col items-center space-y-2">
        <Logo :image="'/logo.png'" />
      </div>
    </div>
  </section>
</template>