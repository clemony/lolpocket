<script lang="ts" setup>
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
const { match } = defineProps<{
  match: MatchData
}>()

const route = useRoute()
</script>

<template>
  <div
    class="ml-2 grid w-full max-w-90 grid-flow-col grid-cols-2 grid-rows-5 items-center gap-x-4 justify-self-end overflow-hidden py-4 *:text-pc">
    <SummonerTooltip
      v-for="player in match.participants"
      :key="player.puuid"
      link
      class="h-4.75 w-full"
      :summoner="player">
      <UButton
        :label="player.name"
        :avatar="{
          src: `/img/champion/${player?.championId}.webp`
        }"
        :ui="{
          label: 'grow-0 truncate text-pc normal-case',
          base: 'btn-2xs w-full',
          leadingAvatar: 'size-4'
        }"
        :to="buildSummonerRootPath(player)"
        variant="link"
        @click.stop />
    </SummonerTooltip>
  </div>
</template>
