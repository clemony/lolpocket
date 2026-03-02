<script lang="ts" setup>
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="ml-2 grid w-full max-w-90 grid-flow-col grid-cols-2 grid-rows-5 items-center justify-self-end overflow-hidden py-4 *:text-pc">
    <SummonerTooltip
      v-for="player in match.participants"
      :key="player.puuid"
      link
      class="h-4.5 w-full"
      :summoner="player">
      <UButton
        :label="player.name"
        :avatar="{
          src: `/img/champions/${player?.championId}.webp`,
        }"
        :ui="{
          label: 'text-pc normal-case',
          base: 'w-full',
          leadingAvatar: 'ds-2xs',
        }"
        :to="buildSummonerRootPath(player)"
        size="3xs"
        variant="link"
        @click.stop />
    </SummonerTooltip>
  </div>
</template>
