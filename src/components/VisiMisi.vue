<template>
  <div>
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-blue-800 mb-4">Visi Kami</h1>
      <blockquote class="text-2xl font-semibold text-blue-600 italic mb-8 px-4">
        "Prestasi Unggul Bermartabat"
      </blockquote>
      
      <h2 class="text-2xl font-bold text-blue-800 mb-6">Misi Kami</h2>
    </div>

    <!-- Misi List -->
    <div class="space-y-4">
      <div v-for="(misi, index) in misiList" :key="index" class="flex items-start">
        <span class="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">{{ index + 1 }}</span>
        <p class="text-gray-700 text-lg">{{ misi }}</p>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-12 pt-6 border-t border-gray-200">
      <h3 class="text-xl font-bold text-blue-800 text-center">SEKOLAH MENENGAH ATAS NEGERI 1 KEDUNGREJA</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      misiList: [
        "Menumbuhkan sikap percaya diri, santun, dan agamis.",
        "Meningkatkan kegiatan belajar mengajar yang efektif.",
        "Meningkatkan kualitas kegiatan ekstrakurikuler.",
        "Meningkatkan sarana prasarana yang memadahi."
      ]
    }
  }
}
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>