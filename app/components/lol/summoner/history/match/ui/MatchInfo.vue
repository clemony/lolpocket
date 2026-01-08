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
      class="text-start text-5 font-bold text-nowrap text-white/86 uppercase dst">
      {{ match.player.win ? "Win" : "Loss" }}
    </h3>

    <div
      class="flex w-full flex-col font-semibold opacity-76 *:text-left">
      <p
        class="flex items-center gap-1.5 text-left text-4 font-bold text-nowrap">
        {{ match.queue?.description || match.queue?.map?.name || "" }}
      </p>

      <p
        class="user-select-text! mt-1 flex flex-col justify-center text-start text-[0.92rem]!
 leading-4">
        <span>
          {{ match.queue?.map?.name }}
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