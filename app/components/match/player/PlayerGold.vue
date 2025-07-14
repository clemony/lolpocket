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
  <div
    class="" :offset="[2, -2]"
    :class="cn('flex flex-col *:py-0.5 *:text-1 py-1 *:leading-none font-medium items-end justify-start size-full **:text-nowrap', className)">
    <p
      v-tippy="'Minions Farmed'"
      class="flex gap-1 items-center hover:underline decoration-1">
      {{ cs }}
      <span class="font-mono"> CS</span>
    </p>

    <p
      v-tippy="'Gold Spent'"
      class="flex gap-1 items-center hover:underline decoration-1">
      {{ player.goldSpent.toLocaleString() }}
      <span class="font-mono"> G</span>
    </p>

    <p
      v-tippy="'Gold Earned'"
      class="flex gap-1 items-center hover:underline decoration-1">
      {{ player.goldEarned.toLocaleString() }}
      <span class="font-mono"> G</span>
    </p>
  </div>
</template>