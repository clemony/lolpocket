<script lang="ts" setup>
const { class: className, icon = true, player } = defineProps<{
  class?: HTMLAttributes['class']
  player: Player
  icon?: boolean
}>()
</script>

<template>
  <label
    :data-type="`${player.stats.minionsKilled} cs
       ${player.stats.allyJungleMinions} ally jungle
    ${player.stats.enemyJungleMinions} enemy jungle
        ┄┄┄┄┄┄┄┄
        ${(player.stats.totalCs)} total cs
    ${player.stats.csPerMin} / min`"
    :class="cn('text-badge-xs', className)">
    <Icons
      v-if="icon === true"
      size="c-3.5"
      name="lol:minion"
      class="size-3.5 opacity-85" />

    <span class="hidden @min-700:flex">
      {{ player.stats.totalCs }}
    </span>
  </label>
</template>