<script lang="ts" setup>
import { queueIndex } from "#shared/constants/misc/queue-index"
import MatchOutcome from "~/domain/summoner/components/history/match/ui/MatchOutcome.vue"

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <!-- <div class="flex h-full w-34 shrink-0 items-center gap-2 py-4">
    <div
      class="flex size-full flex-col justify-start self-center **:antialiased **:select-none">
      <MatchOutcome
        :class="
          cn(
            'text-xl! text-white/86'
          )
        "
        :stats="player" />
      <div class="flex w-full flex-col font-semibold opacity-76 *:text-left">
        <p
          class="flex items-center gap-1.5 text-left text-lg font-bold text-nowrap">
          {{ queueIndex[match?.queueId] || mapNameById(match?.mapId) || "" }}
        </p>

        <p
          class="mt-1 flex flex-col justify-center text-start text-[0.92rem]! leading-4">
          <span>
            {{ mapNameById(match.mapId) }}
          </span>
          <span class="capitalize">
            {{ formatTimeAgo(match.gameEndTimestamp) }}
          </span>
        </p>
        <p class="font-bold tracking-wide">
          {{ match.gameDuration.toFixed(2).toString().replace(".", ":") }}
        </p>
      </div>
    </div>
  </div> -->
  <div
    class="inline-flex size-full justify-start self-center **:antialiased **:select-none">
    <MatchOutcome :class="cn('text-xl! text-white/86')" :stats="player" />
    <div class="inline-flex w-full font-semibold opacity-76 *:text-left">
      <p
        class="flex items-center gap-1.5 text-left text-lg font-bold text-nowrap">
        {{ queueIndex[match?.queueId] || mapNameById(match?.mapId) || "" }}
      </p>

      <p
        class="mt-1 flex flex-col justify-center text-start text-[0.92rem]! leading-4">
        <span>
          {{ mapNameById(match.mapId) }}
        </span>
        <span class="capitalize">
          {{ formatTimeAgo(match.gameEndTimestamp) }}
        </span>
      </p>
      <p class="font-bold tracking-wide">
        {{ match.gameDuration.toFixed(2).toString().replace(".", ":") }}
      </p>
    </div>
  </div>
</template>
