<script lang="ts" setup>
import type { BadgeProps } from "@nuxt/ui"

const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('flex items-center gap-1', className)">
    <LazyUBadge
      v-if="
        player.stats.kills + player.stats.assists / player.stats.deaths ===
        Infinity
      "
      :ui="{ leadingIcon: 'ml-px scale-120 **:stroke-[1.8]' }"
      label="kda"
      icon="i-infinity"
      color="ad"
      size="2xs"
      class="" />

    <Tooltip v-else arrow label="KDA" class="badge-tooltip-hover">
      {{ player.stats.kda }}&VeryThinSpace;:&VeryThinSpace;1
    </Tooltip>

    <Tooltip arrow label="Kill participation" class="badge-tooltip-hover">
      {{ player.stats.kp }}%
    </Tooltip>
  </div>
</template>
