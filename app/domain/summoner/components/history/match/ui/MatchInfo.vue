<script lang="ts" setup>
import { queueIndex } from "#shared/constants/misc/queue-index"
import MatchOutcome from "~/domain/summoner/components/history/match/ui/MatchOutcome.vue"

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <div
    class="relative flex h-full w-[100px] min-w-[100px] shrink-0 basis-1 flex-col items-end justify-center self-center py-4 **:antialiased **:select-none">
    <MatchOutcome
      :class="cn('text-end text-xl! text-white/86')"
      :stats="player" />
    <div
      class="flex w-full flex-col items-end gap-0.5 font-semibold opacity-76 *:text-end">
      <p
        class="pointer-events-auto inline-flex items-center gap-1.5 text-left text-lg font-bold text-nowrap">
        <Tooltip
          arrow
          :content="{
            side: 'top',
          }"
          :text="mapNameById(match.mapId)"
          :follow-cursor="false">
          <div class="size-3.5">
            <Icon :name="`i-lp-${match.mapId.toString()}`" class="size-3.5" />
          </div>
        </Tooltip>
        {{ queueIndex[match?.queueId] || mapNameById(match?.mapId) || "" }}
      </p>

      <span class="text-[0.92rem]! leading-4 capitalize tabular-nums">
        {{ formatTimeAgo(match.gameEndTimestamp) }}
      </span>

      <p class="text-[0.92rem]! leading-4 font-semibold tabular-nums">
        {{ match.gameDuration.toFixed(2).toString().replace(".", ":") }}
      </p>
    </div>
  </div>
</template>
