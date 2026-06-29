<script lang="ts" setup>
import KDA from "~/domain/summoner/components/history/ui/KDA.vue"

const {
  class: className,
  match,
  player,
} = defineProps<{
  player: Player
  class?: HTMLAttributes["class"]
  match: MatchData
}>()
</script>

<template>
  <div
    class="mt-1 flex items-center gap-2 text-start text-xs/4 font-medium text-nowrap whitespace-nowrap lowercase tabular-nums">
    <span class="gap-0 *:tracking-wide">
      {{ player.stats.kp }}%&hairsp;
      <span>KP</span>
    </span>
    <span
      v-if="!player.stats.deaths"
      class="flex items-center gap-1 truncate font-medium tracking-tight">
      <Icon class="size-4.5 **:stroke-[1.6]" name="proicons:infinity" />
      KDA
    </span>

    <span v-else class="gap-0 font-medium *:tracking-wide">
      {{ player.stats.kda }}
      <span>&hairsp;KDA</span>
    </span>
  </div>
</template>
