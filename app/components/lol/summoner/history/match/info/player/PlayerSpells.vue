<script lang="ts" setup>

const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const spells = computed(() => {
  return {
    sum1: spellbook[player?.summoner1Id].name,
    sum2: spellbook[player?.summoner2Id].name,
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
      class="ring-bc/60 size-8 rounded-md shadow-sm  drop-shadow-sm transition-all duration-300 hover:scale-105 hover:ring" />

    <img
      v-tippy="{ content: spells?.sum2, placement: 'right' }"
      :alt="String(spells?.sum2)"
      :src="`/img/spells/${spells?.sum2}.webp`"
      class="ring-bc/60 size-8 rounded-md shadow-sm  drop-shadow-sm transition-all duration-300 hover:scale-105 hover:ring" />
  </div>
</template>
