<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div class="h-48 overflow-hidden" >
      <img
        :src="news.image"
        :alt="news.title"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-blue-800 mb-2">{{ news.title }}</h3>
      <p class="text-gray-600 mb-4">{{ news.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-500">{{ news.date }}</span>
        <button class="text-blue-600 hover:text-blue-800 font-medium">
          Baca Selengkapnya →
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>