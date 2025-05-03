<template>
  <div class="group relative">
    <button
      :class="[
        'hover:text-yellow-300 transition-colors duration-200 flex items-center',
        isActive ? 'text-yellow-300 font-medium' : '',
      ]"
    >
      {{ label }} <span class="ml-1 text-xs">▼</span>
    </button>
    <div
      class="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block border border-gray-200"
    >
      <!-- Invisible bridge to prevent hover gap -->
      <div class="absolute h-2 w-full bg-transparent" style="top: -8px"></div>

      <router-link
        v-for="item in items"
        :key="item.id"
        :to="item.route"
        class="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    items: Array,
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.startsWith(this.path);
    },
  },
};
</script>
