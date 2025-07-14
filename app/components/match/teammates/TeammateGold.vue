<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const cs = computed (() => {
  return player.totalMinionsKilled + player.neutralMinionsKilled + player.totalEnemyJungleMinionsKilled + player.totalAllyJungleMinionsKilled
})
</script>

<template>
  <div v-tippy="`${player.goldSpent.toLocaleString()}g Spent`" class="" :offset="[2, -2]" :class="cn('flex flex-col gap-1 *:text-1 py-1 *:leading-none font-medium items-end justify-start size-full **:text-nowrap', className)">
    <p>
      {{ cs }}
      <span class="font-mono"> CS</span>
    </p>

    <p>
      {{ player.goldEarned.toLocaleString() }}
      <span class="font-mono"> G</span>
    </p>
  </div>
</template>