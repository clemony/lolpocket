<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchData
}>()
</script>

<template>
  <div class="flex w-10 items-center">
    <LazyUBadge
      v-if="player.lpScore.score === 1 || player.lpScore.ace"
      :class="
        cn(
          'h-4.5! gap-px px-1.5! text-2xs! font-bold tracking-wide shadow-xs **:leading-0 dark:text-p0 light:text-white',
          {
            'dark:border-pre/60 dark:bg-pre light:border-g/40 light:bg-as':
              player.lpScore.mvp,
            'border-shade-domination/3 bg-dom': player.lpScore.ace,
          },
        )
      ">
      {{ player.lpScore.mvp ? "MVP" : "ACE" }}
    </LazyUBadge>

    <div v-else class="text-xs! leading-0 font-normal">
      {{ player.lpScore.score }}{{ formatNumberPosition(player.lpScore.rank) }}
    </div>
  </div>
</template>
