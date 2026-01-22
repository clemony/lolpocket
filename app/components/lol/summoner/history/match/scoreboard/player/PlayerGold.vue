<script lang="ts" setup>
const { class: className, icon = true, player } = defineProps<{
  class?: HTMLAttributes['class']
  player: Player
  icon?: boolean
}>()
</script>

<template>
  <label
    :data-type="`${player.stats.goldEarned.toLocaleString()} g
       ${player.stats.goldPerMin} / min`"
    :class="cn('text-badge-xs align-baseline', className)">
    <Icons
      v-if="icon === true"
      size="c-3.5"
      name="lol:gold"
      class="inline size-3.25 translate-y-px opacity-75" />

    <span class="hidden @min-700:flex">{{ roundDecimal(player.stats.goldEarned / 1000) }}k</span>
  </label>
</template>
