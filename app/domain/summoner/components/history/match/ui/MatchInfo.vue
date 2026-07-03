<script lang="ts" setup>
import { queueIndex } from "#shared/constants/misc/queue-index"
import MatchOutcome from "~/domain/summoner/components/history/match/ui/MatchOutcome.vue"

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <div class="flex h-full shrink-0 basis-1 items-center gap-2 py-4">
    <div
      class="flex size-full flex-col justify-start self-end **:antialiased **:select-none">
      <MatchOutcome
        :class="cn('text-end text-xl! text-white/86')"
        :stats="player" />
      <div
        class="flex w-full flex-col items-end gap-px font-semibold opacity-76 *:text-end">
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
  </div>
  <!--  <div
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
  </div>-->
</template>
