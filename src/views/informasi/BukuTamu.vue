<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const nama = ref("");
    const email = ref("");
    const alamat = ref("");
    const komentar = ref("");

    const stats = {
      totalHits: 424626,
      visitors: 145889,
      today: 57,
    };

    const kirimForm = () => {
      if (!nama.value || !email.value || !alamat.value || !komentar.value) {
        alert("Semua field harus diisi!");
        return;
      }

      // Tambahkan data ke store
      store.commit("addBukuTamu", {
        nama: nama.value,
        email: email.value,
        alamat: alamat.value,
        komentar: komentar.value,
      });

      // Reset form
      nama.value = "";
      email.value = "";
      alamat.value = "";
      komentar.value = "";

      // Arahkan ke halaman daftar buku tamu
      router.push("buku_tamu_list");
    };

    const lihatBukuTamu = () => {
      router.push("buku_tamu_list");
    };

    return {
      stats,
      nama,
      email,
      alamat,
      komentar,
      kirimForm,
      lihatBukuTamu,
    };
  },
};
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sidebar -->
      <Sidebar :stats="stats" />

      <div class="flex-1">
        <h1 class="text-3xl font-bold text-blue-900 mb-6">Buku Tamu</h1>
        <div class="border-2 p-6 rounded shadow-sm">
          <div class="mb-4">
            <label for="nama" class="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              id="nama"
              v-model="nama"
              type="text"
              placeholder="Masukkan Nama"
              class="mt-1 block w-full border-gray-900 rounded shadow-sm focus:ring-blue-500 sm:text-sm p-2"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Masukkan E-mail"
              class="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div class="mb-4">
            <label for="alamat" class="block text-sm font-medium text-gray-700">
              Alamat
            </label>
            <input
              id="alamat"
              v-model="alamat"
              type="text"
              placeholder="Masukkan Alamat"
              class="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div class="mb-4">
            <label
              for="komentar"
              class="block text-sm font-medium text-gray-700"
            >
              Komentar
            </label>
            <textarea
              id="komentar"
              v-model="komentar"
              placeholder="Masukkan Komentar"
              class="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            ></textarea>
          </div>

          <div class="flex flex-col items-center">
            <button
              @click="kirimForm"
              class="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Kirim
            </button>
            <button
              @click="lihatBukuTamu"
              class="text-blue-900 hover:underline mt-4 block"
            >
              Lihat Buku Tamu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>