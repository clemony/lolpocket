<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const ix = useIndexStore()

const keystone = computed (() => {
  const id = player?.perks?.keystone
  return ix.runes.find(r => r.id == id)
})

const secondary = computed (() => {
  return ix.runes.find(p => p.id == player.perks.secondary).path
})
</script>

<template>
  <div class="" :class="cn('grid h-14 w-8 items-start justify-center mx-1 -mt-0.5  **:[&_img]:shrink-0', className)">
    <img :src="`/img/runes/${keystone?.path}/${keystone?.key}.webp`" class="!h-6.25  w-auto drop-shadow-sm !shrink-0" />

    <img :src="`/img/runes/${secondary}.webp`" class=" h-4.5 -mt-1  w-auto mx-auto drop-shadow-sm " :class="{ '!h-4': secondary.toLowerCase() == 'inspiration' }" />
  </div>
</template>