<script lang="ts" setup>
import type { Region } from "#shared/types"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
const { match } = defineProps<{
  match: MatchData
}>()
</script>

<template>
  <div
    class="ml-2 grid w-full max-w-90 grid-flow-col grid-cols-2 grid-rows-5 items-center gap-x-4 justify-self-end overflow-hidden py-4 *:text-pc">
    <SummonerTooltip
      v-for="player in match.participants"
      :key="player.puuid"
      link
      class="h-fit w-full"
      :summoner="player">
      <UButton
        :label="player.name"
        :avatar="{
          src: `/img/champion/${player?.championId}.webp`,
        }"
        :ui="{
          label:
            'grow-0 truncate text-pc normal-case group-hover/link:underline',
          base: 'group/link h-6 max-h-6! w-full',
          leadingAvatar: 'size-4',
        }"
        variant="link"
        @click.stop="
          navigateTo(`/${match.regionId}/${player.name}_${player.tag}`)
        " />
    </SummonerTooltip>
  </div>
</template>
