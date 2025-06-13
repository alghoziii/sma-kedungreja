<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import DropdownMenu from "@/components/DropdownMenu.vue";

const store = useStore();

const profileMenu = computed(() => store.getters.getProfileMenu);
const guruMenu = computed(() => store.getters.getGuruMenu);
const siswaMenu = computed(() => store.getters.getSiswaMenu);
const informasiMenu = computed(() => store.getters.getInformasiMenu);
const galeriMenu = computed(() => store.getters.getGaleriMenu);

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="bg-blue-800 text-white shadow-md top-0 left-0 w-full z-40">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo + Nama -->
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12">
            <img
              src="/logo.png"
              alt="Logo"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col">
            <h1 class="text-xl font-bold uppercase tracking-wider">
              SMAN1KEDUNGREJA
            </h1>
            <div class="text-xs opacity-80">SMA NEGERI 1 KEDUNGREJA</div>
          </div>
        </div>

        <!-- Menu Desktop -->
        <nav class="hidden md:flex items-center space-x-6 relative">
          <router-link
            to="/"
            class="hover:text-yellow-300 transition-colors duration-200"
          >
            Beranda
          </router-link>

          <DropdownMenu label="Profil" :items="profileMenu" path="/profil" />
          <DropdownMenu label="Guru" :items="guruMenu" path="/guru" />
          <DropdownMenu label="Siswa" :items="siswaMenu" path="/siswa" />
          <DropdownMenu
            label="Informasi"
            :items="informasiMenu"
            path="/informasi"
          />

          <DropdownMenu label="Galeri" :items="galeriMenu" path="/galeri" />
        </nav>

        <!-- Menu Mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-2xl focus:outline-none"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <!-- Dropdown Menu Mobile -->
      <div
        v-if="mobileMenuOpen"
        class="absolute left-0 right-0 mt-2 w-full bg-blue-800 z-50 md:hidden"
      >
        <nav class="flex flex-col space-y-1 px-4 py-3">
          <router-link
            to="/"
            class="hover:text-yellow-300 transition-colors duration-200"
          >
            Beranda
          </router-link>

          <DropdownMenu label="Profil" :items="profileMenu" path="/profil" />
          <DropdownMenu label="Guru" :items="guruMenu" path="/guru" />
          <DropdownMenu label="Siswa" :items="siswaMenu" path="/siswa" />
          <DropdownMenu
            label="Informasi"
            :items="informasiMenu"
            path="/informasi"
          />
          <DropdownMenu label="Galeri" :items="galeriMenu" path="/galeri" />
        </nav>
      </div>
    </div>
  </header>
</template>