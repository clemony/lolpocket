<script lang="ts" setup>
const { class: className, isSR, player } = defineProps<{
  player: Player
  isSR: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- items -->
  <div :class="cn('flex justify-between gap-1', className)">
    <div
      :class="cn('grid shrink-0 grid-cols-6! grid-rows-1! items-center gap-1! self-center')">
      <Item
        v-for="item in player.items.slots"
        :id="item"
        :key="item"
        size="sq-7.5"
        :class="cn('active-img', {
          'no-img': !item })" />
    </div>
    <div class="flex items-center gap-1">
      <Item
        :id="player.items.role ? player.items.role : isSR ? roleItems[player.role] : null"
        size="c-7.5"
        :class="cn('active-img', {
          'no-img ': !player.items.role && !isSR,
          'pointer-events-none brightness-115 contrast-102': !player.items.role,
          'brightness-150': player.role === 'support' })" />

      <div class="relative size-7">
        <Item
          :id="player.items.trinket"
          size="c-7"
          :class="cn('active-img', { 'no-img': !player.items.trinket })" />
        <!-- vision -->
        <span
          class="absolute -top-1 -right-1.5 badge origin-left badge-neutral bg-neutral/80 px-0.75 badge-xs text-[0.76rem]! font-bold shadow-sm backdrop-blur *:rounded-full"
          :data-tip="`Vision Score - ${player.vision.visionScore}
                ${player.vision.wardsPlaced} wards placed
                ${player.vision.controlWardsPlaced} control wards placed
                ${player.vision.wardsKilled} wards destroyed`">
          {{ player.vision.visionScore }}
        </span>
      </div>
    </div>

    <div class="flex items-center gap-1">
      <Spell
        v-for="spell in player?.spells"
        :id="spell"
        :key="spell"
        size="c-7"
        :class="cn('active-img', { 'no-img': !spell })" />
    </div>
  </div>
</template>

<style scoped>
@reference '@css/tailwind.css';
.active-img {
  @apply bg-b3/60 ring-bc/60 hover:ring transition-all duration-300 hover:scale-105;
}
.no-img {
  @apply pointer-events-none border border-b3;
}
</style>