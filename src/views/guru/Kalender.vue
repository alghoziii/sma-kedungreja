<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Logo from "@/components/Logo.vue";

const store = useStore();
const content = computed(() => store.getters.getKalender);
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-8">
    <!-- Kiri: Konten visiMisi -->
    <div class="space-y-6">
      <h2 class="text-4xl font-bold">{{ content.title }}</h2>
      <div class="flex justify-center">
        <img src="/kalender.png" alt="Logo" class="w-auto h-auto" />
      </div>
    </div>
  </section>
</template>


