<script setup lang="ts">
import type { SliderTrackProps } from 'reka-ui'
import { SliderRange, SliderTrack, useForwardProps } from 'reka-ui'

const props = defineProps<
  SliderTrackProps & {
    class?: HTMLAttributes['class']
  }
>()
const delegatedProps = reactiveOmit(
  props,
  'class' /* 'variant', 'base', 'size' */
)
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SliderTrack
    v-bind="forwarded">
    <SliderRange
      class="absolute h-full bg-neutral data-[orientation=vertical]:w-full" />
    <slot />
  </SliderTrack>
</template>
