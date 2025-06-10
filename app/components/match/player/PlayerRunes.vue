<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
}>()

const player = computed (() => {
  return props.player
})

const { playerKeystone, playerPaths } = await useRunes(player)
</script>

<template>
  <div class="" :class="cn('flex flex-col size-full place-items-center  -ml-1 gap-2  max-w-10 min-w-10  **:[&_img]:shrink-0', props.class)">
    <img v-if="playerKeystone" :src="`/img/runes/${playerKeystone.path}/${playerKeystone.key}.webp`" class="h-8 w-auto drop-shadow-sm !shrink-0" />

    <img v-if="playerPaths" :src="`/img/runes/${playerPaths}.webp`" class="h-6   w-auto drop-shadow-sm " :class="{ '!h-5.5': playerPaths == 'inspiration' }" />
  </div>
</template>