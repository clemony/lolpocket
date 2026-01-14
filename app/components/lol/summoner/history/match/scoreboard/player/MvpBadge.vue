<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchDataCurrentPlayer
}>()
const lpScore = computed (() => match.ranking.findIndex(p => p === player.puuid) + 1)
</script>

<template>
  <div class="flex w-10 items-center">
    <Badge
      v-if="
        player.puuid === match.mvp || player.puuid === match.ace
      "
      :class="
        cn('light:text-white h-4.5! gap-px px-1.5! text-0! font-bold tracking-wide shadow-xs **:leading-0 dark:text-b1',
           {
             'light:border-g/40 light:bg-as dark:bg-precision dark:border-precision/60': player.puuid === match.mvp,
             'bg-domination border-shade-domination/3': player.puuid === match.ace,
           },
        )
      ">
      {{ player.puuid === match.mvp ? "MVP" : "ACE" }}
    </Badge>

    <div
      v-else
      class="text-1! leading-0 font-normal">
      {{ lpScore }}{{ formatNumberPosition(lpScore) }}
    </div>
  </div>
</template>