<script setup>
defineProps({
  image: String, // Path gambar logo
});
</script>

<template>
  <div class="flex flex-col items-center gap-2 my-4 px-4 w-full">
    <img
      :src="image"
      alt="Logo Image"
      class="w-32 h-32 md:w-40 md:h-40 object-contain"
    />
    <h1 class="text-base md:text-lg font-bold text-blue-900 text-center">
      SEKOLAH MENENGAH ATAS<br />
      NEGERI 1 KEDUNGREJA
    </h1>
  </div>
</template>