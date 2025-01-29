<script setup lang="ts">
import type { ScrollAreaRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'radix-vue'
import { computed } from 'vue'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<
  ScrollAreaRootProps & {
    class?: HTMLAttributes['class']
    scrollbarOver?: boolean
    scrollbarHide?: boolean
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
    type="scroll"
    :scroll-hide-delay="300"
    :class="cn('relative overflow-hidden', props.class)"
    as-child
    class="transition-all duration-500"
  >
    <ScrollAreaViewport
      class="h-full w-full rounded-[inherit]"
      as="child"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollBar
      class="mr-0.5 w-3.25"
      :class="{
        'z-30': props.scrollbarOver,
        'opacity-0': props.scrollbarHide,
      }"
    />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
