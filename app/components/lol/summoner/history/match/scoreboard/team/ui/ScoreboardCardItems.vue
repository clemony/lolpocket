<script lang="ts" setup>
const { class: className, isSR, player } = defineProps<{
  player: Player
  isSR: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- items -->
  <div :class="cn('flex w-fit gap-1 px-2 @min-700:gap-4 @min-700:px-4', className)">
    <div
      :class="cn('flex shrink-0 items-center -space-x-2 self-center')">
      <div
        v-for="item, i in player.items.slots"
        :key="item"
        class="grid size-9.5 place-items-center rounded-full bg-b1"
        :style="{
          zIndex: i,
        }">
        <Item
          :id="item"
          variant="inset"
          size="c-7.5"
          :class="cn('img-active dark:bg-b1! light:bg-tint-b2/40!', {
            'no-img': !item })" />
      </div>
    </div>

    <div class="flex w-full max-w-16 items-center -space-x-2">
      <div class="z-0 grid size-9.5 shrink-0 place-items-center rounded-full bg-b1">
        <Item
          :id="player.items.role ? player.items.role : isSR ? roleItems[player.role] : null"

          variant="inset"
          size="c-7.5"
          :class="cn('img-active dark:bg-b1! light:bg-tint-b2/40!', {
            'no-img ': !player.items.role && !isSR,
            'pointer-events-none brightness-115 contrast-102': !player.items.role,
            'brightness-150': player.role === 'support' })" />
      </div>
      <div class="relative z-1 grid size-9.5 shrink-0 place-items-center rounded-full bg-b1">
        <Item
          :id="player.items.trinket"

          variant="inset"
          size="c-7.5"
          :class="cn('img-active dark:bg-b1! light:bg-tint-b2/40!', { 'no-img': !player.items.trinket })" />
        <!-- vision -->
        <span
          class="absolute -top-0.5 -right-0.5 badge origin-left badge-neutral bg-neutral/80 px-0.75 badge-xs text-[0.76rem]! font-bold shadow-sm ring-4 ring-transparent backdrop-blur-sm *:rounded-full"
          :data-tip="`Vision Score - ${player.stats.visionScore}
                ${player.stats.wardsPlaced} wards placed
                ${player.stats.controlWardsPlaced} control wards placed
                ${player.stats.wardsKilled} wards destroyed`">
          {{ player.stats.visionScore }}
        </span>
      </div>
    </div>
  </div>
</template>
