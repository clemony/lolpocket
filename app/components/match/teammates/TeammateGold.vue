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
  <div v-tippy="`${player.goldSpent.toLocaleString()}g Spent`" class="" :offset="[2, -2]" :class="cn('flex flex-col gap-1 *:text-1 py-1 *:leading-none font-medium items-end justify-start size-full **:text-nowrap', props.class)">
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