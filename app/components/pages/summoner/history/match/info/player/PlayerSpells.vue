<script lang="ts" setup>
import { spellIndex } from '#shared/appdata'

const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const spells = computed(() => {
  return {
    sum1: spellIndex.find(s => s.id === player?.summoner1Id).name,
    sum2: spellIndex.find(s => s.id === player?.summoner2Id).name,
  }
})
</script>

<template>
  <div
    class=""
    :class="cn('flex items-center gap-1 flex-col shrink-0', className)">
    <img
      v-tippy="{ content: spells?.sum1, placement: 'right' }"
      :alt="String(spells?.sum1)"
      :src="`/img/spells/${spells?.sum1}.webp`"
      class="size-8 drop-shadow-sm shadow-sm rounded-md  hover:ring hover:scale-105 transition-all duration-300 ring-bc/60" />

    <img
      v-tippy="{ content: spells?.sum2, placement: 'right' }"
      :alt="String(spells?.sum2)"
      :src="`/img/spells/${spells?.sum2}.webp`"
      class="size-8 shadow-sm rounded-md drop-shadow-sm  hover:ring hover:scale-105 transition-all duration-300 ring-bc/60" />
  </div>
</template>
