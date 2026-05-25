<template>
  <nav class="bottom-nav">
    <RouterLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="bottom-nav__item"
      :class="{ 'is-active': route.path === item.to }"
    >
      <span class="bottom-nav__label">{{ item.label }}</span>
      <span class="bottom-nav__hint">{{ item.hint }}</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const items = [
  { to: '/', label: '首页', hint: '精选' },
  { to: '/spots', label: '景点', hint: '攻略' },
  { to: '/routes', label: '行程', hint: '推荐' }
]
</script>
