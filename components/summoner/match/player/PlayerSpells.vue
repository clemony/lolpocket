<script lang="ts" setup>
const props = defineProps<{
  match: any
  player: any
  class?: HTMLAttributes['class']
}>()
const ds = useDataStore()

const match = computed (() => {
  return props.match
})

const player = computed (() => {
  return props.player
})

const spells = computed (() => {
  return {
    sum1: summonerSpells.find(s => s.id == player.value.summoner1Id),
    sum2: summonerSpells.find(s => s.id == player.value.summoner2Id),
  }
})
</script>

<template>
  <div class="" :class="cn('flex items-center gap-1 flex-col', props.class)">
    <img v-tippy="spells.sum1.name" :src="`/img/spells/${spells.sum1.name.toLowerCase()}.webp`" class="size-8 shadow-sm rounded-md" />
    <img v-tippy="spells.sum2.name" :src="`/img/spells/${spells.sum2.name.toLowerCase()}.webp`" class="size-8 shadow-sm rounded-md" />
  </div>
</template>