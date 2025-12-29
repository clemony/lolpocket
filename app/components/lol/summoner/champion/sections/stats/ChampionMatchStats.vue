<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const statRef = useTemplateRef('statRef')

const { isActive, progressBetween } = useScrollSection(
  'stats',
  statRef
)

const { stats, summoner } = usePlayerStatsInject()
console.log('🥸 - stats:', stats)
</script>

<template>
  <div
    id="stats"
    ref="statRef"

    :class="cn('', className)">
  </div>
</template>
