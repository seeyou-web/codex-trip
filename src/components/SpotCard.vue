<template>
  <article class="spot-card" @click="router.push(`/spots/${spot.id}`)">
    <div class="spot-card__cover">
      <span class="spot-card__badge">{{ badge }}</span>
      <h3>{{ spot.name }}</h3>
      <p>{{ spot.cover }}</p>
    </div>
    <div class="spot-card__body">
      <div class="spot-card__tags">
        <span v-for="tag in spot.tags" :key="tag">{{ tag }}</span>
      </div>
      <p class="spot-card__desc">{{ spot.desc }}</p>
      <div class="spot-card__meta">
        <span>{{ spot.duration }}</span>
        <span>{{ spot.ticket }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  spot: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const badge = computed(() => props.spot.category)
</script>
