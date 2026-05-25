<template>
  <main class="page">
    <AppHeader title="景点详情" eyebrow="Travel Notes" :back="true" />

    <section v-if="loading" class="section">
      <div class="state-card">详情加载中...</div>
    </section>

    <section v-else-if="error" class="section">
      <div class="state-card state-card--error">{{ error }}</div>
    </section>

    <template v-else-if="spot">
      <section class="detail-hero">
        <p class="detail-hero__category">{{ spot.category }}</p>
        <h2>{{ spot.name }}</h2>
        <p>{{ spot.cover }}</p>
        <div class="detail-hero__tags">
          <span v-for="tag in spot.tags" :key="tag">{{ tag }}</span>
        </div>
      </section>

      <section class="section section--tight">
        <div class="info-grid">
          <div class="info-item">
            <span>开放时间</span>
            <strong>{{ spot.openTime }}</strong>
          </div>
          <div class="info-item">
            <span>门票</span>
            <strong>{{ spot.ticket }}</strong>
          </div>
          <div class="info-item">
            <span>游玩时长</span>
            <strong>{{ spot.duration }}</strong>
          </div>
          <div class="info-item">
            <span>最佳季节</span>
            <strong>{{ spot.season }}</strong>
          </div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="content-card">
          <p class="content-card__eyebrow">景点介绍</p>
          <h3>为什么值得去</h3>
          <p>{{ spot.detail }}</p>
        </div>
      </section>

      <section class="section section--tight">
        <div class="content-card">
          <p class="content-card__eyebrow">交通信息</p>
          <h3>怎么到达</h3>
          <p>{{ spot.traffic }}</p>
        </div>
      </section>

      <section class="section section--tight">
        <div class="content-card">
          <p class="content-card__eyebrow">游玩提示</p>
          <h3>出发前建议</h3>
          <ul class="tip-list">
            <li v-for="tip in spot.tips" :key="tip">{{ tip }}</li>
          </ul>
        </div>
      </section>
    </template>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import { getSpotById } from '../mock/data'

const route = useRoute()
const spot = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    spot.value = await getSpotById(route.params.id)
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载失败'
  } finally {
    loading.value = false
  }
})
</script>
