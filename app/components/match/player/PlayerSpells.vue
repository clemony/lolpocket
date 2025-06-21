<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
}>()
const player = computed (() => {
  return props.player
})
const ix = useIndexStore()

const spells = computed (() => {
  return {
    sum1: ix.spellNameById(player.value.summoner1Id),
    sum2: ix.spellNameById(player.value.summoner2Id),
  }
})
</script>

<template>
  <div class="" :class="cn('flex items-center gap-1 flex-col shrink-0', props.class)">
    <img v-tippy="spells.sum1" :src="`/img/spells/${spells.sum1}.webp`" class="size-8 shadow-sm rounded-md" />

    <img v-tippy="spells.sum2" :src="`/img/spells/${spells.sum2}.webp`" class="size-8 shadow-sm rounded-md" />
  </div>
</template>