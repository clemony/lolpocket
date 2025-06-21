<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
}>()

const player = computed (() => {
  return props.player
})

const cs = computed (() => {
  return player.value.totalMinionsKilled + player.value.neutralMinionsKilled + player.value.totalEnemyJungleMinionsKilled + player.value.totalAllyJungleMinionsKilled
})
</script>

<template>
  <div
    class="" :offset="[2, -2]"
    :class="cn('flex flex-col *:py-0.5 *:text-1 py-1 *:leading-none font-medium items-end justify-start size-full **:text-nowrap', props.class)">
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