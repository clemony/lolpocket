<script lang="ts" setup>
const {
  class: className,

  items
} = defineProps<{
  class?: HTMLAttributes["class"]
  items: number[] | null | undefined
}>()
</script>

<template>
  <div
    :class="
      cn(
        'pocket-item-set pointer-events-none relative isolate -ml-0.5 w-max overflow-visible rounded-lg',
        className
      )
    ">
    <FoilLayer>
      <UAvatarGroup
        :max="6"
        size="lg"
        :ui="{
          root: 'gap-1 overflow-visible p-0.5 ring-5 ring-p0',
          base: 'pointer-events-auto! relative z-2 overflow-visible bg-p3 ring-3'
        }">
        <Tooltip
          v-for="item in items"
          :key="item"
          :disabled="!item"
          :label="item ? itemNameById(item) : undefined"
          :avatar="item ? `/img/item/${item}.webp` : ''"
          as-child>
          <UAvatar
            :ui="{
              root: 'transition-scale duration-600 ease-spring-soft hover:z-5 hover:scale-110',
              image: 'brightness-105 contrast-90'
            }"
            :src="item ? `/img/item/${item}.webp` : undefined"
            icon="i-ui-none" />
        </Tooltip>
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
