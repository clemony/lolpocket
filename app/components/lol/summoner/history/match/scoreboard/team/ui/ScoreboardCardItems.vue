<script lang="ts" setup>
import { roleItems } from "#shared/constants/items/roleItemIndex"

const {
  class: className,
  isSR,
  player
} = defineProps<{
  player: Player
  isSR: boolean
  class?: HTMLAttributes["class"]
}>()

const roleItemId = computed(() => {
  if (!isSR) return null
  const role = player.role as keyof typeof roleItems
  const item = roleItems[role]
  return Array.isArray(item) ? (item[0] ?? null) : (item ?? null)
})
</script>

<template>
  <!-- items -->
  <div
    :class="
      cn('@min-700:gap-4 @min-700:px-4 flex w-fit gap-1 px-2', className)
    ">
    <div :class="cn('flex shrink-0 items-center self-center')">
      <Item
        v-for="(item, i) in player.items?.slots ?? []"
        :id="item"
        :key="item"
        :ui="{
          root: 'z-2 size-7.5'
        }" />
    </div>

    <div class="flex w-full max-w-16 items-center -space-x-2">
      <div
        class="z-0 grid size-9.5 shrink-0 place-items-center rounded-full bg-p0">
        <Item
          :id="player.items?.role ? player.items.role : roleItemId"
          :ui="{
            root: 'size-7.5 rounded-full',
            image: cn('img-active bg-p1', {
              'no-img': !player.items?.role && !isSR,
              'pointer-events-none brightness-115 contrast-102':
                !player.items?.role,
              'brightness-150': player.role === 'support'
            })
          }" />
      </div>
      <div
        class="relative z-1 grid size-9.5 shrink-0 place-items-center rounded-full bg-p0">
        <Item
          :id="player.items?.trinket"
          :ui="{
            root: 'size-7.5 rounded-full bg-p1!'
          }" />
        <!-- vision -->
        <Tooltip
          class="absolute -top-0.5 -right-0.5"
          :ui="{ content: 'h-max!' }">
          <UBadge
            color="neutral"
            size="2xs"
            :ui="{
              base: 'origin-left rounded-full bg-neutral/80 px-0.75 py-px text-[0.76rem]! font-bold shadow-sm ring-4 ring-transparent! backdrop-blur-sm'
            }">
            {{ player.stats?.visionScore ?? 0 }}
          </UBadge>

          <template #content>
            <ul>
              <li>Vision Score - {{ player.stats?.visionScore ?? 0 }}</li>
              <li>{{ player.stats?.wardsPlaced ?? 0 }} wards placed</li>
              <li>
                {{ player.stats?.controlWardsPlaced ?? 0 }}
                control wards placed
              </li>
              <li>{{ player.stats?.wardsKilled ?? 0 }} wards destroyed</li>
            </ul>
          </template>
        </Tooltip>
      </div>
    </div>
  </div>
</template>
