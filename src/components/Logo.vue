<script setup>
defineProps({
  image: String, // Path gambar logo
});
</script>

<template>
  <div class="w-full px-4 my-4 flex justify-center md:justify-end">
    <div class="flex flex-col items-center gap-2">
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
  </div>
</template>
