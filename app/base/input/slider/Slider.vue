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
      cn('relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:flex-col',
        props.class,
      )
    "
    v-bind="forwarded">
    <SliderTrack
      class="
        relative h-1.5 w-full grow overflow-hidden rounded-full bg-tint-b3/20
        data-[orientation=vertical]:w-1.5
      ">
      <SliderRange
        class="absolute h-full bg-neutral data-[orientation=vertical]:w-full" />
    </SliderTrack>

    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      :class="
        cn('block size-4 cursor-pointer rounded-full border-2 border-neutral bg-b1 shadow-xs shadow-black/10 ring-offset-b1 drop-shadow-sm transition-colors focus-visible:ring focus-visible:ring-neutral focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          props.thumbClass,
        )
      ">
      <slot />
    </SliderThumb>
  </SliderRoot>
</template>
