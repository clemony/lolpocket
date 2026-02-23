<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const {
  side = "right",
  class: className,
  link,
  summoner,
} = defineProps<{
  summoner: Summoner | Player
  class?: HTMLAttributes["class"]
  side?: Side
  link?: boolean
}>()
</script>

<template>
  <Tooltip
    :key="summoner?.puuid"
    :ui="{ trailingIcon: 'inline align-bottom leading-none' }"
    :disabled="!summoner"
    :label="`${summoner?.name} #${summoner?.tag}`"
    :img="getSummonerIcon(summoner?.icon)"
    trailing-icon="i-chain"
    :side
    :side-offset="['right', 'left'].includes(side) ? 28 : 14">
    <slot />
  </Tooltip>
</template>
