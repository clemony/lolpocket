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
  <div class="" :class="cn('flex flex-col size-full place-items-center  -ml-1 gap-2  max-w-10 min-w-10  **:[&_img]:shrink-0', props.class)">
    <img :src="`/img/runes/${paths.primary}/${keystone}.webp`" class="h-8 w-auto drop-shadow-sm !shrink-0" />

    <img :src="`/img/runes/${paths.secondary}.webp`" class="h-6   w-auto drop-shadow-sm " :class="{ '!h-5.5': paths.secondary.toLowerCase() == 'inspiration' }" />
  </div>
</template>