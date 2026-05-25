<template>
  <header class="app-header">
    <button v-if="back" class="icon-btn" type="button" @click="router.back()">
      返回
    </button>
    <div v-else class="header-spacer"></div>
    <div class="app-header__title">
      <p class="app-header__eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
    </div>
    <div class="header-spacer"></div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  },
  eyebrow: {
    type: String,
    default: 'Beijing Guide'
  },
  back: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
</script>
