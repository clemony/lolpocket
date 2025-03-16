<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
}>()
const ds = useDataStore()

const player = computed (() => {
  return props.player
})

const keystone = computed (() => {
  const id = player.value.perks.styles[0].selections[0].perk

  const find = ds.runes.find(r => r.id == id)
  return find.name.replace(/\s/g, '')
})

const paths = computed (() => {
  const primary = player.value.perks.styles[0].style
  const secondary = player.value.perks.styles[1].style
  return {
    primary: ds.paths.find(p => p.id == primary).name.toLowerCase(),
    secondary: ds.paths.find(p => p.id == secondary).name,
  }
})
</script>

<template>
  <div class="" :class="cn('grid h-14 w-8 items-start justify-center mx-1 -mt-0.5  **:[&_img]:shrink-0', props.class)">
    <img :src="`/img/runes/${paths.primary}/${keystone}.webp`" class="!h-6.25  w-auto drop-shadow-sm !shrink-0" />

    <img :src="`/img/runes/${paths.secondary}.webp`" class=" h-4.5 -mt-1  w-auto mx-auto drop-shadow-sm " :class="{ '!h-4': paths.secondary.toLowerCase() == 'inspiration' }" />
  </div>
</template>