<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-blue-800 mb-8">Berita Terkini</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewsCard 
        v-for="item in newsItems" 
        :key="item.id" 
        :news="item" 
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

export default {
  components: {
    NewsCard
  },
  computed: {
    ...mapGetters(['getNews']),
    newsItems() {
      return this.getNews
    }
  }
}
</script>