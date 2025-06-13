<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const kepalaSekolahDetail = computed(
      () => store.getters.getProfileContent.kepala_sekolah
    );

    return {
      kepalaSekolahDetail,
    };
  },
};
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-8">

    <div class="space-y-8">
      <h2 class="text-4xl font-bold">Kepala Sekolah</h2>
    
    <div class="flex flex-col items-center">
      <div class="flex justify-center mb-6">
        <img
          src="/guru/KepalaSekolah.jpg"
          alt="Foto Kepala Sekolah"
          class="w-56 h-72 object-cover border-blue-800 rounded-md shadow"
        />
      </div>

      <div class="w-full flex justify-center">
        <table
          class="min-w-[700px] max-w-3xl w-full border-collapse border border-gray-400 rounded-lg shadow"
        >
          <tbody>
            <tr v-for="(value, key, index) in kepalaSekolahDetail" :key="index">
              <td
                class="border border-gray-400 p-2 font-medium text-center w-10 bg-gray-50"
              >
                {{ index + 1 }}
              </td>
              <td
                class="border border-gray-400 p-2 font-semibold w-72 bg-gray-50"
              >
                {{ key }}
              </td>
              <td class="border border-gray-400 p-2 w-[400px]">
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>