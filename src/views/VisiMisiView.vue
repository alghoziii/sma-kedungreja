<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-blue-800 mb-4">Visi Kami</h1>
      <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <p class="text-2xl italic text-blue-600">
          "Prestasi Unggul Bermartabat"
        </p>
      </div>
    </div>

    <!-- Misi -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">Misi Kami</h2>
      <ol class="list-decimal pl-6 space-y-3">
        <li
          v-for="(misi, index) in misiList"
          :key="index"
          class="text-gray-700"
        >
          {{ misi }}
        </li>
      </ol>
    </div>

    <!-- Footer -->
    <div class="mt-12 pt-6 border-t border-gray-200">
      <h3 class="text-center text-xl font-bold text-blue-800">
        SEKOLAH MENENGAH ATAS NEGERI 1 KEDUNGREJA
      </h3>
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
        "Meningkatkan sarana prasarana yang memadahi.",
      ],
    };
  },
};
</script>