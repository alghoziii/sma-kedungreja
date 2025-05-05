<template>
  <div class="w-full md:w-1/4">
    <!-- School Info Box -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <div class="flex flex-col items-center text-center">
        <img src="/logo.png" alt="Logo Sekolah" class="w-32 h-auto mb-4" />
        <h2 class="font-bold text-lg uppercase">SEKOLAH MENENGAH ATAS</h2>
        <h2 class="font-bold text-lg uppercase">NEGERI 1 KEDUNGREJA</h2>
        <p class="text-sm mt-2">NPSN: 20300733</p>
        <p class="text-sm mt-1">
          Jalan Raya Tambaksari Tp 212 Kedungreja Cilacap
        </p>
        <p class="text-sm">info@sman1kedungreja.sch.id</p>
        <p class="text-sm">02805260258</p>
      </div>
    </div>

    <!-- Banner -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <h3 class="font-bold mb-2">Banner</h3>
      <div
        class="border border-gray-300 h-17 flex items-center justify-center bg-gray-100"
      >
        <img
          src="/kemindibud.jpg"
          alt="kemendikbud"
          class="h-full object-cover"
        />
      </div>
    </div>

    <!-- Jejak Pendapat -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <h3 class="font-bold mb-2">Jejak Pendapat</h3>
      <div class="bg-gray-100 p-3 rounded">
        <p class="text-sm mb-2">
          Bagaimana pendapat anda mengenai web sekolah kami?
        </p>
        <div class="space-y-1">
          <div class="flex items-center">
            <input
              type="radio"
              id="sangat-bagus"
              name="pendapat"
              class="mr-2"
            />
            <label for="sangat-bagus" class="text-sm">Sangat Bagus</label>
          </div>
          <div class="flex items-center">
            <input type="radio" id="bagus" name="pendapat" class="mr-2" />
            <label for="bagus" class="text-sm">Bagus</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="kurang-bagus"
              name="pendapat"
              class="mr-2"
            />
            <label for="kurang-bagus" class="text-sm">Kurang Bagus</label>
          </div>
        </div>
        <div class="mt-2 flex space-x-2">
          <button class="bg-cyan-500 text-white px-2 py-1 text-xs rounded">
            Pilih
          </button>
          <button class="bg-cyan-500 text-white px-2 py-1 text-xs rounded">
            Lihat
          </button>
        </div>
      </div>
    </div>

    <!-- Statistik -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <h3 class="font-bold mb-2">Statistik</h3>
      <div class="bg-gray-100 p-3 rounded">
        <table class="w-full text-sm">
          <tbody>
            <tr>
              <td class="py-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                Total Hits
              </td>
              <td class="py-1 text-right w-4">:</td>
              <td class="py-1 text-right w-1/5">424626</td>
            </tr>
            <tr>
              <td class="py-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  />
                </svg>
                Pengunjung
              </td>
              <td class="py-1 text-right w-6">:</td>
              <td class="py-1 text-right">145889</td>
            </tr>
            <tr>
              <td class="py-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Hari ini
              </td>
              <td class="py-1 text-right w-6">:</td>
              <td class="py-1 text-right">57</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Agenda -->
    <div
      class="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-cyan-100"
    >
      <h3 class="font-bold mb-2">Agenda</h3>
      <div class="flex justify-center">
        <div style="width: fit-content">
          <VueDatePicker
            v-model="date"
            inline
            auto-apply
            :enable-time-picker="true"
            :format="'dd-MM-yyyy'"
            :locale="'id'"
            :week-start="1"
            :min-date="minDate"
            :max-date="maxDate"
            :disabled-dates="disabledDates"
            @update:model-value="handleDateChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    VueDatePicker,
  },
  data() {
    return {
      date: new Date(),
      minDate: new Date(2023, 0, 1),
      maxDate: new Date(2025, 11, 31),
      disabledDates: [new Date(2024, 0, 1), new Date()],
    };
  },
  methods: {
    handleDateChange(selectedDate) {
      console.log("Tanggal dipilih:", selectedDate);
    },
  },
};
</script>