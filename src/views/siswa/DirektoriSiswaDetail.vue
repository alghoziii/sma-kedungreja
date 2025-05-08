<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import IdCard from "@/components/IdCard.vue";

const route = useRoute();
const store = useStore();

// Ambil id dari route params
const id = route.params.id;
const siswaData = store.getters["getGuruById"](id);
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold text-blue-900 mb-6">Profil Siswa</h1>

    <!-- Kartu Identitas -->
    <IdCard v-if="siswaData" :guru="siswaData" />

    <!-- Tombol Kembali -->
    <div class="mt-6 text-center">
      <router-link
        :to="{ name: 'direktori_guru' }"
        class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
      >
        Kembali
      </router-link>
    </div>
  </div>
</template>