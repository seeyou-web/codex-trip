<template>
  <main class="page">
    <AppHeader title="北京景点" eyebrow="Spot Directory" />

    <section class="filters">
      <button
        v-for="item in categories"
        :key="item"
        class="filter-chip"
        :class="{ 'is-active': activeCategory === item }"
        type="button"
        @click="activeCategory = item"
      >
        {{ item }}
      </button>
    </section>

    <section class="section section--tight">
      <div v-if="loading" class="state-card">景点加载中...</div>
      <div v-else-if="error" class="state-card state-card--error">{{ error }}</div>
      <div v-else class="spot-list">
        <SpotCard v-for="spot in filteredSpots" :key="spot.id" :spot="spot" />
      </div>
    </section>

    <BottomNav />
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'
import SpotCard from '../components/SpotCard.vue'
import { getSpots } from '../mock/data'

const categories = ['全部', '历史文化', '皇家园林', '现代地标', '亲子休闲']
const activeCategory = ref('全部')
const spots = ref([])
const loading = ref(true)
const error = ref('')

const filteredSpots = computed(() => {
  if (activeCategory.value === '全部') {
    return spots.value
  }

  return spots.value.filter((spot) => spot.category === activeCategory.value)
})

onMounted(async () => {
  try {
    spots.value = await getSpots()
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载失败'
  } finally {
    loading.value = false
  }
})
</script>
