<template>
  <main class="page page--home">
    <AppHeader title="北京旅行攻略" eyebrow="Mobile Travel Demo" />

    <section class="hero">
      <p class="hero__eyebrow">初次来北京</p>
      <h2>把经典景点、胡同街区和轻量行程放进一部手机里。</h2>
      <p class="hero__text">
        这个版本只做最核心的信息展示：看热门景点、查基础攻略、快速参考一日或两日路线。
      </p>
      <div class="hero__actions">
        <RouterLink class="button button--primary" to="/spots">查看全部景点</RouterLink>
        <RouterLink class="button button--ghost" to="/routes">推荐行程</RouterLink>
      </div>
    </section>

    <section class="section">
      <div class="section__heading">
        <div>
          <p class="section__eyebrow">Hot Spots</p>
          <h3>热门景点</h3>
        </div>
        <RouterLink class="text-link" to="/spots">全部景点</RouterLink>
      </div>

      <div v-if="loading" class="state-card">景点加载中...</div>
      <div v-else-if="error" class="state-card state-card--error">{{ error }}</div>
      <div v-else class="spot-grid">
        <article
          v-for="spot in hotSpots"
          :key="spot.id"
          class="mini-card"
          @click="router.push(`/spots/${spot.id}`)"
        >
          <p class="mini-card__tag">{{ spot.tag }}</p>
          <h4>{{ spot.name }}</h4>
          <p>{{ spot.shortDesc }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section__heading">
        <div>
          <p class="section__eyebrow">Quick Routes</p>
          <h3>行程建议</h3>
        </div>
        <RouterLink class="text-link" to="/routes">查看更多</RouterLink>
      </div>

      <div class="route-preview">
        <div class="route-preview__item">
          <span>1日</span>
          <p>中轴线经典路线，适合第一次来北京。</p>
        </div>
        <div class="route-preview__item">
          <span>2日</span>
          <p>长城搭配故宫园林，适合时间更充裕的游客。</p>
        </div>
      </div>
    </section>

    <BottomNav />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import BottomNav from '../components/BottomNav.vue'
import { getHotSpots } from '../mock/data'

const router = useRouter()
const hotSpots = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    hotSpots.value = await getHotSpots()
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载失败'
  } finally {
    loading.value = false
  }
})
</script>
