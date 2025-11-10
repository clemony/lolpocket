<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { canScrollPrev, orientation, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="
      cn(
        `
          group/carobtn absolute z-14 size-10 touch-manipulation rounded-full
          p-0
          *:pointer-events-none
          disabled:!bg-transparent
        `,
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    variant="outline"
    @click="scrollPrev">
    <slot>
      <icon
        name="left"
        class="
          text-current opacity-60
          group-hover/carobtn:opacity-100
        " />

      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
