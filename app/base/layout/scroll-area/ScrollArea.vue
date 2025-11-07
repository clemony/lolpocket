<script setup lang="ts">
import type { ScrollAreaRootProps, ScrollAreaViewportProps } from 'reka-ui'
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'reka-ui'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<
  ScrollAreaRootProps & {
    class?: HTMLAttributes['class']
    scrollbarClass?: HTMLAttributes['class']
  }
>()

const delegatedProps = reactiveOmit(props, 'class', 'scrollbarClass')
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
    :class="cn('relative overflow-hidden', props.class)">
    <ScrollAreaViewport
      class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
