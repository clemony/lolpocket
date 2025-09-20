<script lang="ts" setup>
import { spellIndex } from '#shared/appdata'

const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const spells = computed(() => {
  return {
    sum1: spellIndex.find(s => s.id === player.summoner1Id).name,
    sum2: spellIndex.find(s => s.id === player.summoner2Id).name,
  }
})
console.log('🌱 - player.summoner1Id:', player.summoner1Id)
</script>

<template>
  <div
    class=""
    :class="cn('flex items-center gap-1 flex-col shrink-0', className)">
    <img
      v-tippy="{ content: spells.sum1.toString(), placement: 'right' }"
      :alt="spells.sum1.toString()"
      :src="`/img/spells/${spells.sum1}.webp`"
      class="size-8 drop-shadow-sm shadow-sm rounded-md hover-ring" />

    <img
      v-tippy="{ content: spells.sum2.toString(), placement: 'right' }"
      :alt="spells.sum2.toString()"
      :src="`/img/spells/${spells.sum2}.webp`"
      class="size-8 shadow-sm rounded-md drop-shadow-sm hover-ring" />
  </div>
</template>
