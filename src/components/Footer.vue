<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const schoolInfo = computed(() => {
  return (
    store.getters.getSchoolInfo || {
      address: "Jalan Raya Tambaksari Tp 212 Kedungreja Cilacap",
      email: "info@sman1kedungreja.sch.id",
      phone: "02805260258",
    }
  );
});
</script>

<template>
  <footer class="bg-blue-800 text-white py-8">
    <div class="container mx-auto px-2">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Logo dan Informasi Sekolah -->
        <div class="flex flex-col items-center text-center">
          <img
            src="/public/logo.png"
            alt="Logo SMA N 1 KEDUNGREJA"
            class="w-24 h-24 mb-2"
          />
          <h2 class="text-lg font-bold uppercase text-center md:text-left">
            SEKOLAH MENENGAH ATAS
          </h2>
          <h2 class="text-lg font-bold uppercase text-center md:text-left">
            NEGERI 1 KEDUNGREJA
          </h2>
          <p class="text-sm mt-2 text-center md:text-left">
            {{ schoolInfo.address }}
          </p>
          <p class="text-sm text-center md:text-left">{{ schoolInfo.email }}</p>
          <p class="text-sm text-center md:text-left">{{ schoolInfo.phone }}</p>
        </div>

        <!-- Menu -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-xl font-bold mb-4 w-full text-center md:text-left">
            Profile Sekolah
          </h3>
          <ul class="space-y-2 text-center md:text-left">

            

            <li><router-link to="/profil/visi-misi" class="hover:text-yellow-300">Visi Misi</router-link></li>
            <li><router-link to="/profil/sejarah" class="hover:text-yellow-300">Sejarah</router-link></li>
            <li><router-link to="/profil/sarana_prasarana" class="hover:text-yellow-300">Sarana dan Prasarana</router-link></li>
            <li><router-link to="/profil/struktur_organisasi" class="hover:text-yellow-300">Struktur Organisasi</router-link></li>
            <li><router-link to="/profil/program_kerja" class="hover:text-yellow-300">Program Kerja</router-link></li>
            <li><router-link to="/profil/prestasi" class="hover:text-yellow-300">Prestasti</router-link></li>
          
          </ul>
        </div>

        <!-- Links -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-xl font-bold mb-4">LINKS</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-yellow-300">Akademik</a></li>
            <li><a href="#" class="hover:text-yellow-300">Keuangan</a></li>
            <li><a href="#" class="hover:text-yellow-300">More</a></li>
          </ul>
        </div>

        <!-- Copyright dan Social Media -->
        <div class="flex flex-col">
          <div>
            <p class="mb-2">Copyright © 2025</p>
            <p class="mb-2 font-bold">SMA N 1 KEDUNGREJA</p>
            <p class="mb-4">All Right Reserved</p>
          </div>

          <!-- Social Media Icons -->
          <div class="flex space-x-4 mt-4 justify-center md:justify-start">
            <a href="#" class="text-white hover:text-yellow-300">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="text-white hover:text-yellow-300">
              <i class="fa-brands fa-youtube"></i>
            </a>

            <a href="#" class="text-white hover:text-yellow-300">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="text-white hover:text-yellow-300">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="text-white hover:text-yellow-300">
              <i class="fa-brands fa-google"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider dan Copyright -->
      <div class="border-t border-blue-400 mt-8 pt-6 text-center">
        <p>Copyright © 2025 SMA N 1 KEDUNGREJA. All Right Reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>