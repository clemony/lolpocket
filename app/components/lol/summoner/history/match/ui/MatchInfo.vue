<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()
</script>

<template>
  <div
    class="flex h-fit w-30 shrink-0 flex-col justify-start self-center **:antialiased
 **:select-none">
    <h3
      :class="cn('text-start text-5! font-bold text-nowrap text-white/86 uppercase dst', { 'text-bc/30': match.player?.win === 'remake' })">
      {{ match.player?.win === 'remake' ? 'Remake' : match.player.win ? "Victory" : "Defeat" }}
    </h3>

    <div
      class="flex w-full flex-col font-semibold opacity-76 *:text-left">
      <p
        class="flex items-center gap-1.5 text-left text-4 font-bold text-nowrap">
        {{ queueIndex[match?.queueId] || mapNameById(match?.mapId) || "" }}
      </p>

      <p
        class="user-select-text! mt-1 flex flex-col justify-center text-start text-[0.92rem]!
 leading-4">
        <span>
          {{ mapNameById(match.mapId) }}
          <!-- {{ match.matchId }} -->
        </span>
        <span class="capitalize">
          {{ formatTimeAgo(match.gameEndTimestamp) }}
        </span>
      </p>
      <p class="font-bold tracking-wide">
        {{
          (match.gameDuration / 60).toFixed(2).toString().replace(".", ":")
        }}
      </p>
    </div>
  </div>
</template>