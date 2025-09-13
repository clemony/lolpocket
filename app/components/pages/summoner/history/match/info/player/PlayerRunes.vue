<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
const ix = useIndexStore()
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
      :src="`/img/runes/${playerKeystone.path}/${playerKeystone.id}.webp`"
      class="h-8 w-auto drop-shadow-xs !shrink-0" />

    <img
      v-if="playerPaths"
      v-tippy="{ content: playerPaths, placement: 'right' }"
      :src="`/img/runes/${playerPaths}.webp`"
      class="h-6 w-auto dst"
      :class="{ '!h-5.5': playerPaths == 'inspiration' }" />
  </div>
</template>
