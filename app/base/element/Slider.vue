<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'

import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  SliderRootProps & {
    class?: HTMLAttributes['class']
    thumbClass?: HTMLAttributes['class']
  }
>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:h-full',
        props.class,
      )
    "
    v-bind="forwarded">
    <SliderTrack
      class="relative h-1.5 w-full data-[orientation=vertical]:w-1.5 grow overflow-hidden rounded-full bg-b3/80">
      <SliderRange
        class="absolute h-full data-[orientation=vertical]:w-full bg-neutral" />
    </SliderTrack>

    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      :class="
        cn(
          'block cursor-pointer size-4 rounded-full shadow-xs shadow-black/10 drop-shadow-sm border-2 border-neutral bg-b1 ring-offset-b1 transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          props.thumbClass,
        )
      ">
      <slot />
    </SliderThumb>
  </SliderRoot>
</template>
