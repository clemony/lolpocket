<script lang="ts" setup>
const { class: className, stats } = defineProps<{
  class?: HTMLAttributes['class']
  stats: Player | MatchTeam
}>()
</script>

<template>
  <h3
    :class="
      cn('dst text-start font-bold text-nowrap uppercase', className, {
        'text-bc/30': stats?.win === 'remake',
      })
    "
  >
    {{
      stats?.win === "remake" ? "Remake"
      : stats.win ? "Victory"
        : "Defeat"
    }}
  </h3>
</template>
