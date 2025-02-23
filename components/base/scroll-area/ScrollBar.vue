<script setup lang="ts">
import type { ScrollAreaScrollbarProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes['class'] }>(), {
  orientation: 'vertical',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn(
        'flex touch-none transition-colors select-none',
        orientation === 'vertical' && 'h-full w-2.5 border border-b2 -l border border-b2 -l-transparent p-px',
        orientation === 'horizontal' && 'h-2.5 flex-col border border-b2 -t border border-b2 -t-transparent p-px',
        props.class,
      )
    "
  >
    <ScrollAreaThumb class="bg-b2/60 relative flex-1 rounded-full" />
  </ScrollAreaScrollbar>
</template>
