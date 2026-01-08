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
    <img
      v-for="spell in player?.spells"
      :key="spell"
      :data-id="spell"
      data-tip="spell"
      :alt="String(spell)"
      :src="`/img/spells/${spell}.webp`"
      class="
        size-6.5 rounded-md shadow-sm ring-bc/60 drop-shadow-sm transition-all
        duration-300 hover:scale-105 hover:ring
      " />
  </div>
</template>
