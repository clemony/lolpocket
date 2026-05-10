<script lang="ts" setup>
import { bootIndex } from "~~/shared/constants/items/rankToItem"
import { roleItems } from "~~/shared/constants/items/roleItemIndex"

const {
  class: className,
  pocket,
  position
} = defineProps<{
  class?: HTMLAttributes["class"]
  pocket: Pocket
  position: ComputedRef<PositionKey | string | null>
}>()

const i = computed(() => {
  if (!pocket.items?.length) return
  if (pocket._items)
    return pocket.items.find((set) => set.id === pocket._items)?.items
  else if (pocket.items[0]?.items?.length) return pocket.items[0]?.items
  else return null
})
const items = computed(() =>
  i.value
    ? i.value?.length < 6
      ? [...i.value].fill(0, i.value.length, 6)
      : i.value
    : (Array.from({ length: 6 }).fill(0) as number[])
)

function roleItemId() {
  const item = roleItems[position.value as keyof typeof roleItems]
  return Array.isArray(item) ? (item[0] ?? null) : (item ?? null)
}

const posAndSr = computed(() =>
  ["all", 11].includes(pocket._map) && position.value === "bot"
    ? true
    : ["all", 11].includes(pocket._map)
      ? "sr"
      : false
)
interface QuestItemSet {
  quest?: number
  src?: string
  icon?: string
  items?: number[]
}
const botQuest = computed<QuestItemSet | undefined>(() => {
  if (posAndSr.value !== true) return
  const boot = new Set(bootIndex)
  const boots = items.value ? items.value.filter((i) => boot.has(i))[0] : null
  return {
    quest: boots || roleItemId() || 0,
    src: boots ? `/img/item/${boots}.webp` : "/img/role/bot.webp",
    icon: "i-lp-bot",
    items: items.value.filter((i) => !boot.has(i))
  }
})

const itemSet = computed<QuestItemSet>(() => {
  if (posAndSr.value === true) {
    if (botQuest.value) return botQuest.value
  }
  if (posAndSr.value === "sr")
    return {
      quest: roleItemId() ?? 0,
      icon: `i-lp-${position.value || "all"}`,
      src: "", //position.value ? `/img/role/${position.value}.webp` : "",
      items: items.value
    }
  return {
    quest: 0,
    src: "",
    icon: `i-lp-${pocket._map || 0}`,
    items: items.value
  }
})
</script>

<template>
  <div class="flex items-center -space-x-0.5">
    <Tooltip
      v-if="position.value === 'bot' && [0, 11, 'all'].includes(pocket._map)"
      as-child
      :disabled="!itemSet?.quest"
      :label="itemSet?.quest ? itemNameById(itemSet.quest) : undefined"
      :avatar="itemSet?.src ?? ''">
      <FoilLayer
        class="z-2 order-first overflow-hidden rounded-full ring-3 ring-p0"
        :disabled="!itemSet?.src">
        <UAvatar
          type="item"
          size="lg"
          :src="itemSet?.src ?? undefined"
          :icon="itemSet?.icon ?? ''"
          :ui="{
            root: cn(
              'pointer-events-auto! border border-p2 bg-p2 transition-colors duration-200 group-hover/card:border-p1 group-hover/card:bg-p1/90',
              itemSet?.quest ? '' : ''
            ),
            image:
              'pointer-events-none shadow-sm drop-shadow-sm transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-104!'
          }" />
      </FoilLayer>
    </Tooltip>
    <div
      :class="
        cn(
          'pocket-item-set pointer-events-none relative isolate z-1 -ml-0.5 flex w-max shrink-0 overflow-visible rounded-lg',
          className
        )
      ">
      <FoilLayer>
        <UAvatarGroup
          :max="6"
          size="lg"
          :ui="{
            root: 'shrink-0 gap-1 overflow-visible p-0.5',
            base: 'pointer-events-auto! relative z-2 overflow-visible border border-p2 bg-p2 ring-3 transition-colors duration-600 group-hover/card:bg-p3'
          }">
          <Tooltip
            v-for="item in itemSet.items"
            :key="item"
            :disabled="!item"
            :label="item ? itemNameById(item) : undefined"
            :avatar="item ? `/img/item/${item}.webp` : ''"
            as-child>
            <UAvatar
              :ui="{
                root: 'transition-all duration-600! ease-spring-soft hover:z-5 hover:scale-110',
                image: 'brightness-105 contrast-90'
              }"
              :src="item ? `/img/item/${item}.webp` : undefined"
              icon="i-ui-none" />
          </Tooltip>
        </UAvatarGroup>
      </FoilLayer>
    </div>
  </div>
</template>

<style scoped>
.pocket-item-set::before,
.pocket-item-set::after {
  --caret-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M18 9c.852 0 1.297.986.783 1.623l-.076.084l-6 6a1 1 0 0 1-1.32.083l-.094-.083l-6-6l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057v-.118l.005-.058l.009-.06l.01-.052l.032-.108l.027-.067l.07-.132l.065-.09l.073-.081l.094-.083l.077-.054l.096-.054l.036-.017l.067-.027l.108-.032l.053-.01l.06-.01l.057-.004z'/%3E%3C/svg%3E");

  content: "";
  position: absolute;
  left: 0px;
  right: 0;
  z-index: 3;
  height: 11px;
  pointer-events: none;
  background: var(--color-p0);
  mask-image: var(--caret-mask);
  mask-repeat: repeat-x;
  mask-size: 26px 20px;
  mask-position: center;
}

.pocket-item-set::before {
  top: -3px;
}

.pocket-item-set::after {
  bottom: -3px;
  transform: rotate(180deg);
}
</style>
