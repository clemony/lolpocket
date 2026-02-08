<script setup lang="ts">
import type { ScrollAreaRootProps } from 'reka-ui'
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'reka-ui'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<
  ScrollAreaRootProps & {
    class?: HTMLAttributes['class']
    scrollbarClass?: HTMLAttributes['class']
    rootClass?: HTMLAttributes['class']
    scrollbar?: HTMLAttributes['class']
    stripped?: boolean
  }
>()

const delegatedProps = reactiveOmit(props, 'class', 'scrollbarClass')
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
    :class="cn('relative overflow-hidden', props.rootClass)">
    <ScrollAreaViewport :class="cn('size-full', props.class)">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar
      v-if="!props.stripped"
      :class="cn('', scrollbar)" />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
