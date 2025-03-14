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
  <div class="" :class="cn('flex items-center gap-2 mr-6 -mt-1.5 self-center  flex-col', props.class)">
    <img :src="`/img/runes/${paths.primary}/${keystone}.webp`" class="size-8 drop-shadow-sm" />
    <img :src="`/img/runes/${paths.secondary}.webp`" class="h-6.5 w-auto drop-shadow-sm" />
  </div>
</template>