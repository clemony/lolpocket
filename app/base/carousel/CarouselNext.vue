<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute group/carobtn z-10 disabled:!bg-transparent size-10 rounded-full p-0',
      orientation === 'horizontal'
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollNext">
    <slot>
      <icon
        name="right"
        class="opacity-60 group-hover/carobtn:opacity-100 text-current" />

      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
