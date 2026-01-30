<script setup lang="ts">
import type { SliderTrackProps } from 'reka-ui'
import { SliderRange, SliderTrack, useForwardProps } from 'reka-ui'

const props = defineProps<
  SliderTrackProps & {
    class?: HTMLAttributes['class']
    color?: TabListVariants['color']
    orientation?: TabListVariants['orientation']
    size?: TabListVariants['size']
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
    v-bind="forwarded"
    :class="cn(tabListVariants({ color, orientation, size }), props.class)"
  >
    <SliderRange
      class="bg-neutral absolute h-full data-[orientation=vertical]:w-full"
    />
    <slot />
  </SliderTrack>
</template>
