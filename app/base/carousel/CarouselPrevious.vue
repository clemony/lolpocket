<script setup lang="ts">
import type { WithClassAsProps } from './interface'

import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="
      cn(
        'touch-manipulation absolute  group/carobtn  z-10 disabled:!bg-transparent  size-10 rounded-full p-0',
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
        class="opacity-60 group-hover/carobtn:opacity-100 text-current" />

      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
