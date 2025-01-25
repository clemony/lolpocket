<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'

import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    SliderRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <SliderTrack
      class="bg-b2 relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2"
    >
      <SliderRange
        class="bg-neutral absolute h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="border-neutral bg-b1 ring-offset-b1 ring-neutral block size-3 h-5 w-5 rounded-full border-2 ring-1 transition-colors focus-visible:ring-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>
