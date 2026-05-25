<template>
  <main class="page">
    <AppHeader title="推荐行程" eyebrow="Suggested Routes" />

    <section class="section">
      <div v-if="loading" class="state-card">行程加载中...</div>
      <div v-else-if="error" class="state-card state-card--error">{{ error }}</div>
      <div v-else class="route-list">
        <article v-for="item in routes" :key="item.id" class="route-card">
          <div class="route-card__top">
            <span class="route-card__days">{{ item.days }}日</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.fit }}</p>
            </div>
          </div>

          <ol class="route-card__steps">
            <li v-for="spot in item.route" :key="spot">{{ spot }}</li>
          </ol>

          <p class="route-card__desc">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <BottomNav />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'
import { getRoutes } from '../mock/data'

const routes = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    routes.value = await getRoutes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载失败'
  } finally {
    loading.value = false
  }
})
</script>
