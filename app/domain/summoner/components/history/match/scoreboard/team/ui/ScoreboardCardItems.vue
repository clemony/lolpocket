<script lang="ts" setup>
import { roleItems } from "#shared/constants/items/collection/roleItems"

const {
  class: className,
  isSR,
  player,
  classes,
} = defineProps<{
  player: Player
  isSR: boolean
  class?: HTMLAttributes["class"]
  classes?: HTMLAttributes["class"]
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
      cn('@min-700:px-4 flex w-max grow items-center gap-4 px-2', className)
    ">
    <div :class="cn('flex shrink-0 items-center gap-px self-center')">
      <template v-for="(item, i) in player.items?.slots ?? []" :key="item">
        <template v-if="i < 6">
          <HoverIcon
            :id="item"
            type="item"
            :ui="{
              root: cn('z-2 size-7.5! ring-2 ring-p0', classes),
            }" />
        </template>
      </template>
    </div>
    <div class="flex items-center -space-x-0.5">
      <HoverIcon
        v-if="player.items.role"
        :id="
          (player.items?.role ? player.items.role : roleItemId || '').toString()
        "
        :ui="{
          root: 'size-7.5! ring-2 ring-p0 hover:z-2',
        }"
        type="item" />
      <div class="group/ward relative z-1">
        <HoverIcon
          :id="player.items?.trinket"
          :ui="{
            root: 'z-2 size-7.5! ring-2 ring-p0',
          }"
          type="item" />
        <!-- vision -->
        <Tooltip
          arrow
          :ui="{ content: 'h-max!' }"
          :content="{ side: 'top' }"
          :side-offset="16">
          <UBadge
            color="neutral"
            size="xs"
            :ui="{
              base: 'transition-scale absolute -top-1.5 -right-1.5 z-2 min-w-3 origin-left gap-0 overflow-visible! rounded-full border-0 bg-neutral px-0.75 py-px text-[0.76rem]! font-bold shadow-sm ring-3 ring-transparent! duration-200 group-hover/ward:scale-108 hover:scale-120',
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
