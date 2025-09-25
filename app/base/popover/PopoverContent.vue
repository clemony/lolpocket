<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PopoverContentProps & {
      class?: HTMLAttributes['class']
      sideOffset?: number
      alignOffset?: number
      align?: Align
      id?: string
      side?: Side
      to?: string
    }
  >(),
  {
    sideOffset: 8,
    align: 'center',
  }
)

const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverPortal :to="props.to">
    <PopoverContent
      :id="props.id"
      :align
      :side-offset
      v-bind="{ forwarded }"
      :class="
        cn(
          'z-50 w-72 rounded-lg border border-b3/60  bg-b1/94 backdrop-blur-md p-4 text-bc shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
      @close-auto-focus.prevent>
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
