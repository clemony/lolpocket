<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { canScrollNext, orientation, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'group/carobtn absolute z-10 size-10 touch-manipulation rounded-full p-0 *:pointer-events-none disabled:bg-transparent!',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    variant="outline"
    @click="scrollNext">
    <slot>
      <icon
        class="text-current opacity-60 group-hover/carobtn:opacity-100"
        name="right" />

      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
