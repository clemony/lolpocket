<script setup lang="ts">
import type { SliderTrackProps } from 'reka-ui'
import {
  SliderRange,
  SliderTrack,
  useForwardProps
} from 'reka-ui'

const props = defineProps<
  SliderTrackProps & {
    class?: HTMLAttributes['class']
    variant?: TabListVariants['variant']
    orientation?: TabListVariants['orientation']
    base?: TabListVariants['base']
    size?: TabListVariants['size']
  }
>()
const delegatedProps = reactiveOmit(props, 'class', /* 'variant', 'base', 'size' */)
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <SliderTrack
    :class="cn(tabListVariants({ variant, orientation, base, size }), props.class)"
    v-bind="forwarded">
    <SliderRange
      class="bg-neutral absolute h-full data-[orientation=vertical]:w-full" />
    <slot />
  </SliderTrack>
</template>