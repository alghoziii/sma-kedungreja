<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Logo from "@/components/Logo.vue";

const store = useStore();

// Ambil data program kerja dari Vuex getter
const programKerja = computed(() => store.getters.getProgramKerja);
</script>

<template>
  <section class="container mx-auto max-w-6xl px-4 py-8">
    <div class="flex flex-col md:flex-row items-start justify-between gap-8">
      <!-- Kiri: Konten Program Kerja -->
      <div class="md:w-2/3 space-y-4">
        <h2 class="text-4xl font-bold text-black">{{ programKerja.title }}</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ programKerja.content }}
        </p>
        <ol class="list-decimal list-inside space-y-2 text-lg text-gray-800">
          <li v-for="(item, index) in programKerja.list" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>

      <Logo :image="programKerja.image" />
    </div>
  </section>
</template>

