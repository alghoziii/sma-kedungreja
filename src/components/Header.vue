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
  <header class="bg-blue-800 text-white shadow-md">
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
        <nav class="hidden md:flex items-center space-x-6">
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

          <router-link
            to="/login"
            class="bg-white hover:bg-yellow-600 text-blue-600 font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            Login
          </router-link>
        </nav>

        <!-- Menu Mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-2xl focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Dropdown Menu Mobile -->
        <div
          v-if="mobileMenuOpen"
          class="absolute top-16 left-0 right-0 bg-blue-800 z-50 md:hidden"
        >
          <nav class="flex flex-col space-y-4 p-4">
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

            <router-link
              to="/login"
              class="bg-white hover:bg-yellow-600 text-blue-600 font-medium px-4 py-2 rounded-md transition-colors duration-200"
            >
              Login
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.absolute {
  z-index: 50; 
}

.router-link-exact-active {
  @apply text-yellow-300 font-medium;
}

.group:hover .absolute {
  display: block;
}
.absolute:hover {
  display: block;
}
</style>