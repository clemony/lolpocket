<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const { playerKeystone, playerPaths } = await useRunes(computed(() => player))
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col size-full place-items-center drop-shadow-sm   -ml-1 gap-2  max-w-10 min-w-10  **:[&_img]:shrink-0',
        className,
      )
    ">
    <img
      v-if="playerKeystone"
      v-tippy="{ content: playerKeystone.name, placement: 'right' }"
      :alt="playerKeystone.name"
      :src="`/img/runes/${playerKeystone.path}/${playerKeystone.id}.webp`"
      class="h-8 w-auto drop-shadow-xs !shrink-0  hover:scale-120 transition-all duration-300 " />

    <img
      v-if="playerPaths"
      v-tippy="{ content: playerPaths, placement: 'right' }"
      :alt="playerPaths"
      :src="`/img/paths/${playerPaths}.webp`"
      class="h-6 w-auto   hover:scale-120 transition-all duration-300 "
      :class="{ '!h-5.5': playerPaths === 'inspiration' }" />
  </div>
</template>
