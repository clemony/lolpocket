<script lang="ts" setup>
const { class: className, stats } = defineProps<{
  class?: HTMLAttributes['class']
  stats: Record<string, number> | MatchTeam | PlayerStats
}>()
</script>

<template>
  <span :class="cn('inline align-middle text-sm leading-0 font-bold tracking-tight text-nowrap whitespace-nowrap **:tracking-tight', className)">
    {{ stats.kills }}
    /
    <span class="light:text-shade-domination/30 dark:text-tint-domination/20 dark:saturate-150">
      {{ stats.deaths }}
    </span>
    /
    {{ stats.assists }}
  </span>
</template>