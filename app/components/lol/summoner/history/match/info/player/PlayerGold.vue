<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const cs = computed(() => {
  return player.totalMinionsKilled + player.neutralMinionsKilled
})
</script>

<template>
  <div
    class=""
    :offset="[2, -2]"
    :class="
      cn('flex size-full flex-col items-end justify-start py-1 font-medium *:py-0.5 *:text-1 *:leading-none **:text-nowrap',
        className,
      )
    ">
    <p
      v-tippy="'Minions Farmed'"
      class="flex items-center gap-1 decoration-1 hover:underline">
      {{ cs }}
      <span class="font-mono">CS</span>
    </p>

    <p
      v-tippy="'Gold Earned'"
      class="flex items-center gap-1 decoration-1 hover:underline">
      {{ player.goldEarned.toLocaleString() }}
      <span class="font-mono">G</span>
    </p>
  </div>
</template>
