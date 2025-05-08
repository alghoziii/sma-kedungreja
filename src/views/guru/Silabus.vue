<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Logo from "@/components/Logo.vue";

const store = useStore();

// Ambil data silabus dari Vuex getter
const silabus = computed(() => store.getters.getSilabus);
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-8">
    <!-- Mobile Layout -->
    <div class="md:hidden">
      <!-- Title and Semester -->
      <div class="flex flex-col gap-4 mb-6">
        <h1 class="text-3xl font-bold text-black">{{ silabus.title }}</h1>
        <div class="flex items-center space-x-2">
          <label for="semester-mobile" class="text-lg font-semibold"
            >Semester</label
          >
          <select
            id="semester-mobile"
            class="border border-gray-300 rounded-md px-3 py-1 text-gray-700"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      <!-- Logo (centered on mobile) -->
      <div class="flex justify-center mb-6">
        <Logo :image="silabus.image" />
      </div>

      <!-- Silabus Content -->
      <div class="space-y-6">
        <div
          v-for="(item, index) in silabus.description"
          :key="index"
          class="space-y-2"
        >
          <p class="text-lg font-semibold text-gray-800">
            {{ item.subject }}
          </p>
          <p class="text-sm text-gray-600">
            Didownload {{ item.downloads }},
            <a href="#" class="text-blue-500 underline">{{ item.link }}</a
            >, Update: {{ item.updated }}
          </p>
        </div>
        <p class="text-sm text-gray-700 italic">
          {{ silabus.footer }}
        </p>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:block relative">
      <!-- Header -->
      <div class="flex flex-row justify-between items-start">
        <!-- Kiri: Judul dan Dropdown -->
        <div class="flex items-center space-x-4">
          <h1 class="text-4xl font-bold text-black">{{ silabus.title }}</h1>
          <div class="flex items-center space-x-2">
            <label for="semester-desktop" class="text-lg font-semibold"
              >Semester</label
            >
            <select
              id="semester-desktop"
              class="border border-gray-300 rounded-md px-3 py-1 text-gray-700"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Konten -->
      <div class="flex flex-row items-start justify-between gap-8 mt-6">
        <!-- Kiri: Daftar Silabus -->
        <div class="w-2/3 space-y-6">
          <div
            v-for="(item, index) in silabus.description"
            :key="index"
            class="space-y-2"
          >
            <p class="text-lg font-semibold text-gray-800">
              {{ item.subject }}
            </p>
            <p class="text-sm text-gray-600">
              Didownload {{ item.downloads }},
              <a href="#" class="text-blue-500 underline">{{ item.link }}</a
              >, Update: {{ item.updated }}
            </p>
          </div>
          <p class="text-sm text-gray-700 italic">
            {{ silabus.footer }}
          </p>
        </div>
      </div>

      <!-- Logo Absolute (desktop only) -->
      <div class="absolute top-0 right-0 mt-5">
        <Logo :image="silabus.image" />
      </div>
    </div>
  </section>
</template>