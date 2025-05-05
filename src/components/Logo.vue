<script setup>
defineProps({
  image: String, // Path gambar logo
});
</script>

<template>
  <div class="flex flex-col items-center gap-2 mt-8">
    <!-- Gambar Logo -->
    <img
      :src="image"
      alt="Logo Image"
      class="w-40 h-40 object-contain"
    />
    <!-- Teks Tambahan -->
    <h1 class="text-lg font-bold text-blue-900 text-center">
      SEKOLAH MENENGAH ATAS<br />
      NEGERI 1 KEDUNGREJA
    </h1>
  </div>
</template>