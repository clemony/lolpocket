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
        `
          -ml-1 flex size-full max-w-10 min-w-10 flex-col place-items-center
          gap-2 drop-shadow-sm
          **:[&_img]:shrink-0
        `,
        className,
      )
    ">
    <img
      v-if="playerKeystone"
      v-tippy="{ content: playerKeystone.name, placement: 'right' }"
      :alt="playerKeystone.name"
      :src="`/img/runes/${playerKeystone.id}.webp`"
      class="
        h-8 w-auto shrink-0! drop-shadow-xs transition-all duration-300
        hover:scale-120
      " />

    <img
      v-if="playerPaths"
      v-tippy="{ content: playerPaths, placement: 'right' }"
      :alt="playerPaths"
      :src="`/img/paths/${playerPaths}.webp`"
      class="
        h-6 w-auto transition-all duration-300
        hover:scale-120
      "
      :class="{ 'h-5.5!': playerPaths === 'inspiration' }" />
  </div>
</template>
