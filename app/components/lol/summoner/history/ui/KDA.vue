<script lang="ts" setup>
const { class: className, stats } = defineProps<{
  class?: HTMLAttributes['class']
  stats: Record<string, number> | MatchTeam | PlayerStats
}>()
</script>

<template>
  <span :class="cn('inline align-middle text-2 leading-0 font-bold tracking-tight text-nowrap whitespace-nowrap **:tracking-tight', className)">
    {{ stats.kills }}
    /
    <span class="text-shade-domination/30">
      {{ stats.deaths }}
    </span>
    /
    {{ stats.assists }}
  </span>
</template>