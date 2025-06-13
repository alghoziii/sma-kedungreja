<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="border-2 border-gray-300 rounded-lg shadow-md overflow-hidden max-w-md mx-auto"
  >
    <!-- Header -->
    <div class="bg-blue-800 text-white text-center py-4 relative">
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
            :src="card.image || '/default-placeholder.png'"
            alt="Foto card"
            class="w-full aspect-[3/4] object-cover rounded-md"
          />
        </div>

        <!-- Detail -->
        <div class="col-span-2 text-sm space-y-2">
          <p v-if="card.name"><strong>Nama:</strong> {{ card.name }}</p>
          <p v-if="card.nuptk"><strong>NUPTK:</strong> {{ card.nuptk }}</p>
          <p v-if="card.nis"><strong>NIS:</strong> {{ card.nis }}</p>
          <p v-if="card.gender"><strong>Jenis Kelamin:</strong> {{ card.gender }}</p>
          <p v-if="card.birthPlace || card.birthDate">
            <strong>Tempat/Tgl Lahir:</strong>
            <span v-if="card.birthPlace">{{ card.birthPlace }}</span>
            <span v-if="card.birthPlace && card.birthDate">, </span>
            <span v-if="card.birthDate">{{ card.birthDate }}</span>
          </p>
          <p v-if="card.jabatan"><strong>Jabatan:</strong> {{ card.jabatan }}</p>
          <p v-if="card.agama"><strong>Agama:</strong> {{ card.agama }}</p>
          <p v-if="card.address"><strong>Alamat Rumah:</strong> {{ card.address }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-blue-800 text-white text-center py-2 text-sm">
      <p>Cilacap, XX-XX-20XX</p>
      <p v-if="card.name">{{ card.name }}</p>
    </div>
  </div>
</template>