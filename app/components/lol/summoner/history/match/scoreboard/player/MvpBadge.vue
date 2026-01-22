<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()
</script>

<template>
  <div class="flex w-10 items-center">
    <Badge
      v-if="
        player.lpScore.score === 1 || player.lpScore.ace
      "
      :class="
        cn('text-xxs! h-4.5! gap-px px-1.5! font-bold tracking-wide shadow-xs **:leading-0 dark:text-b1 light:text-white',
           {
             'light:border-g/40 light:bg-as dark:bg-precision dark:border-precision/60': player.lpScore.mvp,
             'bg-domination border-shade-domination/3': player.lpScore.ace,
           },
        )
      ">
      {{ player.lpScore.mvp ? "MVP" : "ACE" }}
    </Badge>

    <div
      v-else
      class="text-xs! leading-0 font-normal">
      {{ player.lpScore.score }}{{ formatNumberPosition(player.lpScore.rank) }}
    </div>
  </div>
</template>