<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class=""
    :class="cn('items-between flex shrink-0 flex-col gap-1.5', className)">
    <Spell
      v-for="spell in player?.spells"
      :id="spell"
      :key="spell"
      class="size-6.5 rounded-md ring-pc/60 transition-all duration-300 hover:scale-105 hover:ring" />
  </div>
</template>
