<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import VueDatePicker from "@vuepic/vue-datepicker";
import { id } from "date-fns/locale"; // pastikan date-fns sudah terinstall

const store = useStore();
const selectedDate = ref(new Date());

const agenda = computed(() => store.state.Informasi.agenda);

// Agenda Bulan Ini
const agendaBulanIni = computed(() => {
  const month = selectedDate.value.getMonth();
  const year = selectedDate.value.getFullYear();
  return agenda.value.filter((item) => {
    const d = new Date(item.date);
    return d.getMonth() === month && d.getFullYear() === year;
  });
});

// Agenda Hari Ini
const today = new Date().toISOString().slice(0, 10);
const agendaToday = computed(() =>
  agenda.value
    .filter((item) => item.date === today)
    .flatMap((item) => item.events)
);
</script>

<template>
  <div class="max-w-6xl mx-auto py-8">
    <!-- Header Hari Ini dan Agenda -->
    <div
      class="rounded-2xl bg-blue-800 flex flex-col sm:flex-row items-center justify-between px-8 py-4 mb-8"
    >
      <div>
        <div class="text-white">Hari ini</div>
        <div class="font-bold text-lg text-white">
          {{
            new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          }}
        </div>
      </div>
      <div class="border-l border-white h-12 mx-4 hidden sm:block"></div>
      <div>
        <div class="text-white">
          Agenda : {{ agendaToday.length }} kegiatan
        </div>
        <div class="font-semibold text-white">{{ agendaToday.join(" & ") || "-" }}</div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Kalender -->
      <div class="flex-3">
        <h2 class="text-blue-800 font-bold text-2xl mb-4">Pilih Tanggal</h2>
        <div class="rounded-lg overflow-hidden ring-1 ring-blue-800 shadow-sm">
          <VueDatePicker
            v-model="selectedDate"
            inline
            auto-apply
            :enable-time-picker="false"
            :format="'dd-MM-yyyy'"
            :locale="id"
            :week-start="1"
            class="w-full align-item-center justify-center"
          />
        </div>
      </div>
      <!-- Agenda Bulan Ini -->
      <div class="flex-1">
        <h2 class="text-blue-800 font-bold text-2xl mb-4">Agenda bulan ini</h2>
        <div class="rounded-tl-2xl rounded-bl-2xl bg-gray-100 py-4 px-0 ">
          <div
            v-for="item in agenda"
            :key="item.date"
            class="flex border-b last:border-b-0 mb-6"
          >
            <div
              class="w-48 min-w-[12rem] flex items-center px-6 py-4 font-semibold text-blue-800"
            >
              {{
                new Date(item.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            </div>
            <ul class="flex-1 px-4 py-4 text-gray-700 list-decimal space-y-1">
              <li v-for="(ev, i) in item.events" :key="i">
                {{ ev }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>