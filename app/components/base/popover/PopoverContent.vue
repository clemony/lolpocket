<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import {
  PopoverContent,

  PopoverPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(defineProps<PopoverContentProps & {
  class?: HTMLAttributes['class']
  sideOffset?: number
  alignOffset?: number
  align?: Align
  side?: Side
  to?: string
}>(), {
  align: 'center',
  sideOffset: 8,
})

const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverPortal :to="props.to">
    <PopoverContent
      v-bind="{ forwarded }"
      :class="
        cn(
          'z-50 w-72 rounded-xl border border-b3/60  bg-b1/94 backdrop-blur-md p-4 text-bc shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      ">
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
