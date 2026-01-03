<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { stats, summoner } = usePlayerStatsInject()
console.log('🥸 - stats:', stats)
</script>

<template>
  <div
    :class="cn('', className)">
  </div>
</template>
