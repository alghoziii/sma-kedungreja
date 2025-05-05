<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Logo from "@/components/Logo.vue";

const store = useStore();
const content = computed(() => store.getters.getProfileContent.sejarah);
</script>

<template>
  <section class="container mx-auto max-w-6xl px-4 py-8">
    <div class="flex flex-col md:flex-row justify-between items-start gap-8">
      <!-- Kiri: Konten Sejarah -->
      <div class="md:w-2/3 space-y-4">
        <h2 class="text-3xl font-bold">{{ content.title }}</h2>
        <div
          class="text-gray-700 leading-relaxed"
          v-html="content.content"
        ></div>

        <ol class="list-decimal list-inside space-y-1 text-gray-800">
          <li v-for="(item, index) in content.list" :key="index">{{ item }}</li>
        </ol>
      </div>

      <Logo :image="content.image" />
    </div>
  </section>
</template>
