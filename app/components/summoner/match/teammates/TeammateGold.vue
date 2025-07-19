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
  <div v-tippy="`${player.goldSpent.toLocaleString()}g Spent`" :class="cn(' h-full  grid items-center *:text-1 py-2 *:leading-0  font-medium justify-items-end  justify-end  **:text-nowrap', className)">
    <p>
      {{ cs }}
      &nbsp;CS
    </p>

    <p>
      {{ player.goldEarned.toLocaleString() }}
      &nbsp;G
    </p>
  </div>
</template>