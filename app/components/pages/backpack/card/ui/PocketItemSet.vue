<script lang="ts" setup>
const { class: className, pocket } = defineProps<{
  class?: HTMLAttributes["class"]
  pocket: Pocket
}>()

const items = computed(() => {
  if (!pocket.items?.length) return
  if (pocket._items)
    return pocket.items.find((set) => set.id === pocket._items)?.items
  else if (pocket.items[0]?.items?.length) return pocket.items[0]?.items
  else return null
})
</script>

<template>
  <div
    :class="
      cn(
        'pocket-item-set relative isolate w-max overflow-hidden rounded-lg',
        className
      )
    ">
    <FoilLayer>
      <UAvatarGroup
        :max="6"
        size="lg"
        :ui="{
          root: 'gap-1',
          base: 'relative z-2 bg-p3'
        }">
        <UAvatar
          v-for="item in items"
          :key="item"
          :src="item ? `/img/item/${item}.webp` : undefined"
          icon="i-ui-none" />
      </UAvatarGroup>
    </FoilLayer>
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
  height: 10px;
  pointer-events: none;
  background: var(--color-p0);
  mask-image: var(--caret-mask);
  mask-repeat: repeat-x;
  mask-size: 26px 16px;
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
