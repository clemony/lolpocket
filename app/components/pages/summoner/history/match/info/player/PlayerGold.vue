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
      cn(
        'flex flex-col *:py-0.5 *:text-xxs py-1 *:leading-none font-medium items-end justify-start size-full **:text-nowrap',
        className,
      )
    ">
    <p
      v-tippy="'Minions Farmed'"
      class="flex gap-1 items-center hover:underline decoration-1">
      {{ cs }}
      <span class="font-mono">CS</span>
    </p>

    <p
      v-tippy="'Gold Earned'"
      class="flex gap-1 items-center hover:underline decoration-1">
      {{ player.goldEarned.toLocaleString() }}
      <span class="font-mono">G</span>
    </p>
  </div>
</template>
