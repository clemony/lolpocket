<script lang="ts" setup>
const {
  class: className,
  isSR,
  player,
} = defineProps<{
  player: Player
  isSR: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- items -->
  <div
    :class="
      cn('flex w-fit gap-1 px-2 @min-700:gap-4 @min-700:px-4', className)
    ">
    <div :class="cn('flex shrink-0 items-center -space-x-2 self-center')">
      <div
        v-for="(item, i) in player.items.slots"
        :key="item"
        class="grid size-9.5 place-items-center rounded-full bg-p0"
        :style="{
          zIndex: i,
        }">
        <Item
          :id="item"
          :class="
            cn('img-active size-7.5 rounded-full inset-shadow-xs dark:bg-p0! light:bg-tint-p2/40!', {
              'no-img': !item,
            })
          " />
      </div>
    </div>

    <div class="flex w-full max-w-16 items-center -space-x-2">
      <div
        class="z-0 grid size-9.5 shrink-0 place-items-center rounded-full bg-p0">
        <Item
          :id="
            player.items.role ? player.items.role
            : isSR ? roleItems[player.role]
              : null
          "
          :class="
            cn('img-active size-7.5 rounded-full dark:bg-p0! light:bg-tint-p2/40!', {
              'no-img': !player.items.role && !isSR,
              'pointer-events-none brightness-115 contrast-102':
                !player.items.role,
              'brightness-150': player.role === 'support',
            })
          " />
      </div>
      <div
        class="relative z-1 grid size-9.5 shrink-0 place-items-center rounded-full bg-p0">
        <Item
          :id="player.items.trinket"
          :class="
            cn('img-active size-7.5 rounded-full dark:bg-p0! light:bg-tint-p2/40!', {
              'no-img': !player.items.trinket,
            })
          " />
        <!-- vision -->
        <Tooltip
          class="absolute -top-0.5 -right-0.5 badge origin-left badge-neutral bg-neutral/80 px-0.75 badge-xs text-[0.76rem]! font-bold shadow-sm ring-4 ring-transparent backdrop-blur-sm *:rounded-full">
          {{ player.stats.visionScore }}

          <template #content>
            <ul>
              <li>Vision Score - {{ player.stats.visionScore }}</li>
              <li>{{ player.stats.wardsPlaced }} wards placed</li>
              <li>{{ player.stats.controlWardsPlaced }} control wards placed</li>
              <li>{{ player.stats.wardsKilled }} wards destroyed</li>
            </ul>
          </template>
        </Tooltip>
      </div>
    </div>
  </div>
</template>
