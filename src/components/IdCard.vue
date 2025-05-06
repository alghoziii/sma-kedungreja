<script setup>
defineProps({
  guru: {
    type: Object,
    required: true, // Data guru harus diberikan
  },
});
</script>

<template>
  <div
    class="border-2 border-gray-300 rounded-lg shadow-md overflow-hidden max-w-md mx-auto"
  >
    <!-- Header -->
    <div class="bg-blue-600 text-white text-center py-4 relative">
      <!-- Logo -->
      <img
        src="/logo.png"
        alt="Logo SMA Negeri 1 Kedungreja"
        class="absolute left-4 top-4 w-12 h-12"
      />
      <h2 class="text-xl font-bold">SMA NEGERI 1 KEDUNGREJA</h2>
      <p class="text-sm">KARTU TANDA PENGAJAR</p>
    </div>

    <!-- Konten -->
    <div class="p-4">
      <div class="grid grid-cols-3 gap-4">
        <!-- Foto -->
        <div class="col-span-1 border-gray-300 rounded-md overflow-hidden">
          <img
            :src="guru.image || '/default-placeholder.png'"
            alt="Foto Guru"
            class="w-full aspect-[3/4] object-cover rounded-md"
          />
        </div>

        <!-- Detail -->
        <div class="col-span-2 text-sm space-y-2">
          <p><strong>Nama:</strong> {{ guru.name }}</p>
          <p><strong>NIP:</strong> {{ guru.details }}</p>
          <p><strong>NUPTK:</strong> {{ guru.nuptk || "Tidak tersedia" }}</p>
          <p>
            <strong>Jenis Kelamin:</strong>
            {{ guru.gender || "Tidak tersedia" }}
          </p>
          <p>
            <strong>Tempat/Tgl Lahir:</strong> {{ guru.birthPlace }},
            {{ guru.birthDate }}
          </p>
          <p>
            <strong>Pangkat/Gol:</strong> {{ guru.rank || "Tidak tersedia" }}
          </p>
          <p>
            <strong>Alamat Rumah:</strong>
            {{ guru.address || "Tidak tersedia" }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-blue-600 text-white text-center py-2 text-sm">
      <p>Cilacap, XX-XX-20XX</p>
      <p>{{ guru.name }}</p>
    </div>
  </div>
</template>