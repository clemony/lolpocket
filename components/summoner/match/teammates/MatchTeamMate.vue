<script lang="ts" setup>
const props = defineProps<{
  player: any
}>()

const player = computed (() => {
  return props.player
})
</script>

<template>
  <div class="grid grid-cols-[1.3fr_repeat(3,1fr)] w-full items-center gap-3 h-13">
    <div class="size-full flex gap-3 items-center">
      <ChampionImage :champ-name="player.championName" :size="12" />
      <div class="overflow-hidden">
        <p class="font-semibold  text-nowrap truncate">
          {{ player.riotIdGameName }}
        </p>
        <p class="font-medium text-nowrap truncate opacity-60">
          #{{ player.riotIdTagline }}
        </p>
      </div>
    </div>
    <div class="flex items-start self-start gap-1 pt-1.5">
      <KDA :kills="player.kills" :deaths="player.deaths" :assists="player.assists" class="*:text-1 items-start  **:text-bc *:first:gap-0 *:first:font-medium *:leading-none *:first:tracking-tight gap-2" />
    </div>

    <PlayerRunes :player="player" class="gap-1 *:first:size-7 *:last:h-5" />
    <MatchItems v-if="player && player.item0" :player="player" class="size-9 *:size-9"  wrapper-class="gap-1"/>
  </div>
</template>