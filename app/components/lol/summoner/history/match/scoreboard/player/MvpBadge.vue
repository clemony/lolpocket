<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchDataCurrentPlayer
}>()
const lpScore = computed (() => match.ranking.findIndex(p => p === player.puuid) + 1)
</script>

<template>
  <Badge
    v-if="
      player.puuid === match.mvp || player.puuid === match.ace
    "
    size="5"
    :class="
      cn('-mt-px gap-1 px-1! text-0! font-bold tracking-wide text-white shadow-xs **:leading-0',
         {
           'border-g/40 bg-g ': player.puuid === match.mvp,
           'bg-sorcery border-shade-sorcery/3': player.puuid === match.ace,
         },
      )
    ">
    {{ player.puuid === match.mvp ? "MVP" : "ACE" }}
  </Badge>

  <Badge
    v-else
    size="5"
    class="-mt-px px-1 text-1! leading-0 font-normal shadow-xs">
    {{ lpScore }}{{ formatNumberPosition(lpScore) }}
  </Badge>
</template>