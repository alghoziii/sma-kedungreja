<template>
  <div class="bg-white rounded-lg shadow-md p-4 sticky top-4">
    <h3 class="font-bold text-lg mb-4 border-b pb-2">PROFIL SEKOLAH</h3>
    <ul class="space-y-2">
      <li>
        <router-link
          to="/profil/visi-misi"
          class="block px-4 py-2 hover:bg-blue-50 rounded transition-colors"
          active-class="bg-blue-100 text-blue-800 font-medium"
        >
          Visi Misi
        </router-link>
      </li>
      <!-- Tambahkan menu lain sesuai kebutuhan -->
    </ul>
  </div>
</template>