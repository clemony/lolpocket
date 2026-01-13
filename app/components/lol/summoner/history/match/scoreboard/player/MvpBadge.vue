<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchDataCurrentPlayer
}>()
const lpScore = computed (() => match.ranking.findIndex(p => p === player.puuid) + 1)
</script>

<template>
  <div class="flex w-10 items-center justify-end">
    <Badge
      v-if="
        player.puuid === match.mvp || player.puuid === match.ace
      "
      :class="
        cn('-mt-px h-4.5! gap-1 px-1.5! text-0! font-bold tracking-wide text-white shadow-xs **:leading-0',
           {
             'border-g/40 bg-as ': player.puuid === match.mvp,
             'bg-domination border-shade-domination/3': player.puuid === match.ace,
           },
        )
      ">
      {{ player.puuid === match.mvp ? "MVP" : "ACE" }}
    </Badge>

    <div
      v-else
      size="5"
      class="-mt-px border-0 px-1 text-1! leading-0 font-normal">
      {{ lpScore }}{{ formatNumberPosition(lpScore) }}
    </div>
  </div>
</template>