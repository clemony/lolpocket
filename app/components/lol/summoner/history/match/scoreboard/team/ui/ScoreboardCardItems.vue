<script lang="ts" setup>
import { roleItems } from "#shared/constants/items/roleItemIndex"

const {
  class: className,
  isSR,
  player,
  classes
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
    :class="cn('@min-700:px-4 flex w-max items-center gap-4 px-2', className)">
    <div :class="cn('flex shrink-0 items-center gap-1 self-center')">
      <template v-for="(item, i) in player.items?.slots ?? []" :key="item">
        <template v-if="i < 6">
          <Item
            :id="item"
            :ui="{
              root: cn('size-7.5 rounded-[0.4rem] ring ring-p4/60', classes)
            }" />
        </template>
      </template>
    </div>

    <UAvatarGroup :ui="{ root: 'w-full max-w-16 gap-1', base: 'ring-3' }">
      <Item
        :id="player.items?.role ? player.items.role : roleItemId"
        :ui="{
          root: cn('size-7.5 rounded-full', classes),
          image: cn('img-active bg-p1', {
            'no-img': !player.items?.role && !isSR,
            'pointer-events-none brightness-115 contrast-102':
              !player.items?.role,
            'brightness-150': player.role === 'support'
          })
        }" />
      <div class="group/ward relative z-1 size-7.5">
        <Item
          :id="player.items?.trinket"
          :ui="{
            root: cn('size-7.5 rounded-full', classes)
          }" />
        <!-- vision -->
        <Tooltip as-child :ui="{ content: 'h-max!' }" :side-offset="16">
          <UBadge
            color="neutral"
            size="2xs"
            :ui="{
              base: 'transition-scale hover: absolute -top-0.5 -right-1.5 z-2 origin-left gap-0 overflow-visible! rounded-full border-0 bg-neutral px-0.75 py-px text-[0.76rem]! font-bold shadow-sm ring-4 ring-transparent! duration-200 group-hover/ward:scale-120 hover:scale-120 hover:ring-2 hover:ring-p0! hover:ring-offset-1 hover:ring-offset-pc'
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
    </UAvatarGroup>
  </div>
</template>
